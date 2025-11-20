import { default as Trades } from './Trades.vue';
export { Trades };
export default Trades;
export interface TradesProps {
    accountId: string;
    onRowClick?: (row: any) => void;
    userId?: string | null;
    window?: string | null;
    symbolRoot?: string;
}
