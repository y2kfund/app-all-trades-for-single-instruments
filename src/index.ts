import Trades from './Trades.vue'

export { Trades }
export default Trades

// Props interface
export interface TradesProps {
  accountId: string
  onRowClick?: (row: any) => void
  userId?: string | null    // Current user ID for access control
  window?: string | null    // Current window context for access control
  symbolRoot?: string       // Root symbol to filter trades by
}