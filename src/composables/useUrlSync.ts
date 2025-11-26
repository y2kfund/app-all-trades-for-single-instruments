export function useUrlSync(windowKey: string) {
  // Trades Sort
  function writeTradesSortToUrl(sortField: string, sortDir: string) {
    const url = new URL(window.location.href)
    url.searchParams.set(`${windowKey}_trades_sort`, `${sortField}:${sortDir}`)
    window.history.replaceState({}, '', url.toString())
  }

  function parseTradesSortFromUrl(): { field: string; dir: 'asc' | 'desc' } | null {
    const url = new URL(window.location.href)
    const sortParam = url.searchParams.get(`${windowKey}_trades_sort`)
    if (!sortParam) return null
    const [field, dir] = sortParam.split(':')
    if (!field || !dir) return null
    if (dir !== 'asc' && dir !== 'desc') return null
    return { field, dir }
  }

  // App Name
  function parseAppNameFromUrl(): string {
    const url = new URL(window.location.href)
    return url.searchParams.get(`${windowKey}_trades_app_name`) || 'Trades'
  }

  function writeAppNameToUrl(name: string) {
    const url = new URL(window.location.href)
    if (name && name.trim() && name !== 'Trades') {
      url.searchParams.set(`${windowKey}_trades_app_name`, name.trim())
    } else {
      url.searchParams.delete(`${windowKey}_trades_app_name`)
    }
    window.history.replaceState({}, '', url.toString())
  }

  // Column Visibility
  function parseTradesVisibleColsFromUrl<T extends string>(allFields: T[]): T[] {
    const url = new URL(window.location.href)
    const colsParam = url.searchParams.get(`${windowKey}_trades_cols`)
    if (!colsParam) return allFields
    const fromUrl = colsParam.split('-and-').map(s => s.trim()).filter(Boolean) as T[]
    const valid = new Set(allFields)
    const filtered = fromUrl.filter(c => valid.has(c))
    return filtered.length ? filtered : allFields
  }

  function writeTradesVisibleColsToUrl<T extends string>(cols: T[]) {
    const url = new URL(window.location.href)
    url.searchParams.set(`${windowKey}_trades_cols`, cols.join('-and-'))
    window.history.replaceState({}, '', url.toString())
  }

  // Column Renames
  function parseColumnRenamesFromUrl<T extends string>(): Partial<Record<T, string>> {
    const url = new URL(window.location.href)
    const param = url.searchParams.get(`${windowKey}_trades_col_renames`)
    if (!param) return {}
    try {
      const pairs = param.split('-and-')
      const renames: any = {}
      pairs.forEach(pair => {
        const [field, ...rest] = pair.split(':')
        if (field && rest.length) {
          renames[field as T] = decodeURIComponent(rest.join(':'))
        }
      })
      return renames
    } catch {
      return {}
    }
  }

  function writeColumnRenamesToUrl<T extends string>(renames: Partial<Record<T, string>>) {
    const url = new URL(window.location.href)
    const pairs = Object.entries(renames)
      .filter(([_, name]) => name && (name as string).trim())
      .map(([field, name]) => `${field}:${encodeURIComponent(name as string)}`)
      .join('-and-')
    if (pairs) {
      url.searchParams.set(`${windowKey}_trades_col_renames`, pairs)
    } else {
      url.searchParams.delete(`${windowKey}_trades_col_renames`)
    }
    window.history.replaceState({}, '', url.toString())
  }

  // Filters
  function parseFiltersFromUrl(): Record<string, any> {
    const url = new URL(window.location.href)
    const filters: Record<string, any> = {}

    // Account filter (universal)
    const accountId = url.searchParams.get('all_cts_clientId')
    if (accountId) filters.legal_entity = accountId

    // Expiry date filter (universal)
    const expiryDate = url.searchParams.get('expiryDate')
    if (expiryDate) filters.expiryDate = expiryDate

    // Strike price filter (universal)
    const strikePrice = url.searchParams.get('strikePrice')
    if (strikePrice) filters.strikePrice = strikePrice

    // Symbol tags filter
    const symbolParam = url.searchParams.get(`${windowKey}_all_cts_fi`)
    if (symbolParam) {
      filters.symbol = symbolParam.split(',').filter(Boolean)
    }

    // Asset filter
    const assetParam = url.searchParams.get(`${windowKey}_all_cts_asset`)
    if (assetParam) filters.asset = assetParam

    // Quantity filter
    const qtyParam = url.searchParams.get(`${windowKey}_all_cts_qty`)
    if (qtyParam) {
      const qty = parseFloat(qtyParam)
      if (!isNaN(qty)) filters.quantity = qty
    }

    // Accounting quantity filter
    const accQtyParam = url.searchParams.get(`${windowKey}_all_cts_accounting_qty`)
    if (accQtyParam) {
      const qty = parseFloat(accQtyParam)
      if (!isNaN(qty)) filters.accounting_quantity = qty
    }

    return filters
  }

  return {
    // Sort
    writeTradesSortToUrl,
    parseTradesSortFromUrl,
    // App Name
    parseAppNameFromUrl,
    writeAppNameToUrl,
    // Columns
    parseTradesVisibleColsFromUrl,
    writeTradesVisibleColsToUrl,
    parseColumnRenamesFromUrl,
    writeColumnRenamesToUrl,
    // Filters
    parseFiltersFromUrl
  }
}
