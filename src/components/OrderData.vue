<script setup lang="ts">
import { ref, computed, inject, watch, onMounted, onBeforeUnmount } from 'vue'
import { DateTime } from 'luxon'
;(window as any).luxon = { DateTime }
import { useOrderQuery, type Order } from '@y2kfund/core/orders'

// Composables
import { useToast } from '../composables/useToast'
import { useUrlSync } from '../composables/useUrlSync'
import { useOrdersFilters } from '../composables/useOrdersFilters'
import { useOrdersColumns, type OrdersColumnField } from '../composables/useOrdersColumns'
import { useTabulatorSetup } from '../composables/useTabulatorSetup'

// Utils
import { formatTimestampWithTimezone, extractTagsFromSymbol } from '../utils/formatters'

// Props
const props = defineProps<{
  accountId: string
  userId: string | null
  symbolRoot: string
  window: string | null
  onRowClick?: (row: Order) => void
}>()

const emit = defineEmits<{ 
  'row-click': [row: Order]
}>()

// Event bus
const eventBus = inject<any>('eventBus')

// Query orders data
const q = useOrderQuery(props.accountId, props.userId, props.symbolRoot)

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

// Column management
const allFieldNames: OrdersColumnField[] = [
  'legal_entity',
  'symbol',
  'buySell',
  'openCloseIndicator',
  'assetCategory',
  'orderTime',
  'settleDateTarget',
  'quantity',
  'tradePrice',
  'tradeMoney',
  'netCash',
  'mtmPnl',
  'fifoPnlRealized',
  'ibCommission',
  'closePrice'
]

const ordersVisibleCols = ref<OrdersColumnField[]>(parseTradesVisibleColsFromUrl(allFieldNames))
const columnRenames = ref(parseColumnRenamesFromUrl() as Record<string, string>)

// Watch column changes and persist
watch(ordersVisibleCols, (newCols) => {
  writeTradesVisibleColsToUrl(newCols)
}, { deep: true })

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

// Filters composable (needs tabulator ref)
const {
  symbolTagFilters,
  totalOrders,
  handleCellFilterClick,
  updateFilters,
  handleExternalAccountFilter,
  handleExternalSymbolFilter,
  handleExternalAssetFilter,
  handleExternalQuantityFilter,
  initializeFiltersFromUrl
} = useOrdersFilters(windowKey, tabulatorRef, tabulatorReadyRef, eventBus, extractTagsFromSymbol)

// Initialize filters from URL
const urlFilters = parseFiltersFromUrl()
initializeFiltersFromUrl(urlFilters)

// Columns composable
const { columns, allOrdersColumnOptions } = useOrdersColumns(
  handleCellFilterClick,
  symbolTagFilters,
  ordersVisibleCols,
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
  totalOrders,
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
})

watch([tabulator, q.data, isTabulatorReady], ([tab, data, ready]) => {
  if (tab && ready && data && data.length > 0) {
    tab.setSort('settleDateTarget', 'desc')
  }
})

// Setup external event handlers
onMounted(() => {
  if (eventBus) {
    eventBus.on('account-filter-changed', handleExternalAccountFilter)
    eventBus.on('symbol-filter-changed', handleExternalSymbolFilter)
    eventBus.on('asset-filter-changed', handleExternalAssetFilter)
    eventBus.on('quantity-filter-changed', handleExternalQuantityFilter)
  }
})

onBeforeUnmount(() => {
  if (eventBus) {
    eventBus.off('account-filter-changed', handleExternalAccountFilter)
    eventBus.off('symbol-filter-changed', handleExternalSymbolFilter)
    eventBus.off('asset-filter-changed', handleExternalAssetFilter)
    eventBus.off('quantity-filter-changed', handleExternalQuantityFilter)
  }
  q._cleanup?.()
})
</script>

<template>
  <div class="order-data-container">
    <!-- Loading state -->
    <div v-if="q.isLoading.value" class="loading">
      <div class="loading-spinner"></div>
      Loading orders...
    </div>
    
    <!-- Error state -->
    <div v-else-if="q.isError.value" class="error">
      <h3>Error loading orders</h3>
      <p>{{ q.error.value }}</p>
    </div>
    
    <!-- Success state with Tabulator -->
    <div v-else-if="q.isSuccess.value" class="orders-container">
      <!-- Tabulator table -->
      <div ref="tableDiv" class="orders-grid"></div>
    </div>
  </div>
</template>

<style>
@import 'tabulator-tables/dist/css/tabulator_modern.min.css';
</style>

<style scoped>
@import '../Trades.css';
</style>