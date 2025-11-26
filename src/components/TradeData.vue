<script setup lang="ts">
import { ref, computed, inject, watch, onMounted, onBeforeUnmount, nextTick, onActivated } from 'vue'
import { DateTime } from 'luxon'
;(window as any).luxon = { DateTime }
import { useTradeQuery, type Trade } from '@y2kfund/core/trades'

// Composables
import { useToast } from '../composables/useToast'
import { useUrlSync } from '../composables/useUrlSync'
import { useTradesFilters } from '../composables/useTradesFilters'
import { useTradesColumns, type TradesColumnField } from '../composables/useTradesColumns'
import { useTabulatorSetup } from '../composables/useTabulatorSetup'

// Components
import TradesHeader from './TradesHeader.vue'

// Utils
import { formatTimestampWithTimezone, extractTagsFromSymbol } from '../utils/formatters'

// Props
const props = defineProps<{
  accountId: string
  userId: string | null
  symbolRoot: string
  window: string | null
  onRowClick?: (row: Trade) => void
}>()

const emit = defineEmits<{ 
  'row-click': [row: Trade]
}>()

// Event bus
const eventBus = inject<any>('eventBus')

// Query trades data
const q = useTradeQuery(props.accountId, props.userId, props.symbolRoot)

// Toast notifications
const { toasts, showToast, removeToast } = useToast()

// URL synchronization
const windowKey = props.window || 'default'
const {
  parseAppNameFromUrl,
  parseTradesVisibleColsFromUrl,
  writeTradesVisibleColsToUrl,
  parseColumnRenamesFromUrl,
  parseFiltersFromUrl
} = useUrlSync(windowKey)

// App name management
const appName = ref(parseAppNameFromUrl())

// REMOVE these duplicate declarations - they come from useTradesFilters
// const accountFilter = ref<string | null>(parseAccountFilterFromUrl())
// const expiryDateFilter = ref<string | null>(parseExpiryDateFilterFromUrl())
// const strikePriceFilter = ref<string | null>(parseStrikePriceFilterFromUrl())

// Column management - ADD expiryDate and strikePrice
const allFieldNames: TradesColumnField[] = [
  'legal_entity',
  'symbol',
  'expiryDate',
  'strikePrice',
  'buySell',
  'openCloseIndicator',
  'assetCategory',
  'tradeDate',
  'settleDateTarget',
  'contract_quantity',
  'accounting_quantity',
  'tradePrice',
  'tradeMoney',
  'netCash',
  'mtmPnl',
  'fifoPnlRealized',
  'ibCommission',
  'closePrice'
]

const tradesVisibleCols = ref<TradesColumnField[]>(parseTradesVisibleColsFromUrl(allFieldNames))
const columnRenames = ref(parseColumnRenamesFromUrl() as Record<string, string>)

// Watch column changes and persist
watch(tradesVisibleCols, (newCols) => {
  writeTradesVisibleColsToUrl(newCols)
}, { deep: true })

// Column visibility dropdown
const tradesColumnsBtnRef = ref<InstanceType<typeof TradesHeader> | null>(null)

// Context menu for fetched_at timestamp
function createFetchedAtContextMenu() {
  return [
    {
      label: (component: any) => {
        const rowData = component.getData()
        return formatTimestampWithTimezone(rowData.fetched_at)
      },
      action: () => {},
      disabled: true
    },
    {
      separator: true
    },
    {
      label: '📋 Copy timestamp to clipboard',
      action: (e: any, component: any) => {
        const rowData = component.getData()
        const fetchedAt = rowData.fetched_at
        
        if (fetchedAt) {
          navigator.clipboard.writeText(fetchedAt)
            .then(() => {
              showToast('success', 'Copied!', 'Timestamp copied to clipboard')
            })
            .catch((err) => {
              console.error('Failed to copy: ', err)
              showToast('error', 'Copy Failed', 'Could not copy timestamp')
            })
        } else {
          showToast('warning', 'No Data', 'No timestamp available to copy')
        }
      }
    }
  ]
}

// Setup Tabulator ref and ready state
const tableDiv = ref<HTMLDivElement | null>(null)
const tabulatorRef = ref<any>(null)
const tabulatorReadyRef = ref(false)

// ADD: Track if this component is currently visible
const isVisible = ref(true)

