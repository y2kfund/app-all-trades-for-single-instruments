export function useUrlSync(windowProp: string | null) {
  const windowKey = windowProp || 'default'

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
  function parseFiltersFromUrl(): {
    legal_entity?: string
    symbol?: string[]
    asset?: string
    quantity?: number
    accounting_quantity?: number
  } {
    const url = new URL(window.location.href)
    const account = url.searchParams.get(`${windowKey}_all_cts_clientId`) || undefined
    const symbolParam = url.searchParams.get(`${windowKey}_all_cts_fi`) || undefined
    const symbol = symbolParam ? symbolParam.split(',').filter(Boolean) : undefined
    const asset = url.searchParams.get(`${windowKey}_all_cts_asset`) || undefined
    const qtyParam = url.searchParams.get(`${windowKey}_all_cts_qty`) || undefined
    const quantity = qtyParam ? Number(qtyParam) : undefined
    const accQtyParam = url.searchParams.get(`${windowKey}_all_cts_accounting_qty`) || undefined
    const accounting_quantity = accQtyParam ? Number(accQtyParam) : undefined
    return { legal_entity: account, symbol, asset, quantity, accounting_quantity }
  }

  function writeFilterToUrl(key: string, value: string | null) {
    const url = new URL(window.location.href)
    const paramName = `${windowKey}_${key}`
    if (value) {
      url.searchParams.set(paramName, value)
    } else {
      url.searchParams.delete(paramName)
    }
    window.history.replaceState({}, '', url.toString())
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
    parseFiltersFromUrl,
    writeFilterToUrl
  }
}
