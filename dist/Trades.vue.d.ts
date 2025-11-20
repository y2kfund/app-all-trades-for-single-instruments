import { Trade } from '@y2kfund/core/trades';
import { TradesProps } from './index';
declare const _default: import('vue').DefineComponent<TradesProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "row-click": (row: Trade) => any;
    minimize: () => any;
    maximize: () => any;
}, string, import('vue').PublicProps, Readonly<TradesProps> & Readonly<{
    "onRow-click"?: ((row: Trade) => any) | undefined;
    onMinimize?: (() => any) | undefined;
    onMaximize?: (() => any) | undefined;
}>, {
    accountId: string;
    userId: string | null;
    window: string | null;
    symbolRoot: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    tradesColumnsBtnRef: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
        totalTrades: number;
    }> & Readonly<{}>, {
        columnsBtnRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        totalTrades: number;
    }> & Readonly<{}>, {
        columnsBtnRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    }, {}, {}, {}, {}> | null;
    tableDiv: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
