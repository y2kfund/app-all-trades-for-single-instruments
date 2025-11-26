import { Ref } from 'vue';
export type TradesColumnField = 'legal_entity' | 'symbol' | 'expiryDate' | 'strikePrice' | 'buySell' | 'openCloseIndicator' | 'assetCategory' | 'tradeDate' | 'settleDateTarget' | 'contract_quantity' | 'accounting_quantity' | 'tradePrice' | 'tradeMoney' | 'netCash' | 'mtmPnl' | 'fifoPnlRealized' | 'ibCommission' | 'closePrice';
export interface ColumnOption {
    field: TradesColumnField;
    label: string;
}
export declare function useTradesColumns(handleCellFilterClick: (field: any, value: string) => void, symbolTagFilters: Ref<string[]>, tradesVisibleCols: Ref<TradesColumnField[]>, columnRenames: Ref<Record<string, string>>, createFetchedAtContextMenu: () => any): {
    columns: import('vue').ComputedRef<any[]>;
    allTradesColumnOptions: ColumnOption[];
    getColLabel: (field: TradesColumnField) => string;
};
