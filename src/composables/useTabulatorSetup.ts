import { ref, computed, watch, nextTick, onBeforeUnmount } from 'vue'
import type { Ref } from 'vue'
import { TabulatorFull as Tabulator } from 'tabulator-tables'
import { useUrlSync } from './useUrlSync'

export function useTabulatorSetup(
  tableDiv: Ref<HTMLElement | null>,
  columns: Ref<any[]>,
  queryData: Ref<any[] | undefined>,
  queryIsSuccess: Ref<boolean>,
  windowKey: string,
  updateFilters: () => void,
  totalTrades: Ref<number>,
  emit: (event: string, data?: any) => void,
  onRowClick?: (data: any) => void
) {
  const tabulatorInstance = ref<Tabulator | null>(null)
  const isTabulatorReady = ref(false)
  const isTableInitialized = ref(false)
  
  // Get URL sync functions
  const { parseTradesSortFromUrl, writeTradesSortToUrl } = useUrlSync(windowKey)

  function initializeTabulator() {
    if (!tableDiv.value) return

    // Destroy existing table
    if (tabulatorInstance.value) {
      try { tabulatorInstance.value.destroy() } catch (error) {}
      tabulatorInstance.value = null
    }

    isTabulatorReady.value = false

    // Restore sort from URL
    let initialSort = []
    const sortFromUrl = parseTradesSortFromUrl()
    if (sortFromUrl) {
      initialSort = [{ column: sortFromUrl.field, dir: sortFromUrl.dir }]
    } else {
      // Default sort by tradeDate desc
      initialSort = [{ column: 'tradeDate', dir: 'desc' }]
    }

    // Deep clone the data to avoid readonly proxy warnings from Vue Query
    const clonedData = queryData.value ? JSON.parse(JSON.stringify(queryData.value)) : []

    const tabulatorConfig: any = {
      data: clonedData,
      columns: columns.value,
      layout: 'fitColumns',
      placeholder: 'No trades available',
      virtualDom: false,
      rowClick: (e: any, row: any) => {
        const data = row.getData()
        emit('row-click', data)
        if (onRowClick) {
          onRowClick(data)
        }
      },
      initialSort,
      sortChanged: (sorters: any[]) => {
        if (sorters && sorters.length > 0) {
          writeTradesSortToUrl(sorters[0].field, sorters[0].dir)
        } else {
          // If no sorters, remove param
          const url = new URL(window.location.href)
          url.searchParams.delete(`${windowKey}_trades_sort`)
          window.history.replaceState({}, '', url.toString())
        }
      },
    }

    try {
      tabulatorInstance.value = new Tabulator(tableDiv.value, tabulatorConfig)

      tabulatorInstance.value.on('tableBuilt', function() {
        isTabulatorReady.value = true
        updateFilters()
        if (tabulatorInstance.value) {
          totalTrades.value = tabulatorInstance.value.getDataCount('active') || 0
        }

        const headers = tableDiv.value?.querySelectorAll('.tabulator-col')
        headers?.forEach(header => {
          header.addEventListener('click', () => {
            const sortedCol = tabulatorInstance.value?.getSorters?.()[0]
            if (sortedCol) {
              writeTradesSortToUrl(sortedCol.field, sortedCol.dir)
            }
          })
        })
      })
    } catch (error) {
      console.error('Error creating Tabulator:', error)
    }
  }

  // Initialize when data is ready
  watch([queryIsSuccess, tableDiv], async ([isSuccess, divRef]) => {
    if (isSuccess && divRef && !isTableInitialized.value) {
      await nextTick()
      initializeTabulator()
      isTableInitialized.value = true
      // Update total trades count
      totalTrades.value = queryData.value?.length || 0
    }
  }, { immediate: true })

  // Update data when it changes
  watch(queryData, async (newData) => {
    if (!tabulatorInstance.value || !newData) return
    try {
      // Deep clone the data to avoid readonly proxy warnings from Vue Query
      const clonedData = JSON.parse(JSON.stringify(newData))
      tabulatorInstance.value.replaceData(clonedData)
      // Re-apply filters after data update
      nextTick(() => {
        updateFilters()
        // Update total trades count
        if (tabulatorInstance.value) {
          totalTrades.value = tabulatorInstance.value.getDataCount('active') || 0
        }
      })
    } catch (error) {
      console.warn('Error updating table data:', error)
    }
  }, { deep: true })

  // Rebuild table when columns change (order or visibility)
  watch(columns, async () => {
    if (isTableInitialized.value) {
      await nextTick()
      initializeTabulator()
    }
  }, { deep: true })

  // Cleanup
  onBeforeUnmount(() => {
    if (tabulatorInstance.value) {
      try {
        tabulatorInstance.value.destroy()
      } catch (error) {
        console.warn('Error destroying tabulator:', error)
      }
    }
  })

  return {
    tabulator: tabulatorInstance,
    isTabulatorReady,
    isTableInitialized,
    initializeTabulator
  }
}
