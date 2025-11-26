import { Ref } from 'vue';
export type OrdersColumnField = 'select' | 'legal_entity' | 'symbol' | 'expiryDate' | 'strikePrice' | 'buySell' | 'openCloseIndicator' | 'assetCategory' | 'orderTime' | 'settleDateTarget' | 'quantity' | 'tradePrice' | 'tradeMoney' | 'netCash' | 'mtmPnl' | 'fifoPnlRealized' | 'ibCommission' | 'closePrice';
export interface ColumnOption {
    field: OrdersColumnField;
    label: string;
}
export declare function useOrdersColumns(handleCellFilterClick: (field: any, value: string) => void, symbolTagFilters: Ref<string[]>, ordersVisibleCols: Ref<OrdersColumnField[]>, columnRenames: Ref<Record<string, string>>, createFetchedAtContextMenu: () => any, selectedOrderIds: Ref<Set<string>>, onOrderSelectionChange: (orderId: string, selected: boolean) => void, attachedOrderIds?: Ref<Set<string>>): {
    columns: import('vue').ComputedRef<any[]>;
    allOrdersColumnOptions: ColumnOption[];
    getColLabel: (field: OrdersColumnField) => string;
};