// Filters composable (needs tabulator ref)
const {
  symbolTagFilters,
  totalTrades,
  handleCellFilterClick,
  updateFilters,
  handleExternalAccountFilter,
  handleExternalSymbolFilter,
  handleExternalAssetFilter,
  handleExternalQuantityFilter,
  handleExternalExpiryDateFilter,
  handleExternalStrikePriceFilter,
  initializeFiltersFromUrl,
  accountFilter,
  assetFilter, // ADD this
  expiryDateFilter,
  strikePriceFilter,
  clearFilter,
  clearAllFilters,
  refreshFiltersFromUrl // ADD this
} = useTradesFilters(windowKey, tabulatorRef, tabulatorReadyRef, eventBus, extractTagsFromSymbol)

// Computed for active filters
const activeFilters = computed(() => {
  const filters: Array<{ field: string; label: string; value: string }> = []
  
  if (accountFilter.value) {
    filters.push({
      field: 'legal_entity',
      label: 'Account',
      value: accountFilter.value
    })
  }
  
  if (expiryDateFilter.value) {
    filters.push({
      field: 'expiryDate',
      label: 'Expiry Date',
      value: expiryDateFilter.value
    })
  }
  
  if (strikePriceFilter.value) {
    filters.push({
      field: 'strikePrice',
      label: 'Strike Price',
      value: strikePriceFilter.value
    })
  }
  
  // ADD: Asset class filter
  if (assetFilter.value) {
    filters.push({
      field: 'assetCategory',
      label: 'Asset Class',
      value: assetFilter.value
    })
  }
  
  // ADD: Symbol tag filters
  symbolTagFilters.value.forEach(tag => {
    filters.push({
      field: 'symbol',
      label: 'Tag',
      value: tag
    })
  })
  
  return filters
})

// Initialize filters from URL
const urlFilters = parseFiltersFromUrl()
initializeFiltersFromUrl(urlFilters)

// Columns composable
const { columns, allTradesColumnOptions } = useTradesColumns(
  handleCellFilterClick,
  symbolTagFilters,
  tradesVisibleCols,
  columnRenames,
  createFetchedAtContextMenu
)

// Tabulator setup
const { tabulator, isTabulatorReady, isTableInitialized } = useTabulatorSetup(
  tableDiv,
  columns,
  computed(() => q.data.value),
  computed(() => q.isSuccess.value),
  windowKey,
  updateFilters,
  totalTrades,
  (event: string, data?: any) => {
    if (event === 'row-click') {
      emit('row-click', data)
    }
  },
  props.onRowClick,
  {
    initialSort: [
      { column: 'settleDateTarget', dir: 'desc' }
    ]
  }
)

// Sync tabulator ref to filters
watch(tabulator, (newTabulator) => {
  tabulatorRef.value = newTabulator
})

watch(isTabulatorReady, (isReady) => {
  tabulatorReadyRef.value = isReady
  
  // Apply filters from URL when tabulator is ready
  if (isReady) {
    nextTick(() => {
      console.log('[TradeData] Tabulator ready, applying filters:', {
        account: accountFilter.value,
        expiryDate: expiryDateFilter.value,
        strikePrice: strikePriceFilter.value
      })
      updateFilters()
    })
  }
})

// ADD: Watch for when data changes and tabulator is ready
watch([q.data, isTabulatorReady], ([data, ready]) => {
  if (ready && data && data.length > 0) {
    console.log('[TradeData] Data loaded, reapplying filters')
    nextTick(() => {
      updateFilters()
    })
  }
})

watch([tabulator, q.data, isTabulatorReady], ([tab, data, ready]) => {
  if (tab && ready && data && data.length > 0) {
    tab.setSort('settleDateTarget', 'desc')
  }
})

