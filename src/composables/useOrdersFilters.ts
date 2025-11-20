import { ref, nextTick, type Ref } from 'vue'
import type { TabulatorFull as Tabulator } from 'tabulator-tables'

export type FilterField = 'legal_entity' | 'symbol' | 'assetCategory' | 'quantity' | 'contract_quantity' | 'accounting_quantity'

export interface ActiveFilter {
  field: FilterField
  value: string
}

export function useOrdersFilters(
  windowProp: string | null,
  tabulator: Ref<Tabulator | null>,
  isTabulatorReady: Ref<boolean>,
  eventBus: any,
  extractTagsFromSymbol: (symbol: string) => string[]
) {
  const windowKey = windowProp || 'default'
  
  const activeFilters = ref<ActiveFilter[]>([])
  const symbolTagFilters = ref<string[]>([])
  const accountFilter = ref<string | null>(null)
  const assetFilter = ref<string | null>(null)
  const quantityFilter = ref<number | null>(null)
  const contractQuantityFilter = ref<number | null>(null)
  const accountingQuantityFilter = ref<number | null>(null)
  const totalOrders = ref(0)

  function handleCellFilterClick(field: FilterField, value: string) {
    if (field === 'legal_entity') {
      if (accountFilter.value === value) {
        accountFilter.value = null
        const url = new URL(window.location.href)
        url.searchParams.delete(`${windowKey}_orders_clientId`)
        window.history.replaceState({}, '', url.toString())
        if (eventBus) eventBus.emit('account-filter-changed', { accountId: null, source: 'orders' })
      } else {
        accountFilter.value = value
        const url = new URL(window.location.href)
        url.searchParams.set(`${windowKey}_orders_clientId`, value)
        window.history.replaceState({}, '', url.toString())
        if (eventBus) eventBus.emit('account-filter-changed', { accountId: value, source: 'orders' })
      }
      updateFilters()
    } else if (field === 'symbol') {
      const index = symbolTagFilters.value.indexOf(value)
      if (index > -1) {
        symbolTagFilters.value.splice(index, 1)
      } else {
        symbolTagFilters.value.push(value)
      }
      const url = new URL(window.location.href)
      if (symbolTagFilters.value.length > 0) {
        url.searchParams.set(`${windowKey}_orders_fi`, symbolTagFilters.value.join(','))
      } else {
        url.searchParams.delete(`${windowKey}_orders_fi`)
      }
      window.history.replaceState({}, '', url.toString())
      if (eventBus) eventBus.emit('symbol-filter-changed', { symbolTags: symbolTagFilters.value, source: 'orders' })
      updateFilters()
    } else if (field === 'assetCategory') {
      if (assetFilter.value === value) {
        assetFilter.value = null
        const url = new URL(window.location.href)
        url.searchParams.delete(`${windowKey}_orders_asset`)
        window.history.replaceState({}, '', url.toString())
        if (eventBus) eventBus.emit('asset-filter-changed', { asset: null, source: 'orders' })
      } else {
        assetFilter.value = value
        const url = new URL(window.location.href)
        url.searchParams.set(`${windowKey}_orders_asset`, value)
        window.history.replaceState({}, '', url.toString())
        if (eventBus) eventBus.emit('asset-filter-changed', { asset: value, source: 'orders' })
      }
      updateFilters()
    } else if (field === 'quantity') {
      const num = Number(value)
      if (quantityFilter.value !== null && Math.abs((quantityFilter.value || 0) - num) < 1e-9) {
        quantityFilter.value = null
        const url = new URL(window.location.href)
        url.searchParams.delete(`${windowKey}_orders_qty`)
        window.history.replaceState({}, '', url.toString())
        if (eventBus) eventBus.emit('quantity-filter-changed', { quantity: null, source: 'orders' })
      } else {
        quantityFilter.value = num
        const url = new URL(window.location.href)
        url.searchParams.set(`${windowKey}_orders_qty`, String(num))
        window.history.replaceState({}, '', url.toString())
        if (eventBus) eventBus.emit('quantity-filter-changed', { quantity: num, source: 'orders' })
      }
      updateFilters()
    } else if (field === 'accounting_quantity') {
      const num = Number(value)
      if (accountingQuantityFilter.value !== null && Math.abs((accountingQuantityFilter.value || 0) - num) < 1e-9) {
        accountingQuantityFilter.value = null
        const url = new URL(window.location.href)
        url.searchParams.delete(`${windowKey}_orders_accounting_qty`)
        window.history.replaceState({}, '', url.toString())
        if (eventBus) eventBus.emit('accounting-quantity-filter-changed', { quantity: null, source: 'orders' })
      } else {
        accountingQuantityFilter.value = num
        const url = new URL(window.location.href)
        url.searchParams.set(`${windowKey}_orders_accounting_qty`, String(num))
        window.history.replaceState({}, '', url.toString())
        if (eventBus) eventBus.emit('accounting-quantity-filter-changed', { quantity: num, source: 'orders' })
      }
      updateFilters()
    }
  }

  function updateFilters() {
    if (!tabulator.value || !isTabulatorReady.value) return

    try {
      tabulator.value.clearFilter(true)
      const filterFunc = (data: any) => {
        if (!data) return false

        if (accountFilter.value) {
          const accountVal = typeof data.legal_entity === 'object' && data.legal_entity !== null
            ? (data.legal_entity.name || data.legal_entity.id)
            : data.legal_entity
          if (accountVal !== accountFilter.value) return false
        }

        if (assetFilter.value) {
          const assetVal = typeof data.assetCategory === 'object' && data.assetCategory !== null
            ? (data.assetCategory.name || data.assetCategory.id)
            : data.assetCategory
          if (String(assetVal) !== assetFilter.value) return false
        }

        if (quantityFilter.value !== null) {
          const q = parseFloat(data?.quantity || 0) || 0
          const m = parseFloat(data?.multiplier || 1) || 1
          const effective = q * m
          if (Math.abs(effective - (quantityFilter.value || 0)) > 1e-6) return false
        }

        if (symbolTagFilters.value.length > 0) {
          const symbolTags = extractTagsFromSymbol(data.symbol || '')
          const hasAllTags = symbolTagFilters.value.every(tag => symbolTags.includes(tag))
          if (!hasAllTags) return false
        }

        if (accountingQuantityFilter.value !== null) {
          const a = parseFloat(data?.accounting_quantity || 0) || 0
          if (Math.abs(a - (accountingQuantityFilter.value || 0)) > 1e-6) return false
        }

        return true
      }
      tabulator.value.setFilter(filterFunc)
      syncActiveFiltersFromTable()
      nextTick(() => {
        if (tabulator.value) {
          tabulator.value.redraw()
          totalOrders.value = tabulator.value.getDataCount('active') || 0
        }
      })
    } catch (error) {
      console.warn('Error in updateFilters: ', error)
    }
  }

  function syncActiveFiltersFromTable() {
    const next: ActiveFilter[] = []
    if (accountFilter.value) next.push({ field: 'legal_entity', value: accountFilter.value })
    if (assetFilter.value) next.push({ field: 'assetCategory', value: assetFilter.value })
    if (quantityFilter.value !== null) next.push({ field: 'quantity', value: String(quantityFilter.value) })
    if (accountingQuantityFilter.value !== null) next.push({ field: 'accounting_quantity', value: String(accountingQuantityFilter.value) })
    if (symbolTagFilters.value.length > 0) {
      symbolTagFilters.value.forEach(tag => {
        next.push({ field: 'symbol', value: tag })
      })
    }
    activeFilters.value = next
    if (tabulator.value && isTabulatorReady.value) {
      totalOrders.value = tabulator.value.getDataCount('active') || 0
    }
  }

  function clearFilter(field: FilterField) {
    if (field === 'legal_entity') {
      accountFilter.value = null
      const url = new URL(window.location.href)
      url.searchParams.delete(`${windowKey}_orders_clientId`)
      window.history.replaceState({}, '', url.toString())
      if (eventBus) eventBus.emit('account-filter-changed', { accountId: null, source: 'orders' })
    } else if (field === 'symbol') {
      symbolTagFilters.value = []
      const url = new URL(window.location.href)
      url.searchParams.delete(`${windowKey}_orders_fi`)
      window.history.replaceState({}, '', url.toString())
      if (eventBus) eventBus.emit('symbol-filter-changed', { symbolTags: [], source: 'orders' })
    } else if (field === 'assetCategory') {
      assetFilter.value = null
      const url = new URL(window.location.href)
      url.searchParams.delete(`${windowKey}_orders_asset`)
      window.history.replaceState({}, '', url.toString())
      if (eventBus) eventBus.emit('asset-filter-changed', { asset: null, source: 'orders' })
    } else if (field === 'quantity') {
      quantityFilter.value = null
      const url = new URL(window.location.href)
      url.searchParams.delete(`${windowKey}_orders_qty`)
      window.history.replaceState({}, '', url.toString())
      if (eventBus) eventBus.emit('quantity-filter-changed', { quantity: null, source: 'orders' })
    } else if (field === 'contract_quantity') {
      contractQuantityFilter.value = null
    } else if (field === 'accounting_quantity') {
      accountingQuantityFilter.value = null
    }
    updateFilters()
  }

  function clearAllFilters() {
    accountFilter.value = null
    symbolTagFilters.value = []
    assetFilter.value = null
    quantityFilter.value = null
    accountingQuantityFilter.value = null
    const url = new URL(window.location.href)
    url.searchParams.delete(`${windowKey}_orders_clientId`)
    url.searchParams.delete(`${windowKey}_orders_fi`)
    url.searchParams.delete(`${windowKey}_orders_asset`)
    url.searchParams.delete(`${windowKey}_orders_qty`)
    window.history.replaceState({}, '', url.toString())
    if (eventBus) {
      eventBus.emit('account-filter-changed', { accountId: null, source: 'orders' })
      eventBus.emit('symbol-filter-changed', { symbolTags: [], source: 'orders' })
      eventBus.emit('asset-filter-changed', { asset: null, source: 'orders' })
      eventBus.emit('quantity-filter-changed', { quantity: null, source: 'orders' })
      eventBus.emit('accounting-quantity-filter-changed', { quantity: null, source: 'orders' })
    }
    updateFilters()
  }

  // External event handlers
  function handleExternalAccountFilter(payload: { accountId: string | null; source: string }) {
    if (payload.source === 'orders') return
    accountFilter.value = payload.accountId
    const url = new URL(window.location.href)
    if (payload.accountId) {
      url.searchParams.set(`${windowKey}_orders_clientId`, payload.accountId)
    } else {
      url.searchParams.delete(`${windowKey}_orders_clientId`)
    }
    window.history.replaceState({}, '', url.toString())
    updateFilters()
  }

  function handleExternalSymbolFilter(payload: { symbolTags: string[]; source: string }) {
    if (payload.source === 'orders') return
    symbolTagFilters.value = payload.symbolTags
    const url = new URL(window.location.href)
    if (payload.symbolTags.length > 0) {
      url.searchParams.set(`${windowKey}_orders_fi`, payload.symbolTags.join(','))
    } else {
      url.searchParams.delete(`${windowKey}_orders_fi`)
    }
    window.history.replaceState({}, '', url.toString())
    updateFilters()
  }

  function handleExternalAssetFilter(payload: { asset: string | null; source: string }) {
    if (payload.source === 'orders') return
    assetFilter.value = payload.asset
    const url = new URL(window.location.href)
    if (payload.asset) url.searchParams.set(`${windowKey}_orders_asset`, payload.asset)
    else url.searchParams.delete(`${windowKey}_orders_asset`)
    window.history.replaceState({}, '', url.toString())
    updateFilters()
  }

  function handleExternalQuantityFilter(payload: { quantity: number | null; source: string; accountingQuantity?: number | null }) {
    if (payload.source === 'orders') return
    quantityFilter.value = payload.quantity
    accountingQuantityFilter.value = payload.accountingQuantity ?? null
    const url = new URL(window.location.href)
    if (payload.quantity !== null && payload.quantity !== undefined) {
      url.searchParams.set(`${windowKey}_orders_qty`, String(payload.quantity))
    } else {
      url.searchParams.delete(`${windowKey}_orders_qty`)
    }
    window.history.replaceState({}, '', url.toString())
    updateFilters()
  }

  function initializeFiltersFromUrl(urlFilters: any) {
    if (urlFilters.legal_entity) accountFilter.value = urlFilters.legal_entity
    if (urlFilters.symbol) symbolTagFilters.value = urlFilters.symbol
    if (urlFilters.asset) assetFilter.value = urlFilters.asset
    if (urlFilters.quantity !== undefined) quantityFilter.value = urlFilters.quantity
    if (urlFilters.accounting_quantity !== undefined) accountingQuantityFilter.value = urlFilters.accounting_quantity
  }

  return {
    // State
    activeFilters,
    symbolTagFilters,
    accountFilter,
    assetFilter,
    quantityFilter,
    contractQuantityFilter,
    accountingQuantityFilter,
    totalOrders,
    
    // Methods
    handleCellFilterClick,
    updateFilters,
    clearFilter,
    clearAllFilters,
    
    // External handlers
    handleExternalAccountFilter,
    handleExternalSymbolFilter,
    handleExternalAssetFilter,
    handleExternalQuantityFilter,
    
    // Init
    initializeFiltersFromUrl
  }
}