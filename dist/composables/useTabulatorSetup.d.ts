import { Ref } from 'vue';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
export declare function useTabulatorSetup(tableDiv: Ref<HTMLElement | null>, columns: Ref<any[]>, queryData: Ref<any[] | undefined>, queryIsSuccess: Ref<boolean>, windowKey: string, updateFilters: () => void, totalTrades: Ref<number>, emit: (event: string, data?: any) => void, onRowClick?: (data: any) => void): {
    tabulator: Ref<{
        columnManager: any;
        rowManager: any;
        footerManager: any;
        browser: string;
        browserSlow: boolean;
        modules: any;
        options: {
            height?: string | number | false | undefined | undefined;
            maxHeight?: string | number | undefined | undefined;
            minHeight?: string | number | undefined | undefined;
            renderVertical?: import('tabulator-tables').RenderMode | undefined;
            renderHorizontal?: import('tabulator-tables').RenderMode | undefined;
            rowHeight?: number | undefined;
            renderVerticalBuffer?: boolean | number | undefined | undefined;
            placeholder?: string | HTMLElement | ((this: import('tabulator-tables').Tabulator | Tabulator) => string) | undefined;
            placeholderHeaderFilter?: string | HTMLElement | ((this: import('tabulator-tables').Tabulator | Tabulator) => string) | undefined;
            footerElement?: string | HTMLElement | undefined;
            keybindings?: false | {
                navPrev?: string | boolean | undefined | undefined;
                navNext?: string | boolean | undefined | undefined;
                navLeft?: string | boolean | undefined | undefined;
                navRight?: string | boolean | undefined | undefined;
                navUp?: string | boolean | undefined | undefined;
                navDown?: string | boolean | undefined | undefined;
                undo?: string | boolean | undefined | undefined;
                redo?: string | boolean | undefined | undefined;
                scrollPageUp?: string | boolean | undefined | undefined;
                scrollPageDown?: string | boolean | undefined | undefined;
                scrollToStart?: string | boolean | undefined | undefined;
                scrollToEnd?: string | boolean | undefined | undefined;
                copyToClipboard?: string | boolean | undefined | undefined;
            } | undefined;
            reactiveData?: boolean | undefined | undefined;
            autoResize?: boolean | undefined | undefined;
            invalidOptionWarnings?: boolean | undefined | undefined;
            validationMode?: "blocking" | "highlight" | "manual" | undefined | undefined;
            textDirection?: import('tabulator-tables').TextDirection | undefined;
            rowHeader?: boolean | {
                formatter?: string | undefined;
                field?: string | undefined;
                headerSort?: boolean | undefined;
                hozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                headerHozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                resizable?: boolean | undefined;
                frozen?: boolean | undefined;
                titleFormatter?: string | undefined;
                cellClick?: ((e: MouseEvent, cell: import('tabulator-tables').CellComponent) => void) | undefined;
                minWidth?: number | undefined;
                width?: number | undefined;
                rowHandle?: boolean | undefined;
            } | undefined;
            editorEmptyValue?: any;
            editorEmptyValueFunc?: ((value: unknown) => boolean) | undefined;
            rowContextMenu?: ((e: MouseEvent, component: import('tabulator-tables').RowComponent) => import('tabulator-tables').MenuObject<import('tabulator-tables').RowComponent> | false | any[]) | ({
                label: string | HTMLElement | ((component: import('tabulator-tables').RowComponent) => string | HTMLElement);
                action?: ((e: any, component: import('tabulator-tables').RowComponent) => any) | undefined;
                disabled?: boolean | ((component: import('tabulator-tables').RowComponent) => boolean) | undefined;
                menu?: /*elided*/ any[] | undefined;
            } | {
                separator?: boolean | undefined | undefined;
            })[] | undefined;
            rowClickMenu?: ((e: MouseEvent, component: import('tabulator-tables').RowComponent) => import('tabulator-tables').MenuObject<import('tabulator-tables').RowComponent> | false | any[]) | ({
                label: string | HTMLElement | ((component: import('tabulator-tables').RowComponent) => string | HTMLElement);
                action?: ((e: any, component: import('tabulator-tables').RowComponent) => any) | undefined;
                disabled?: boolean | ((component: import('tabulator-tables').RowComponent) => boolean) | undefined;
                menu?: /*elided*/ any[] | undefined;
            } | {
                separator?: boolean | undefined | undefined;
            })[] | undefined;
            rowDblClickMenu?: ((e: MouseEvent, component: import('tabulator-tables').RowComponent) => import('tabulator-tables').MenuObject<import('tabulator-tables').RowComponent> | false | any[]) | ({
                label: string | HTMLElement | ((component: import('tabulator-tables').RowComponent) => string | HTMLElement);
                action?: ((e: any, component: import('tabulator-tables').RowComponent) => any) | undefined;
                disabled?: boolean | ((component: import('tabulator-tables').RowComponent) => boolean) | undefined;
                menu?: /*elided*/ any[] | undefined;
            } | {
                separator?: boolean | undefined | undefined;
            })[] | undefined;
            groupClickMenu?: ((e: MouseEvent, component: import('tabulator-tables').GroupComponent) => import('tabulator-tables').MenuObject<import('tabulator-tables').GroupComponent> | false | any[]) | ({
                separator?: boolean | undefined | undefined;
            } | {
                label: string | HTMLElement | ((component: import('tabulator-tables').GroupComponent) => string | HTMLElement);
                action?: ((e: any, component: import('tabulator-tables').GroupComponent) => any) | undefined;
                disabled?: boolean | ((component: import('tabulator-tables').GroupComponent) => boolean) | undefined;
                menu?: /*elided*/ any[] | undefined;
            })[] | undefined;
            groupDblClickMenu?: ((e: MouseEvent, component: import('tabulator-tables').GroupComponent) => import('tabulator-tables').MenuObject<import('tabulator-tables').GroupComponent> | false | any[]) | ({
                separator?: boolean | undefined | undefined;
            } | {
                label: string | HTMLElement | ((component: import('tabulator-tables').GroupComponent) => string | HTMLElement);
                action?: ((e: any, component: import('tabulator-tables').GroupComponent) => any) | undefined;
                disabled?: boolean | ((component: import('tabulator-tables').GroupComponent) => boolean) | undefined;
                menu?: /*elided*/ any[] | undefined;
            })[] | undefined;
            groupContextMenu?: {
                label: string | HTMLElement | ((component: import('tabulator-tables').GroupComponent) => string | HTMLElement);
                action?: ((e: any, component: import('tabulator-tables').GroupComponent) => any) | undefined;
                disabled?: boolean | ((component: import('tabulator-tables').GroupComponent) => boolean) | undefined;
                menu?: /*elided*/ any[] | undefined;
            }[] | undefined;
            popupContainer?: (boolean | string | HTMLElement) | undefined;
            groupClickPopup?: string | undefined;
            groupContextPopup?: string | undefined;
            groupDblPopup?: string | undefined;
            groupDblClickPopup?: string | undefined;
            rowClickPopup?: string | undefined;
            rowContextPopup?: string | undefined;
            rowDblClickPopup?: string | undefined;
            history?: boolean | undefined | undefined;
            locale?: boolean | string | undefined | undefined;
            langs?: any;
            downloadEncoder?: ((fileContents: any, mimeType: string) => Blob | false) | undefined | undefined;
            downloadConfig?: {
                columnHeaders?: boolean | undefined | undefined;
                columnGroups?: boolean | undefined | undefined;
                rowGroups?: boolean | undefined | undefined;
                columnCalcs?: boolean | undefined | undefined;
                dataTree?: boolean | undefined | undefined;
                rowHeaders?: boolean | undefined | undefined;
                formatCells?: boolean | undefined | undefined;
            } | undefined;
            downloadRowRange?: import('tabulator-tables').RowRangeLookup | undefined;
            downloadDataFormatter?: ((data: any) => any) | undefined;
            downloadReady?: ((fileContents: any, blob: Blob) => Blob | false) | undefined;
            columns?: {
                hozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                headerHozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                vertAlign?: import('tabulator-tables').VerticalAlign | undefined;
                minWidth?: number | undefined | undefined;
                widthGrow?: number | undefined | undefined;
                widthShrink?: number | undefined | undefined;
                resizable?: true | false | "header" | "cell" | undefined | undefined;
                frozen?: boolean | undefined | undefined;
                responsive?: number | undefined | undefined;
                tooltip?: string | import('tabulator-tables').GlobalTooltipOption | undefined;
                cssClass?: string | undefined | undefined;
                rowHandle?: boolean | undefined | undefined;
                hideInHtml?: boolean | undefined | undefined;
                sorter?: "string" | "number" | "alphanum" | "boolean" | "exists" | "date" | "time" | "datetime" | "array" | ((a: any, b: any, aRow: import('tabulator-tables').RowComponent, bRow: import('tabulator-tables').RowComponent, column: import('tabulator-tables').ColumnComponent, dir: import('tabulator-tables').SortDirection, sorterParams: {}) => number) | undefined | undefined;
                sorterParams?: import('tabulator-tables').ColumnSorterParamLookupFunction | {
                    format?: string | undefined | undefined;
                    locale?: string | boolean | undefined | undefined;
                    alignEmptyValues?: "top" | "bottom" | undefined | undefined;
                    type?: "length" | "sum" | "max" | "min" | "avg" | undefined | undefined;
                } | undefined;
                formatter?: import('tabulator-tables').Formatter | undefined;
                formatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                variableHeight?: boolean | undefined | undefined;
                editable?: boolean | ((cell: import('tabulator-tables').CellComponent) => boolean) | undefined | undefined;
                editor?: import('tabulator-tables').Editor | undefined;
                editorParams?: ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    step?: number | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    tristate?: boolean | undefined | undefined;
                    indeterminateValue?: string | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    values?: string | true | any[] | string[] | import('tabulator-tables').JSONRecord | {
                        label: string;
                        value: string | number | boolean;
                    }[] | undefined;
                    valuesURL?: string | undefined;
                    valuesLookup?: import('tabulator-tables').RowRangeLookup | undefined;
                    valuesLookupField?: string | undefined;
                    clearable?: boolean | undefined;
                    itemFormatter?: ((label: string, value: string, item: any, element: HTMLElement) => string) | undefined | undefined;
                    sort?: import('tabulator-tables').SortDirection | undefined;
                    emptyValue?: any;
                    maxWidth?: boolean | undefined;
                    placeholderLoading?: string | undefined;
                    placeholderEmpty?: string | undefined;
                    multiselect?: boolean | undefined;
                    autocomplete?: boolean | undefined;
                    filterFunc?: ((term: string, label: string, value: string[], item: any) => any) | undefined | undefined;
                    filterRemote?: boolean | undefined;
                    filterDelay?: number | undefined;
                    allowEmpty?: boolean | undefined | undefined;
                    listOnEmpty?: boolean | undefined;
                    freetext?: boolean | undefined | undefined;
                    showListOnEmpty?: boolean | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                    defaultValue?: string | undefined | undefined;
                    sortValuesList?: "asc" | "desc" | undefined | undefined;
                } | {
                    search?: boolean | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    shiftEnterSubmit?: boolean | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    min?: string | undefined;
                    max?: string | undefined;
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | undefined;
                validator?: string | import('tabulator-tables').StandardValidatorType[] | {
                    type: import('tabulator-tables').StandardValidatorType | ((cell: import('tabulator-tables').CellComponent, value: any, parameters?: any) => boolean);
                    parameters?: any;
                } | {
                    type: import('tabulator-tables').StandardValidatorType | ((cell: import('tabulator-tables').CellComponent, value: any, parameters?: any) => boolean);
                    parameters?: any;
                }[] | undefined;
                mutator?: import('tabulator-tables').CustomMutator | undefined;
                mutatorParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                mutatorData?: import('tabulator-tables').CustomMutator | undefined;
                mutatorDataParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                mutatorEdit?: import('tabulator-tables').CustomMutator | undefined;
                mutatorEditParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                mutatorClipboard?: import('tabulator-tables').CustomMutator | undefined;
                mutatorClipboardParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                accessor?: "rownum" | import('tabulator-tables').CustomAccessor | undefined;
                accessorParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                accessorDownload?: import('tabulator-tables').CustomAccessor | undefined;
                accessorDownloadParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                accessorClipboard?: import('tabulator-tables').CustomAccessor | undefined;
                accessorClipboardParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                download?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                titleDownload?: string | undefined | undefined;
                topCalc?: import('tabulator-tables').ColumnCalc | undefined;
                topCalcParams?: ((values: any, data: any) => any) | {
                    precision: number;
                } | undefined;
                topCalcFormatter?: import('tabulator-tables').Formatter | undefined;
                topCalcFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                bottomCalc?: import('tabulator-tables').ColumnCalc | undefined;
                bottomCalcParams?: ((values: any, data: any) => any) | {
                    precision: number;
                } | undefined;
                bottomCalcFormatter?: import('tabulator-tables').Formatter | undefined;
                bottomCalcFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                headerSort?: boolean | undefined | undefined;
                headerSortStartingDir?: import('tabulator-tables').SortDirection | undefined;
                headerSortTristate?: boolean | undefined | undefined;
                headerClick?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerDblClick?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerMouseDown?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerMouseUp?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerContext?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerTap?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerDblTap?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerTapHold?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerTooltip?: boolean | string | ((column: import('tabulator-tables').ColumnComponent) => string) | undefined | undefined;
                headerVertical?: boolean | "flip" | undefined | undefined;
                editableTitle?: boolean | undefined | undefined;
                titleFormatter?: import('tabulator-tables').Formatter | undefined;
                titleFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                headerFilter?: import('tabulator-tables').Editor | undefined;
                headerFilterParams?: ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    step?: number | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    tristate?: boolean | undefined | undefined;
                    indeterminateValue?: string | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    values?: string | true | any[] | string[] | import('tabulator-tables').JSONRecord | {
                        label: string;
                        value: string | number | boolean;
                    }[] | undefined;
                    valuesURL?: string | undefined;
                    valuesLookup?: import('tabulator-tables').RowRangeLookup | undefined;
                    valuesLookupField?: string | undefined;
                    clearable?: boolean | undefined;
                    itemFormatter?: ((label: string, value: string, item: any, element: HTMLElement) => string) | undefined | undefined;
                    sort?: import('tabulator-tables').SortDirection | undefined;
                    emptyValue?: any;
                    maxWidth?: boolean | undefined;
                    placeholderLoading?: string | undefined;
                    placeholderEmpty?: string | undefined;
                    multiselect?: boolean | undefined;
                    autocomplete?: boolean | undefined;
                    filterFunc?: ((term: string, label: string, value: string[], item: any) => any) | undefined | undefined;
                    filterRemote?: boolean | undefined;
                    filterDelay?: number | undefined;
                    allowEmpty?: boolean | undefined | undefined;
                    listOnEmpty?: boolean | undefined;
                    freetext?: boolean | undefined | undefined;
                    showListOnEmpty?: boolean | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                    defaultValue?: string | undefined | undefined;
                    sortValuesList?: "asc" | "desc" | undefined | undefined;
                } | {
                    search?: boolean | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    shiftEnterSubmit?: boolean | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    min?: string | undefined;
                    max?: string | undefined;
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | undefined;
                headerFilterPlaceholder?: string | undefined | undefined;
                headerFilterEmptyCheck?: import('tabulator-tables').ValueBooleanCallback | undefined;
                headerFilterFunc?: import('tabulator-tables').FilterType | import('tabulator-tables').HeaderFilterFunc | undefined;
                headerFilterFuncParams?: any;
                headerFilterLiveFilter?: boolean | undefined | undefined;
                htmlOutput?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                clipboard?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                print?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                columns?: /*elided*/ any[] | undefined;
                headerMenu?: ((e: MouseEvent, component: import('tabulator-tables').ColumnComponent) => Array<import('tabulator-tables').MenuObject<import('tabulator-tables').ColumnComponent> | import('tabulator-tables').MenuSeparator>) | ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').ColumnComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                headerMenuIcon?: (string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => HTMLElement | string)) | undefined;
                headerContextMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').ColumnComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                headerDblClickPopup?: string | undefined;
                dblClickPopup?: string | undefined;
                contextMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                clickMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                headerDblClickMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                dblClickMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                cellPopup?: string | ((e: MouseEvent, component: import('tabulator-tables').RowComponent | import('tabulator-tables').CellComponent | import('tabulator-tables').ColumnComponent, onRendered: () => any) => any) | undefined;
                formatterClipboard?: false | import('tabulator-tables').Formatter | undefined;
                formatterClipboardParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                formatterPrint?: false | import('tabulator-tables').Formatter | undefined;
                formatterPrintParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                accessorPrint?: import('tabulator-tables').CustomAccessor | undefined;
                accessorPrintParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                accessorHtmlOutput?: import('tabulator-tables').CustomAccessor | undefined;
                accessorHtmlOutputParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                formatterHtmlOutput?: false | import('tabulator-tables').Formatter | undefined;
                formatterHtmlOutputParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                titleClipboard?: string | undefined | undefined;
                titleHtmlOutput?: string | undefined | undefined;
                titlePrint?: string | undefined | undefined;
                maxWidth?: number | false | undefined | undefined;
                headerWordWrap?: boolean | undefined;
                editorEmptyValue?: any;
                editorEmptyValueFunc?: ((value: unknown) => boolean) | undefined;
                title: string;
                field?: string | undefined | undefined;
                visible?: boolean | undefined | undefined;
                width?: number | string | undefined | undefined;
                cellClick?: import('tabulator-tables').CellEventCallback | undefined;
                cellDblClick?: import('tabulator-tables').CellEventCallback | undefined;
                cellContext?: import('tabulator-tables').CellEventCallback | undefined;
                cellTap?: import('tabulator-tables').CellEventCallback | undefined;
                cellDblTap?: import('tabulator-tables').CellEventCallback | undefined;
                cellTapHold?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseEnter?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseLeave?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseOver?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseOut?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseMove?: import('tabulator-tables').CellEventCallback | undefined;
                cellEditing?: import('tabulator-tables').CellEditEventCallback | undefined;
                cellEdited?: import('tabulator-tables').CellEditEventCallback | undefined;
                cellEditCancelled?: import('tabulator-tables').CellEditEventCallback | undefined;
                cellMouseDown?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseUp?: import('tabulator-tables').CellEventCallback | undefined;
            }[] | undefined;
            autoColumns?: boolean | undefined | "full" | undefined;
            autoColumnsDefinitions?: ((columnDefinitions?: import('tabulator-tables').ColumnDefinition[]) => Partial<import('tabulator-tables').ColumnDefinition>[]) | Record<string, Partial<import('tabulator-tables').ColumnDefinition>> | {
                hozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                headerHozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                vertAlign?: import('tabulator-tables').VerticalAlign | undefined;
                minWidth?: number | undefined | undefined;
                widthGrow?: number | undefined | undefined;
                widthShrink?: number | undefined | undefined;
                resizable?: true | false | "header" | "cell" | undefined | undefined;
                frozen?: boolean | undefined | undefined;
                responsive?: number | undefined | undefined;
                tooltip?: string | import('tabulator-tables').GlobalTooltipOption | undefined;
                cssClass?: string | undefined | undefined;
                rowHandle?: boolean | undefined | undefined;
                hideInHtml?: boolean | undefined | undefined;
                sorter?: "string" | "number" | "alphanum" | "boolean" | "exists" | "date" | "time" | "datetime" | "array" | ((a: any, b: any, aRow: import('tabulator-tables').RowComponent, bRow: import('tabulator-tables').RowComponent, column: import('tabulator-tables').ColumnComponent, dir: import('tabulator-tables').SortDirection, sorterParams: {}) => number) | undefined | undefined;
                sorterParams?: import('tabulator-tables').ColumnSorterParamLookupFunction | {
                    format?: string | undefined | undefined;
                    locale?: string | boolean | undefined | undefined;
                    alignEmptyValues?: "top" | "bottom" | undefined | undefined;
                    type?: "length" | "sum" | "max" | "min" | "avg" | undefined | undefined;
                } | undefined;
                formatter?: import('tabulator-tables').Formatter | undefined;
                formatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                variableHeight?: boolean | undefined | undefined;
                editable?: boolean | ((cell: import('tabulator-tables').CellComponent) => boolean) | undefined | undefined;
                editor?: import('tabulator-tables').Editor | undefined;
                editorParams?: ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    step?: number | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    tristate?: boolean | undefined | undefined;
                    indeterminateValue?: string | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    values?: string | true | any[] | string[] | import('tabulator-tables').JSONRecord | {
                        label: string;
                        value: string | number | boolean;
                    }[] | undefined;
                    valuesURL?: string | undefined;
                    valuesLookup?: import('tabulator-tables').RowRangeLookup | undefined;
                    valuesLookupField?: string | undefined;
                    clearable?: boolean | undefined;
                    itemFormatter?: ((label: string, value: string, item: any, element: HTMLElement) => string) | undefined | undefined;
                    sort?: import('tabulator-tables').SortDirection | undefined;
                    emptyValue?: any;
                    maxWidth?: boolean | undefined;
                    placeholderLoading?: string | undefined;
                    placeholderEmpty?: string | undefined;
                    multiselect?: boolean | undefined;
                    autocomplete?: boolean | undefined;
                    filterFunc?: ((term: string, label: string, value: string[], item: any) => any) | undefined | undefined;
                    filterRemote?: boolean | undefined;
                    filterDelay?: number | undefined;
                    allowEmpty?: boolean | undefined | undefined;
                    listOnEmpty?: boolean | undefined;
                    freetext?: boolean | undefined | undefined;
                    showListOnEmpty?: boolean | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                    defaultValue?: string | undefined | undefined;
                    sortValuesList?: "asc" | "desc" | undefined | undefined;
                } | {
                    search?: boolean | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    shiftEnterSubmit?: boolean | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    min?: string | undefined;
                    max?: string | undefined;
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | undefined;
                validator?: string | import('tabulator-tables').StandardValidatorType[] | {
                    type: import('tabulator-tables').StandardValidatorType | ((cell: import('tabulator-tables').CellComponent, value: any, parameters?: any) => boolean);
                    parameters?: any;
                } | {
                    type: import('tabulator-tables').StandardValidatorType | ((cell: import('tabulator-tables').CellComponent, value: any, parameters?: any) => boolean);
                    parameters?: any;
                }[] | undefined;
                mutator?: import('tabulator-tables').CustomMutator | undefined;
                mutatorParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                mutatorData?: import('tabulator-tables').CustomMutator | undefined;
                mutatorDataParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                mutatorEdit?: import('tabulator-tables').CustomMutator | undefined;
                mutatorEditParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                mutatorClipboard?: import('tabulator-tables').CustomMutator | undefined;
                mutatorClipboardParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                accessor?: "rownum" | import('tabulator-tables').CustomAccessor | undefined;
                accessorParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                accessorDownload?: import('tabulator-tables').CustomAccessor | undefined;
                accessorDownloadParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                accessorClipboard?: import('tabulator-tables').CustomAccessor | undefined;
                accessorClipboardParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                download?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                titleDownload?: string | undefined | undefined;
                topCalc?: import('tabulator-tables').ColumnCalc | undefined;
                topCalcParams?: ((values: any, data: any) => any) | {
                    precision: number;
                } | undefined;
                topCalcFormatter?: import('tabulator-tables').Formatter | undefined;
                topCalcFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                bottomCalc?: import('tabulator-tables').ColumnCalc | undefined;
                bottomCalcParams?: ((values: any, data: any) => any) | {
                    precision: number;
                } | undefined;
                bottomCalcFormatter?: import('tabulator-tables').Formatter | undefined;
                bottomCalcFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                headerSort?: boolean | undefined | undefined;
                headerSortStartingDir?: import('tabulator-tables').SortDirection | undefined;
                headerSortTristate?: boolean | undefined | undefined;
                headerClick?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerDblClick?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerMouseDown?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerMouseUp?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerContext?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerTap?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerDblTap?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerTapHold?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerTooltip?: boolean | string | ((column: import('tabulator-tables').ColumnComponent) => string) | undefined | undefined;
                headerVertical?: boolean | "flip" | undefined | undefined;
                editableTitle?: boolean | undefined | undefined;
                titleFormatter?: import('tabulator-tables').Formatter | undefined;
                titleFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                headerFilter?: import('tabulator-tables').Editor | undefined;
                headerFilterParams?: ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    step?: number | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    tristate?: boolean | undefined | undefined;
                    indeterminateValue?: string | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    values?: string | true | any[] | string[] | import('tabulator-tables').JSONRecord | {
                        label: string;
                        value: string | number | boolean;
                    }[] | undefined;
                    valuesURL?: string | undefined;
                    valuesLookup?: import('tabulator-tables').RowRangeLookup | undefined;
                    valuesLookupField?: string | undefined;
                    clearable?: boolean | undefined;
                    itemFormatter?: ((label: string, value: string, item: any, element: HTMLElement) => string) | undefined | undefined;
                    sort?: import('tabulator-tables').SortDirection | undefined;
                    emptyValue?: any;
                    maxWidth?: boolean | undefined;
                    placeholderLoading?: string | undefined;
                    placeholderEmpty?: string | undefined;
                    multiselect?: boolean | undefined;
                    autocomplete?: boolean | undefined;
                    filterFunc?: ((term: string, label: string, value: string[], item: any) => any) | undefined | undefined;
                    filterRemote?: boolean | undefined;
                    filterDelay?: number | undefined;
                    allowEmpty?: boolean | undefined | undefined;
                    listOnEmpty?: boolean | undefined;
                    freetext?: boolean | undefined | undefined;
                    showListOnEmpty?: boolean | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                    defaultValue?: string | undefined | undefined;
                    sortValuesList?: "asc" | "desc" | undefined | undefined;
                } | {
                    search?: boolean | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    shiftEnterSubmit?: boolean | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    min?: string | undefined;
                    max?: string | undefined;
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | undefined;
                headerFilterPlaceholder?: string | undefined | undefined;
                headerFilterEmptyCheck?: import('tabulator-tables').ValueBooleanCallback | undefined;
                headerFilterFunc?: import('tabulator-tables').FilterType | import('tabulator-tables').HeaderFilterFunc | undefined;
                headerFilterFuncParams?: any;
                headerFilterLiveFilter?: boolean | undefined | undefined;
                htmlOutput?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                clipboard?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                print?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                columns?: {
                    hozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                    headerHozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                    vertAlign?: import('tabulator-tables').VerticalAlign | undefined;
                    minWidth?: number | undefined | undefined;
                    widthGrow?: number | undefined | undefined;
                    widthShrink?: number | undefined | undefined;
                    resizable?: true | false | "header" | "cell" | undefined | undefined;
                    frozen?: boolean | undefined | undefined;
                    responsive?: number | undefined | undefined;
                    tooltip?: string | import('tabulator-tables').GlobalTooltipOption | undefined;
                    cssClass?: string | undefined | undefined;
                    rowHandle?: boolean | undefined | undefined;
                    hideInHtml?: boolean | undefined | undefined;
                    sorter?: "string" | "number" | "alphanum" | "boolean" | "exists" | "date" | "time" | "datetime" | "array" | ((a: any, b: any, aRow: import('tabulator-tables').RowComponent, bRow: import('tabulator-tables').RowComponent, column: import('tabulator-tables').ColumnComponent, dir: import('tabulator-tables').SortDirection, sorterParams: {}) => number) | undefined | undefined;
                    sorterParams?: import('tabulator-tables').ColumnSorterParamLookupFunction | {
                        format?: string | undefined | undefined;
                        locale?: string | boolean | undefined | undefined;
                        alignEmptyValues?: "top" | "bottom" | undefined | undefined;
                        type?: "length" | "sum" | "max" | "min" | "avg" | undefined | undefined;
                    } | undefined;
                    formatter?: import('tabulator-tables').Formatter | undefined;
                    formatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    variableHeight?: boolean | undefined | undefined;
                    editable?: boolean | ((cell: import('tabulator-tables').CellComponent) => boolean) | undefined | undefined;
                    editor?: import('tabulator-tables').Editor | undefined;
                    editorParams?: ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        step?: number | undefined | undefined;
                        verticalNavigation?: "editor" | "table" | undefined | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        tristate?: boolean | undefined | undefined;
                        indeterminateValue?: string | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        values?: string | true | any[] | string[] | import('tabulator-tables').JSONRecord | {
                            label: string;
                            value: string | number | boolean;
                        }[] | undefined;
                        valuesURL?: string | undefined;
                        valuesLookup?: import('tabulator-tables').RowRangeLookup | undefined;
                        valuesLookupField?: string | undefined;
                        clearable?: boolean | undefined;
                        itemFormatter?: ((label: string, value: string, item: any, element: HTMLElement) => string) | undefined | undefined;
                        sort?: import('tabulator-tables').SortDirection | undefined;
                        emptyValue?: any;
                        maxWidth?: boolean | undefined;
                        placeholderLoading?: string | undefined;
                        placeholderEmpty?: string | undefined;
                        multiselect?: boolean | undefined;
                        autocomplete?: boolean | undefined;
                        filterFunc?: ((term: string, label: string, value: string[], item: any) => any) | undefined | undefined;
                        filterRemote?: boolean | undefined;
                        filterDelay?: number | undefined;
                        allowEmpty?: boolean | undefined | undefined;
                        listOnEmpty?: boolean | undefined;
                        freetext?: boolean | undefined | undefined;
                        showListOnEmpty?: boolean | undefined | undefined;
                        verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                        defaultValue?: string | undefined | undefined;
                        sortValuesList?: "asc" | "desc" | undefined | undefined;
                    } | {
                        search?: boolean | undefined | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                        shiftEnterSubmit?: boolean | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        min?: string | undefined;
                        max?: string | undefined;
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | undefined;
                    validator?: string | import('tabulator-tables').StandardValidatorType[] | {
                        type: import('tabulator-tables').StandardValidatorType | ((cell: import('tabulator-tables').CellComponent, value: any, parameters?: any) => boolean);
                        parameters?: any;
                    } | {
                        type: import('tabulator-tables').StandardValidatorType | ((cell: import('tabulator-tables').CellComponent, value: any, parameters?: any) => boolean);
                        parameters?: any;
                    }[] | undefined;
                    mutator?: import('tabulator-tables').CustomMutator | undefined;
                    mutatorParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                    mutatorData?: import('tabulator-tables').CustomMutator | undefined;
                    mutatorDataParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                    mutatorEdit?: import('tabulator-tables').CustomMutator | undefined;
                    mutatorEditParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                    mutatorClipboard?: import('tabulator-tables').CustomMutator | undefined;
                    mutatorClipboardParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                    accessor?: "rownum" | import('tabulator-tables').CustomAccessor | undefined;
                    accessorParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                    accessorDownload?: import('tabulator-tables').CustomAccessor | undefined;
                    accessorDownloadParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                    accessorClipboard?: import('tabulator-tables').CustomAccessor | undefined;
                    accessorClipboardParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                    download?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    titleDownload?: string | undefined | undefined;
                    topCalc?: import('tabulator-tables').ColumnCalc | undefined;
                    topCalcParams?: ((values: any, data: any) => any) | {
                        precision: number;
                    } | undefined;
                    topCalcFormatter?: import('tabulator-tables').Formatter | undefined;
                    topCalcFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    bottomCalc?: import('tabulator-tables').ColumnCalc | undefined;
                    bottomCalcParams?: ((values: any, data: any) => any) | {
                        precision: number;
                    } | undefined;
                    bottomCalcFormatter?: import('tabulator-tables').Formatter | undefined;
                    bottomCalcFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    headerSort?: boolean | undefined | undefined;
                    headerSortStartingDir?: import('tabulator-tables').SortDirection | undefined;
                    headerSortTristate?: boolean | undefined | undefined;
                    headerClick?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerDblClick?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerMouseDown?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerMouseUp?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerContext?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerTap?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerDblTap?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerTapHold?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerTooltip?: boolean | string | ((column: import('tabulator-tables').ColumnComponent) => string) | undefined | undefined;
                    headerVertical?: boolean | "flip" | undefined | undefined;
                    editableTitle?: boolean | undefined | undefined;
                    titleFormatter?: import('tabulator-tables').Formatter | undefined;
                    titleFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    headerFilter?: import('tabulator-tables').Editor | undefined;
                    headerFilterParams?: ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        step?: number | undefined | undefined;
                        verticalNavigation?: "editor" | "table" | undefined | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        tristate?: boolean | undefined | undefined;
                        indeterminateValue?: string | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        values?: string | true | any[] | string[] | import('tabulator-tables').JSONRecord | {
                            label: string;
                            value: string | number | boolean;
                        }[] | undefined;
                        valuesURL?: string | undefined;
                        valuesLookup?: import('tabulator-tables').RowRangeLookup | undefined;
                        valuesLookupField?: string | undefined;
                        clearable?: boolean | undefined;
                        itemFormatter?: ((label: string, value: string, item: any, element: HTMLElement) => string) | undefined | undefined;
                        sort?: import('tabulator-tables').SortDirection | undefined;
                        emptyValue?: any;
                        maxWidth?: boolean | undefined;
                        placeholderLoading?: string | undefined;
                        placeholderEmpty?: string | undefined;
                        multiselect?: boolean | undefined;
                        autocomplete?: boolean | undefined;
                        filterFunc?: ((term: string, label: string, value: string[], item: any) => any) | undefined | undefined;
                        filterRemote?: boolean | undefined;
                        filterDelay?: number | undefined;
                        allowEmpty?: boolean | undefined | undefined;
                        listOnEmpty?: boolean | undefined;
                        freetext?: boolean | undefined | undefined;
                        showListOnEmpty?: boolean | undefined | undefined;
                        verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                        defaultValue?: string | undefined | undefined;
                        sortValuesList?: "asc" | "desc" | undefined | undefined;
                    } | {
                        search?: boolean | undefined | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                        shiftEnterSubmit?: boolean | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        min?: string | undefined;
                        max?: string | undefined;
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | undefined;
                    headerFilterPlaceholder?: string | undefined | undefined;
                    headerFilterEmptyCheck?: import('tabulator-tables').ValueBooleanCallback | undefined;
                    headerFilterFunc?: import('tabulator-tables').FilterType | import('tabulator-tables').HeaderFilterFunc | undefined;
                    headerFilterFuncParams?: any;
                    headerFilterLiveFilter?: boolean | undefined | undefined;
                    htmlOutput?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    clipboard?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    print?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    columns?: /*elided*/ any[] | undefined;
                    headerMenu?: ((e: MouseEvent, component: import('tabulator-tables').ColumnComponent) => Array<import('tabulator-tables').MenuObject<import('tabulator-tables').ColumnComponent> | import('tabulator-tables').MenuSeparator>) | ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').ColumnComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    headerMenuIcon?: (string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => HTMLElement | string)) | undefined;
                    headerContextMenu?: ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').ColumnComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    headerDblClickPopup?: string | undefined;
                    dblClickPopup?: string | undefined;
                    contextMenu?: ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    clickMenu?: ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    headerDblClickMenu?: ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    dblClickMenu?: ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    cellPopup?: string | ((e: MouseEvent, component: import('tabulator-tables').RowComponent | import('tabulator-tables').CellComponent | import('tabulator-tables').ColumnComponent, onRendered: () => any) => any) | undefined;
                    formatterClipboard?: false | import('tabulator-tables').Formatter | undefined;
                    formatterClipboardParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    formatterPrint?: false | import('tabulator-tables').Formatter | undefined;
                    formatterPrintParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    accessorPrint?: import('tabulator-tables').CustomAccessor | undefined;
                    accessorPrintParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                    accessorHtmlOutput?: import('tabulator-tables').CustomAccessor | undefined;
                    accessorHtmlOutputParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                    formatterHtmlOutput?: false | import('tabulator-tables').Formatter | undefined;
                    formatterHtmlOutputParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    titleClipboard?: string | undefined | undefined;
                    titleHtmlOutput?: string | undefined | undefined;
                    titlePrint?: string | undefined | undefined;
                    maxWidth?: number | false | undefined | undefined;
                    headerWordWrap?: boolean | undefined;
                    editorEmptyValue?: any;
                    editorEmptyValueFunc?: ((value: unknown) => boolean) | undefined;
                    title: string;
                    field?: string | undefined | undefined;
                    visible?: boolean | undefined | undefined;
                    width?: number | string | undefined | undefined;
                    cellClick?: import('tabulator-tables').CellEventCallback | undefined;
                    cellDblClick?: import('tabulator-tables').CellEventCallback | undefined;
                    cellContext?: import('tabulator-tables').CellEventCallback | undefined;
                    cellTap?: import('tabulator-tables').CellEventCallback | undefined;
                    cellDblTap?: import('tabulator-tables').CellEventCallback | undefined;
                    cellTapHold?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseEnter?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseLeave?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseOver?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseOut?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseMove?: import('tabulator-tables').CellEventCallback | undefined;
                    cellEditing?: import('tabulator-tables').CellEditEventCallback | undefined;
                    cellEdited?: import('tabulator-tables').CellEditEventCallback | undefined;
                    cellEditCancelled?: import('tabulator-tables').CellEditEventCallback | undefined;
                    cellMouseDown?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseUp?: import('tabulator-tables').CellEventCallback | undefined;
                }[] | undefined;
                headerMenu?: ((e: MouseEvent, component: import('tabulator-tables').ColumnComponent) => Array<import('tabulator-tables').MenuObject<import('tabulator-tables').ColumnComponent> | import('tabulator-tables').MenuSeparator>) | ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').ColumnComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                headerMenuIcon?: (string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => HTMLElement | string)) | undefined;
                headerContextMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').ColumnComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                headerDblClickPopup?: string | undefined;
                dblClickPopup?: string | undefined;
                contextMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                clickMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                headerDblClickMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                dblClickMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                cellPopup?: string | ((e: MouseEvent, component: import('tabulator-tables').RowComponent | import('tabulator-tables').CellComponent | import('tabulator-tables').ColumnComponent, onRendered: () => any) => any) | undefined;
                formatterClipboard?: false | import('tabulator-tables').Formatter | undefined;
                formatterClipboardParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                formatterPrint?: false | import('tabulator-tables').Formatter | undefined;
                formatterPrintParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                accessorPrint?: import('tabulator-tables').CustomAccessor | undefined;
                accessorPrintParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                accessorHtmlOutput?: import('tabulator-tables').CustomAccessor | undefined;
                accessorHtmlOutputParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                formatterHtmlOutput?: false | import('tabulator-tables').Formatter | undefined;
                formatterHtmlOutputParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                titleClipboard?: string | undefined | undefined;
                titleHtmlOutput?: string | undefined | undefined;
                titlePrint?: string | undefined | undefined;
                maxWidth?: number | false | undefined | undefined;
                headerWordWrap?: boolean | undefined;
                editorEmptyValue?: any;
                editorEmptyValueFunc?: ((value: unknown) => boolean) | undefined;
                title?: string | undefined;
                field?: string | undefined | undefined;
                visible?: boolean | undefined | undefined;
                width?: number | string | undefined | undefined;
                cellClick?: import('tabulator-tables').CellEventCallback | undefined;
                cellDblClick?: import('tabulator-tables').CellEventCallback | undefined;
                cellContext?: import('tabulator-tables').CellEventCallback | undefined;
                cellTap?: import('tabulator-tables').CellEventCallback | undefined;
                cellDblTap?: import('tabulator-tables').CellEventCallback | undefined;
                cellTapHold?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseEnter?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseLeave?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseOver?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseOut?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseMove?: import('tabulator-tables').CellEventCallback | undefined;
                cellEditing?: import('tabulator-tables').CellEditEventCallback | undefined;
                cellEdited?: import('tabulator-tables').CellEditEventCallback | undefined;
                cellEditCancelled?: import('tabulator-tables').CellEditEventCallback | undefined;
                cellMouseDown?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseUp?: import('tabulator-tables').CellEventCallback | undefined;
            }[] | undefined;
            layout?: "fitData" | "fitColumns" | "fitDataFill" | "fitDataStretch" | "fitDataTable" | undefined | undefined;
            layoutColumnsOnNewData?: boolean | undefined | undefined;
            responsiveLayout?: boolean | "hide" | "collapse" | undefined | undefined;
            responsiveLayoutCollapseStartOpen?: boolean | undefined | undefined;
            responsiveLayoutCollapseUseFormatters?: boolean | undefined | undefined;
            responsiveLayoutCollapseFormatter?: ((data: any[]) => any) | undefined | undefined;
            movableColumns?: boolean | undefined | undefined;
            columnHeaderVertAlign?: import('tabulator-tables').VerticalAlign | undefined;
            scrollToColumnPosition?: import('tabulator-tables').ScrollToColumnPosition | undefined;
            scrollToColumnIfVisible?: boolean | undefined | undefined;
            columnCalcs?: boolean | "both" | "table" | "group" | undefined | undefined;
            nestedFieldSeparator?: string | boolean | undefined | undefined;
            columnHeaderSortMulti?: boolean | undefined | undefined;
            headerVisible?: boolean | undefined | undefined;
            headerSort?: boolean | undefined | undefined;
            headerSortElement?: string | undefined | ((column: import('tabulator-tables').ColumnComponent, dir: "asc" | "desc" | "none") => any) | undefined;
            columnDefaults?: {
                hozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                headerHozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                vertAlign?: import('tabulator-tables').VerticalAlign | undefined;
                minWidth?: number | undefined | undefined;
                widthGrow?: number | undefined | undefined;
                widthShrink?: number | undefined | undefined;
                resizable?: true | false | "header" | "cell" | undefined | undefined;
                frozen?: boolean | undefined | undefined;
                responsive?: number | undefined | undefined;
                tooltip?: string | import('tabulator-tables').GlobalTooltipOption | undefined;
                cssClass?: string | undefined | undefined;
                rowHandle?: boolean | undefined | undefined;
                hideInHtml?: boolean | undefined | undefined;
                sorter?: "string" | "number" | "alphanum" | "boolean" | "exists" | "date" | "time" | "datetime" | "array" | ((a: any, b: any, aRow: import('tabulator-tables').RowComponent, bRow: import('tabulator-tables').RowComponent, column: import('tabulator-tables').ColumnComponent, dir: import('tabulator-tables').SortDirection, sorterParams: {}) => number) | undefined | undefined;
                sorterParams?: import('tabulator-tables').ColumnSorterParamLookupFunction | {
                    format?: string | undefined | undefined;
                    locale?: string | boolean | undefined | undefined;
                    alignEmptyValues?: "top" | "bottom" | undefined | undefined;
                    type?: "length" | "sum" | "max" | "min" | "avg" | undefined | undefined;
                } | undefined;
                formatter?: import('tabulator-tables').Formatter | undefined;
                formatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                variableHeight?: boolean | undefined | undefined;
                editable?: boolean | ((cell: import('tabulator-tables').CellComponent) => boolean) | undefined | undefined;
                editor?: import('tabulator-tables').Editor | undefined;
                editorParams?: ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    step?: number | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    tristate?: boolean | undefined | undefined;
                    indeterminateValue?: string | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    values?: string | true | any[] | string[] | import('tabulator-tables').JSONRecord | {
                        label: string;
                        value: string | number | boolean;
                    }[] | undefined;
                    valuesURL?: string | undefined;
                    valuesLookup?: import('tabulator-tables').RowRangeLookup | undefined;
                    valuesLookupField?: string | undefined;
                    clearable?: boolean | undefined;
                    itemFormatter?: ((label: string, value: string, item: any, element: HTMLElement) => string) | undefined | undefined;
                    sort?: import('tabulator-tables').SortDirection | undefined;
                    emptyValue?: any;
                    maxWidth?: boolean | undefined;
                    placeholderLoading?: string | undefined;
                    placeholderEmpty?: string | undefined;
                    multiselect?: boolean | undefined;
                    autocomplete?: boolean | undefined;
                    filterFunc?: ((term: string, label: string, value: string[], item: any) => any) | undefined | undefined;
                    filterRemote?: boolean | undefined;
                    filterDelay?: number | undefined;
                    allowEmpty?: boolean | undefined | undefined;
                    listOnEmpty?: boolean | undefined;
                    freetext?: boolean | undefined | undefined;
                    showListOnEmpty?: boolean | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                    defaultValue?: string | undefined | undefined;
                    sortValuesList?: "asc" | "desc" | undefined | undefined;
                } | {
                    search?: boolean | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    shiftEnterSubmit?: boolean | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    min?: string | undefined;
                    max?: string | undefined;
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | undefined;
                validator?: string | import('tabulator-tables').StandardValidatorType[] | {
                    type: import('tabulator-tables').StandardValidatorType | ((cell: import('tabulator-tables').CellComponent, value: any, parameters?: any) => boolean);
                    parameters?: any;
                } | {
                    type: import('tabulator-tables').StandardValidatorType | ((cell: import('tabulator-tables').CellComponent, value: any, parameters?: any) => boolean);
                    parameters?: any;
                }[] | undefined;
                mutator?: import('tabulator-tables').CustomMutator | undefined;
                mutatorParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                mutatorData?: import('tabulator-tables').CustomMutator | undefined;
                mutatorDataParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                mutatorEdit?: import('tabulator-tables').CustomMutator | undefined;
                mutatorEditParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                mutatorClipboard?: import('tabulator-tables').CustomMutator | undefined;
                mutatorClipboardParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                accessor?: "rownum" | import('tabulator-tables').CustomAccessor | undefined;
                accessorParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                accessorDownload?: import('tabulator-tables').CustomAccessor | undefined;
                accessorDownloadParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                accessorClipboard?: import('tabulator-tables').CustomAccessor | undefined;
                accessorClipboardParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                download?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                titleDownload?: string | undefined | undefined;
                topCalc?: import('tabulator-tables').ColumnCalc | undefined;
                topCalcParams?: ((values: any, data: any) => any) | {
                    precision: number;
                } | undefined;
                topCalcFormatter?: import('tabulator-tables').Formatter | undefined;
                topCalcFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                bottomCalc?: import('tabulator-tables').ColumnCalc | undefined;
                bottomCalcParams?: ((values: any, data: any) => any) | {
                    precision: number;
                } | undefined;
                bottomCalcFormatter?: import('tabulator-tables').Formatter | undefined;
                bottomCalcFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                headerSort?: boolean | undefined | undefined;
                headerSortStartingDir?: import('tabulator-tables').SortDirection | undefined;
                headerSortTristate?: boolean | undefined | undefined;
                headerClick?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerDblClick?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerMouseDown?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerMouseUp?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerContext?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerTap?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerDblTap?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerTapHold?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerTooltip?: boolean | string | ((column: import('tabulator-tables').ColumnComponent) => string) | undefined | undefined;
                headerVertical?: boolean | "flip" | undefined | undefined;
                editableTitle?: boolean | undefined | undefined;
                titleFormatter?: import('tabulator-tables').Formatter | undefined;
                titleFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                headerFilter?: import('tabulator-tables').Editor | undefined;
                headerFilterParams?: ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    step?: number | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    tristate?: boolean | undefined | undefined;
                    indeterminateValue?: string | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    values?: string | true | any[] | string[] | import('tabulator-tables').JSONRecord | {
                        label: string;
                        value: string | number | boolean;
                    }[] | undefined;
                    valuesURL?: string | undefined;
                    valuesLookup?: import('tabulator-tables').RowRangeLookup | undefined;
                    valuesLookupField?: string | undefined;
                    clearable?: boolean | undefined;
                    itemFormatter?: ((label: string, value: string, item: any, element: HTMLElement) => string) | undefined | undefined;
                    sort?: import('tabulator-tables').SortDirection | undefined;
                    emptyValue?: any;
                    maxWidth?: boolean | undefined;
                    placeholderLoading?: string | undefined;
                    placeholderEmpty?: string | undefined;
                    multiselect?: boolean | undefined;
                    autocomplete?: boolean | undefined;
                    filterFunc?: ((term: string, label: string, value: string[], item: any) => any) | undefined | undefined;
                    filterRemote?: boolean | undefined;
                    filterDelay?: number | undefined;
                    allowEmpty?: boolean | undefined | undefined;
                    listOnEmpty?: boolean | undefined;
                    freetext?: boolean | undefined | undefined;
                    showListOnEmpty?: boolean | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                    defaultValue?: string | undefined | undefined;
                    sortValuesList?: "asc" | "desc" | undefined | undefined;
                } | {
                    search?: boolean | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    shiftEnterSubmit?: boolean | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    min?: string | undefined;
                    max?: string | undefined;
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | undefined;
                headerFilterPlaceholder?: string | undefined | undefined;
                headerFilterEmptyCheck?: import('tabulator-tables').ValueBooleanCallback | undefined;
                headerFilterFunc?: import('tabulator-tables').FilterType | import('tabulator-tables').HeaderFilterFunc | undefined;
                headerFilterFuncParams?: any;
                headerFilterLiveFilter?: boolean | undefined | undefined;
                htmlOutput?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                clipboard?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                print?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                columns?: {
                    hozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                    headerHozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                    vertAlign?: import('tabulator-tables').VerticalAlign | undefined;
                    minWidth?: number | undefined | undefined;
                    widthGrow?: number | undefined | undefined;
                    widthShrink?: number | undefined | undefined;
                    resizable?: true | false | "header" | "cell" | undefined | undefined;
                    frozen?: boolean | undefined | undefined;
                    responsive?: number | undefined | undefined;
                    tooltip?: string | import('tabulator-tables').GlobalTooltipOption | undefined;
                    cssClass?: string | undefined | undefined;
                    rowHandle?: boolean | undefined | undefined;
                    hideInHtml?: boolean | undefined | undefined;
                    sorter?: "string" | "number" | "alphanum" | "boolean" | "exists" | "date" | "time" | "datetime" | "array" | ((a: any, b: any, aRow: import('tabulator-tables').RowComponent, bRow: import('tabulator-tables').RowComponent, column: import('tabulator-tables').ColumnComponent, dir: import('tabulator-tables').SortDirection, sorterParams: {}) => number) | undefined | undefined;
                    sorterParams?: import('tabulator-tables').ColumnSorterParamLookupFunction | {
                        format?: string | undefined | undefined;
                        locale?: string | boolean | undefined | undefined;
                        alignEmptyValues?: "top" | "bottom" | undefined | undefined;
                        type?: "length" | "sum" | "max" | "min" | "avg" | undefined | undefined;
                    } | undefined;
                    formatter?: import('tabulator-tables').Formatter | undefined;
                    formatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    variableHeight?: boolean | undefined | undefined;
                    editable?: boolean | ((cell: import('tabulator-tables').CellComponent) => boolean) | undefined | undefined;
                    editor?: import('tabulator-tables').Editor | undefined;
                    editorParams?: ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        step?: number | undefined | undefined;
                        verticalNavigation?: "editor" | "table" | undefined | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        tristate?: boolean | undefined | undefined;
                        indeterminateValue?: string | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        values?: string | true | any[] | string[] | import('tabulator-tables').JSONRecord | {
                            label: string;
                            value: string | number | boolean;
                        }[] | undefined;
                        valuesURL?: string | undefined;
                        valuesLookup?: import('tabulator-tables').RowRangeLookup | undefined;
                        valuesLookupField?: string | undefined;
                        clearable?: boolean | undefined;
                        itemFormatter?: ((label: string, value: string, item: any, element: HTMLElement) => string) | undefined | undefined;
                        sort?: import('tabulator-tables').SortDirection | undefined;
                        emptyValue?: any;
                        maxWidth?: boolean | undefined;
                        placeholderLoading?: string | undefined;
                        placeholderEmpty?: string | undefined;
                        multiselect?: boolean | undefined;
                        autocomplete?: boolean | undefined;
                        filterFunc?: ((term: string, label: string, value: string[], item: any) => any) | undefined | undefined;
                        filterRemote?: boolean | undefined;
                        filterDelay?: number | undefined;
                        allowEmpty?: boolean | undefined | undefined;
                        listOnEmpty?: boolean | undefined;
                        freetext?: boolean | undefined | undefined;
                        showListOnEmpty?: boolean | undefined | undefined;
                        verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                        defaultValue?: string | undefined | undefined;
                        sortValuesList?: "asc" | "desc" | undefined | undefined;
                    } | {
                        search?: boolean | undefined | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                        shiftEnterSubmit?: boolean | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        min?: string | undefined;
                        max?: string | undefined;
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | undefined;
                    validator?: string | import('tabulator-tables').StandardValidatorType[] | {
                        type: import('tabulator-tables').StandardValidatorType | ((cell: import('tabulator-tables').CellComponent, value: any, parameters?: any) => boolean);
                        parameters?: any;
                    } | {
                        type: import('tabulator-tables').StandardValidatorType | ((cell: import('tabulator-tables').CellComponent, value: any, parameters?: any) => boolean);
                        parameters?: any;
                    }[] | undefined;
                    mutator?: import('tabulator-tables').CustomMutator | undefined;
                    mutatorParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                    mutatorData?: import('tabulator-tables').CustomMutator | undefined;
                    mutatorDataParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                    mutatorEdit?: import('tabulator-tables').CustomMutator | undefined;
                    mutatorEditParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                    mutatorClipboard?: import('tabulator-tables').CustomMutator | undefined;
                    mutatorClipboardParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                    accessor?: "rownum" | import('tabulator-tables').CustomAccessor | undefined;
                    accessorParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                    accessorDownload?: import('tabulator-tables').CustomAccessor | undefined;
                    accessorDownloadParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                    accessorClipboard?: import('tabulator-tables').CustomAccessor | undefined;
                    accessorClipboardParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                    download?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    titleDownload?: string | undefined | undefined;
                    topCalc?: import('tabulator-tables').ColumnCalc | undefined;
                    topCalcParams?: ((values: any, data: any) => any) | {
                        precision: number;
                    } | undefined;
                    topCalcFormatter?: import('tabulator-tables').Formatter | undefined;
                    topCalcFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    bottomCalc?: import('tabulator-tables').ColumnCalc | undefined;
                    bottomCalcParams?: ((values: any, data: any) => any) | {
                        precision: number;
                    } | undefined;
                    bottomCalcFormatter?: import('tabulator-tables').Formatter | undefined;
                    bottomCalcFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    headerSort?: boolean | undefined | undefined;
                    headerSortStartingDir?: import('tabulator-tables').SortDirection | undefined;
                    headerSortTristate?: boolean | undefined | undefined;
                    headerClick?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerDblClick?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerMouseDown?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerMouseUp?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerContext?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerTap?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerDblTap?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerTapHold?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerTooltip?: boolean | string | ((column: import('tabulator-tables').ColumnComponent) => string) | undefined | undefined;
                    headerVertical?: boolean | "flip" | undefined | undefined;
                    editableTitle?: boolean | undefined | undefined;
                    titleFormatter?: import('tabulator-tables').Formatter | undefined;
                    titleFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    headerFilter?: import('tabulator-tables').Editor | undefined;
                    headerFilterParams?: ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        step?: number | undefined | undefined;
                        verticalNavigation?: "editor" | "table" | undefined | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        tristate?: boolean | undefined | undefined;
                        indeterminateValue?: string | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        values?: string | true | any[] | string[] | import('tabulator-tables').JSONRecord | {
                            label: string;
                            value: string | number | boolean;
                        }[] | undefined;
                        valuesURL?: string | undefined;
                        valuesLookup?: import('tabulator-tables').RowRangeLookup | undefined;
                        valuesLookupField?: string | undefined;
                        clearable?: boolean | undefined;
                        itemFormatter?: ((label: string, value: string, item: any, element: HTMLElement) => string) | undefined | undefined;
                        sort?: import('tabulator-tables').SortDirection | undefined;
                        emptyValue?: any;
                        maxWidth?: boolean | undefined;
                        placeholderLoading?: string | undefined;
                        placeholderEmpty?: string | undefined;
                        multiselect?: boolean | undefined;
                        autocomplete?: boolean | undefined;
                        filterFunc?: ((term: string, label: string, value: string[], item: any) => any) | undefined | undefined;
                        filterRemote?: boolean | undefined;
                        filterDelay?: number | undefined;
                        allowEmpty?: boolean | undefined | undefined;
                        listOnEmpty?: boolean | undefined;
                        freetext?: boolean | undefined | undefined;
                        showListOnEmpty?: boolean | undefined | undefined;
                        verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                        defaultValue?: string | undefined | undefined;
                        sortValuesList?: "asc" | "desc" | undefined | undefined;
                    } | {
                        search?: boolean | undefined | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                        shiftEnterSubmit?: boolean | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        min?: string | undefined;
                        max?: string | undefined;
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | undefined;
                    headerFilterPlaceholder?: string | undefined | undefined;
                    headerFilterEmptyCheck?: import('tabulator-tables').ValueBooleanCallback | undefined;
                    headerFilterFunc?: import('tabulator-tables').FilterType | import('tabulator-tables').HeaderFilterFunc | undefined;
                    headerFilterFuncParams?: any;
                    headerFilterLiveFilter?: boolean | undefined | undefined;
                    htmlOutput?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    clipboard?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    print?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    columns?: /*elided*/ any[] | undefined;
                    headerMenu?: ((e: MouseEvent, component: import('tabulator-tables').ColumnComponent) => Array<import('tabulator-tables').MenuObject<import('tabulator-tables').ColumnComponent> | import('tabulator-tables').MenuSeparator>) | ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').ColumnComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    headerMenuIcon?: (string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => HTMLElement | string)) | undefined;
                    headerContextMenu?: ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').ColumnComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    headerDblClickPopup?: string | undefined;
                    dblClickPopup?: string | undefined;
                    contextMenu?: ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    clickMenu?: ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    headerDblClickMenu?: ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    dblClickMenu?: ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    cellPopup?: string | ((e: MouseEvent, component: import('tabulator-tables').RowComponent | import('tabulator-tables').CellComponent | import('tabulator-tables').ColumnComponent, onRendered: () => any) => any) | undefined;
                    formatterClipboard?: false | import('tabulator-tables').Formatter | undefined;
                    formatterClipboardParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    formatterPrint?: false | import('tabulator-tables').Formatter | undefined;
                    formatterPrintParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    accessorPrint?: import('tabulator-tables').CustomAccessor | undefined;
                    accessorPrintParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                    accessorHtmlOutput?: import('tabulator-tables').CustomAccessor | undefined;
                    accessorHtmlOutputParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                    formatterHtmlOutput?: false | import('tabulator-tables').Formatter | undefined;
                    formatterHtmlOutputParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    titleClipboard?: string | undefined | undefined;
                    titleHtmlOutput?: string | undefined | undefined;
                    titlePrint?: string | undefined | undefined;
                    maxWidth?: number | false | undefined | undefined;
                    headerWordWrap?: boolean | undefined;
                    editorEmptyValue?: any;
                    editorEmptyValueFunc?: ((value: unknown) => boolean) | undefined;
                    title: string;
                    field?: string | undefined | undefined;
                    visible?: boolean | undefined | undefined;
                    width?: number | string | undefined | undefined;
                    cellClick?: import('tabulator-tables').CellEventCallback | undefined;
                    cellDblClick?: import('tabulator-tables').CellEventCallback | undefined;
                    cellContext?: import('tabulator-tables').CellEventCallback | undefined;
                    cellTap?: import('tabulator-tables').CellEventCallback | undefined;
                    cellDblTap?: import('tabulator-tables').CellEventCallback | undefined;
                    cellTapHold?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseEnter?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseLeave?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseOver?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseOut?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseMove?: import('tabulator-tables').CellEventCallback | undefined;
                    cellEditing?: import('tabulator-tables').CellEditEventCallback | undefined;
                    cellEdited?: import('tabulator-tables').CellEditEventCallback | undefined;
                    cellEditCancelled?: import('tabulator-tables').CellEditEventCallback | undefined;
                    cellMouseDown?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseUp?: import('tabulator-tables').CellEventCallback | undefined;
                }[] | undefined;
                headerMenu?: ((e: MouseEvent, component: import('tabulator-tables').ColumnComponent) => Array<import('tabulator-tables').MenuObject<import('tabulator-tables').ColumnComponent> | import('tabulator-tables').MenuSeparator>) | ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').ColumnComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                headerMenuIcon?: (string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => HTMLElement | string)) | undefined;
                headerContextMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').ColumnComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                headerDblClickPopup?: string | undefined;
                dblClickPopup?: string | undefined;
                contextMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                clickMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                headerDblClickMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                dblClickMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                cellPopup?: string | ((e: MouseEvent, component: import('tabulator-tables').RowComponent | import('tabulator-tables').CellComponent | import('tabulator-tables').ColumnComponent, onRendered: () => any) => any) | undefined;
                formatterClipboard?: false | import('tabulator-tables').Formatter | undefined;
                formatterClipboardParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                formatterPrint?: false | import('tabulator-tables').Formatter | undefined;
                formatterPrintParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                accessorPrint?: import('tabulator-tables').CustomAccessor | undefined;
                accessorPrintParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                accessorHtmlOutput?: import('tabulator-tables').CustomAccessor | undefined;
                accessorHtmlOutputParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                formatterHtmlOutput?: false | import('tabulator-tables').Formatter | undefined;
                formatterHtmlOutputParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                titleClipboard?: string | undefined | undefined;
                titleHtmlOutput?: string | undefined | undefined;
                titlePrint?: string | undefined | undefined;
                maxWidth?: number | false | undefined | undefined;
                headerWordWrap?: boolean | undefined;
                editorEmptyValue?: any;
                editorEmptyValueFunc?: ((value: unknown) => boolean) | undefined;
                title?: string | undefined;
                field?: string | undefined | undefined;
                visible?: boolean | undefined | undefined;
                width?: number | string | undefined | undefined;
                cellClick?: import('tabulator-tables').CellEventCallback | undefined;
                cellDblClick?: import('tabulator-tables').CellEventCallback | undefined;
                cellContext?: import('tabulator-tables').CellEventCallback | undefined;
                cellTap?: import('tabulator-tables').CellEventCallback | undefined;
                cellDblTap?: import('tabulator-tables').CellEventCallback | undefined;
                cellTapHold?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseEnter?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseLeave?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseOver?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseOut?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseMove?: import('tabulator-tables').CellEventCallback | undefined;
                cellEditing?: import('tabulator-tables').CellEditEventCallback | undefined;
                cellEdited?: import('tabulator-tables').CellEditEventCallback | undefined;
                cellEditCancelled?: import('tabulator-tables').CellEditEventCallback | undefined;
                cellMouseDown?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseUp?: import('tabulator-tables').CellEventCallback | undefined;
            } | undefined;
            resizableColumnFit?: boolean | undefined | undefined;
            rowFormatter?: ((row: import('tabulator-tables').RowComponent) => any) | undefined | undefined;
            rowFormatterPrint?: false | ((row: import('tabulator-tables').RowComponent) => any) | undefined | undefined;
            rowFormatterHtmlOutput?: false | ((row: import('tabulator-tables').RowComponent) => any) | undefined | undefined;
            rowFormatterClipboard?: false | ((row: import('tabulator-tables').RowComponent) => any) | undefined | undefined;
            addRowPos?: "bottom" | "top" | undefined | undefined;
            selectableRows?: boolean | number | "highlight" | undefined | undefined;
            selectableRange?: boolean | number | undefined;
            selectableRangeColumns?: boolean | undefined;
            selectableRangeRows?: boolean | undefined;
            selectableRangeClearCells?: boolean | undefined;
            selectableRangeClearCellsValue?: unknown;
            selectableRowsRangeMode?: "click" | undefined;
            selectableRowsRollingSelection?: boolean | undefined;
            selectableRowsPersistence?: boolean | undefined;
            selectableRowsCheck?: ((row: import('tabulator-tables').RowComponent) => boolean) | undefined | undefined;
            movableRows?: boolean | undefined | undefined;
            movableRowsConnectedTables?: string | string[] | HTMLElement | HTMLElement[] | undefined;
            movableRowsSender?: false | "delete" | ((fromRow: import('tabulator-tables').RowComponent, toRow: import('tabulator-tables').RowComponent, toTable: import('tabulator-tables').Tabulator) => any) | undefined | undefined;
            movableRowsReceiver?: "insert" | "add" | "update" | "replace" | ((fromRow: import('tabulator-tables').RowComponent, toRow: import('tabulator-tables').RowComponent, fromTable: import('tabulator-tables').Tabulator) => any) | undefined | undefined;
            movableRowsConnectedElements?: string | HTMLElement | undefined;
            resizableRows?: boolean | undefined | undefined;
            resizableRowGuide?: boolean | undefined | undefined;
            resizableColumnGuide?: boolean | undefined | undefined;
            scrollToRowPosition?: import('tabulator-tables').ScrollToRowPosition | undefined;
            scrollToRowIfVisible?: boolean | undefined | undefined;
            tabEndNewRow?: boolean | import('tabulator-tables').JSONRecord | ((row: import('tabulator-tables').RowComponent) => any) | undefined;
            frozenRowsField?: string | undefined;
            frozenRows?: number | string[] | ((row: import('tabulator-tables').RowComponent) => boolean) | undefined;
            editTriggerEvent?: "click" | "dblclick" | "focus" | undefined;
            index?: number | string | undefined | undefined;
            data?: any[] | undefined | undefined;
            importFormat?: "array" | "csv" | "json" | ((fileContents: string) => unknown[]) | undefined;
            importReader?: "binary" | "buffer" | "text" | "url" | undefined | undefined;
            autoTables?: boolean | undefined;
            ajaxURL?: string | undefined | undefined;
            ajaxParams?: {} | undefined | undefined;
            ajaxConfig?: import('tabulator-tables').HttpMethod | {
                method?: import('tabulator-tables').HttpMethod | undefined;
                headers?: import('tabulator-tables').JSONRecord | undefined;
                mode?: string | undefined | undefined;
                credentials?: string | undefined | undefined;
            } | undefined;
            ajaxContentType?: "form" | "json" | {
                headers: import('tabulator-tables').JSONRecord;
                body: (url: string, config: any, params: any) => any;
            } | undefined;
            ajaxURLGenerator?: ((url: string, config: any, params: any) => string) | undefined | undefined;
            ajaxRequestFunc?: ((url: string, config: any, params: any) => Promise<any>) | undefined | undefined;
            ajaxFiltering?: boolean | undefined | undefined;
            ajaxSorting?: boolean | undefined | undefined;
            progressiveLoad?: "load" | "scroll" | undefined | undefined;
            progressiveLoadDelay?: number | undefined | undefined;
            progressiveLoadScrollMargin?: number | undefined | undefined;
            ajaxLoader?: boolean | (() => boolean) | undefined | undefined;
            ajaxLoaderLoading?: string | undefined | undefined;
            ajaxLoaderError?: string | undefined | undefined;
            ajaxRequesting?: ((url: string, params: any) => boolean) | undefined | undefined;
            ajaxResponse?: ((url: string, params: any, response: any) => any) | undefined | undefined;
            dataLoader?: boolean | undefined;
            dataLoaderLoading?: (string | HTMLElement) | undefined;
            dataLoaderError?: string | undefined;
            dataLoaderErrorTimeout?: number | undefined;
            sortMode?: import('tabulator-tables').SortMode | undefined;
            filterMode?: import('tabulator-tables').SortMode | undefined;
            initialSort?: {
                column: string;
                dir: import('tabulator-tables').SortDirection;
            }[] | undefined;
            sortOrderReverse?: boolean | undefined | undefined;
            headerSortClickElement?: "header" | "icon" | undefined;
            initialFilter?: {
                field: string;
                type: import('tabulator-tables').FilterType;
                value: any;
            }[] | undefined;
            initialHeaderFilter?: {
                field: string;
                value: any;
            }[] | undefined;
            headerFilterLiveFilterDelay?: number | undefined | undefined;
            groupBy?: import('tabulator-tables').GroupArg | undefined;
            groupValues?: any[][] | undefined;
            groupHeader?: ((value: any, count: number, data: any, group: import('tabulator-tables').GroupComponent) => string) | ((value: any, count: number, data: any) => string)[] | undefined;
            groupHeaderPrint?: ((value: any, count: number, data: any, group: import('tabulator-tables').GroupComponent) => string) | ((value: any, count: number, data: any) => string)[] | undefined;
            groupStartOpen?: boolean | boolean[] | ((value: any, count: number, data: any, group: import('tabulator-tables').GroupComponent) => boolean) | (boolean | ((value: any, count: number, data: any, group: import('tabulator-tables').GroupComponent) => boolean))[] | undefined;
            groupToggleElement?: "arrow" | "header" | false | undefined | undefined;
            groupClosedShowCalcs?: boolean | undefined | undefined;
            groupUpdateOnCellEdit?: boolean | undefined | undefined;
            pagination?: boolean | undefined;
            paginationMode?: import('tabulator-tables').SortMode | undefined;
            paginationSize?: number | true | undefined | undefined;
            paginationSizeSelector?: true | number[] | any[] | undefined | undefined;
            paginationElement?: string | HTMLElement | undefined;
            dataReceiveParams?: Record<string, string> | undefined;
            dataSendParams?: Record<string, string> | undefined;
            paginationAddRow?: "table" | "page" | undefined | undefined;
            paginationCounter?: "rows" | "pages" | ((pageSize: number, currentRow: number, currentPage: number, totalRows: number, totalPages: number) => string | HTMLElement) | undefined;
            paginationCounterElement?: string | HTMLElement | undefined;
            paginationButtonCount?: number | undefined | undefined;
            paginationInitialPage?: number | undefined | undefined;
            persistenceID?: string | undefined | undefined;
            persistenceMode?: "local" | "cookie" | true | undefined | undefined;
            persistentLayout?: boolean | undefined | undefined;
            persistentSort?: boolean | undefined | undefined;
            persistentFilter?: boolean | undefined | undefined;
            persistence?: true | {
                sort?: boolean | undefined | undefined;
                filter?: boolean | undefined | undefined;
                group?: boolean | {
                    groupBy?: boolean | undefined | undefined;
                    groupStartOpen?: boolean | undefined | undefined;
                    groupHeader?: boolean | undefined | undefined;
                } | undefined;
                page?: boolean | {
                    size?: boolean | undefined | undefined;
                    page?: boolean | undefined | undefined;
                } | undefined;
                columns?: boolean | string[] | undefined | undefined;
                headerFilter?: boolean | undefined | undefined;
            } | undefined;
            persistenceWriterFunc?: ((id: string, type: keyof import('tabulator-tables').PersistenceOptions, data: any) => any) | undefined | undefined;
            persistenceReaderFunc?: ((id: string, type: keyof import('tabulator-tables').PersistenceOptions) => any) | undefined | undefined;
            clipboard?: boolean | "copy" | "paste" | undefined | undefined;
            clipboardCopyRowRange?: import('tabulator-tables').RowRangeLookup | undefined;
            clipboardCopyFormatter?: "table" | ((type: "plain" | "html", output: string) => string) | undefined | undefined;
            clipboardCopyHeader?: boolean | undefined | undefined;
            clipboardPasteParser?: string | ((clipboard: any) => any[]) | undefined | undefined;
            clipboardPasteAction?: "insert" | "update" | "replace" | "range" | undefined;
            clipboardCopyStyled?: boolean | undefined | undefined;
            clipboardCopyConfig?: boolean | {
                columnHeaders?: boolean | undefined | undefined;
                columnGroups?: boolean | undefined | undefined;
                rowGroups?: boolean | undefined | undefined;
                columnCalcs?: boolean | undefined | undefined;
                dataTree?: boolean | undefined | undefined;
                rowHeaders?: boolean | undefined | undefined;
                formatCells?: boolean | undefined | undefined;
            } | undefined;
            groupHeaderClipboard?: ((value: any, count: number, data: any, group: import('tabulator-tables').GroupComponent) => string) | ((value: any, count: number, data: any) => string)[] | undefined;
            groupHeaderHtmlOutput?: ((value: any, count: number, data: any, group: import('tabulator-tables').GroupComponent) => string) | ((value: any, count: number, data: any) => string)[] | undefined;
            dataTree?: boolean | undefined | undefined;
            dataTreeElementColumn?: boolean | string | undefined | undefined;
            dataTreeBranchElement?: boolean | string | undefined | undefined;
            dataTreeChildIndent?: number | undefined | undefined;
            dataTreeChildField?: string | undefined | undefined;
            dataTreeCollapseElement?: string | boolean | HTMLElement | undefined;
            dataTreeExpandElement?: string | boolean | HTMLElement | undefined;
            dataTreeStartExpanded?: boolean | boolean[] | ((row: import('tabulator-tables').RowComponent, level: number) => boolean) | undefined | undefined;
            dataTreeSelectPropagate?: boolean | undefined | undefined;
            dataTreeFilter?: boolean | undefined | undefined;
            dataTreeSort?: boolean | undefined | undefined;
            dataTreeChildColumnCalcs?: boolean | undefined | undefined;
            invalidOptionWarning?: boolean | undefined;
            debugInvalidOptions?: boolean | undefined;
            debugInitialization?: boolean | undefined;
            debugEventsExternal?: boolean | undefined;
            debugEventsInternal?: boolean | undefined;
            debugInvalidComponentFuncs?: boolean | undefined;
            debugDeprecation?: boolean | undefined;
            htmlOutputConfig?: {
                columnHeaders?: boolean | undefined | undefined;
                columnGroups?: boolean | undefined | undefined;
                rowGroups?: boolean | undefined | undefined;
                columnCalcs?: boolean | undefined | undefined;
                dataTree?: boolean | undefined | undefined;
                rowHeaders?: boolean | undefined | undefined;
                formatCells?: boolean | undefined | undefined;
            } | undefined;
            printAsHtml?: boolean | undefined | undefined;
            printConfig?: {
                columnHeaders?: boolean | undefined | undefined;
                columnGroups?: boolean | undefined | undefined;
                rowGroups?: boolean | undefined | undefined;
                columnCalcs?: boolean | undefined | undefined;
                dataTree?: boolean | undefined | undefined;
                rowHeaders?: boolean | undefined | undefined;
                formatCells?: boolean | undefined | undefined;
            } | undefined;
            printStyled?: boolean | undefined | undefined;
            printRowRange?: import('tabulator-tables').RowRangeLookup | (() => import('tabulator-tables').RowComponent[]) | undefined;
            printHeader?: import('tabulator-tables').StandardStringParam | undefined;
            printFooter?: import('tabulator-tables').StandardStringParam | undefined;
            printFormatter?: ((tableHolderElement: any, tableElement: any) => any) | undefined | undefined;
            groupHeaderDownload?: ((value: any, count: number, data: any, group: import('tabulator-tables').GroupComponent) => string) | ((value: any, count: number, data: any) => string)[] | undefined;
            spreadsheet?: boolean | undefined | undefined;
            spreadsheetRows?: number | undefined;
            spreadsheetColumns?: number | undefined;
            spreadsheetColumnDefinition?: {
                editor: string;
                resizable: string;
            } | undefined;
            spreadsheetSheets?: {
                title: string;
                key: string;
                rows?: number | undefined;
                columns?: number | undefined;
                data: unknown[][];
            }[] | undefined;
            spreadsheetSheetTabs?: boolean | undefined | undefined;
            spreadsheetOutputFull?: boolean | undefined | undefined;
        };
        element: HTMLElement;
        download: (downloadType: import('tabulator-tables').DownloadType | ((columns: import('tabulator-tables').ColumnDefinition[], data: any, options: any, setFileContents: any) => any), fileName: string, params?: import('tabulator-tables').DownloadOptions, filter?: import('tabulator-tables').RowRangeLookup) => void;
        downloadToTab: (downloadType: import('tabulator-tables').DownloadType, fileName: string, params?: import('tabulator-tables').DownloadOptions) => void;
        import: (data: any, extension: string | string[], format?: "buffer" | "binary" | "url" | "text") => any;
        copyToClipboard: (rowRangeLookup?: import('tabulator-tables').RowRangeLookup) => void;
        undo: () => boolean;
        getHistoryUndoSize: () => number | false;
        redo: () => boolean;
        getHistoryRedoSize: () => number | false;
        getEditedCells: () => import('tabulator-tables').CellComponent[];
        clearCellEdited: (clear?: import('tabulator-tables').CellComponent | import('tabulator-tables').CellComponent[]) => void;
        alert: (message: string) => void;
        clearAlert: () => void;
        destroy: () => void;
        setData: (data?: any, params?: any, config?: any) => Promise<void>;
        clearData: () => void;
        getData: (activeOnly?: import('tabulator-tables').RowRangeLookup) => any[];
        getDataCount: (activeOnly?: import('tabulator-tables').RowRangeLookup) => number;
        searchRows: (field: string, type: import('tabulator-tables').FilterType, value: any) => import('tabulator-tables').RowComponent[];
        searchData: (field: string, type: import('tabulator-tables').FilterType, value: any) => any[];
        getHtml: (rowRangeLookup?: import('tabulator-tables').RowRangeLookup, style?: boolean, config?: import('tabulator-tables').AdditionalExportOptions) => any;
        print: (rowRangeLookup?: import('tabulator-tables').RowRangeLookup, style?: boolean, config?: import('tabulator-tables').AdditionalExportOptions) => any;
        getAjaxUrl: () => string;
        replaceData: (data?: Array<{}> | string, params?: any, config?: any) => Promise<void>;
        updateData: (data: Array<{}>) => Promise<void>;
        addData: (data?: Array<{}>, addToTop?: boolean, positionTarget?: import('tabulator-tables').RowLookup) => Promise<import('tabulator-tables').RowComponent[]>;
        updateOrAddData: (data: Array<{}>) => Promise<import('tabulator-tables').RowComponent[]>;
        getRow: (row: import('tabulator-tables').RowLookup) => import('tabulator-tables').RowComponent;
        getRowFromPosition: (position: number, activeOnly?: boolean) => import('tabulator-tables').RowComponent;
        deleteRow: (index: import('tabulator-tables').RowLookup | import('tabulator-tables').RowLookup[]) => Promise<void>;
        addRow: (data?: {}, addToTop?: boolean, positionTarget?: import('tabulator-tables').RowLookup) => Promise<import('tabulator-tables').RowComponent>;
        updateOrAddRow: (row: import('tabulator-tables').RowLookup, data: {}) => Promise<import('tabulator-tables').RowComponent>;
        updateRow: (row: import('tabulator-tables').RowLookup, data: {}) => boolean;
        scrollToRow: (row: import('tabulator-tables').RowLookup, position?: import('tabulator-tables').ScrollToRowPosition, ifVisible?: boolean) => Promise<void>;
        moveRow: (fromRow: import('tabulator-tables').RowLookup, toRow: import('tabulator-tables').RowLookup, placeAboveTarget?: boolean) => void;
        getRows: (activeOnly?: import('tabulator-tables').RowRangeLookup) => import('tabulator-tables').RowComponent[];
        getRowPosition: (row: import('tabulator-tables').RowLookup, activeOnly?: boolean) => number | false;
        setColumns: (definitions: import('tabulator-tables').ColumnDefinition[]) => void;
        getColumns: (includeColumnGroups?: boolean) => import('tabulator-tables').ColumnComponent[];
        getColumn: (column: import('tabulator-tables').ColumnLookup) => import('tabulator-tables').ColumnComponent;
        getColumnDefinitions: () => import('tabulator-tables').ColumnDefinition[];
        getColumnLayout: () => import('tabulator-tables').ColumnLayout[];
        setColumnLayout: (layout: import('tabulator-tables').ColumnLayout[]) => void;
        showColumn: (column?: import('tabulator-tables').ColumnLookup) => void;
        hideColumn: (column?: import('tabulator-tables').ColumnLookup) => void;
        toggleColumn: (column?: import('tabulator-tables').ColumnLookup) => void;
        addColumn: (definition: import('tabulator-tables').ColumnDefinition, insertRightOfTarget?: boolean, positionTarget?: import('tabulator-tables').ColumnLookup) => Promise<void>;
        deleteColumn: (column: import('tabulator-tables').ColumnLookup) => Promise<void>;
        moveColumn: (fromColumn: import('tabulator-tables').ColumnLookup, toColumn: import('tabulator-tables').ColumnLookup, after: boolean) => void;
        scrollToColumn: (column: import('tabulator-tables').ColumnLookup, position?: import('tabulator-tables').ScrollToColumnPosition, ifVisible?: boolean) => Promise<void>;
        updateColumnDefinition: (column: import('tabulator-tables').ColumnLookup, definition: import('tabulator-tables').ColumnDefinition) => Promise<void>;
        setLocale: (locale: string | boolean) => void;
        getLocale: () => string;
        getLang: (locale?: string) => any;
        redraw: (force?: boolean) => void;
        blockRedraw: () => void;
        restoreRedraw: () => void;
        setHeight: (height: number | string) => void;
        setSort: (sortList: string | import('tabulator-tables').Sorter[], dir?: import('tabulator-tables').SortDirection) => void;
        getSorters: () => import('tabulator-tables').SorterFromTable[];
        clearSort: () => void;
        setFilter: (p1: string | import('tabulator-tables').Filter[] | any[] | ((data: any, filterParams: any) => boolean), p2?: import('tabulator-tables').FilterType | {}, value?: any, filterParams?: import('tabulator-tables').FilterParams) => void;
        addFilter: import('tabulator-tables').FilterFunction;
        getFilters: (includeHeaderFilters?: boolean) => import('tabulator-tables').Filter[];
        setHeaderFilterValue: (column: import('tabulator-tables').ColumnLookup, value: string) => void;
        setHeaderFilterFocus: (column: import('tabulator-tables').ColumnLookup) => void;
        getHeaderFilters: () => import('tabulator-tables').Filter[];
        getHeaderFilterValue: (column: import('tabulator-tables').ColumnLookup) => string;
        removeFilter: import('tabulator-tables').FilterFunction;
        clearFilter: (includeHeaderFilters: boolean) => void;
        clearHeaderFilter: () => void;
        selectRow: (lookup?: import('tabulator-tables').RowLookup[] | import('tabulator-tables').RowLookup | import('tabulator-tables').RowRangeLookup | true) => void;
        deselectRow: (row?: import('tabulator-tables').RowLookup[] | import('tabulator-tables').RowLookup) => void;
        toggleSelectRow: (row?: import('tabulator-tables').RowLookup) => void;
        getSelectedRows: () => import('tabulator-tables').RowComponent[];
        getSelectedData: () => any[];
        setMaxPage: (max: number) => void;
        setPage: (page: number | "first" | "prev" | "next" | "last") => Promise<void>;
        setPageToRow: (row: import('tabulator-tables').RowLookup) => Promise<void>;
        setPageSize: (size: number | true) => void;
        getPageSize: () => number | true;
        previousPage: () => Promise<void>;
        nextPage: () => Promise<void>;
        getPage: () => number | false;
        getPageMax: () => number | false;
        setGroupBy: (groups: import('tabulator-tables').GroupArg) => void;
        setGroupStartOpen: (values: boolean | boolean[] | ((value: any, count: number, data: any, group: import('tabulator-tables').GroupComponent) => boolean) | Array<boolean | ((value: any, count: number, data: any, group: import('tabulator-tables').GroupComponent) => boolean)>) => void;
        setGroupHeader: (values: ((value: any, count: number, data: any, group: import('tabulator-tables').GroupComponent) => string) | Array<(value: any, count: number, data: any) => string>) => void;
        getGroups: () => import('tabulator-tables').GroupComponent[];
        getGroupedData: (activeOnly?: boolean) => any;
        getCalcResults: () => any;
        recalc: () => void;
        navigatePrev: () => void;
        navigateNext: () => void;
        navigateLeft: () => void;
        navigateRight: () => void;
        navigateUp: () => void;
        navigateDown: () => void;
        getInvalidCells: () => import('tabulator-tables').CellComponent[];
        clearCellValidation: (clearType?: import('tabulator-tables').CellComponent | import('tabulator-tables').CellComponent[]) => void;
        validate: () => true | import('tabulator-tables').CellComponent[];
        setGroupValues: (data: import('tabulator-tables').GroupValuesArg) => void;
        refreshFilter: () => void;
        clearHistory: () => void;
        addRange: (topLeft: import('tabulator-tables').CellComponent, bottomRight: import('tabulator-tables').CellComponent) => import('tabulator-tables').RangeComponent;
        getRanges: () => import('tabulator-tables').RangeComponent[];
        getRangesData: () => unknown[][];
        setSheets: (data: import('tabulator-tables').SpreadsheetSheet[]) => void;
        addSheet: (data: import('tabulator-tables').SpreadsheetSheet) => void;
        getSheetDefinitions: () => import('tabulator-tables').SpreadsheetSheet[];
        getSheets: () => import('tabulator-tables').SpreadsheetComponent[];
        getSheet: (lookup: string | import('tabulator-tables').SpreadsheetComponent) => import('tabulator-tables').SpreadsheetComponent;
        setSheetData: (lookup: string | import('tabulator-tables').SpreadsheetComponent, data: unknown[][]) => void;
        getSheetData: (lookup: string | import('tabulator-tables').SpreadsheetComponent) => unknown[][];
        clearSheet: (lookup: string | import('tabulator-tables').SpreadsheetComponent) => void;
        activeSheet: (lookup: string | import('tabulator-tables').SpreadsheetComponent) => void;
        removeSheet: (lookup: string | import('tabulator-tables').SpreadsheetComponent) => void;
        on: <K extends keyof import('tabulator-tables').EventCallBackMethods>(event: K, callback?: import('tabulator-tables').EventCallBackMethods[K]) => void;
        off: <K extends keyof import('tabulator-tables').EventCallBackMethods>(event: K, callback?: import('tabulator-tables').EventCallBackMethods[K]) => void;
    } | null, Tabulator | {
        columnManager: any;
        rowManager: any;
        footerManager: any;
        browser: string;
        browserSlow: boolean;
        modules: any;
        options: {
            height?: string | number | false | undefined | undefined;
            maxHeight?: string | number | undefined | undefined;
            minHeight?: string | number | undefined | undefined;
            renderVertical?: import('tabulator-tables').RenderMode | undefined;
            renderHorizontal?: import('tabulator-tables').RenderMode | undefined;
            rowHeight?: number | undefined;
            renderVerticalBuffer?: boolean | number | undefined | undefined;
            placeholder?: string | HTMLElement | ((this: import('tabulator-tables').Tabulator | Tabulator) => string) | undefined;
            placeholderHeaderFilter?: string | HTMLElement | ((this: import('tabulator-tables').Tabulator | Tabulator) => string) | undefined;
            footerElement?: string | HTMLElement | undefined;
            keybindings?: false | {
                navPrev?: string | boolean | undefined | undefined;
                navNext?: string | boolean | undefined | undefined;
                navLeft?: string | boolean | undefined | undefined;
                navRight?: string | boolean | undefined | undefined;
                navUp?: string | boolean | undefined | undefined;
                navDown?: string | boolean | undefined | undefined;
                undo?: string | boolean | undefined | undefined;
                redo?: string | boolean | undefined | undefined;
                scrollPageUp?: string | boolean | undefined | undefined;
                scrollPageDown?: string | boolean | undefined | undefined;
                scrollToStart?: string | boolean | undefined | undefined;
                scrollToEnd?: string | boolean | undefined | undefined;
                copyToClipboard?: string | boolean | undefined | undefined;
            } | undefined;
            reactiveData?: boolean | undefined | undefined;
            autoResize?: boolean | undefined | undefined;
            invalidOptionWarnings?: boolean | undefined | undefined;
            validationMode?: "blocking" | "highlight" | "manual" | undefined | undefined;
            textDirection?: import('tabulator-tables').TextDirection | undefined;
            rowHeader?: boolean | {
                formatter?: string | undefined;
                field?: string | undefined;
                headerSort?: boolean | undefined;
                hozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                headerHozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                resizable?: boolean | undefined;
                frozen?: boolean | undefined;
                titleFormatter?: string | undefined;
                cellClick?: ((e: MouseEvent, cell: import('tabulator-tables').CellComponent) => void) | undefined;
                minWidth?: number | undefined;
                width?: number | undefined;
                rowHandle?: boolean | undefined;
            } | undefined;
            editorEmptyValue?: any;
            editorEmptyValueFunc?: ((value: unknown) => boolean) | undefined;
            rowContextMenu?: ((e: MouseEvent, component: import('tabulator-tables').RowComponent) => import('tabulator-tables').MenuObject<import('tabulator-tables').RowComponent> | false | any[]) | ({
                label: string | HTMLElement | ((component: import('tabulator-tables').RowComponent) => string | HTMLElement);
                action?: ((e: any, component: import('tabulator-tables').RowComponent) => any) | undefined;
                disabled?: boolean | ((component: import('tabulator-tables').RowComponent) => boolean) | undefined;
                menu?: /*elided*/ any[] | undefined;
            } | {
                separator?: boolean | undefined | undefined;
            })[] | undefined;
            rowClickMenu?: ((e: MouseEvent, component: import('tabulator-tables').RowComponent) => import('tabulator-tables').MenuObject<import('tabulator-tables').RowComponent> | false | any[]) | ({
                label: string | HTMLElement | ((component: import('tabulator-tables').RowComponent) => string | HTMLElement);
                action?: ((e: any, component: import('tabulator-tables').RowComponent) => any) | undefined;
                disabled?: boolean | ((component: import('tabulator-tables').RowComponent) => boolean) | undefined;
                menu?: /*elided*/ any[] | undefined;
            } | {
                separator?: boolean | undefined | undefined;
            })[] | undefined;
            rowDblClickMenu?: ((e: MouseEvent, component: import('tabulator-tables').RowComponent) => import('tabulator-tables').MenuObject<import('tabulator-tables').RowComponent> | false | any[]) | ({
                label: string | HTMLElement | ((component: import('tabulator-tables').RowComponent) => string | HTMLElement);
                action?: ((e: any, component: import('tabulator-tables').RowComponent) => any) | undefined;
                disabled?: boolean | ((component: import('tabulator-tables').RowComponent) => boolean) | undefined;
                menu?: /*elided*/ any[] | undefined;
            } | {
                separator?: boolean | undefined | undefined;
            })[] | undefined;
            groupClickMenu?: ((e: MouseEvent, component: import('tabulator-tables').GroupComponent) => import('tabulator-tables').MenuObject<import('tabulator-tables').GroupComponent> | false | any[]) | ({
                separator?: boolean | undefined | undefined;
            } | {
                label: string | HTMLElement | ((component: import('tabulator-tables').GroupComponent) => string | HTMLElement);
                action?: ((e: any, component: import('tabulator-tables').GroupComponent) => any) | undefined;
                disabled?: boolean | ((component: import('tabulator-tables').GroupComponent) => boolean) | undefined;
                menu?: /*elided*/ any[] | undefined;
            })[] | undefined;
            groupDblClickMenu?: ((e: MouseEvent, component: import('tabulator-tables').GroupComponent) => import('tabulator-tables').MenuObject<import('tabulator-tables').GroupComponent> | false | any[]) | ({
                separator?: boolean | undefined | undefined;
            } | {
                label: string | HTMLElement | ((component: import('tabulator-tables').GroupComponent) => string | HTMLElement);
                action?: ((e: any, component: import('tabulator-tables').GroupComponent) => any) | undefined;
                disabled?: boolean | ((component: import('tabulator-tables').GroupComponent) => boolean) | undefined;
                menu?: /*elided*/ any[] | undefined;
            })[] | undefined;
            groupContextMenu?: {
                label: string | HTMLElement | ((component: import('tabulator-tables').GroupComponent) => string | HTMLElement);
                action?: ((e: any, component: import('tabulator-tables').GroupComponent) => any) | undefined;
                disabled?: boolean | ((component: import('tabulator-tables').GroupComponent) => boolean) | undefined;
                menu?: /*elided*/ any[] | undefined;
            }[] | undefined;
            popupContainer?: (boolean | string | HTMLElement) | undefined;
            groupClickPopup?: string | undefined;
            groupContextPopup?: string | undefined;
            groupDblPopup?: string | undefined;
            groupDblClickPopup?: string | undefined;
            rowClickPopup?: string | undefined;
            rowContextPopup?: string | undefined;
            rowDblClickPopup?: string | undefined;
            history?: boolean | undefined | undefined;
            locale?: boolean | string | undefined | undefined;
            langs?: any;
            downloadEncoder?: ((fileContents: any, mimeType: string) => Blob | false) | undefined | undefined;
            downloadConfig?: {
                columnHeaders?: boolean | undefined | undefined;
                columnGroups?: boolean | undefined | undefined;
                rowGroups?: boolean | undefined | undefined;
                columnCalcs?: boolean | undefined | undefined;
                dataTree?: boolean | undefined | undefined;
                rowHeaders?: boolean | undefined | undefined;
                formatCells?: boolean | undefined | undefined;
            } | undefined;
            downloadRowRange?: import('tabulator-tables').RowRangeLookup | undefined;
            downloadDataFormatter?: ((data: any) => any) | undefined;
            downloadReady?: ((fileContents: any, blob: Blob) => Blob | false) | undefined;
            columns?: {
                hozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                headerHozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                vertAlign?: import('tabulator-tables').VerticalAlign | undefined;
                minWidth?: number | undefined | undefined;
                widthGrow?: number | undefined | undefined;
                widthShrink?: number | undefined | undefined;
                resizable?: true | false | "header" | "cell" | undefined | undefined;
                frozen?: boolean | undefined | undefined;
                responsive?: number | undefined | undefined;
                tooltip?: string | import('tabulator-tables').GlobalTooltipOption | undefined;
                cssClass?: string | undefined | undefined;
                rowHandle?: boolean | undefined | undefined;
                hideInHtml?: boolean | undefined | undefined;
                sorter?: "string" | "number" | "alphanum" | "boolean" | "exists" | "date" | "time" | "datetime" | "array" | ((a: any, b: any, aRow: import('tabulator-tables').RowComponent, bRow: import('tabulator-tables').RowComponent, column: import('tabulator-tables').ColumnComponent, dir: import('tabulator-tables').SortDirection, sorterParams: {}) => number) | undefined | undefined;
                sorterParams?: import('tabulator-tables').ColumnSorterParamLookupFunction | {
                    format?: string | undefined | undefined;
                    locale?: string | boolean | undefined | undefined;
                    alignEmptyValues?: "top" | "bottom" | undefined | undefined;
                    type?: "length" | "sum" | "max" | "min" | "avg" | undefined | undefined;
                } | undefined;
                formatter?: import('tabulator-tables').Formatter | undefined;
                formatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                variableHeight?: boolean | undefined | undefined;
                editable?: boolean | ((cell: import('tabulator-tables').CellComponent) => boolean) | undefined | undefined;
                editor?: import('tabulator-tables').Editor | undefined;
                editorParams?: ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    step?: number | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    tristate?: boolean | undefined | undefined;
                    indeterminateValue?: string | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    values?: string | true | any[] | string[] | import('tabulator-tables').JSONRecord | {
                        label: string;
                        value: string | number | boolean;
                    }[] | undefined;
                    valuesURL?: string | undefined;
                    valuesLookup?: import('tabulator-tables').RowRangeLookup | undefined;
                    valuesLookupField?: string | undefined;
                    clearable?: boolean | undefined;
                    itemFormatter?: ((label: string, value: string, item: any, element: HTMLElement) => string) | undefined | undefined;
                    sort?: import('tabulator-tables').SortDirection | undefined;
                    emptyValue?: any;
                    maxWidth?: boolean | undefined;
                    placeholderLoading?: string | undefined;
                    placeholderEmpty?: string | undefined;
                    multiselect?: boolean | undefined;
                    autocomplete?: boolean | undefined;
                    filterFunc?: ((term: string, label: string, value: string[], item: any) => any) | undefined | undefined;
                    filterRemote?: boolean | undefined;
                    filterDelay?: number | undefined;
                    allowEmpty?: boolean | undefined | undefined;
                    listOnEmpty?: boolean | undefined;
                    freetext?: boolean | undefined | undefined;
                    showListOnEmpty?: boolean | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                    defaultValue?: string | undefined | undefined;
                    sortValuesList?: "asc" | "desc" | undefined | undefined;
                } | {
                    search?: boolean | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    shiftEnterSubmit?: boolean | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    min?: string | undefined;
                    max?: string | undefined;
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | undefined;
                validator?: string | import('tabulator-tables').StandardValidatorType[] | {
                    type: import('tabulator-tables').StandardValidatorType | ((cell: import('tabulator-tables').CellComponent, value: any, parameters?: any) => boolean);
                    parameters?: any;
                } | {
                    type: import('tabulator-tables').StandardValidatorType | ((cell: import('tabulator-tables').CellComponent, value: any, parameters?: any) => boolean);
                    parameters?: any;
                }[] | undefined;
                mutator?: import('tabulator-tables').CustomMutator | undefined;
                mutatorParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                mutatorData?: import('tabulator-tables').CustomMutator | undefined;
                mutatorDataParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                mutatorEdit?: import('tabulator-tables').CustomMutator | undefined;
                mutatorEditParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                mutatorClipboard?: import('tabulator-tables').CustomMutator | undefined;
                mutatorClipboardParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                accessor?: "rownum" | import('tabulator-tables').CustomAccessor | undefined;
                accessorParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                accessorDownload?: import('tabulator-tables').CustomAccessor | undefined;
                accessorDownloadParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                accessorClipboard?: import('tabulator-tables').CustomAccessor | undefined;
                accessorClipboardParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                download?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                titleDownload?: string | undefined | undefined;
                topCalc?: import('tabulator-tables').ColumnCalc | undefined;
                topCalcParams?: ((values: any, data: any) => any) | {
                    precision: number;
                } | undefined;
                topCalcFormatter?: import('tabulator-tables').Formatter | undefined;
                topCalcFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                bottomCalc?: import('tabulator-tables').ColumnCalc | undefined;
                bottomCalcParams?: ((values: any, data: any) => any) | {
                    precision: number;
                } | undefined;
                bottomCalcFormatter?: import('tabulator-tables').Formatter | undefined;
                bottomCalcFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                headerSort?: boolean | undefined | undefined;
                headerSortStartingDir?: import('tabulator-tables').SortDirection | undefined;
                headerSortTristate?: boolean | undefined | undefined;
                headerClick?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerDblClick?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerMouseDown?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerMouseUp?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerContext?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerTap?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerDblTap?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerTapHold?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerTooltip?: boolean | string | ((column: import('tabulator-tables').ColumnComponent) => string) | undefined | undefined;
                headerVertical?: boolean | "flip" | undefined | undefined;
                editableTitle?: boolean | undefined | undefined;
                titleFormatter?: import('tabulator-tables').Formatter | undefined;
                titleFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                headerFilter?: import('tabulator-tables').Editor | undefined;
                headerFilterParams?: ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    step?: number | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    tristate?: boolean | undefined | undefined;
                    indeterminateValue?: string | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    values?: string | true | any[] | string[] | import('tabulator-tables').JSONRecord | {
                        label: string;
                        value: string | number | boolean;
                    }[] | undefined;
                    valuesURL?: string | undefined;
                    valuesLookup?: import('tabulator-tables').RowRangeLookup | undefined;
                    valuesLookupField?: string | undefined;
                    clearable?: boolean | undefined;
                    itemFormatter?: ((label: string, value: string, item: any, element: HTMLElement) => string) | undefined | undefined;
                    sort?: import('tabulator-tables').SortDirection | undefined;
                    emptyValue?: any;
                    maxWidth?: boolean | undefined;
                    placeholderLoading?: string | undefined;
                    placeholderEmpty?: string | undefined;
                    multiselect?: boolean | undefined;
                    autocomplete?: boolean | undefined;
                    filterFunc?: ((term: string, label: string, value: string[], item: any) => any) | undefined | undefined;
                    filterRemote?: boolean | undefined;
                    filterDelay?: number | undefined;
                    allowEmpty?: boolean | undefined | undefined;
                    listOnEmpty?: boolean | undefined;
                    freetext?: boolean | undefined | undefined;
                    showListOnEmpty?: boolean | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                    defaultValue?: string | undefined | undefined;
                    sortValuesList?: "asc" | "desc" | undefined | undefined;
                } | {
                    search?: boolean | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    shiftEnterSubmit?: boolean | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    min?: string | undefined;
                    max?: string | undefined;
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | undefined;
                headerFilterPlaceholder?: string | undefined | undefined;
                headerFilterEmptyCheck?: import('tabulator-tables').ValueBooleanCallback | undefined;
                headerFilterFunc?: import('tabulator-tables').FilterType | import('tabulator-tables').HeaderFilterFunc | undefined;
                headerFilterFuncParams?: any;
                headerFilterLiveFilter?: boolean | undefined | undefined;
                htmlOutput?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                clipboard?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                print?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                columns?: /*elided*/ any[] | undefined;
                headerMenu?: ((e: MouseEvent, component: import('tabulator-tables').ColumnComponent) => Array<import('tabulator-tables').MenuObject<import('tabulator-tables').ColumnComponent> | import('tabulator-tables').MenuSeparator>) | ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').ColumnComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                headerMenuIcon?: (string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => HTMLElement | string)) | undefined;
                headerContextMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').ColumnComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                headerDblClickPopup?: string | undefined;
                dblClickPopup?: string | undefined;
                contextMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                clickMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                headerDblClickMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                dblClickMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                cellPopup?: string | ((e: MouseEvent, component: import('tabulator-tables').RowComponent | import('tabulator-tables').CellComponent | import('tabulator-tables').ColumnComponent, onRendered: () => any) => any) | undefined;
                formatterClipboard?: false | import('tabulator-tables').Formatter | undefined;
                formatterClipboardParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                formatterPrint?: false | import('tabulator-tables').Formatter | undefined;
                formatterPrintParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                accessorPrint?: import('tabulator-tables').CustomAccessor | undefined;
                accessorPrintParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                accessorHtmlOutput?: import('tabulator-tables').CustomAccessor | undefined;
                accessorHtmlOutputParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                formatterHtmlOutput?: false | import('tabulator-tables').Formatter | undefined;
                formatterHtmlOutputParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                titleClipboard?: string | undefined | undefined;
                titleHtmlOutput?: string | undefined | undefined;
                titlePrint?: string | undefined | undefined;
                maxWidth?: number | false | undefined | undefined;
                headerWordWrap?: boolean | undefined;
                editorEmptyValue?: any;
                editorEmptyValueFunc?: ((value: unknown) => boolean) | undefined;
                title: string;
                field?: string | undefined | undefined;
                visible?: boolean | undefined | undefined;
                width?: number | string | undefined | undefined;
                cellClick?: import('tabulator-tables').CellEventCallback | undefined;
                cellDblClick?: import('tabulator-tables').CellEventCallback | undefined;
                cellContext?: import('tabulator-tables').CellEventCallback | undefined;
                cellTap?: import('tabulator-tables').CellEventCallback | undefined;
                cellDblTap?: import('tabulator-tables').CellEventCallback | undefined;
                cellTapHold?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseEnter?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseLeave?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseOver?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseOut?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseMove?: import('tabulator-tables').CellEventCallback | undefined;
                cellEditing?: import('tabulator-tables').CellEditEventCallback | undefined;
                cellEdited?: import('tabulator-tables').CellEditEventCallback | undefined;
                cellEditCancelled?: import('tabulator-tables').CellEditEventCallback | undefined;
                cellMouseDown?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseUp?: import('tabulator-tables').CellEventCallback | undefined;
            }[] | undefined;
            autoColumns?: boolean | undefined | "full" | undefined;
            autoColumnsDefinitions?: ((columnDefinitions?: import('tabulator-tables').ColumnDefinition[]) => Partial<import('tabulator-tables').ColumnDefinition>[]) | Record<string, Partial<import('tabulator-tables').ColumnDefinition>> | {
                hozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                headerHozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                vertAlign?: import('tabulator-tables').VerticalAlign | undefined;
                minWidth?: number | undefined | undefined;
                widthGrow?: number | undefined | undefined;
                widthShrink?: number | undefined | undefined;
                resizable?: true | false | "header" | "cell" | undefined | undefined;
                frozen?: boolean | undefined | undefined;
                responsive?: number | undefined | undefined;
                tooltip?: string | import('tabulator-tables').GlobalTooltipOption | undefined;
                cssClass?: string | undefined | undefined;
                rowHandle?: boolean | undefined | undefined;
                hideInHtml?: boolean | undefined | undefined;
                sorter?: "string" | "number" | "alphanum" | "boolean" | "exists" | "date" | "time" | "datetime" | "array" | ((a: any, b: any, aRow: import('tabulator-tables').RowComponent, bRow: import('tabulator-tables').RowComponent, column: import('tabulator-tables').ColumnComponent, dir: import('tabulator-tables').SortDirection, sorterParams: {}) => number) | undefined | undefined;
                sorterParams?: import('tabulator-tables').ColumnSorterParamLookupFunction | {
                    format?: string | undefined | undefined;
                    locale?: string | boolean | undefined | undefined;
                    alignEmptyValues?: "top" | "bottom" | undefined | undefined;
                    type?: "length" | "sum" | "max" | "min" | "avg" | undefined | undefined;
                } | undefined;
                formatter?: import('tabulator-tables').Formatter | undefined;
                formatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                variableHeight?: boolean | undefined | undefined;
                editable?: boolean | ((cell: import('tabulator-tables').CellComponent) => boolean) | undefined | undefined;
                editor?: import('tabulator-tables').Editor | undefined;
                editorParams?: ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    step?: number | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    tristate?: boolean | undefined | undefined;
                    indeterminateValue?: string | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    values?: string | true | any[] | string[] | import('tabulator-tables').JSONRecord | {
                        label: string;
                        value: string | number | boolean;
                    }[] | undefined;
                    valuesURL?: string | undefined;
                    valuesLookup?: import('tabulator-tables').RowRangeLookup | undefined;
                    valuesLookupField?: string | undefined;
                    clearable?: boolean | undefined;
                    itemFormatter?: ((label: string, value: string, item: any, element: HTMLElement) => string) | undefined | undefined;
                    sort?: import('tabulator-tables').SortDirection | undefined;
                    emptyValue?: any;
                    maxWidth?: boolean | undefined;
                    placeholderLoading?: string | undefined;
                    placeholderEmpty?: string | undefined;
                    multiselect?: boolean | undefined;
                    autocomplete?: boolean | undefined;
                    filterFunc?: ((term: string, label: string, value: string[], item: any) => any) | undefined | undefined;
                    filterRemote?: boolean | undefined;
                    filterDelay?: number | undefined;
                    allowEmpty?: boolean | undefined | undefined;
                    listOnEmpty?: boolean | undefined;
                    freetext?: boolean | undefined | undefined;
                    showListOnEmpty?: boolean | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                    defaultValue?: string | undefined | undefined;
                    sortValuesList?: "asc" | "desc" | undefined | undefined;
                } | {
                    search?: boolean | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    shiftEnterSubmit?: boolean | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    min?: string | undefined;
                    max?: string | undefined;
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | undefined;
                validator?: string | import('tabulator-tables').StandardValidatorType[] | {
                    type: import('tabulator-tables').StandardValidatorType | ((cell: import('tabulator-tables').CellComponent, value: any, parameters?: any) => boolean);
                    parameters?: any;
                } | {
                    type: import('tabulator-tables').StandardValidatorType | ((cell: import('tabulator-tables').CellComponent, value: any, parameters?: any) => boolean);
                    parameters?: any;
                }[] | undefined;
                mutator?: import('tabulator-tables').CustomMutator | undefined;
                mutatorParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                mutatorData?: import('tabulator-tables').CustomMutator | undefined;
                mutatorDataParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                mutatorEdit?: import('tabulator-tables').CustomMutator | undefined;
                mutatorEditParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                mutatorClipboard?: import('tabulator-tables').CustomMutator | undefined;
                mutatorClipboardParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                accessor?: "rownum" | import('tabulator-tables').CustomAccessor | undefined;
                accessorParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                accessorDownload?: import('tabulator-tables').CustomAccessor | undefined;
                accessorDownloadParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                accessorClipboard?: import('tabulator-tables').CustomAccessor | undefined;
                accessorClipboardParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                download?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                titleDownload?: string | undefined | undefined;
                topCalc?: import('tabulator-tables').ColumnCalc | undefined;
                topCalcParams?: ((values: any, data: any) => any) | {
                    precision: number;
                } | undefined;
                topCalcFormatter?: import('tabulator-tables').Formatter | undefined;
                topCalcFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                bottomCalc?: import('tabulator-tables').ColumnCalc | undefined;
                bottomCalcParams?: ((values: any, data: any) => any) | {
                    precision: number;
                } | undefined;
                bottomCalcFormatter?: import('tabulator-tables').Formatter | undefined;
                bottomCalcFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                headerSort?: boolean | undefined | undefined;
                headerSortStartingDir?: import('tabulator-tables').SortDirection | undefined;
                headerSortTristate?: boolean | undefined | undefined;
                headerClick?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerDblClick?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerMouseDown?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerMouseUp?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerContext?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerTap?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerDblTap?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerTapHold?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerTooltip?: boolean | string | ((column: import('tabulator-tables').ColumnComponent) => string) | undefined | undefined;
                headerVertical?: boolean | "flip" | undefined | undefined;
                editableTitle?: boolean | undefined | undefined;
                titleFormatter?: import('tabulator-tables').Formatter | undefined;
                titleFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                headerFilter?: import('tabulator-tables').Editor | undefined;
                headerFilterParams?: ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    step?: number | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    tristate?: boolean | undefined | undefined;
                    indeterminateValue?: string | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    values?: string | true | any[] | string[] | import('tabulator-tables').JSONRecord | {
                        label: string;
                        value: string | number | boolean;
                    }[] | undefined;
                    valuesURL?: string | undefined;
                    valuesLookup?: import('tabulator-tables').RowRangeLookup | undefined;
                    valuesLookupField?: string | undefined;
                    clearable?: boolean | undefined;
                    itemFormatter?: ((label: string, value: string, item: any, element: HTMLElement) => string) | undefined | undefined;
                    sort?: import('tabulator-tables').SortDirection | undefined;
                    emptyValue?: any;
                    maxWidth?: boolean | undefined;
                    placeholderLoading?: string | undefined;
                    placeholderEmpty?: string | undefined;
                    multiselect?: boolean | undefined;
                    autocomplete?: boolean | undefined;
                    filterFunc?: ((term: string, label: string, value: string[], item: any) => any) | undefined | undefined;
                    filterRemote?: boolean | undefined;
                    filterDelay?: number | undefined;
                    allowEmpty?: boolean | undefined | undefined;
                    listOnEmpty?: boolean | undefined;
                    freetext?: boolean | undefined | undefined;
                    showListOnEmpty?: boolean | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                    defaultValue?: string | undefined | undefined;
                    sortValuesList?: "asc" | "desc" | undefined | undefined;
                } | {
                    search?: boolean | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    shiftEnterSubmit?: boolean | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    min?: string | undefined;
                    max?: string | undefined;
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | undefined;
                headerFilterPlaceholder?: string | undefined | undefined;
                headerFilterEmptyCheck?: import('tabulator-tables').ValueBooleanCallback | undefined;
                headerFilterFunc?: import('tabulator-tables').FilterType | import('tabulator-tables').HeaderFilterFunc | undefined;
                headerFilterFuncParams?: any;
                headerFilterLiveFilter?: boolean | undefined | undefined;
                htmlOutput?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                clipboard?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                print?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                columns?: {
                    hozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                    headerHozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                    vertAlign?: import('tabulator-tables').VerticalAlign | undefined;
                    minWidth?: number | undefined | undefined;
                    widthGrow?: number | undefined | undefined;
                    widthShrink?: number | undefined | undefined;
                    resizable?: true | false | "header" | "cell" | undefined | undefined;
                    frozen?: boolean | undefined | undefined;
                    responsive?: number | undefined | undefined;
                    tooltip?: string | import('tabulator-tables').GlobalTooltipOption | undefined;
                    cssClass?: string | undefined | undefined;
                    rowHandle?: boolean | undefined | undefined;
                    hideInHtml?: boolean | undefined | undefined;
                    sorter?: "string" | "number" | "alphanum" | "boolean" | "exists" | "date" | "time" | "datetime" | "array" | ((a: any, b: any, aRow: import('tabulator-tables').RowComponent, bRow: import('tabulator-tables').RowComponent, column: import('tabulator-tables').ColumnComponent, dir: import('tabulator-tables').SortDirection, sorterParams: {}) => number) | undefined | undefined;
                    sorterParams?: import('tabulator-tables').ColumnSorterParamLookupFunction | {
                        format?: string | undefined | undefined;
                        locale?: string | boolean | undefined | undefined;
                        alignEmptyValues?: "top" | "bottom" | undefined | undefined;
                        type?: "length" | "sum" | "max" | "min" | "avg" | undefined | undefined;
                    } | undefined;
                    formatter?: import('tabulator-tables').Formatter | undefined;
                    formatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    variableHeight?: boolean | undefined | undefined;
                    editable?: boolean | ((cell: import('tabulator-tables').CellComponent) => boolean) | undefined | undefined;
                    editor?: import('tabulator-tables').Editor | undefined;
                    editorParams?: ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        step?: number | undefined | undefined;
                        verticalNavigation?: "editor" | "table" | undefined | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        tristate?: boolean | undefined | undefined;
                        indeterminateValue?: string | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        values?: string | true | any[] | string[] | import('tabulator-tables').JSONRecord | {
                            label: string;
                            value: string | number | boolean;
                        }[] | undefined;
                        valuesURL?: string | undefined;
                        valuesLookup?: import('tabulator-tables').RowRangeLookup | undefined;
                        valuesLookupField?: string | undefined;
                        clearable?: boolean | undefined;
                        itemFormatter?: ((label: string, value: string, item: any, element: HTMLElement) => string) | undefined | undefined;
                        sort?: import('tabulator-tables').SortDirection | undefined;
                        emptyValue?: any;
                        maxWidth?: boolean | undefined;
                        placeholderLoading?: string | undefined;
                        placeholderEmpty?: string | undefined;
                        multiselect?: boolean | undefined;
                        autocomplete?: boolean | undefined;
                        filterFunc?: ((term: string, label: string, value: string[], item: any) => any) | undefined | undefined;
                        filterRemote?: boolean | undefined;
                        filterDelay?: number | undefined;
                        allowEmpty?: boolean | undefined | undefined;
                        listOnEmpty?: boolean | undefined;
                        freetext?: boolean | undefined | undefined;
                        showListOnEmpty?: boolean | undefined | undefined;
                        verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                        defaultValue?: string | undefined | undefined;
                        sortValuesList?: "asc" | "desc" | undefined | undefined;
                    } | {
                        search?: boolean | undefined | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                        shiftEnterSubmit?: boolean | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        min?: string | undefined;
                        max?: string | undefined;
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | undefined;
                    validator?: string | import('tabulator-tables').StandardValidatorType[] | {
                        type: import('tabulator-tables').StandardValidatorType | ((cell: import('tabulator-tables').CellComponent, value: any, parameters?: any) => boolean);
                        parameters?: any;
                    } | {
                        type: import('tabulator-tables').StandardValidatorType | ((cell: import('tabulator-tables').CellComponent, value: any, parameters?: any) => boolean);
                        parameters?: any;
                    }[] | undefined;
                    mutator?: import('tabulator-tables').CustomMutator | undefined;
                    mutatorParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                    mutatorData?: import('tabulator-tables').CustomMutator | undefined;
                    mutatorDataParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                    mutatorEdit?: import('tabulator-tables').CustomMutator | undefined;
                    mutatorEditParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                    mutatorClipboard?: import('tabulator-tables').CustomMutator | undefined;
                    mutatorClipboardParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                    accessor?: "rownum" | import('tabulator-tables').CustomAccessor | undefined;
                    accessorParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                    accessorDownload?: import('tabulator-tables').CustomAccessor | undefined;
                    accessorDownloadParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                    accessorClipboard?: import('tabulator-tables').CustomAccessor | undefined;
                    accessorClipboardParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                    download?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    titleDownload?: string | undefined | undefined;
                    topCalc?: import('tabulator-tables').ColumnCalc | undefined;
                    topCalcParams?: ((values: any, data: any) => any) | {
                        precision: number;
                    } | undefined;
                    topCalcFormatter?: import('tabulator-tables').Formatter | undefined;
                    topCalcFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    bottomCalc?: import('tabulator-tables').ColumnCalc | undefined;
                    bottomCalcParams?: ((values: any, data: any) => any) | {
                        precision: number;
                    } | undefined;
                    bottomCalcFormatter?: import('tabulator-tables').Formatter | undefined;
                    bottomCalcFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    headerSort?: boolean | undefined | undefined;
                    headerSortStartingDir?: import('tabulator-tables').SortDirection | undefined;
                    headerSortTristate?: boolean | undefined | undefined;
                    headerClick?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerDblClick?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerMouseDown?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerMouseUp?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerContext?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerTap?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerDblTap?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerTapHold?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerTooltip?: boolean | string | ((column: import('tabulator-tables').ColumnComponent) => string) | undefined | undefined;
                    headerVertical?: boolean | "flip" | undefined | undefined;
                    editableTitle?: boolean | undefined | undefined;
                    titleFormatter?: import('tabulator-tables').Formatter | undefined;
                    titleFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    headerFilter?: import('tabulator-tables').Editor | undefined;
                    headerFilterParams?: ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        step?: number | undefined | undefined;
                        verticalNavigation?: "editor" | "table" | undefined | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        tristate?: boolean | undefined | undefined;
                        indeterminateValue?: string | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        values?: string | true | any[] | string[] | import('tabulator-tables').JSONRecord | {
                            label: string;
                            value: string | number | boolean;
                        }[] | undefined;
                        valuesURL?: string | undefined;
                        valuesLookup?: import('tabulator-tables').RowRangeLookup | undefined;
                        valuesLookupField?: string | undefined;
                        clearable?: boolean | undefined;
                        itemFormatter?: ((label: string, value: string, item: any, element: HTMLElement) => string) | undefined | undefined;
                        sort?: import('tabulator-tables').SortDirection | undefined;
                        emptyValue?: any;
                        maxWidth?: boolean | undefined;
                        placeholderLoading?: string | undefined;
                        placeholderEmpty?: string | undefined;
                        multiselect?: boolean | undefined;
                        autocomplete?: boolean | undefined;
                        filterFunc?: ((term: string, label: string, value: string[], item: any) => any) | undefined | undefined;
                        filterRemote?: boolean | undefined;
                        filterDelay?: number | undefined;
                        allowEmpty?: boolean | undefined | undefined;
                        listOnEmpty?: boolean | undefined;
                        freetext?: boolean | undefined | undefined;
                        showListOnEmpty?: boolean | undefined | undefined;
                        verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                        defaultValue?: string | undefined | undefined;
                        sortValuesList?: "asc" | "desc" | undefined | undefined;
                    } | {
                        search?: boolean | undefined | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                        shiftEnterSubmit?: boolean | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        min?: string | undefined;
                        max?: string | undefined;
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | undefined;
                    headerFilterPlaceholder?: string | undefined | undefined;
                    headerFilterEmptyCheck?: import('tabulator-tables').ValueBooleanCallback | undefined;
                    headerFilterFunc?: import('tabulator-tables').FilterType | import('tabulator-tables').HeaderFilterFunc | undefined;
                    headerFilterFuncParams?: any;
                    headerFilterLiveFilter?: boolean | undefined | undefined;
                    htmlOutput?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    clipboard?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    print?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    columns?: /*elided*/ any[] | undefined;
                    headerMenu?: ((e: MouseEvent, component: import('tabulator-tables').ColumnComponent) => Array<import('tabulator-tables').MenuObject<import('tabulator-tables').ColumnComponent> | import('tabulator-tables').MenuSeparator>) | ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').ColumnComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    headerMenuIcon?: (string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => HTMLElement | string)) | undefined;
                    headerContextMenu?: ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').ColumnComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    headerDblClickPopup?: string | undefined;
                    dblClickPopup?: string | undefined;
                    contextMenu?: ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    clickMenu?: ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    headerDblClickMenu?: ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    dblClickMenu?: ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    cellPopup?: string | ((e: MouseEvent, component: import('tabulator-tables').RowComponent | import('tabulator-tables').CellComponent | import('tabulator-tables').ColumnComponent, onRendered: () => any) => any) | undefined;
                    formatterClipboard?: false | import('tabulator-tables').Formatter | undefined;
                    formatterClipboardParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    formatterPrint?: false | import('tabulator-tables').Formatter | undefined;
                    formatterPrintParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    accessorPrint?: import('tabulator-tables').CustomAccessor | undefined;
                    accessorPrintParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                    accessorHtmlOutput?: import('tabulator-tables').CustomAccessor | undefined;
                    accessorHtmlOutputParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                    formatterHtmlOutput?: false | import('tabulator-tables').Formatter | undefined;
                    formatterHtmlOutputParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    titleClipboard?: string | undefined | undefined;
                    titleHtmlOutput?: string | undefined | undefined;
                    titlePrint?: string | undefined | undefined;
                    maxWidth?: number | false | undefined | undefined;
                    headerWordWrap?: boolean | undefined;
                    editorEmptyValue?: any;
                    editorEmptyValueFunc?: ((value: unknown) => boolean) | undefined;
                    title: string;
                    field?: string | undefined | undefined;
                    visible?: boolean | undefined | undefined;
                    width?: number | string | undefined | undefined;
                    cellClick?: import('tabulator-tables').CellEventCallback | undefined;
                    cellDblClick?: import('tabulator-tables').CellEventCallback | undefined;
                    cellContext?: import('tabulator-tables').CellEventCallback | undefined;
                    cellTap?: import('tabulator-tables').CellEventCallback | undefined;
                    cellDblTap?: import('tabulator-tables').CellEventCallback | undefined;
                    cellTapHold?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseEnter?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseLeave?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseOver?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseOut?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseMove?: import('tabulator-tables').CellEventCallback | undefined;
                    cellEditing?: import('tabulator-tables').CellEditEventCallback | undefined;
                    cellEdited?: import('tabulator-tables').CellEditEventCallback | undefined;
                    cellEditCancelled?: import('tabulator-tables').CellEditEventCallback | undefined;
                    cellMouseDown?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseUp?: import('tabulator-tables').CellEventCallback | undefined;
                }[] | undefined;
                headerMenu?: ((e: MouseEvent, component: import('tabulator-tables').ColumnComponent) => Array<import('tabulator-tables').MenuObject<import('tabulator-tables').ColumnComponent> | import('tabulator-tables').MenuSeparator>) | ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').ColumnComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                headerMenuIcon?: (string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => HTMLElement | string)) | undefined;
                headerContextMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').ColumnComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                headerDblClickPopup?: string | undefined;
                dblClickPopup?: string | undefined;
                contextMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                clickMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                headerDblClickMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                dblClickMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                cellPopup?: string | ((e: MouseEvent, component: import('tabulator-tables').RowComponent | import('tabulator-tables').CellComponent | import('tabulator-tables').ColumnComponent, onRendered: () => any) => any) | undefined;
                formatterClipboard?: false | import('tabulator-tables').Formatter | undefined;
                formatterClipboardParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                formatterPrint?: false | import('tabulator-tables').Formatter | undefined;
                formatterPrintParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                accessorPrint?: import('tabulator-tables').CustomAccessor | undefined;
                accessorPrintParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                accessorHtmlOutput?: import('tabulator-tables').CustomAccessor | undefined;
                accessorHtmlOutputParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                formatterHtmlOutput?: false | import('tabulator-tables').Formatter | undefined;
                formatterHtmlOutputParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                titleClipboard?: string | undefined | undefined;
                titleHtmlOutput?: string | undefined | undefined;
                titlePrint?: string | undefined | undefined;
                maxWidth?: number | false | undefined | undefined;
                headerWordWrap?: boolean | undefined;
                editorEmptyValue?: any;
                editorEmptyValueFunc?: ((value: unknown) => boolean) | undefined;
                title?: string | undefined;
                field?: string | undefined | undefined;
                visible?: boolean | undefined | undefined;
                width?: number | string | undefined | undefined;
                cellClick?: import('tabulator-tables').CellEventCallback | undefined;
                cellDblClick?: import('tabulator-tables').CellEventCallback | undefined;
                cellContext?: import('tabulator-tables').CellEventCallback | undefined;
                cellTap?: import('tabulator-tables').CellEventCallback | undefined;
                cellDblTap?: import('tabulator-tables').CellEventCallback | undefined;
                cellTapHold?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseEnter?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseLeave?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseOver?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseOut?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseMove?: import('tabulator-tables').CellEventCallback | undefined;
                cellEditing?: import('tabulator-tables').CellEditEventCallback | undefined;
                cellEdited?: import('tabulator-tables').CellEditEventCallback | undefined;
                cellEditCancelled?: import('tabulator-tables').CellEditEventCallback | undefined;
                cellMouseDown?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseUp?: import('tabulator-tables').CellEventCallback | undefined;
            }[] | undefined;
            layout?: "fitData" | "fitColumns" | "fitDataFill" | "fitDataStretch" | "fitDataTable" | undefined | undefined;
            layoutColumnsOnNewData?: boolean | undefined | undefined;
            responsiveLayout?: boolean | "hide" | "collapse" | undefined | undefined;
            responsiveLayoutCollapseStartOpen?: boolean | undefined | undefined;
            responsiveLayoutCollapseUseFormatters?: boolean | undefined | undefined;
            responsiveLayoutCollapseFormatter?: ((data: any[]) => any) | undefined | undefined;
            movableColumns?: boolean | undefined | undefined;
            columnHeaderVertAlign?: import('tabulator-tables').VerticalAlign | undefined;
            scrollToColumnPosition?: import('tabulator-tables').ScrollToColumnPosition | undefined;
            scrollToColumnIfVisible?: boolean | undefined | undefined;
            columnCalcs?: boolean | "both" | "table" | "group" | undefined | undefined;
            nestedFieldSeparator?: string | boolean | undefined | undefined;
            columnHeaderSortMulti?: boolean | undefined | undefined;
            headerVisible?: boolean | undefined | undefined;
            headerSort?: boolean | undefined | undefined;
            headerSortElement?: string | undefined | ((column: import('tabulator-tables').ColumnComponent, dir: "asc" | "desc" | "none") => any) | undefined;
            columnDefaults?: {
                hozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                headerHozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                vertAlign?: import('tabulator-tables').VerticalAlign | undefined;
                minWidth?: number | undefined | undefined;
                widthGrow?: number | undefined | undefined;
                widthShrink?: number | undefined | undefined;
                resizable?: true | false | "header" | "cell" | undefined | undefined;
                frozen?: boolean | undefined | undefined;
                responsive?: number | undefined | undefined;
                tooltip?: string | import('tabulator-tables').GlobalTooltipOption | undefined;
                cssClass?: string | undefined | undefined;
                rowHandle?: boolean | undefined | undefined;
                hideInHtml?: boolean | undefined | undefined;
                sorter?: "string" | "number" | "alphanum" | "boolean" | "exists" | "date" | "time" | "datetime" | "array" | ((a: any, b: any, aRow: import('tabulator-tables').RowComponent, bRow: import('tabulator-tables').RowComponent, column: import('tabulator-tables').ColumnComponent, dir: import('tabulator-tables').SortDirection, sorterParams: {}) => number) | undefined | undefined;
                sorterParams?: import('tabulator-tables').ColumnSorterParamLookupFunction | {
                    format?: string | undefined | undefined;
                    locale?: string | boolean | undefined | undefined;
                    alignEmptyValues?: "top" | "bottom" | undefined | undefined;
                    type?: "length" | "sum" | "max" | "min" | "avg" | undefined | undefined;
                } | undefined;
                formatter?: import('tabulator-tables').Formatter | undefined;
                formatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                variableHeight?: boolean | undefined | undefined;
                editable?: boolean | ((cell: import('tabulator-tables').CellComponent) => boolean) | undefined | undefined;
                editor?: import('tabulator-tables').Editor | undefined;
                editorParams?: ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    step?: number | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    tristate?: boolean | undefined | undefined;
                    indeterminateValue?: string | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    values?: string | true | any[] | string[] | import('tabulator-tables').JSONRecord | {
                        label: string;
                        value: string | number | boolean;
                    }[] | undefined;
                    valuesURL?: string | undefined;
                    valuesLookup?: import('tabulator-tables').RowRangeLookup | undefined;
                    valuesLookupField?: string | undefined;
                    clearable?: boolean | undefined;
                    itemFormatter?: ((label: string, value: string, item: any, element: HTMLElement) => string) | undefined | undefined;
                    sort?: import('tabulator-tables').SortDirection | undefined;
                    emptyValue?: any;
                    maxWidth?: boolean | undefined;
                    placeholderLoading?: string | undefined;
                    placeholderEmpty?: string | undefined;
                    multiselect?: boolean | undefined;
                    autocomplete?: boolean | undefined;
                    filterFunc?: ((term: string, label: string, value: string[], item: any) => any) | undefined | undefined;
                    filterRemote?: boolean | undefined;
                    filterDelay?: number | undefined;
                    allowEmpty?: boolean | undefined | undefined;
                    listOnEmpty?: boolean | undefined;
                    freetext?: boolean | undefined | undefined;
                    showListOnEmpty?: boolean | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                    defaultValue?: string | undefined | undefined;
                    sortValuesList?: "asc" | "desc" | undefined | undefined;
                } | {
                    search?: boolean | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    shiftEnterSubmit?: boolean | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    min?: string | undefined;
                    max?: string | undefined;
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | undefined;
                validator?: string | import('tabulator-tables').StandardValidatorType[] | {
                    type: import('tabulator-tables').StandardValidatorType | ((cell: import('tabulator-tables').CellComponent, value: any, parameters?: any) => boolean);
                    parameters?: any;
                } | {
                    type: import('tabulator-tables').StandardValidatorType | ((cell: import('tabulator-tables').CellComponent, value: any, parameters?: any) => boolean);
                    parameters?: any;
                }[] | undefined;
                mutator?: import('tabulator-tables').CustomMutator | undefined;
                mutatorParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                mutatorData?: import('tabulator-tables').CustomMutator | undefined;
                mutatorDataParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                mutatorEdit?: import('tabulator-tables').CustomMutator | undefined;
                mutatorEditParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                mutatorClipboard?: import('tabulator-tables').CustomMutator | undefined;
                mutatorClipboardParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                accessor?: "rownum" | import('tabulator-tables').CustomAccessor | undefined;
                accessorParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                accessorDownload?: import('tabulator-tables').CustomAccessor | undefined;
                accessorDownloadParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                accessorClipboard?: import('tabulator-tables').CustomAccessor | undefined;
                accessorClipboardParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                download?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                titleDownload?: string | undefined | undefined;
                topCalc?: import('tabulator-tables').ColumnCalc | undefined;
                topCalcParams?: ((values: any, data: any) => any) | {
                    precision: number;
                } | undefined;
                topCalcFormatter?: import('tabulator-tables').Formatter | undefined;
                topCalcFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                bottomCalc?: import('tabulator-tables').ColumnCalc | undefined;
                bottomCalcParams?: ((values: any, data: any) => any) | {
                    precision: number;
                } | undefined;
                bottomCalcFormatter?: import('tabulator-tables').Formatter | undefined;
                bottomCalcFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                headerSort?: boolean | undefined | undefined;
                headerSortStartingDir?: import('tabulator-tables').SortDirection | undefined;
                headerSortTristate?: boolean | undefined | undefined;
                headerClick?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerDblClick?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerMouseDown?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerMouseUp?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerContext?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerTap?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerDblTap?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerTapHold?: import('tabulator-tables').ColumnEventCallback | undefined;
                headerTooltip?: boolean | string | ((column: import('tabulator-tables').ColumnComponent) => string) | undefined | undefined;
                headerVertical?: boolean | "flip" | undefined | undefined;
                editableTitle?: boolean | undefined | undefined;
                titleFormatter?: import('tabulator-tables').Formatter | undefined;
                titleFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                headerFilter?: import('tabulator-tables').Editor | undefined;
                headerFilterParams?: ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    step?: number | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    tristate?: boolean | undefined | undefined;
                    indeterminateValue?: string | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    values?: string | true | any[] | string[] | import('tabulator-tables').JSONRecord | {
                        label: string;
                        value: string | number | boolean;
                    }[] | undefined;
                    valuesURL?: string | undefined;
                    valuesLookup?: import('tabulator-tables').RowRangeLookup | undefined;
                    valuesLookupField?: string | undefined;
                    clearable?: boolean | undefined;
                    itemFormatter?: ((label: string, value: string, item: any, element: HTMLElement) => string) | undefined | undefined;
                    sort?: import('tabulator-tables').SortDirection | undefined;
                    emptyValue?: any;
                    maxWidth?: boolean | undefined;
                    placeholderLoading?: string | undefined;
                    placeholderEmpty?: string | undefined;
                    multiselect?: boolean | undefined;
                    autocomplete?: boolean | undefined;
                    filterFunc?: ((term: string, label: string, value: string[], item: any) => any) | undefined | undefined;
                    filterRemote?: boolean | undefined;
                    filterDelay?: number | undefined;
                    allowEmpty?: boolean | undefined | undefined;
                    listOnEmpty?: boolean | undefined;
                    freetext?: boolean | undefined | undefined;
                    showListOnEmpty?: boolean | undefined | undefined;
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                    defaultValue?: string | undefined | undefined;
                    sortValuesList?: "asc" | "desc" | undefined | undefined;
                } | {
                    search?: boolean | undefined | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                    shiftEnterSubmit?: boolean | undefined;
                    selectContents?: boolean | undefined | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    min?: string | undefined;
                    max?: string | undefined;
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | {
                    format?: string | undefined;
                    verticalNavigation?: ("table" | "editor") | undefined;
                    elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                    mask?: string | undefined | undefined;
                    maskAutoFill?: boolean | undefined | undefined;
                    maskLetterChar?: string | undefined | undefined;
                    maskNumberChar?: string | undefined | undefined;
                    maskWildcardChar?: string | undefined | undefined;
                } | undefined;
                headerFilterPlaceholder?: string | undefined | undefined;
                headerFilterEmptyCheck?: import('tabulator-tables').ValueBooleanCallback | undefined;
                headerFilterFunc?: import('tabulator-tables').FilterType | import('tabulator-tables').HeaderFilterFunc | undefined;
                headerFilterFuncParams?: any;
                headerFilterLiveFilter?: boolean | undefined | undefined;
                htmlOutput?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                clipboard?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                print?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                columns?: {
                    hozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                    headerHozAlign?: import('tabulator-tables').ColumnDefinitionAlign | undefined;
                    vertAlign?: import('tabulator-tables').VerticalAlign | undefined;
                    minWidth?: number | undefined | undefined;
                    widthGrow?: number | undefined | undefined;
                    widthShrink?: number | undefined | undefined;
                    resizable?: true | false | "header" | "cell" | undefined | undefined;
                    frozen?: boolean | undefined | undefined;
                    responsive?: number | undefined | undefined;
                    tooltip?: string | import('tabulator-tables').GlobalTooltipOption | undefined;
                    cssClass?: string | undefined | undefined;
                    rowHandle?: boolean | undefined | undefined;
                    hideInHtml?: boolean | undefined | undefined;
                    sorter?: "string" | "number" | "alphanum" | "boolean" | "exists" | "date" | "time" | "datetime" | "array" | ((a: any, b: any, aRow: import('tabulator-tables').RowComponent, bRow: import('tabulator-tables').RowComponent, column: import('tabulator-tables').ColumnComponent, dir: import('tabulator-tables').SortDirection, sorterParams: {}) => number) | undefined | undefined;
                    sorterParams?: import('tabulator-tables').ColumnSorterParamLookupFunction | {
                        format?: string | undefined | undefined;
                        locale?: string | boolean | undefined | undefined;
                        alignEmptyValues?: "top" | "bottom" | undefined | undefined;
                        type?: "length" | "sum" | "max" | "min" | "avg" | undefined | undefined;
                    } | undefined;
                    formatter?: import('tabulator-tables').Formatter | undefined;
                    formatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    variableHeight?: boolean | undefined | undefined;
                    editable?: boolean | ((cell: import('tabulator-tables').CellComponent) => boolean) | undefined | undefined;
                    editor?: import('tabulator-tables').Editor | undefined;
                    editorParams?: ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        step?: number | undefined | undefined;
                        verticalNavigation?: "editor" | "table" | undefined | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        tristate?: boolean | undefined | undefined;
                        indeterminateValue?: string | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        values?: string | true | any[] | string[] | import('tabulator-tables').JSONRecord | {
                            label: string;
                            value: string | number | boolean;
                        }[] | undefined;
                        valuesURL?: string | undefined;
                        valuesLookup?: import('tabulator-tables').RowRangeLookup | undefined;
                        valuesLookupField?: string | undefined;
                        clearable?: boolean | undefined;
                        itemFormatter?: ((label: string, value: string, item: any, element: HTMLElement) => string) | undefined | undefined;
                        sort?: import('tabulator-tables').SortDirection | undefined;
                        emptyValue?: any;
                        maxWidth?: boolean | undefined;
                        placeholderLoading?: string | undefined;
                        placeholderEmpty?: string | undefined;
                        multiselect?: boolean | undefined;
                        autocomplete?: boolean | undefined;
                        filterFunc?: ((term: string, label: string, value: string[], item: any) => any) | undefined | undefined;
                        filterRemote?: boolean | undefined;
                        filterDelay?: number | undefined;
                        allowEmpty?: boolean | undefined | undefined;
                        listOnEmpty?: boolean | undefined;
                        freetext?: boolean | undefined | undefined;
                        showListOnEmpty?: boolean | undefined | undefined;
                        verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                        defaultValue?: string | undefined | undefined;
                        sortValuesList?: "asc" | "desc" | undefined | undefined;
                    } | {
                        search?: boolean | undefined | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                        shiftEnterSubmit?: boolean | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        min?: string | undefined;
                        max?: string | undefined;
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | undefined;
                    validator?: string | import('tabulator-tables').StandardValidatorType[] | {
                        type: import('tabulator-tables').StandardValidatorType | ((cell: import('tabulator-tables').CellComponent, value: any, parameters?: any) => boolean);
                        parameters?: any;
                    } | {
                        type: import('tabulator-tables').StandardValidatorType | ((cell: import('tabulator-tables').CellComponent, value: any, parameters?: any) => boolean);
                        parameters?: any;
                    }[] | undefined;
                    mutator?: import('tabulator-tables').CustomMutator | undefined;
                    mutatorParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                    mutatorData?: import('tabulator-tables').CustomMutator | undefined;
                    mutatorDataParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                    mutatorEdit?: import('tabulator-tables').CustomMutator | undefined;
                    mutatorEditParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                    mutatorClipboard?: import('tabulator-tables').CustomMutator | undefined;
                    mutatorClipboardParams?: import('tabulator-tables').CustomMutatorParams | undefined;
                    accessor?: "rownum" | import('tabulator-tables').CustomAccessor | undefined;
                    accessorParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                    accessorDownload?: import('tabulator-tables').CustomAccessor | undefined;
                    accessorDownloadParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                    accessorClipboard?: import('tabulator-tables').CustomAccessor | undefined;
                    accessorClipboardParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                    download?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    titleDownload?: string | undefined | undefined;
                    topCalc?: import('tabulator-tables').ColumnCalc | undefined;
                    topCalcParams?: ((values: any, data: any) => any) | {
                        precision: number;
                    } | undefined;
                    topCalcFormatter?: import('tabulator-tables').Formatter | undefined;
                    topCalcFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    bottomCalc?: import('tabulator-tables').ColumnCalc | undefined;
                    bottomCalcParams?: ((values: any, data: any) => any) | {
                        precision: number;
                    } | undefined;
                    bottomCalcFormatter?: import('tabulator-tables').Formatter | undefined;
                    bottomCalcFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    headerSort?: boolean | undefined | undefined;
                    headerSortStartingDir?: import('tabulator-tables').SortDirection | undefined;
                    headerSortTristate?: boolean | undefined | undefined;
                    headerClick?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerDblClick?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerMouseDown?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerMouseUp?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerContext?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerTap?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerDblTap?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerTapHold?: import('tabulator-tables').ColumnEventCallback | undefined;
                    headerTooltip?: boolean | string | ((column: import('tabulator-tables').ColumnComponent) => string) | undefined | undefined;
                    headerVertical?: boolean | "flip" | undefined | undefined;
                    editableTitle?: boolean | undefined | undefined;
                    titleFormatter?: import('tabulator-tables').Formatter | undefined;
                    titleFormatterParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    headerFilter?: import('tabulator-tables').Editor | undefined;
                    headerFilterParams?: ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        step?: number | undefined | undefined;
                        verticalNavigation?: "editor" | "table" | undefined | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        tristate?: boolean | undefined | undefined;
                        indeterminateValue?: string | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        values?: string | true | any[] | string[] | import('tabulator-tables').JSONRecord | {
                            label: string;
                            value: string | number | boolean;
                        }[] | undefined;
                        valuesURL?: string | undefined;
                        valuesLookup?: import('tabulator-tables').RowRangeLookup | undefined;
                        valuesLookupField?: string | undefined;
                        clearable?: boolean | undefined;
                        itemFormatter?: ((label: string, value: string, item: any, element: HTMLElement) => string) | undefined | undefined;
                        sort?: import('tabulator-tables').SortDirection | undefined;
                        emptyValue?: any;
                        maxWidth?: boolean | undefined;
                        placeholderLoading?: string | undefined;
                        placeholderEmpty?: string | undefined;
                        multiselect?: boolean | undefined;
                        autocomplete?: boolean | undefined;
                        filterFunc?: ((term: string, label: string, value: string[], item: any) => any) | undefined | undefined;
                        filterRemote?: boolean | undefined;
                        filterDelay?: number | undefined;
                        allowEmpty?: boolean | undefined | undefined;
                        listOnEmpty?: boolean | undefined;
                        freetext?: boolean | undefined | undefined;
                        showListOnEmpty?: boolean | undefined | undefined;
                        verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                        defaultValue?: string | undefined | undefined;
                        sortValuesList?: "asc" | "desc" | undefined | undefined;
                    } | {
                        search?: boolean | undefined | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        verticalNavigation?: "editor" | "table" | "hybrid" | undefined | undefined;
                        shiftEnterSubmit?: boolean | undefined;
                        selectContents?: boolean | undefined | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        min?: string | undefined;
                        max?: string | undefined;
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | {
                        format?: string | undefined;
                        verticalNavigation?: ("table" | "editor") | undefined;
                        elementAttributes?: import('tabulator-tables').JSONRecord | undefined;
                        mask?: string | undefined | undefined;
                        maskAutoFill?: boolean | undefined | undefined;
                        maskLetterChar?: string | undefined | undefined;
                        maskNumberChar?: string | undefined | undefined;
                        maskWildcardChar?: string | undefined | undefined;
                    } | undefined;
                    headerFilterPlaceholder?: string | undefined | undefined;
                    headerFilterEmptyCheck?: import('tabulator-tables').ValueBooleanCallback | undefined;
                    headerFilterFunc?: import('tabulator-tables').FilterType | import('tabulator-tables').HeaderFilterFunc | undefined;
                    headerFilterFuncParams?: any;
                    headerFilterLiveFilter?: boolean | undefined | undefined;
                    htmlOutput?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    clipboard?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    print?: boolean | undefined | ((column: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    columns?: /*elided*/ any[] | undefined;
                    headerMenu?: ((e: MouseEvent, component: import('tabulator-tables').ColumnComponent) => Array<import('tabulator-tables').MenuObject<import('tabulator-tables').ColumnComponent> | import('tabulator-tables').MenuSeparator>) | ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').ColumnComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    headerMenuIcon?: (string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => HTMLElement | string)) | undefined;
                    headerContextMenu?: ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').ColumnComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    headerDblClickPopup?: string | undefined;
                    dblClickPopup?: string | undefined;
                    contextMenu?: ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    clickMenu?: ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    headerDblClickMenu?: ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    dblClickMenu?: ({
                        separator?: boolean | undefined | undefined;
                    } | {
                        label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                        action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                        disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                        menu?: /*elided*/ any[] | undefined;
                    })[] | undefined;
                    cellPopup?: string | ((e: MouseEvent, component: import('tabulator-tables').RowComponent | import('tabulator-tables').CellComponent | import('tabulator-tables').ColumnComponent, onRendered: () => any) => any) | undefined;
                    formatterClipboard?: false | import('tabulator-tables').Formatter | undefined;
                    formatterClipboardParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    formatterPrint?: false | import('tabulator-tables').Formatter | undefined;
                    formatterPrintParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    accessorPrint?: import('tabulator-tables').CustomAccessor | undefined;
                    accessorPrintParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                    accessorHtmlOutput?: import('tabulator-tables').CustomAccessor | undefined;
                    accessorHtmlOutputParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                    formatterHtmlOutput?: false | import('tabulator-tables').Formatter | undefined;
                    formatterHtmlOutputParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                        decimal?: string | undefined | undefined;
                        thousand?: string | undefined | undefined;
                        symbol?: string | undefined | undefined;
                        symbolAfter?: boolean | undefined | undefined;
                        precision?: boolean | number | undefined | undefined;
                        negativeSign?: string | true | undefined;
                    } | {
                        height?: string | undefined | undefined;
                        width?: string | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlSuffix?: string | undefined | undefined;
                    } | {
                        labelField?: string | undefined | undefined;
                        label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        urlPrefix?: string | undefined | undefined;
                        urlField?: string | undefined | undefined;
                        url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                        target?: string | undefined | undefined;
                        download?: boolean | undefined | undefined;
                    } | {
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        date?: any;
                        humanize?: boolean | undefined | undefined;
                        unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                        suffix?: boolean | undefined | undefined;
                        inputFormat?: string | undefined | undefined;
                        outputFormat?: string | undefined | undefined;
                        invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                        timezone?: string | undefined | undefined;
                    } | {
                        allowEmpty?: boolean | undefined | undefined;
                        allowTruthy?: boolean | undefined | undefined;
                        tickElement?: boolean | string | undefined | undefined;
                        crossElement?: boolean | string | undefined | undefined;
                    } | {
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                        legendColor?: import('tabulator-tables').Color | undefined;
                        legendAlign?: import('tabulator-tables').Align | undefined;
                        min?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        color?: import('tabulator-tables').Color | undefined;
                    } | {
                        stars?: number | undefined | undefined;
                    } | {
                        rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                    } | {
                        size?: number | undefined | undefined;
                        max?: number | undefined | undefined;
                        onValue?: string | number | undefined | undefined;
                        offValue?: string | number | undefined | undefined;
                        onTruthy?: boolean | undefined | undefined;
                        onColor?: string | undefined | undefined;
                        offColor?: string | undefined | undefined;
                        clickable?: boolean | undefined | undefined;
                    } | undefined;
                    titleClipboard?: string | undefined | undefined;
                    titleHtmlOutput?: string | undefined | undefined;
                    titlePrint?: string | undefined | undefined;
                    maxWidth?: number | false | undefined | undefined;
                    headerWordWrap?: boolean | undefined;
                    editorEmptyValue?: any;
                    editorEmptyValueFunc?: ((value: unknown) => boolean) | undefined;
                    title: string;
                    field?: string | undefined | undefined;
                    visible?: boolean | undefined | undefined;
                    width?: number | string | undefined | undefined;
                    cellClick?: import('tabulator-tables').CellEventCallback | undefined;
                    cellDblClick?: import('tabulator-tables').CellEventCallback | undefined;
                    cellContext?: import('tabulator-tables').CellEventCallback | undefined;
                    cellTap?: import('tabulator-tables').CellEventCallback | undefined;
                    cellDblTap?: import('tabulator-tables').CellEventCallback | undefined;
                    cellTapHold?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseEnter?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseLeave?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseOver?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseOut?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseMove?: import('tabulator-tables').CellEventCallback | undefined;
                    cellEditing?: import('tabulator-tables').CellEditEventCallback | undefined;
                    cellEdited?: import('tabulator-tables').CellEditEventCallback | undefined;
                    cellEditCancelled?: import('tabulator-tables').CellEditEventCallback | undefined;
                    cellMouseDown?: import('tabulator-tables').CellEventCallback | undefined;
                    cellMouseUp?: import('tabulator-tables').CellEventCallback | undefined;
                }[] | undefined;
                headerMenu?: ((e: MouseEvent, component: import('tabulator-tables').ColumnComponent) => Array<import('tabulator-tables').MenuObject<import('tabulator-tables').ColumnComponent> | import('tabulator-tables').MenuSeparator>) | ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').ColumnComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                headerMenuIcon?: (string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => HTMLElement | string)) | undefined;
                headerContextMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').ColumnComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').ColumnComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').ColumnComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                headerDblClickPopup?: string | undefined;
                dblClickPopup?: string | undefined;
                contextMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                clickMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                headerDblClickMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                dblClickMenu?: ({
                    separator?: boolean | undefined | undefined;
                } | {
                    label: string | HTMLElement | ((component: import('tabulator-tables').CellComponent) => string | HTMLElement);
                    action?: ((e: any, component: import('tabulator-tables').CellComponent) => any) | undefined;
                    disabled?: boolean | ((component: import('tabulator-tables').CellComponent) => boolean) | undefined;
                    menu?: /*elided*/ any[] | undefined;
                })[] | undefined;
                cellPopup?: string | ((e: MouseEvent, component: import('tabulator-tables').RowComponent | import('tabulator-tables').CellComponent | import('tabulator-tables').ColumnComponent, onRendered: () => any) => any) | undefined;
                formatterClipboard?: false | import('tabulator-tables').Formatter | undefined;
                formatterClipboardParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                formatterPrint?: false | import('tabulator-tables').Formatter | undefined;
                formatterPrintParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                accessorPrint?: import('tabulator-tables').CustomAccessor | undefined;
                accessorPrintParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                accessorHtmlOutput?: import('tabulator-tables').CustomAccessor | undefined;
                accessorHtmlOutputParams?: import('tabulator-tables').CustomAccessorParams | undefined;
                formatterHtmlOutput?: false | import('tabulator-tables').Formatter | undefined;
                formatterHtmlOutputParams?: import('tabulator-tables').JSONRecord | ((cell: import('tabulator-tables').CellComponent) => {}) | {
                    decimal?: string | undefined | undefined;
                    thousand?: string | undefined | undefined;
                    symbol?: string | undefined | undefined;
                    symbolAfter?: boolean | undefined | undefined;
                    precision?: boolean | number | undefined | undefined;
                    negativeSign?: string | true | undefined;
                } | {
                    height?: string | undefined | undefined;
                    width?: string | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlSuffix?: string | undefined | undefined;
                } | {
                    labelField?: string | undefined | undefined;
                    label?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    urlPrefix?: string | undefined | undefined;
                    urlField?: string | undefined | undefined;
                    url?: string | ((cell: import('tabulator-tables').CellComponent) => string) | undefined | undefined;
                    target?: string | undefined | undefined;
                    download?: boolean | undefined | undefined;
                } | {
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    date?: any;
                    humanize?: boolean | undefined | undefined;
                    unit?: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | undefined | undefined;
                    suffix?: boolean | undefined | undefined;
                    inputFormat?: string | undefined | undefined;
                    outputFormat?: string | undefined | undefined;
                    invalidPlaceholder?: string | number | true | import('tabulator-tables').ValueStringCallback | undefined;
                    timezone?: string | undefined | undefined;
                } | {
                    allowEmpty?: boolean | undefined | undefined;
                    allowTruthy?: boolean | undefined | undefined;
                    tickElement?: boolean | string | undefined | undefined;
                    crossElement?: boolean | string | undefined | undefined;
                } | {
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    legend?: string | true | import('tabulator-tables').ValueStringCallback | undefined;
                    legendColor?: import('tabulator-tables').Color | undefined;
                    legendAlign?: import('tabulator-tables').Align | undefined;
                    min?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    color?: import('tabulator-tables').Color | undefined;
                } | {
                    stars?: number | undefined | undefined;
                } | {
                    rowRange?: import('tabulator-tables').RowRangeLookup | undefined;
                } | {
                    size?: number | undefined | undefined;
                    max?: number | undefined | undefined;
                    onValue?: string | number | undefined | undefined;
                    offValue?: string | number | undefined | undefined;
                    onTruthy?: boolean | undefined | undefined;
                    onColor?: string | undefined | undefined;
                    offColor?: string | undefined | undefined;
                    clickable?: boolean | undefined | undefined;
                } | undefined;
                titleClipboard?: string | undefined | undefined;
                titleHtmlOutput?: string | undefined | undefined;
                titlePrint?: string | undefined | undefined;
                maxWidth?: number | false | undefined | undefined;
                headerWordWrap?: boolean | undefined;
                editorEmptyValue?: any;
                editorEmptyValueFunc?: ((value: unknown) => boolean) | undefined;
                title?: string | undefined;
                field?: string | undefined | undefined;
                visible?: boolean | undefined | undefined;
                width?: number | string | undefined | undefined;
                cellClick?: import('tabulator-tables').CellEventCallback | undefined;
                cellDblClick?: import('tabulator-tables').CellEventCallback | undefined;
                cellContext?: import('tabulator-tables').CellEventCallback | undefined;
                cellTap?: import('tabulator-tables').CellEventCallback | undefined;
                cellDblTap?: import('tabulator-tables').CellEventCallback | undefined;
                cellTapHold?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseEnter?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseLeave?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseOver?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseOut?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseMove?: import('tabulator-tables').CellEventCallback | undefined;
                cellEditing?: import('tabulator-tables').CellEditEventCallback | undefined;
                cellEdited?: import('tabulator-tables').CellEditEventCallback | undefined;
                cellEditCancelled?: import('tabulator-tables').CellEditEventCallback | undefined;
                cellMouseDown?: import('tabulator-tables').CellEventCallback | undefined;
                cellMouseUp?: import('tabulator-tables').CellEventCallback | undefined;
            } | undefined;
            resizableColumnFit?: boolean | undefined | undefined;
            rowFormatter?: ((row: import('tabulator-tables').RowComponent) => any) | undefined | undefined;
            rowFormatterPrint?: false | ((row: import('tabulator-tables').RowComponent) => any) | undefined | undefined;
            rowFormatterHtmlOutput?: false | ((row: import('tabulator-tables').RowComponent) => any) | undefined | undefined;
            rowFormatterClipboard?: false | ((row: import('tabulator-tables').RowComponent) => any) | undefined | undefined;
            addRowPos?: "bottom" | "top" | undefined | undefined;
            selectableRows?: boolean | number | "highlight" | undefined | undefined;
            selectableRange?: boolean | number | undefined;
            selectableRangeColumns?: boolean | undefined;
            selectableRangeRows?: boolean | undefined;
            selectableRangeClearCells?: boolean | undefined;
            selectableRangeClearCellsValue?: unknown;
            selectableRowsRangeMode?: "click" | undefined;
            selectableRowsRollingSelection?: boolean | undefined;
            selectableRowsPersistence?: boolean | undefined;
            selectableRowsCheck?: ((row: import('tabulator-tables').RowComponent) => boolean) | undefined | undefined;
            movableRows?: boolean | undefined | undefined;
            movableRowsConnectedTables?: string | string[] | HTMLElement | HTMLElement[] | undefined;
            movableRowsSender?: false | "delete" | ((fromRow: import('tabulator-tables').RowComponent, toRow: import('tabulator-tables').RowComponent, toTable: import('tabulator-tables').Tabulator) => any) | undefined | undefined;
            movableRowsReceiver?: "insert" | "add" | "update" | "replace" | ((fromRow: import('tabulator-tables').RowComponent, toRow: import('tabulator-tables').RowComponent, fromTable: import('tabulator-tables').Tabulator) => any) | undefined | undefined;
            movableRowsConnectedElements?: string | HTMLElement | undefined;
            resizableRows?: boolean | undefined | undefined;
            resizableRowGuide?: boolean | undefined | undefined;
            resizableColumnGuide?: boolean | undefined | undefined;
            scrollToRowPosition?: import('tabulator-tables').ScrollToRowPosition | undefined;
            scrollToRowIfVisible?: boolean | undefined | undefined;
            tabEndNewRow?: boolean | import('tabulator-tables').JSONRecord | ((row: import('tabulator-tables').RowComponent) => any) | undefined;
            frozenRowsField?: string | undefined;
            frozenRows?: number | string[] | ((row: import('tabulator-tables').RowComponent) => boolean) | undefined;
            editTriggerEvent?: "click" | "dblclick" | "focus" | undefined;
            index?: number | string | undefined | undefined;
            data?: any[] | undefined | undefined;
            importFormat?: "array" | "csv" | "json" | ((fileContents: string) => unknown[]) | undefined;
            importReader?: "binary" | "buffer" | "text" | "url" | undefined | undefined;
            autoTables?: boolean | undefined;
            ajaxURL?: string | undefined | undefined;
            ajaxParams?: {} | undefined | undefined;
            ajaxConfig?: import('tabulator-tables').HttpMethod | {
                method?: import('tabulator-tables').HttpMethod | undefined;
                headers?: import('tabulator-tables').JSONRecord | undefined;
                mode?: string | undefined | undefined;
                credentials?: string | undefined | undefined;
            } | undefined;
            ajaxContentType?: "form" | "json" | {
                headers: import('tabulator-tables').JSONRecord;
                body: (url: string, config: any, params: any) => any;
            } | undefined;
            ajaxURLGenerator?: ((url: string, config: any, params: any) => string) | undefined | undefined;
            ajaxRequestFunc?: ((url: string, config: any, params: any) => Promise<any>) | undefined | undefined;
            ajaxFiltering?: boolean | undefined | undefined;
            ajaxSorting?: boolean | undefined | undefined;
            progressiveLoad?: "load" | "scroll" | undefined | undefined;
            progressiveLoadDelay?: number | undefined | undefined;
            progressiveLoadScrollMargin?: number | undefined | undefined;
            ajaxLoader?: boolean | (() => boolean) | undefined | undefined;
            ajaxLoaderLoading?: string | undefined | undefined;
            ajaxLoaderError?: string | undefined | undefined;
            ajaxRequesting?: ((url: string, params: any) => boolean) | undefined | undefined;
            ajaxResponse?: ((url: string, params: any, response: any) => any) | undefined | undefined;
            dataLoader?: boolean | undefined;
            dataLoaderLoading?: (string | HTMLElement) | undefined;
            dataLoaderError?: string | undefined;
            dataLoaderErrorTimeout?: number | undefined;
            sortMode?: import('tabulator-tables').SortMode | undefined;
            filterMode?: import('tabulator-tables').SortMode | undefined;
            initialSort?: {
                column: string;
                dir: import('tabulator-tables').SortDirection;
            }[] | undefined;
            sortOrderReverse?: boolean | undefined | undefined;
            headerSortClickElement?: "header" | "icon" | undefined;
            initialFilter?: {
                field: string;
                type: import('tabulator-tables').FilterType;
                value: any;
            }[] | undefined;
            initialHeaderFilter?: {
                field: string;
                value: any;
            }[] | undefined;
            headerFilterLiveFilterDelay?: number | undefined | undefined;
            groupBy?: import('tabulator-tables').GroupArg | undefined;
            groupValues?: any[][] | undefined;
            groupHeader?: ((value: any, count: number, data: any, group: import('tabulator-tables').GroupComponent) => string) | ((value: any, count: number, data: any) => string)[] | undefined;
            groupHeaderPrint?: ((value: any, count: number, data: any, group: import('tabulator-tables').GroupComponent) => string) | ((value: any, count: number, data: any) => string)[] | undefined;
            groupStartOpen?: boolean | boolean[] | ((value: any, count: number, data: any, group: import('tabulator-tables').GroupComponent) => boolean) | (boolean | ((value: any, count: number, data: any, group: import('tabulator-tables').GroupComponent) => boolean))[] | undefined;
            groupToggleElement?: "arrow" | "header" | false | undefined | undefined;
            groupClosedShowCalcs?: boolean | undefined | undefined;
            groupUpdateOnCellEdit?: boolean | undefined | undefined;
            pagination?: boolean | undefined;
            paginationMode?: import('tabulator-tables').SortMode | undefined;
            paginationSize?: number | true | undefined | undefined;
            paginationSizeSelector?: true | number[] | any[] | undefined | undefined;
            paginationElement?: string | HTMLElement | undefined;
            dataReceiveParams?: Record<string, string> | undefined;
            dataSendParams?: Record<string, string> | undefined;
            paginationAddRow?: "table" | "page" | undefined | undefined;
            paginationCounter?: "rows" | "pages" | ((pageSize: number, currentRow: number, currentPage: number, totalRows: number, totalPages: number) => string | HTMLElement) | undefined;
            paginationCounterElement?: string | HTMLElement | undefined;
            paginationButtonCount?: number | undefined | undefined;
            paginationInitialPage?: number | undefined | undefined;
            persistenceID?: string | undefined | undefined;
            persistenceMode?: "local" | "cookie" | true | undefined | undefined;
            persistentLayout?: boolean | undefined | undefined;
            persistentSort?: boolean | undefined | undefined;
            persistentFilter?: boolean | undefined | undefined;
            persistence?: true | {
                sort?: boolean | undefined | undefined;
                filter?: boolean | undefined | undefined;
                group?: boolean | {
                    groupBy?: boolean | undefined | undefined;
                    groupStartOpen?: boolean | undefined | undefined;
                    groupHeader?: boolean | undefined | undefined;
                } | undefined;
                page?: boolean | {
                    size?: boolean | undefined | undefined;
                    page?: boolean | undefined | undefined;
                } | undefined;
                columns?: boolean | string[] | undefined | undefined;
                headerFilter?: boolean | undefined | undefined;
            } | undefined;
            persistenceWriterFunc?: ((id: string, type: keyof import('tabulator-tables').PersistenceOptions, data: any) => any) | undefined | undefined;
            persistenceReaderFunc?: ((id: string, type: keyof import('tabulator-tables').PersistenceOptions) => any) | undefined | undefined;
            clipboard?: boolean | "copy" | "paste" | undefined | undefined;
            clipboardCopyRowRange?: import('tabulator-tables').RowRangeLookup | undefined;
            clipboardCopyFormatter?: "table" | ((type: "plain" | "html", output: string) => string) | undefined | undefined;
            clipboardCopyHeader?: boolean | undefined | undefined;
            clipboardPasteParser?: string | ((clipboard: any) => any[]) | undefined | undefined;
            clipboardPasteAction?: "insert" | "update" | "replace" | "range" | undefined;
            clipboardCopyStyled?: boolean | undefined | undefined;
            clipboardCopyConfig?: boolean | {
                columnHeaders?: boolean | undefined | undefined;
                columnGroups?: boolean | undefined | undefined;
                rowGroups?: boolean | undefined | undefined;
                columnCalcs?: boolean | undefined | undefined;
                dataTree?: boolean | undefined | undefined;
                rowHeaders?: boolean | undefined | undefined;
                formatCells?: boolean | undefined | undefined;
            } | undefined;
            groupHeaderClipboard?: ((value: any, count: number, data: any, group: import('tabulator-tables').GroupComponent) => string) | ((value: any, count: number, data: any) => string)[] | undefined;
            groupHeaderHtmlOutput?: ((value: any, count: number, data: any, group: import('tabulator-tables').GroupComponent) => string) | ((value: any, count: number, data: any) => string)[] | undefined;
            dataTree?: boolean | undefined | undefined;
            dataTreeElementColumn?: boolean | string | undefined | undefined;
            dataTreeBranchElement?: boolean | string | undefined | undefined;
            dataTreeChildIndent?: number | undefined | undefined;
            dataTreeChildField?: string | undefined | undefined;
            dataTreeCollapseElement?: string | boolean | HTMLElement | undefined;
            dataTreeExpandElement?: string | boolean | HTMLElement | undefined;
            dataTreeStartExpanded?: boolean | boolean[] | ((row: import('tabulator-tables').RowComponent, level: number) => boolean) | undefined | undefined;
            dataTreeSelectPropagate?: boolean | undefined | undefined;
            dataTreeFilter?: boolean | undefined | undefined;
            dataTreeSort?: boolean | undefined | undefined;
            dataTreeChildColumnCalcs?: boolean | undefined | undefined;
            invalidOptionWarning?: boolean | undefined;
            debugInvalidOptions?: boolean | undefined;
            debugInitialization?: boolean | undefined;
            debugEventsExternal?: boolean | undefined;
            debugEventsInternal?: boolean | undefined;
            debugInvalidComponentFuncs?: boolean | undefined;
            debugDeprecation?: boolean | undefined;
            htmlOutputConfig?: {
                columnHeaders?: boolean | undefined | undefined;
                columnGroups?: boolean | undefined | undefined;
                rowGroups?: boolean | undefined | undefined;
                columnCalcs?: boolean | undefined | undefined;
                dataTree?: boolean | undefined | undefined;
                rowHeaders?: boolean | undefined | undefined;
                formatCells?: boolean | undefined | undefined;
            } | undefined;
            printAsHtml?: boolean | undefined | undefined;
            printConfig?: {
                columnHeaders?: boolean | undefined | undefined;
                columnGroups?: boolean | undefined | undefined;
                rowGroups?: boolean | undefined | undefined;
                columnCalcs?: boolean | undefined | undefined;
                dataTree?: boolean | undefined | undefined;
                rowHeaders?: boolean | undefined | undefined;
                formatCells?: boolean | undefined | undefined;
            } | undefined;
            printStyled?: boolean | undefined | undefined;
            printRowRange?: import('tabulator-tables').RowRangeLookup | (() => import('tabulator-tables').RowComponent[]) | undefined;
            printHeader?: import('tabulator-tables').StandardStringParam | undefined;
            printFooter?: import('tabulator-tables').StandardStringParam | undefined;
            printFormatter?: ((tableHolderElement: any, tableElement: any) => any) | undefined | undefined;
            groupHeaderDownload?: ((value: any, count: number, data: any, group: import('tabulator-tables').GroupComponent) => string) | ((value: any, count: number, data: any) => string)[] | undefined;
            spreadsheet?: boolean | undefined | undefined;
            spreadsheetRows?: number | undefined;
            spreadsheetColumns?: number | undefined;
            spreadsheetColumnDefinition?: {
                editor: string;
                resizable: string;
            } | undefined;
            spreadsheetSheets?: {
                title: string;
                key: string;
                rows?: number | undefined;
                columns?: number | undefined;
                data: unknown[][];
            }[] | undefined;
            spreadsheetSheetTabs?: boolean | undefined | undefined;
            spreadsheetOutputFull?: boolean | undefined | undefined;
        };
        element: HTMLElement;
        download: (downloadType: import('tabulator-tables').DownloadType | ((columns: import('tabulator-tables').ColumnDefinition[], data: any, options: any, setFileContents: any) => any), fileName: string, params?: import('tabulator-tables').DownloadOptions, filter?: import('tabulator-tables').RowRangeLookup) => void;
        downloadToTab: (downloadType: import('tabulator-tables').DownloadType, fileName: string, params?: import('tabulator-tables').DownloadOptions) => void;
        import: (data: any, extension: string | string[], format?: "buffer" | "binary" | "url" | "text") => any;
        copyToClipboard: (rowRangeLookup?: import('tabulator-tables').RowRangeLookup) => void;
        undo: () => boolean;
        getHistoryUndoSize: () => number | false;
        redo: () => boolean;
        getHistoryRedoSize: () => number | false;
        getEditedCells: () => import('tabulator-tables').CellComponent[];
        clearCellEdited: (clear?: import('tabulator-tables').CellComponent | import('tabulator-tables').CellComponent[]) => void;
        alert: (message: string) => void;
        clearAlert: () => void;
        destroy: () => void;
        setData: (data?: any, params?: any, config?: any) => Promise<void>;
        clearData: () => void;
        getData: (activeOnly?: import('tabulator-tables').RowRangeLookup) => any[];
        getDataCount: (activeOnly?: import('tabulator-tables').RowRangeLookup) => number;
        searchRows: (field: string, type: import('tabulator-tables').FilterType, value: any) => import('tabulator-tables').RowComponent[];
        searchData: (field: string, type: import('tabulator-tables').FilterType, value: any) => any[];
        getHtml: (rowRangeLookup?: import('tabulator-tables').RowRangeLookup, style?: boolean, config?: import('tabulator-tables').AdditionalExportOptions) => any;
        print: (rowRangeLookup?: import('tabulator-tables').RowRangeLookup, style?: boolean, config?: import('tabulator-tables').AdditionalExportOptions) => any;
        getAjaxUrl: () => string;
        replaceData: (data?: Array<{}> | string, params?: any, config?: any) => Promise<void>;
        updateData: (data: Array<{}>) => Promise<void>;
        addData: (data?: Array<{}>, addToTop?: boolean, positionTarget?: import('tabulator-tables').RowLookup) => Promise<import('tabulator-tables').RowComponent[]>;
        updateOrAddData: (data: Array<{}>) => Promise<import('tabulator-tables').RowComponent[]>;
        getRow: (row: import('tabulator-tables').RowLookup) => import('tabulator-tables').RowComponent;
        getRowFromPosition: (position: number, activeOnly?: boolean) => import('tabulator-tables').RowComponent;
        deleteRow: (index: import('tabulator-tables').RowLookup | import('tabulator-tables').RowLookup[]) => Promise<void>;
        addRow: (data?: {}, addToTop?: boolean, positionTarget?: import('tabulator-tables').RowLookup) => Promise<import('tabulator-tables').RowComponent>;
        updateOrAddRow: (row: import('tabulator-tables').RowLookup, data: {}) => Promise<import('tabulator-tables').RowComponent>;
        updateRow: (row: import('tabulator-tables').RowLookup, data: {}) => boolean;
        scrollToRow: (row: import('tabulator-tables').RowLookup, position?: import('tabulator-tables').ScrollToRowPosition, ifVisible?: boolean) => Promise<void>;
        moveRow: (fromRow: import('tabulator-tables').RowLookup, toRow: import('tabulator-tables').RowLookup, placeAboveTarget?: boolean) => void;
        getRows: (activeOnly?: import('tabulator-tables').RowRangeLookup) => import('tabulator-tables').RowComponent[];
        getRowPosition: (row: import('tabulator-tables').RowLookup, activeOnly?: boolean) => number | false;
        setColumns: (definitions: import('tabulator-tables').ColumnDefinition[]) => void;
        getColumns: (includeColumnGroups?: boolean) => import('tabulator-tables').ColumnComponent[];
        getColumn: (column: import('tabulator-tables').ColumnLookup) => import('tabulator-tables').ColumnComponent;
        getColumnDefinitions: () => import('tabulator-tables').ColumnDefinition[];
        getColumnLayout: () => import('tabulator-tables').ColumnLayout[];
        setColumnLayout: (layout: import('tabulator-tables').ColumnLayout[]) => void;
        showColumn: (column?: import('tabulator-tables').ColumnLookup) => void;
        hideColumn: (column?: import('tabulator-tables').ColumnLookup) => void;
        toggleColumn: (column?: import('tabulator-tables').ColumnLookup) => void;
        addColumn: (definition: import('tabulator-tables').ColumnDefinition, insertRightOfTarget?: boolean, positionTarget?: import('tabulator-tables').ColumnLookup) => Promise<void>;
        deleteColumn: (column: import('tabulator-tables').ColumnLookup) => Promise<void>;
        moveColumn: (fromColumn: import('tabulator-tables').ColumnLookup, toColumn: import('tabulator-tables').ColumnLookup, after: boolean) => void;
        scrollToColumn: (column: import('tabulator-tables').ColumnLookup, position?: import('tabulator-tables').ScrollToColumnPosition, ifVisible?: boolean) => Promise<void>;
        updateColumnDefinition: (column: import('tabulator-tables').ColumnLookup, definition: import('tabulator-tables').ColumnDefinition) => Promise<void>;
        setLocale: (locale: string | boolean) => void;
        getLocale: () => string;
        getLang: (locale?: string) => any;
        redraw: (force?: boolean) => void;
        blockRedraw: () => void;
        restoreRedraw: () => void;
        setHeight: (height: number | string) => void;
        setSort: (sortList: string | import('tabulator-tables').Sorter[], dir?: import('tabulator-tables').SortDirection) => void;
        getSorters: () => import('tabulator-tables').SorterFromTable[];
        clearSort: () => void;
        setFilter: (p1: string | import('tabulator-tables').Filter[] | any[] | ((data: any, filterParams: any) => boolean), p2?: import('tabulator-tables').FilterType | {}, value?: any, filterParams?: import('tabulator-tables').FilterParams) => void;
        addFilter: import('tabulator-tables').FilterFunction;
        getFilters: (includeHeaderFilters?: boolean) => import('tabulator-tables').Filter[];
        setHeaderFilterValue: (column: import('tabulator-tables').ColumnLookup, value: string) => void;
        setHeaderFilterFocus: (column: import('tabulator-tables').ColumnLookup) => void;
        getHeaderFilters: () => import('tabulator-tables').Filter[];
        getHeaderFilterValue: (column: import('tabulator-tables').ColumnLookup) => string;
        removeFilter: import('tabulator-tables').FilterFunction;
        clearFilter: (includeHeaderFilters: boolean) => void;
        clearHeaderFilter: () => void;
        selectRow: (lookup?: import('tabulator-tables').RowLookup[] | import('tabulator-tables').RowLookup | import('tabulator-tables').RowRangeLookup | true) => void;
        deselectRow: (row?: import('tabulator-tables').RowLookup[] | import('tabulator-tables').RowLookup) => void;
        toggleSelectRow: (row?: import('tabulator-tables').RowLookup) => void;
        getSelectedRows: () => import('tabulator-tables').RowComponent[];
        getSelectedData: () => any[];
        setMaxPage: (max: number) => void;
        setPage: (page: number | "first" | "prev" | "next" | "last") => Promise<void>;
        setPageToRow: (row: import('tabulator-tables').RowLookup) => Promise<void>;
        setPageSize: (size: number | true) => void;
        getPageSize: () => number | true;
        previousPage: () => Promise<void>;
        nextPage: () => Promise<void>;
        getPage: () => number | false;
        getPageMax: () => number | false;
        setGroupBy: (groups: import('tabulator-tables').GroupArg) => void;
        setGroupStartOpen: (values: boolean | boolean[] | ((value: any, count: number, data: any, group: import('tabulator-tables').GroupComponent) => boolean) | Array<boolean | ((value: any, count: number, data: any, group: import('tabulator-tables').GroupComponent) => boolean)>) => void;
        setGroupHeader: (values: ((value: any, count: number, data: any, group: import('tabulator-tables').GroupComponent) => string) | Array<(value: any, count: number, data: any) => string>) => void;
        getGroups: () => import('tabulator-tables').GroupComponent[];
        getGroupedData: (activeOnly?: boolean) => any;
        getCalcResults: () => any;
        recalc: () => void;
        navigatePrev: () => void;
        navigateNext: () => void;
        navigateLeft: () => void;
        navigateRight: () => void;
        navigateUp: () => void;
        navigateDown: () => void;
        getInvalidCells: () => import('tabulator-tables').CellComponent[];
        clearCellValidation: (clearType?: import('tabulator-tables').CellComponent | import('tabulator-tables').CellComponent[]) => void;
        validate: () => true | import('tabulator-tables').CellComponent[];
        setGroupValues: (data: import('tabulator-tables').GroupValuesArg) => void;
        refreshFilter: () => void;
        clearHistory: () => void;
        addRange: (topLeft: import('tabulator-tables').CellComponent, bottomRight: import('tabulator-tables').CellComponent) => import('tabulator-tables').RangeComponent;
        getRanges: () => import('tabulator-tables').RangeComponent[];
        getRangesData: () => unknown[][];
        setSheets: (data: import('tabulator-tables').SpreadsheetSheet[]) => void;
        addSheet: (data: import('tabulator-tables').SpreadsheetSheet) => void;
        getSheetDefinitions: () => import('tabulator-tables').SpreadsheetSheet[];
        getSheets: () => import('tabulator-tables').SpreadsheetComponent[];
        getSheet: (lookup: string | import('tabulator-tables').SpreadsheetComponent) => import('tabulator-tables').SpreadsheetComponent;
        setSheetData: (lookup: string | import('tabulator-tables').SpreadsheetComponent, data: unknown[][]) => void;
        getSheetData: (lookup: string | import('tabulator-tables').SpreadsheetComponent) => unknown[][];
        clearSheet: (lookup: string | import('tabulator-tables').SpreadsheetComponent) => void;
        activeSheet: (lookup: string | import('tabulator-tables').SpreadsheetComponent) => void;
        removeSheet: (lookup: string | import('tabulator-tables').SpreadsheetComponent) => void;
        on: <K extends keyof import('tabulator-tables').EventCallBackMethods>(event: K, callback?: import('tabulator-tables').EventCallBackMethods[K]) => void;
        off: <K extends keyof import('tabulator-tables').EventCallBackMethods>(event: K, callback?: import('tabulator-tables').EventCallBackMethods[K]) => void;
    } | null>;
    isTabulatorReady: Ref<boolean, boolean>;
    isTableInitialized: Ref<boolean, boolean>;
    initializeTabulator: () => void;
};
