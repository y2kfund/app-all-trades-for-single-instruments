import { ref, nextTick, type Ref } from 'vue'
import type { TabulatorFull as Tabulator } from 'tabulator-tables'

export type FilterField = 'legal_entity' | 'symbol' | 'assetCategory' | 'quantity' | 'contract_quantity' | 'accounting_quantity'

export interface ActiveFilter {
  field: FilterField
  value: string
}

export function useTradesFilters(
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
  const totalTrades = ref(0)

  function handleCellFilterClick(field: FilterField, value: string) {
    console.log('[useTradesFilters] handleCellFilterClick called:', { field, value })
    
    if (field === 'legal_entity') {
      // Toggle account filter
      if (accountFilter.value === value) {
        console.log('[useTradesFilters] Clearing account filter')
        accountFilter.value = null
        const url = new URL(window.location.href)
        url.searchParams.delete(`${windowKey}_all_cts_clientId`)
        window.history.replaceState({}, '', url.toString())
        if (eventBus) {
          eventBus.emit('account-filter-changed', { accountId: null, source: 'trades' })
        }
      } else {
        console.log('[useTradesFilters] Setting account filter to:', value)
        accountFilter.value = value
        const url = new URL(window.location.href)
        url.searchParams.set(`${windowKey}_all_cts_clientId`, value)
        window.history.replaceState({}, '', url.toString())
        if (eventBus) {
          eventBus.emit('account-filter-changed', { accountId: value, source: 'trades' })
        }
      }
      updateFilters()
    } else if (field === 'symbol') {
      // Toggle symbol tag filter
      const index = symbolTagFilters.value.indexOf(value)
      if (index > -1) {
        console.log('[useTradesFilters] Removing symbol tag:', value)
        symbolTagFilters.value.splice(index, 1)
      } else {
        console.log('[useTradesFilters] Adding symbol tag:', value)
        symbolTagFilters.value.push(value)
      }
      console.log('[useTradesFilters] Current symbol tags:', symbolTagFilters.value)
      
      const url = new URL(window.location.href)
      if (symbolTagFilters.value.length > 0) {
        url.searchParams.set(`${windowKey}_all_cts_fi`, symbolTagFilters.value.join(','))
      } else {
        url.searchParams.delete(`${windowKey}_all_cts_fi`)
      }
      window.history.replaceState({}, '', url.toString())
      
      if (eventBus) {
        eventBus.emit('symbol-filter-changed', {
          symbolTags: symbolTagFilters.value,
          source: 'trades'
        })
      }
      
      updateFilters()
    } else if (field === 'assetCategory') {
      // Toggle asset class filter
      if (assetFilter.value === value) {
        assetFilter.value = null
        const url = new URL(window.location.href)
        url.searchParams.delete(`${windowKey}_all_cts_asset`)
        window.history.replaceState({}, '', url.toString())
        if (eventBus) eventBus.emit('asset-filter-changed', { asset: null, source: 'trades' })
      } else {
        assetFilter.value = value
        const url = new URL(window.location.href)
        url.searchParams.set(`${windowKey}_all_cts_asset`, value)
        window.history.replaceState({}, '', url.toString())
        if (eventBus) eventBus.emit('asset-filter-changed', { asset: value, source: 'trades' })
      }
      updateFilters()
    } else if (field === 'quantity') {
      // Toggle quantity filter
      const num = Number(value)
      if (quantityFilter.value !== null && Math.abs((quantityFilter.value || 0) - num) < 1e-9) {
        quantityFilter.value = null
        const url = new URL(window.location.href)
        url.searchParams.delete(`${windowKey}_all_cts_qty`)
        window.history.replaceState({}, '', url.toString())
        if (eventBus) eventBus.emit('quantity-filter-changed', { quantity: null, source: 'trades' })
      } else {
        quantityFilter.value = num
        const url = new URL(window.location.href)
        url.searchParams.set(`${windowKey}_all_cts_qty`, String(num))
        window.history.replaceState({}, '', url.toString())
        if (eventBus) eventBus.emit('quantity-filter-changed', { quantity: num, source: 'trades' })
      }
      updateFilters()
    } else if (field === 'accounting_quantity') {
      // Handle accounting_quantity filter click
      const num = Number(value)
      if (accountingQuantityFilter.value !== null && Math.abs((accountingQuantityFilter.value || 0) - num) < 1e-9) {
        accountingQuantityFilter.value = null
        const url = new URL(window.location.href)
        url.searchParams.delete(`${windowKey}_all_cts_accounting_qty`)
        window.history.replaceState({}, '', url.toString())
        if (eventBus) eventBus.emit('accounting-quantity-filter-changed', { quantity: null, source: 'trades' })
      } else {
        accountingQuantityFilter.value = num
        const url = new URL(window.location.href)
        url.searchParams.set(`${windowKey}_all_cts_accounting_qty`, String(num))
        window.history.replaceState({}, '', url.toString())
        if (eventBus) eventBus.emit('accounting-quantity-filter-changed', { quantity: num, source: 'trades' })
      }
      updateFilters()
    }
  }

  function updateFilters() {
    console.log('[useTradesFilters] updateFilters called. Tabulator ready:', isTabulatorReady.value)
    console.log('[useTradesFilters] Current filters:', {
      account: accountFilter.value,
      symbolTags: symbolTagFilters.value,
      asset: assetFilter.value,
      quantity: quantityFilter.value
    })
    
    if (!tabulator.value || !isTabulatorReady.value) {
      console.warn('[useTradesFilters] Tabulator not ready!')
      return
    }

    try {
      console.log('[useTradesFilters] Tabulator instance:', tabulator.value)
      console.log('[useTradesFilters] Tabulator type:', typeof tabulator.value)
      console.log('[useTradesFilters] Has setFilter method:', typeof tabulator.value?.setFilter)
      
      tabulator.value.clearFilter(true)
      console.log('[useTradesFilters] Filter cleared')

      let filterCallCount = 0
      const filterFunc = (data: any) => {
        filterCallCount++
        if (filterCallCount <= 3) {
          console.log('[Filter] Evaluating row:', filterCallCount, data)
        }
        
        if (!data) return false

        // Account filter
        if (accountFilter.value) {
          const accountVal = typeof data.legal_entity === 'object' && data.legal_entity !== null
            ? (data.legal_entity.name || data.legal_entity.id)
            : data.legal_entity
          
          if (filterCallCount <= 3) {
            console.log('[Filter] Checking account:', {
              filterValue: accountFilter.value,
              rowAccountVal: accountVal,
              rowData: data.legal_entity,
              matches: accountVal === accountFilter.value
            })
          }
          
          if (accountVal !== accountFilter.value) return false
        }

        // Asset class filter
        if (assetFilter.value) {
          const assetVal = typeof data.assetCategory === 'object' && data.assetCategory !== null
            ? (data.assetCategory.name || data.assetCategory.id)
            : data.assetCategory
          if (String(assetVal) !== assetFilter.value) return false
        }

        // Quantity filter
        if (quantityFilter.value !== null) {
          const q = parseFloat(data?.quantity || 0) || 0
          const m = parseFloat(data?.multiplier || 1) || 1
          const effective = q * m
          if (Math.abs(effective - (quantityFilter.value || 0)) > 1e-6) return false
        }

        // Symbol tag filter
        if (symbolTagFilters.value.length > 0) {
          const symbolTags = extractTagsFromSymbol(data.symbol || '')
          const hasAllTags = symbolTagFilters.value.every(tag => symbolTags.includes(tag))
          if (!hasAllTags) return false
        }

        // Accounting quantity filter
        if (accountingQuantityFilter.value !== null) {
          const a = parseFloat(data?.accounting_quantity || 0) || 0
          if (Math.abs(a - (accountingQuantityFilter.value || 0)) > 1e-6) return false
        }

        return true
      }
      
      console.log('[useTradesFilters] About to call setFilter with function:', filterFunc)
      tabulator.value.setFilter(filterFunc)
      console.log('[useTradesFilters] setFilter called. Total rows processed:', filterCallCount)

      syncActiveFiltersFromTable()
      nextTick(() => {
        if (tabulator.value) {
          console.log('[useTradesFilters] Calling redraw')
          tabulator.value.redraw()
          console.log('[useTradesFilters] Active data count:', tabulator.value.getDataCount('active'))
        }
      })
    } catch (error) {
      console.warn('Error in updateFilters: ', error)
    }
  }

  function syncActiveFiltersFromTable() {
    const next: ActiveFilter[] = []
    if (accountFilter.value) {
      next.push({ field: 'legal_entity', value: accountFilter.value })
    }
    if (assetFilter.value) {
      next.push({ field: 'assetCategory', value: assetFilter.value })
    }
    if (quantityFilter.value !== null) {
      next.push({ field: 'quantity', value: String(quantityFilter.value) })
    }
    if (accountingQuantityFilter.value !== null) {
      next.push({ field: 'accounting_quantity', value: String(accountingQuantityFilter.value) })
    }
    if (symbolTagFilters.value.length > 0) {
      symbolTagFilters.value.forEach(tag => {
        next.push({ field: 'symbol', value: tag })
      })
    }
    activeFilters.value = next
    
    // Update total trades count
    if (tabulator.value && isTabulatorReady.value) {
      totalTrades.value = tabulator.value.getDataCount('active') || 0
    }
  }

  function clearFilter(field: FilterField) {
    if (field === 'legal_entity') {
      accountFilter.value = null
      const url = new URL(window.location.href)
      url.searchParams.delete(`${windowKey}_all_cts_clientId`)
      window.history.replaceState({}, '', url.toString())
      if (eventBus) {
        eventBus.emit('account-filter-changed', { accountId: null, source: 'trades' })
      }
    } else if (field === 'symbol') {
      symbolTagFilters.value = []
      const url = new URL(window.location.href)
      url.searchParams.delete(`${windowKey}_all_cts_fi`)
      window.history.replaceState({}, '', url.toString())
      if (eventBus) {
        eventBus.emit('symbol-filter-changed', { symbolTags: [], source: 'trades' })
      }
    } else if (field === 'assetCategory') {
      assetFilter.value = null
      const url = new URL(window.location.href)
      url.searchParams.delete(`${windowKey}_all_cts_asset`)
      window.history.replaceState({}, '', url.toString())
      if (eventBus) eventBus.emit('asset-filter-changed', { asset: null, source: 'trades' })
    } else if (field === 'quantity') {
      quantityFilter.value = null
      const url = new URL(window.location.href)
      url.searchParams.delete(`${windowKey}_all_cts_qty`)
      window.history.replaceState({}, '', url.toString())
      if (eventBus) eventBus.emit('quantity-filter-changed', { quantity: null, source: 'trades' })
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
    url.searchParams.delete(`${windowKey}_all_cts_clientId`)
    url.searchParams.delete(`${windowKey}_all_cts_fi`)
    url.searchParams.delete(`${windowKey}_all_cts_asset`)
    url.searchParams.delete(`${windowKey}_all_cts_qty`)
    window.history.replaceState({}, '', url.toString())
    if (eventBus) {
      eventBus.emit('account-filter-changed', { accountId: null, source: 'trades' })
      eventBus.emit('symbol-filter-changed', { symbolTags: [], source: 'trades' })
      eventBus.emit('asset-filter-changed', { asset: null, source: 'trades' })
      eventBus.emit('quantity-filter-changed', { quantity: null, source: 'trades' })
      eventBus.emit('accounting-quantity-filter-changed', { quantity: null, source: 'trades' })
    }
    updateFilters()
  }

  // External event handlers
  function handleExternalAccountFilter(payload: { accountId: string | null; source: string }) {
    if (payload.source === 'trades') return
    accountFilter.value = payload.accountId
    const url = new URL(window.location.href)
    if (payload.accountId) {
      url.searchParams.set(`${windowKey}_all_cts_clientId`, payload.accountId)
    } else {
      url.searchParams.delete(`${windowKey}_all_cts_clientId`)
    }
    window.history.replaceState({}, '', url.toString())
    updateFilters()
  }

  function handleExternalSymbolFilter(payload: { symbolTags: string[]; source: string }) {
    if (payload.source === 'trades') return
    symbolTagFilters.value = payload.symbolTags
    const url = new URL(window.location.href)
    if (payload.symbolTags.length > 0) {
      url.searchParams.set(`${windowKey}_all_cts_fi`, payload.symbolTags.join(','))
    } else {
      url.searchParams.delete(`${windowKey}_all_cts_fi`)
    }
    window.history.replaceState({}, '', url.toString())
    updateFilters()
  }

  function handleExternalAssetFilter(payload: { asset: string | null; source: string }) {
    if (payload.source === 'trades') return
    assetFilter.value = payload.asset
    const url = new URL(window.location.href)
    if (payload.asset) url.searchParams.set(`${windowKey}_all_cts_asset`, payload.asset)
    else url.searchParams.delete(`${windowKey}_all_cts_asset`)
    window.history.replaceState({}, '', url.toString())
    updateFilters()
  }

  function handleExternalQuantityFilter(payload: { quantity: number | null; source: string; accountingQuantity?: number | null }) {
    if (payload.source === 'trades') return
    quantityFilter.value = payload.quantity
    accountingQuantityFilter.value = payload.accountingQuantity ?? null
    const url = new URL(window.location.href)
    if (payload.quantity !== null && payload.quantity !== undefined) {
      url.searchParams.set(`${windowKey}_all_cts_qty`, String(payload.quantity))
    } else {
      url.searchParams.delete(`${windowKey}_all_cts_qty`)
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
    totalTrades,
    
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
