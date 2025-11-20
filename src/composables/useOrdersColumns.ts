import { computed } from 'vue'
import type { Ref } from 'vue'
import flatpickr from 'flatpickr'
import { formatCurrency, formatNumber, parseTradeDate, extractTagsFromSymbol } from '../utils/formatters'

// Define all possible column field names for orders
export type OrdersColumnField =
  | 'legal_entity'
  | 'symbol'
  | 'buySell'
  | 'openCloseIndicator'
  | 'assetCategory'
  | 'orderTime'
  | 'settleDateTarget'
  | 'quantity'
  | 'tradePrice'
  | 'tradeMoney'
  | 'netCash'
  | 'mtmPnl'
  | 'fifoPnlRealized'
  | 'ibCommission'
  | 'closePrice'

export interface ColumnOption {
  field: OrdersColumnField
  label: string
}

export function useOrdersColumns(
  handleCellFilterClick: (field: any, value: string) => void,
  symbolTagFilters: Ref<string[]>,
  ordersVisibleCols: Ref<OrdersColumnField[]>,
  columnRenames: Ref<Record<string, string>>,
  createFetchedAtContextMenu: () => any
) {
  // All available column options
  const allOrdersColumnOptions: ColumnOption[] = [
    { field: 'legal_entity', label: 'Account' },
    { field: 'symbol', label: 'Financial Instrument' },
    { field: 'buySell', label: 'Side' },
    { field: 'openCloseIndicator', label: 'Open/Close' },
    { field: 'assetCategory', label: 'Asset Class' },
    { field: 'orderTime', label: 'Order Date' },
    { field: 'settleDateTarget', label: 'Settlement Date Target' },
    { field: 'quantity', label: 'Quantity' },
    { field: 'tradePrice', label: 'Trade Price' },
    { field: 'tradeMoney', label: 'Trade Amount' },
    { field: 'netCash', label: 'Net Cash' },
    { field: 'mtmPnl', label: 'MTM P&L' },
    { field: 'fifoPnlRealized', label: 'FIFO P&L Realized' },
    { field: 'ibCommission', label: 'Commission' },
    { field: 'closePrice', label: 'Close Price' }
  ]

  function getColLabel(field: OrdersColumnField): string {
    if (columnRenames.value[field]) {
      return columnRenames.value[field]
    }
    const opt = allOrdersColumnOptions.find(c => c.field === field)
    return opt ? opt.label : field
  }

  // Date range filter header with flatpickr
  function createDateRangeHeaderFilter() {
    return function(cell: any, onRendered: any, success: any) {
      const container = document.createElement('div')
      container.style.position = 'relative'
      const input = document.createElement('input')
      input.type = 'text'
      input.placeholder = 'Select date range'
      input.style.width = '100%'
      input.style.boxSizing = 'border-box'
      input.style.paddingRight = '28px'
      container.appendChild(input)

      const clearBtn = document.createElement('button')
      clearBtn.type = 'button'
      clearBtn.innerText = '✕'
      clearBtn.title = 'Clear'
      clearBtn.style.position = 'absolute'
      clearBtn.style.right = '6px'
      clearBtn.style.top = '50%'
      clearBtn.style.transform = 'translateY(-50%)'
      clearBtn.style.border = 'none'
      clearBtn.style.background = 'transparent'
      clearBtn.style.cursor = 'pointer'
      clearBtn.style.fontSize = '12px'
      clearBtn.style.padding = '2px 6px'
      clearBtn.style.display = 'none'
      clearBtn.style.color = '#6c757d'
      clearBtn.style.borderRadius = '3px'
      clearBtn.addEventListener('mouseenter', () => clearBtn.style.opacity = '1')
      clearBtn.addEventListener('mouseleave', () => clearBtn.style.opacity = '0.9')
      container.appendChild(clearBtn)

      let fp: any = null

      function updateClearVisibility() {
        const hasValue = !!input.value && input.value.trim() !== ''
        if (hasValue && container.matches(':hover')) {
          clearBtn.style.display = 'block'
        } else {
          clearBtn.style.display = 'none'
        }
      }

      container.addEventListener('mouseenter', updateClearVisibility)
      container.addEventListener('mouseleave', updateClearVisibility)

      onRendered(() => {
        try {
          fp = flatpickr(input, {
            mode: 'range',
            dateFormat: 'Y-m-d',
            allowInput: true,
            onChange: (selectedDates: Date[]) => {
              if (!selectedDates || selectedDates.length === 0) {
                success({ min: '', max: '' })
                input.value = ''
                updateClearVisibility()
                return
              }
              const formatLocalDate = (date: Date) => {
                const year = date.getFullYear()
                const month = String(date.getMonth() + 1).padStart(2, '0')
                const day = String(date.getDate()).padStart(2, '0')
                return `${year}-${month}-${day}`
              }
              const min = selectedDates[0] ? formatLocalDate(selectedDates[0]) : ''
              const max = selectedDates[1] ? formatLocalDate(selectedDates[1]) : ''
              input.value = max ? `${min} to ${max}` : min
              success({ min: min || '', max: max || '' })
              updateClearVisibility()
            },
            onClose: () => {
              updateClearVisibility()
            }
          })
        } catch (e) {
          input.addEventListener('change', () => {
            const val = input.value || ''
            const parts = val.split(' to ').map(s => s.trim())
            success({ min: parts[0] || '', max: parts[1] || '' })
            updateClearVisibility()
          })
        }
      })

      clearBtn.addEventListener('click', (ev) => {
        ev.preventDefault()
        ev.stopPropagation()
        if (fp) {
          try { fp.clear() } catch (err) {}
        }
        input.value = ''
        success({ min: '', max: '' })
        updateClearVisibility()
      })

      input.addEventListener('input', updateClearVisibility)

      return container
    }
  }

  function dateRangeFilterFunc(headerValue: any, rowValue: any): boolean {
    if (!headerValue || (!headerValue.min && !headerValue.max)) return true
    const ts = parseTradeDate(rowValue)
    if (!ts) return false
    const rowDate = new Date(ts)
    const rowDateStr = `${rowDate.getFullYear()}-${String(rowDate.getMonth() + 1).padStart(2, '0')}-${String(rowDate.getDate()).padStart(2, '0')}`
    if (headerValue.min) {
      if (rowDateStr < headerValue.min) return false
    }
    if (headerValue.max) {
      if (rowDateStr > headerValue.max) return false
    }
    return true
  }

  function dateSorterFunc(a: any, b: any, dir: any, rowA: any, rowB: any): number {
    const ta = parseTradeDate(rowA.getData().orderTime) || 0
    const tb = parseTradeDate(rowB.getData().orderTime) || 0
    return ta - tb
  }

  function dateFormatter(cell: any): string {
    const val = cell.getValue()
    if (!val) return ''
    const m = /^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/.exec(String(val).trim())
    let dt: Date
    if (m) {
      const day = Number(m[1])
      const month = Number(m[2]) - 1
      let year = Number(m[3])
      if (year < 100) year += 2000
      dt = new Date(year, month, day)
    } else {
      dt = new Date(val)
      if (isNaN(dt.getTime())) return String(val)
    }
    return dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  function numericComparisonFilter(headerValue: any, rowValue: any): boolean {
    if (!headerValue) return true
    const s = String(headerValue).trim()
    const opMatch = s.match(/^(<=|>=|=|!=|<|>)/)
    let op = '='
    let numStr = s
    if (opMatch) {
      op = opMatch[1]
      numStr = s.slice(op.length).trim()
    }
    const numVal = parseFloat(numStr)
    if (isNaN(numVal)) return false
    const val = parseFloat(rowValue) || 0
    switch (op) {
      case '=': return val === numVal
      case '!=': return val !== numVal
      case '<': return val < numVal
      case '<=': return val <= numVal
      case '>': return val > numVal
      case '>=': return val >= numVal
      default: return false
    }
  }

  // Create all column definitions
  const columns = computed(() => {
    const columnMap = new Map<OrdersColumnField, any>([
      ['legal_entity', {
        title: getColLabel('legal_entity'),
        field: 'legal_entity',
        minWidth: 120,
        frozen: true,
        sorter: 'string',
        headerFilter: 'input',
        headerFilterPlaceholder: 'Filter',
        headerFilterFunc: (headerValue: any, rowValue: any) => {
          if (!headerValue) return true
          const accountVal = (typeof rowValue === 'object' && rowValue !== null)
            ? (rowValue.name || rowValue.id || '')
            : (rowValue || '')
          return String(accountVal).toLowerCase().includes(String(headerValue).toLowerCase())
        },
        formatter: (cell: any) => {
          const value = cell.getValue()
          if (typeof value === 'object' && value !== null) {
            return value.name || value.id || ''
          }
          return value ? `<span style="font-weight: 500;">${value}</span>` : '<span style="color: #6c757d; font-style: italic;">N/A</span>'
        },
        cellClick: (e: any, cell: any) => {
          const value = cell.getValue()
          const accountName = typeof value === 'object' && value !== null ? (value.name || value.id) : value
          handleCellFilterClick('legal_entity', accountName)
        },
        contextMenu: createFetchedAtContextMenu()
      }],
      ['symbol', {
        title: getColLabel('symbol'),
        field: 'symbol',
        minWidth: 120,
        frozen: true,
        sorter: 'string',
        headerFilter: 'input',
        headerFilterPlaceholder: 'Filter',
        headerFilterFunc: (headerValue: any, rowValue: any) => {
          if (!headerValue) return true
          const symbol = String(rowValue || '')
          return symbol.toLowerCase().includes(String(headerValue).toLowerCase())
        },
        formatter: (cell: any) => {
          const symbol = cell.getValue()
          if (!symbol) return '<span style="color: #6c757d; font-style: italic;">N/A</span>'
          const tags = extractTagsFromSymbol(symbol)
          const selectedTags = symbolTagFilters.value
          return tags.map(tag => {
            const isSelected = selectedTags.includes(tag)
            return `<span class="fi-tag" data-tag="${tag}">${tag}</span>`
          }).join(' ')
        },
        cellClick: (e: any, cell: any) => {
          const target = e.target as HTMLElement
          if (target.classList.contains('fi-tag')) {
            const clickedTag = target.getAttribute('data-tag')
            if (clickedTag) {
              handleCellFilterClick('symbol', clickedTag)
            }
          }
        },
        contextMenu: createFetchedAtContextMenu()
      }],
      ['buySell', {
        title: getColLabel('buySell'),
        field: 'buySell',
        minWidth: 80,
        sorter: 'string',
        headerFilter: 'input',
        headerFilterPlaceholder: 'Filter',
        headerFilterFunc: (headerValue: any, rowValue: any) => {
          if (!headerValue) return true
          const v = String(rowValue || '')
          return v.toLowerCase().includes(String(headerValue).toLowerCase())
        },
        formatter: (cell: any) => {
          const value = cell.getValue()
          if (value === 'BUY') {
            return `<span style="color: #28a745; font-weight: bold;">BUY</span>`
          }
          if (value === 'SELL') {
            return `<span style="color: #dc3545; font-weight: bold;">SELL</span>`
          }
          return value
        },
        contextMenu: createFetchedAtContextMenu()
      }],
      ['openCloseIndicator', {
        title: getColLabel('openCloseIndicator'),
        field: 'openCloseIndicator',
        minWidth: 100,
        sorter: 'string',
        headerFilter: 'input',
        headerFilterPlaceholder: 'Filter',
        headerFilterFunc: (headerValue: any, rowValue: any) => {
          if (!headerValue) return true
          const hv = String(headerValue).toLowerCase()
          const raw = String(rowValue ?? '').trim()
          let display = raw
          if (raw.toUpperCase() === 'O') display = 'OPEN'
          if (raw.toUpperCase() === 'C') display = 'CLOSE'
          return display.toLowerCase().includes(hv) || raw.toLowerCase().includes(hv)
        },
        formatter: (cell: any) => {
          const value = cell.getValue()
          if (value === 'O') {
            return `<span style="color: #17a2b8; font-weight: bold;">OPEN</span>`
          }
          if (value === 'C') {
            return `<span style="color: #6f42c1; font-weight: bold;">CLOSE</span>`
          }
          return value
        },
        contextMenu: createFetchedAtContextMenu()
      }],
      ['assetCategory', {
        title: getColLabel('assetCategory'),
        field: 'assetCategory',
        minWidth: 120,
        sorter: 'string',
        headerFilter: 'input',
        headerFilterPlaceholder: 'Filter',
        headerFilterFunc: (headerValue: any, rowValue: any) => {
          if (!headerValue) return true
          const assetVal = (typeof rowValue === 'object' && rowValue !== null)
            ? (rowValue.name || rowValue.id || '')
            : (rowValue || '')
          return String(assetVal).toLowerCase().includes(String(headerValue).toLowerCase())
        },
        cellClick: (e: any, cell: any) => {
          const value = cell.getValue()
          const assetName = typeof value === 'object' && value !== null ? (value.name || value.id) : value
          if (assetName) handleCellFilterClick('assetCategory', assetName)
        },
        contextMenu: createFetchedAtContextMenu()
      }],
      ['orderTime', {
        title: getColLabel('orderTime'),
        field: 'orderTime',
        minWidth: 120,
        sorter: 'date',
        headerFilter: createDateRangeHeaderFilter(),
        headerFilterFunc: dateRangeFilterFunc,
        sorterFunc: dateSorterFunc,
        formatter: dateFormatter,
        contextMenu: createFetchedAtContextMenu()
      }],
      ['settleDateTarget', {
        title: getColLabel('settleDateTarget'),
        field: 'settleDateTarget',
        minWidth: 140,
        sorter: 'date',
        headerFilter: createDateRangeHeaderFilter(),
        headerFilterFunc: dateRangeFilterFunc,
        // Add custom sorter function for text date
        sorterFunc: (a: any, b: any, dir: any, rowA: any, rowB: any) => {
          // Parse as YYYY-MM-DD or fallback to Date
          const parse = (val: string) => {
            if (!val) return 0
            const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(val.trim())
            if (m) {
              return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])).getTime()
            }
            const d = new Date(val)
            return isNaN(d.getTime()) ? 0 : d.getTime()
          }
          const ta = parse(rowA.getData().settleDateTarget)
          const tb = parse(rowB.getData().settleDateTarget)
          return ta - tb
        },
        formatter: dateFormatter,
        contextMenu: createFetchedAtContextMenu()
      }],
      ['quantity', {
        title: getColLabel('quantity'),
        field: 'quantity',
        minWidth: 140,
        hozAlign: 'right',
        sorter: 'number',
        headerFilter: 'input',
        headerFilterPlaceholder: 'e.g. >100',
        headerFilterFunc: numericComparisonFilter,
        formatter: (cell: any) => {
          const value = cell.getValue()
          if (value === null || value === undefined) return '-'
          return formatNumber(value)
        },
        cellClick: (e: any, cell: any) => {
          const value = cell.getValue()
          if (value !== null && value !== undefined) {
            handleCellFilterClick('quantity', String(value))
          }
        },
        bottomCalc: 'sum',
        bottomCalcFormatter: (cell: any) => formatNumber(cell.getValue()),
        contextMenu: createFetchedAtContextMenu()
      }],
      ['tradePrice', {
        title: getColLabel('tradePrice'),
        field: 'tradePrice',
        minWidth: 120,
        hozAlign: 'right',
        sorter: 'number',
        headerFilter: 'input',
        headerFilterPlaceholder: 'e.g. >10',
        headerFilterFunc: numericComparisonFilter,
        formatter: (cell: any) => formatCurrency(parseFloat(cell.getValue()) || 0),
        contextMenu: createFetchedAtContextMenu()
      }],
      ['tradeMoney', {
        title: getColLabel('tradeMoney'),
        field: 'tradeMoney',
        minWidth: 120,
        hozAlign: 'right',
        sorter: 'number',
        headerFilter: 'input',
        headerFilterPlaceholder: 'e.g. >1000',
        headerFilterFunc: numericComparisonFilter,
        formatter: (cell: any) => formatCurrency(parseFloat(cell.getValue()) || 0),
        contextMenu: createFetchedAtContextMenu()
      }],
      ['netCash', {
        title: getColLabel('netCash'),
        field: 'netCash',
        minWidth: 120,
        hozAlign: 'right',
        sorter: 'number',
        headerFilter: 'input',
        headerFilterPlaceholder: 'e.g. >0',
        headerFilterFunc: numericComparisonFilter,
        formatter: (cell: any) => formatCurrency(parseFloat(cell.getValue()) || 0),
        contextMenu: createFetchedAtContextMenu()
      }],
      ['mtmPnl', {
        title: getColLabel('mtmPnl'),
        field: 'mtmPnl',
        minWidth: 80,
        hozAlign: 'right',
        sorter: 'number',
        headerFilter: 'input',
        headerFilterPlaceholder: 'Filter',
        headerFilterFunc: numericComparisonFilter,
        formatter: (cell: any) => formatCurrency(parseFloat(cell.getValue()) || 0),
        contextMenu: createFetchedAtContextMenu()
      }],
      ['fifoPnlRealized', {
        title: getColLabel('fifoPnlRealized'),
        field: 'fifoPnlRealized',
        minWidth: 80,
        hozAlign: 'right',
        sorter: 'number',
        headerFilter: 'input',
        headerFilterPlaceholder: 'Filter',
        headerFilterFunc: numericComparisonFilter,
        mutator: (value: any) => {
          const n = parseFloat(value)
          return isNaN(n) ? 0 : n
        },
        formatter: (cell: any) => {
          return `<span style="font-weight: 600;">${formatCurrency(parseFloat(cell.getValue()) || 0)}</span>`
        },
        bottomCalc: 'sum',
        bottomCalcFormatter: (cell: any) => formatCurrency(cell.getValue() || 0),
        contextMenu: createFetchedAtContextMenu()
      }],
      ['ibCommission', {
        title: getColLabel('ibCommission'),
        field: 'ibCommission',
        minWidth: 120,
        hozAlign: 'right',
        sorter: 'number',
        headerFilter: 'input',
        headerFilterPlaceholder: 'Filter',
        headerFilterFunc: numericComparisonFilter,
        formatter: (cell: any) => {
          return `<span style="color: #dc3545; font-weight: 600;">${formatCurrency(parseFloat(cell.getValue()) || 0)}</span>`
        },
        bottomCalc: 'sum',
        bottomCalcFormatter: (cell: any) => formatCurrency(cell.getValue()),
        contextMenu: createFetchedAtContextMenu()
      }],
      ['closePrice', {
        title: getColLabel('closePrice'),
        field: 'closePrice',
        minWidth: 120,
        hozAlign: 'right',
        sorter: 'number',
        headerFilter: 'input',
        headerFilterPlaceholder: 'Filter',
        headerFilterFunc: numericComparisonFilter,
        formatter: (cell: any) => formatCurrency(parseFloat(cell.getValue()) || 0),
        contextMenu: createFetchedAtContextMenu()
      }]
    ])

    // Return columns in the order specified by ordersVisibleCols
    return ordersVisibleCols.value
      .map(field => columnMap.get(field))
      .filter(Boolean) as any[]
  })

  return {
    columns,
    allOrdersColumnOptions,
    getColLabel
  }
}