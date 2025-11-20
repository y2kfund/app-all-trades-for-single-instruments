export type ToastType = 'success' | 'error' | 'warning' | 'info';
export interface Toast {
    id: number;
    type: ToastType;
    title: string;
    message?: string;
}
export declare function useToast(): {
    toasts: import('vue').Ref<{
        id: number;
        type: ToastType;
        title: string;
        message?: string | undefined;
    }[], Toast[] | {
        id: number;
        type: ToastType;
        title: string;
        message?: string | undefined;
    }[]>;
    showToast: (type: ToastType, title: string, message?: string) => void;
    removeToast: (id: number) => void;
};
