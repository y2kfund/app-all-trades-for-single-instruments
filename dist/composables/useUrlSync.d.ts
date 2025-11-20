export declare function useUrlSync(windowProp: string | null): {
    writeTradesSortToUrl: (sortField: string, sortDir: string) => void;
    parseTradesSortFromUrl: () => {
        field: string;
        dir: "asc" | "desc";
    } | null;
    parseAppNameFromUrl: () => string;
    writeAppNameToUrl: (name: string) => void;
    parseTradesVisibleColsFromUrl: <T extends string>(allFields: T[]) => T[];
    writeTradesVisibleColsToUrl: <T extends string>(cols: T[]) => void;
    parseColumnRenamesFromUrl: <T extends string>() => Partial<Record<T, string>>;
    writeColumnRenamesToUrl: <T extends string>(renames: Partial<Record<T, string>>) => void;
    parseFiltersFromUrl: () => {
        legal_entity?: string;
        symbol?: string[];
        asset?: string;
        quantity?: number;
        accounting_quantity?: number;
    };
    writeFilterToUrl: (key: string, value: string | null) => void;
};
