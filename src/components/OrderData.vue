<script setup lang="ts">
import { ref, computed, inject, watch, onMounted, onBeforeUnmount, nextTick, onActivated } from 'vue'
import { DateTime } from 'luxon'
;(window as any).luxon = { DateTime }
import { useOrderQuery, type Order } from '@y2kfund/core/orders'
import { useSupabase, savePositionOrderMappings, generatePositionMappingKey, usePositionOrderMappingsQuery } from '@y2kfund/core'

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
  'select', // ADD THIS
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

const supabase = useSupabase()

// ADD: Query for existing position-order mappings
const positionOrderMappingsQuery = usePositionOrderMappingsQuery(props.userId)

// ADD: Track which orders are already attached (separate from user selection)
const attachedOrderIds = ref<Set<string>>(new Set())

// MODIFIED: Order selection state - exclude already attached orders from count
const selectedOrderIdsForAttach = ref<Set<string>>(new Set())

// ADD: Handler for order selection changes
function handleOrderSelectionChange(orderId: string, selected: boolean) {
  console.log('Order selection changed:', orderId, selected)
  
  if (selected) {
    selectedOrderIdsForAttach.value.add(orderId)
  } else {
    selectedOrderIdsForAttach.value.delete(orderId)
  }
  
  // Force reactivity update
  selectedOrderIdsForAttach.value = new Set(selectedOrderIdsForAttach.value)
  
  console.log('Current selected orders:', Array.from(selectedOrderIdsForAttach.value))
}
  
// MODIFIED: Computed to get count of changes
const changeCount = computed(() => {
  const newSelections = Array.from(selectedOrderIdsForAttach.value)
    .filter(id => !attachedOrderIds.value.has(id))
  const unchecked = Array.from(attachedOrderIds.value)
    .filter(id => !selectedOrderIdsForAttach.value.has(id))
  return {
    attach: newSelections.length,
    detach: unchecked.length,
    total: newSelections.length + unchecked.length
  }
})

// MODIFIED: Show button if there are any changes
const showAttachButton = computed(() => {
  return changeCount.value.total > 0
})

// ADD: Watch for changes in position-order mappings and update attached orders
watch([positionOrderMappingsQuery.data, q.data], async ([mappingsData, ordersData]) => {
  if (!ordersData || !props.userId) return

  try {
    // Build pattern for STK position mapping key
    // Format: {internal_account_id}|{symbol}|*|STK|*
    const pattern = `%|${props.symbolRoot}|%|STK|%`
    
    console.log('🔍 Searching for STK position mappings with pattern:', pattern)

    // Query position_order_mappings directly with LIKE pattern
    const { data: mappings, error: mappingsError } = await supabase
      .schema('hf')
      .from('position_order_mappings')
      .select('mapping_key, order_id')
      .eq('user_id', props.userId)
      .like('mapping_key', pattern)

    if (mappingsError) {
      console.error('Error fetching position-order mappings:', mappingsError)
      attachedOrderIds.value.clear()
      return
    }

    console.log('📦 Found mappings:', mappings)

    if (!mappings || mappings.length === 0) {
      console.log('No STK position mappings found')
      attachedOrderIds.value.clear()
      selectedOrderIdsForAttach.value.clear()
      return
    }

    // Combine all order IDs from matching mappings
    const allAttachedIds = new Set<string>()
    mappings.forEach(mapping => {
      if (mapping.order_id) {
        allAttachedIds.add(String(mapping.order_id))
      }
    })

    console.log(`✅ Found ${allAttachedIds.size} attached orders for STK position`)
    
    attachedOrderIds.value = allAttachedIds
    
    // Pre-select attached orders in the UI
    selectedOrderIdsForAttach.value = new Set(allAttachedIds)
    
    // Redraw table to update checkboxes
    if (tabulator.value) {
      nextTick(() => {
        tabulator.value.redraw()
      })
    }
  } catch (error) {
    console.error('Error checking attached orders:', error)
    attachedOrderIds.value.clear()
  }
}, { immediate: true })

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

