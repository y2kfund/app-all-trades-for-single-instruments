import { Order } from '@y2kfund/core/orders';
type __VLS_Props = {
    accountId: string;
    userId: string | null;
    symbolRoot: string;
    window: string | null;
    onRowClick?: (row: Order) => void;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "row-click": (row: Order) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onRow-click"?: ((row: Order) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    tableDiv: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
