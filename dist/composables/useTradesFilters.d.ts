import { Ref } from 'vue';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
export type FilterField = 'legal_entity' | 'symbol' | 'assetCategory' | 'quantity' | 'contract_quantity' | 'accounting_quantity';
export interface ActiveFilter {
    field: FilterField;
    value: string;
}
export declare function useTradesFilters(windowProp: string | null, tabulator: Ref<Tabulator | null>, isTabulatorReady: Ref<boolean>, eventBus: any, extractTagsFromSymbol: (symbol: string) => string[]): {
    activeFilters: Ref<{
        field: FilterField;
        value: string;
    }[], ActiveFilter[] | {
        field: FilterField;
        value: string;
    }[]>;
    symbolTagFilters: Ref<string[], string[]>;
    accountFilter: Ref<string | null, string | null>;
    assetFilter: Ref<string | null, string | null>;
    quantityFilter: Ref<number | null, number | null>;
    contractQuantityFilter: Ref<number | null, number | null>;
    accountingQuantityFilter: Ref<number | null, number | null>;
    totalTrades: Ref<number, number>;
    handleCellFilterClick: (field: FilterField, value: string) => void;
    updateFilters: () => void;
    clearFilter: (field: FilterField) => void;
    clearAllFilters: () => void;
    handleExternalAccountFilter: (payload: {
        accountId: string | null;
        source: string;
    }) => void;
    handleExternalSymbolFilter: (payload: {
        symbolTags: string[];
        source: string;
    }) => void;
    handleExternalAssetFilter: (payload: {
        asset: string | null;
        source: string;
    }) => void;
    handleExternalQuantityFilter: (payload: {
        quantity: number | null;
        source: string;
        accountingQuantity?: number | null;
    }) => void;
    initializeFiltersFromUrl: (urlFilters: any) => void;
};
