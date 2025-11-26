<script setup lang="ts">
import { ref, computed, inject, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
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

// Column management - ADD expiryDate and strikePrice
const allFieldNames: OrdersColumnField[] = [
  'legal_entity',
  'symbol',
  'expiryDate',
  'strikePrice',
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

// Filters composable (needs tabulator ref) - GET filter refs from composable
const {
  symbolTagFilters,
  totalOrders,
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
  expiryDateFilter,
  strikePriceFilter,
  clearFilter,
  clearAllFilters
} = useOrdersFilters(windowKey, tabulatorRef, tabulatorReadyRef, eventBus, extractTagsFromSymbol)

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
  
  return filters
})

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
  
  // Apply filters from URL when tabulator is ready
  if (isReady) {
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
  if (eventBus) {
    eventBus.on('account-filter-changed', handleExternalAccountFilter)
    eventBus.on('symbol-filter-changed', handleExternalSymbolFilter)
    eventBus.on('asset-filter-changed', handleExternalAssetFilter)
    eventBus.on('quantity-filter-changed', handleExternalQuantityFilter)
    eventBus.on('expiry-date-filter-changed', handleExternalExpiryDateFilter)
    eventBus.on('strike-price-filter-changed', handleExternalStrikePriceFilter)
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
  <div class="order-data-container">
    <!-- Filter Tags Bar -->
    <div v-if="activeFilters.length > 0" class="filters-bar">
      <span class="filters-label">Filtered by:</span>
      <div class="filters-tags">
        <span v-for="f in activeFilters" :key="`${f.field}-${f.value}`" class="filter-tag">
          <strong>{{ f.label }}:</strong> {{ f.value }}
          <button class="tag-clear" @click="clearFilter(f.field)">✕</button>
        </span>
        <button class="btn btn-clear-all" @click="clearAllFilters">Clear all</button>
      </div>
    </div>

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