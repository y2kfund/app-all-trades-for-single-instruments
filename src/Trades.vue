<!-- filepath: /Users/sb/gt/y2kfund/app-trades/src/Trades.new.vue -->
<script setup lang="ts">
import { ref, computed, inject, watch, onMounted, onBeforeUnmount } from 'vue'
import { DateTime } from 'luxon'
;(window as any).luxon = { DateTime }
import { useTradeQuery, type Trade } from '@y2kfund/core/trades'
import type { TradesProps } from './index'
import 'flatpickr/dist/flatpickr.min.css'

// Composables
import { useToast } from './composables/useToast'
import { useUrlSync } from './composables/useUrlSync'
import { useTradesFilters } from './composables/useTradesFilters'
import { useTradesColumns, type TradesColumnField } from './composables/useTradesColumns'
import { useTabulatorSetup } from './composables/useTabulatorSetup'

// Components
import ToastNotification from './components/ToastNotification.vue'
import TradesHeader from './components/TradesHeader.vue'

// Utils
import { formatTimestampWithTimezone, extractTagsFromSymbol } from './utils/formatters'

// Props & Emits
const props = withDefaults(defineProps<TradesProps>(), {
  accountId: '1',
  highlightPnL: false,
  showHeaderLink: false,
  userId: null,
  window: null
})

const emit = defineEmits<{ 
  'row-click': [row: Trade]
  'minimize': []
  'maximize': []
}>()

// Event bus
const eventBus = inject<any>('eventBus')

// Query trades data
const q = useTradeQuery(props.accountId, props.userId)

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
const allFieldNames: TradesColumnField[] = [
  'legal_entity',
  'symbol',
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
  initializeFiltersFromUrl
} = useTradesFilters(windowKey, tabulatorRef, tabulatorReadyRef, eventBus, extractTagsFromSymbol)

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
  props.onRowClick
)

// Sync tabulator ref to filters
watch(tabulator, (newTabulator) => {
  tabulatorRef.value = newTabulator
})

watch(isTabulatorReady, (isReady) => {
  tabulatorReadyRef.value = isReady
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
  <div class="trades-card">
    <!-- Toast notifications -->
    <ToastNotification :toasts="toasts" @remove="removeToast" />

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
      <TradesHeader
        ref="tradesColumnsBtnRef"
        :app-name="appName"
        :total-trades="totalTrades"
      >
      </TradesHeader>

      <!-- Tabulator table -->
      <div ref="tableDiv" class="trades-grid"></div>
    </div>
  </div>
</template>

<style src="./Trades.css"></style>