// Setup external event handlers - ADD new filter handlers
onMounted(() => {
  console.log('[TradeData] Component mounted')
  
  if (eventBus) {
    eventBus.on('account-filter-changed', handleExternalAccountFilter)
    eventBus.on('symbol-filter-changed', handleExternalSymbolFilter)
    eventBus.on('asset-filter-changed', handleExternalAssetFilter)
    eventBus.on('quantity-filter-changed', handleExternalQuantityFilter)
    eventBus.on('expiry-date-filter-changed', handleExternalExpiryDateFilter)
    eventBus.on('strike-price-filter-changed', handleExternalStrikePriceFilter)
    
    // Listen for tab changes
    eventBus.on('tab-changed', (payload: { tab: string }) => {
      console.log('[TradeData] Tab changed event received:', payload)
      if (payload.tab === 'trades') {
        console.log('[TradeData] This tab is now active')
        isVisible.value = true
        
        // CHANGED: Re-read filters from URL when tab becomes active
        setTimeout(() => {
          console.log('[TradeData] Re-reading filters from URL')
          const url = new URL(window.location.href)
          accountFilter.value = url.searchParams.get('all_cts_clientId') || null
          expiryDateFilter.value = url.searchParams.get('expiryDate') || null
          strikePriceFilter.value = url.searchParams.get('strikePrice') || null
          
          console.log('[TradeData] Forcing filter update after tab switch. isTabulatorReady:', isTabulatorReady.value)
          console.log('[TradeData] Current filter values:', {
            account: accountFilter.value,
            expiryDate: expiryDateFilter.value,
            strikePrice: strikePriceFilter.value
          })
          
          if (isTabulatorReady.value && tabulatorRef.value) {
            refreshFiltersFromUrl() // Use the new method
            updateFilters()
          } else {
            console.warn('[TradeData] Tabulator not ready yet, setting pending flag')
          }
        }, 100)
      } else {
        isVisible.value = false
      }
    })
  }
  
  // Apply filters on mount if tabulator is already ready
  if (isTabulatorReady.value) {
    nextTick(() => {
      console.log('[TradeData] Applying filters on mount')
      updateFilters()
    })
  }
})

onBeforeUnmount(() => {
  if (eventBus) {
    eventBus.off('account-filter-changed', handleExternalAccountFilter)
    eventBus.off('symbol-filter-changed', handleExternalSymbolFilter)
    eventBus.off('asset-filter-changed', handleExternalAssetFilter)
    eventBus.off('quantity-filter-changed', handleExternalQuantityFilter)
    eventBus.off('expiry-date-filter-changed', handleExternalExpiryDateFilter)
    eventBus.off('strike-price-filter-changed', handleExternalStrikePriceFilter)
    eventBus.off('tab-changed') // ADD: Clean up tab-changed listener
  }
  q._cleanup?.()
})

// Watch filters
watch(accountFilter, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    updateFilters()
  }
}, { immediate: true })

watch(expiryDateFilter, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    updateFilters()
  }
}, { immediate: true })

watch(strikePriceFilter, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    updateFilters()
  }
}, { immediate: true })
</script>

<template>
  <div class="trade-data-container">
    <!-- Filter Tags Bar -->
    <div v-if="activeFilters.length > 0" class="filters-bar">
      <span class="filters-label">Filtered by:</span>
      <div class="filters-tags">
        <span v-for="f in activeFilters" :key="`${f.field}-${f.value}`" class="filter-tag">
          <strong>{{ f.label }}:</strong> {{ f.value }}
          <button class="tag-clear" @click="clearFilter(f.field as any)">✕</button>
        </span>
        <button class="btn btn-clear-all" @click="clearAllFilters">Clear all</button>
      </div>
    </div>

    <!-- Loading state -->
    <div v-if="q.isLoading.value" class="loading">
      <div class="loading-spinner"></div>
      Loading trades...
    </div>
    
    <!-- Error state -->
    <div v-else-if="q.isError.value" class="error">
      <h3>Error loading trades</h3>
      <p>{{ q.error.value }}</p>
    </div>
    
    <!-- Success state with Tabulator -->
    <div v-else-if="q.isSuccess.value" class="trades-container">
      <!-- Header with column dropdown -->
      <!--TradesHeader
        ref="tradesColumnsBtnRef"
        :app-name="appName"
        :total-trades="totalTrades"
      /-->

      <!-- Tabulator table -->
      <div ref="tableDiv" class="trades-grid"></div>
    </div>
  </div>
</template>

<style>
@import 'tabulator-tables/dist/css/tabulator_modern.min.css';
</style>

<style scoped>
@import '../Trades.css';

.filters-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  flex-wrap: wrap;
}

.filters-label {
  font-weight: 600;
  color: #495057;
  font-size: 0.9rem;
}

.filters-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
}

.filter-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  font-size: 0.875rem;
}

.tag-clear {
  border: none;
  background: transparent;
  color: #6c757d;
  cursor: pointer;
  padding: 0;
  font-size: 1rem;
  line-height: 1;
  transition: color 0.2s;
}

.tag-clear:hover {
  color: #dc3545;
}

.btn-clear-all {
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-clear-all:hover {
  background: #c82333;
}

.expiry-clickable, .strike-clickable {
  cursor: pointer;
  padding: 2px 6px;
  border-radius: 3px;
  transition: background 0.2s;
}

.expiry-clickable:hover, .strike-clickable:hover {
  background: #e9ecef;
}
</style>