// Track if this component is currently visible
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
  assetFilter,
  expiryDateFilter,
  strikePriceFilter,
  clearFilter,
  clearAllFilters,
  refreshFiltersFromUrl
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
  
  if (assetFilter.value) {
    filters.push({
      field: 'assetCategory',
      label: 'Asset Class',
      value: assetFilter.value
    })
  }
  
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

// Columns composable - pass attachedOrderIds
const { columns, allOrdersColumnOptions } = useOrdersColumns(
  handleCellFilterClick,
  symbolTagFilters,
  ordersVisibleCols,
  columnRenames,
  createFetchedAtContextMenu,
  selectedOrderIdsForAttach,
  handleOrderSelectionChange,
  attachedOrderIds // ADD THIS
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
  
  if (isReady) {
    nextTick(() => {
      console.log('[OrderData] Tabulator ready, applying filters:', {
        account: accountFilter.value,
        expiryDate: expiryDateFilter.value,
        strikePrice: strikePriceFilter.value
      })
      updateFilters()
    })
  }
})

watch([q.data, isTabulatorReady], ([data, ready]) => {
  if (ready && data && data.length > 0) {
    console.log('[OrderData] Data loaded, reapplying filters')
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

// MODIFIED: Function to attach/detach selected orders
async function attachSelectedOrders() {
  if (!props.userId || selectedOrderIdsForAttach.value.size === 0) {
    showToast('warning', 'No Selection', 'Please select at least one order')
    return
  }

  // Calculate newly selected orders (to attach)
  const newOrderIds = Array.from(selectedOrderIdsForAttach.value)
    .filter(id => !attachedOrderIds.value.has(id))

  // Calculate unchecked orders (to detach)
  const uncheckedOrderIds = Array.from(attachedOrderIds.value)
    .filter(id => !selectedOrderIdsForAttach.value.has(id))

  if (newOrderIds.length === 0 && uncheckedOrderIds.length === 0) {
    showToast('info', 'No Changes', 'No changes to order attachments')
    return
  }

  try {
    const firstOrderId = Array.from(selectedOrderIdsForAttach.value)[0]
    const orderData = q.data.value?.find((o: any) => String(o.id || o.orderID) === firstOrderId)
    
    if (!orderData) {
      showToast('error', 'Error', 'Could not find order data')
      return
    }

    const symbolRoot = orderData.symbol?.split(' ')[0] || orderData.symbol || ''
    const { data: positions, error: posError } = await supabase
      .schema('hf')
      .from('positions')
      .select('*')
      .eq('internal_account_id', orderData.internal_account_id)
      .eq('symbol', symbolRoot)
      .eq('asset_class', 'STK')
      .order('fetched_at', { ascending: false })
      .limit(1)

    if (posError) {
      console.error('Error fetching position:', posError)
      showToast('error', 'Error', `Failed to fetch position: ${posError.message}`)
      return
    }

    if (!positions || positions.length === 0) {
      showToast('error', 'Error', `No related STK position found for symbol root ${symbolRoot}`)
      return
    }

    const relatedStkPosition = positions[0]
    console.log('Found related STK position:', relatedStkPosition)
    
    const positionKey = generatePositionMappingKey({
      internal_account_id: relatedStkPosition.internal_account_id,
      symbol: relatedStkPosition.symbol,
      contract_quantity: relatedStkPosition.contract_quantity || 0,
      asset_class: relatedStkPosition.asset_class,
      conid: relatedStkPosition.conid || ''
    })

    // Calculate final set of order IDs (existing + new - unchecked)
    const finalOrderIds = new Set([
      ...Array.from(attachedOrderIds.value).filter(id => !uncheckedOrderIds.includes(id)),
      ...newOrderIds
    ])

    await savePositionOrderMappings(
      supabase,
      props.userId,
      positionKey,
      finalOrderIds
    )

    const attachedCount = newOrderIds.length
    const detachedCount = uncheckedOrderIds.length
    
    let message = ''
    if (attachedCount > 0 && detachedCount > 0) {
      message = `Attached ${attachedCount} and detached ${detachedCount} order(s)`
    } else if (attachedCount > 0) {
      message = `Attached ${attachedCount} order(s) to position`
    } else if (detachedCount > 0) {
      message = `Detached ${detachedCount} order(s) from position`
    }

    showToast('success', 'Success', message)
    
    // Update attached orders
    attachedOrderIds.value = finalOrderIds
    
    // Refetch mappings to get updated data
    await positionOrderMappingsQuery.refetch()
    
    if (eventBus) {
      eventBus.emit('orders-attached', { 
        positionKey, 
        orderIds: Array.from(finalOrderIds),
        attached: newOrderIds,
        detached: uncheckedOrderIds
      })
    }
    
    if (tabulator.value) {
      tabulator.value.redraw()
    }
  } catch (error: any) {
    console.error('Error updating order attachments:', error)
    showToast('error', 'Error', error.message || 'Failed to update order attachments')
  }
}

// Setup external event handlers
onMounted(() => {
  console.log('[OrderData] Component mounted')
  
  if (eventBus) {
    eventBus.on('account-filter-changed', handleExternalAccountFilter)
    eventBus.on('symbol-filter-changed', handleExternalSymbolFilter)
    eventBus.on('asset-filter-changed', handleExternalAssetFilter)
    eventBus.on('quantity-filter-changed', handleExternalQuantityFilter)
    eventBus.on('expiry-date-filter-changed', handleExternalExpiryDateFilter)
    eventBus.on('strike-price-filter-changed', handleExternalStrikePriceFilter)
    
    eventBus.on('tab-changed', (payload: { tab: string }) => {
      console.log('[OrderData] Tab changed event received:', payload)
      if (payload.tab === 'orders') {
        console.log('[OrderData] This tab is now active')
        isVisible.value = true
        
        setTimeout(() => {
          console.log('[OrderData] Re-reading filters from URL')
          const url = new URL(window.location.href)
          accountFilter.value = url.searchParams.get('all_cts_clientId') || null
          expiryDateFilter.value = url.searchParams.get('expiryDate') || null
          strikePriceFilter.value = url.searchParams.get('strikePrice') || null
          
          console.log('[OrderData] Forcing filter update after tab switch')
          
          if (isTabulatorReady.value && tabulatorRef.value) {
            updateFilters()
          }
        }, 100)
      } else {
        isVisible.value = false
      }
    })
  }
  
  if (isTabulatorReady.value) {
    nextTick(() => {
      console.log('[OrderData] Applying filters on mount')
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
    eventBus.off('tab-changed')
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
    <!-- MODIFIED: Attach button - show count of newly selected orders -->
    <div v-if="showAttachButton" class="attach-orders-bar">
      <button class="btn btn-primary" @click="attachSelectedOrders">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.5rem;">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        <span v-if="changeCount.attach > 0 && changeCount.detach > 0">
          Attach {{ changeCount.attach }} & Detach {{ changeCount.detach }} Order(s)
        </span>
        <span v-else-if="changeCount.attach > 0">
          Attach {{ changeCount.attach }} Order(s)
        </span>
        <span v-else>
          Detach {{ changeCount.detach }} Order(s)
        </span>
      </button>
      <button class="btn btn-secondary" @click="selectedOrderIdsForAttach.clear()">
        Cancel Changes
      </button>
      <span v-if="attachedOrderIds.size > 0" class="attached-info">
        ({{ attachedOrderIds.size }} currently attached)
      </span>
    </div>

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

/* ADD: Styles for attach button bar */
.attach-orders-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem;
  background: #e3f2fd;
  border-bottom: 1px solid #90caf9;
}

.btn {
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 4px;
  font-size: 0.8rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s;
}

.btn-primary {
  background: #2196f3;
  color: white;
}

.btn-primary:hover {
  background: #1976d2;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background: #5a6268;
}

/* Style for checkboxes */
:deep(.order-select-checkbox) {
  cursor: pointer;
  width: 18px;
  height: 18px;
}

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

.attached-info {
  color: #6c757d;
  font-size: 0.875rem;
  font-style: italic;
}
</style>