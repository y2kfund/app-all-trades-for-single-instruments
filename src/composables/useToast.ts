import { ref } from 'vue'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface Toast {
  id: number
  type: ToastType
  title: string
  message?: string
}

export function useToast() {
  const toasts = ref<Toast[]>([])
  let toastIdCounter = 0

  function showToast(type: ToastType, title: string, message?: string) {
    const id = toastIdCounter++
    toasts.value.push({ id, type, title, message })
    setTimeout(() => removeToast(id), 5000)
  }

  function removeToast(id: number) {
    const index = toasts.value.findIndex(t => t.id === id)
    if (index !== -1) toasts.value.splice(index, 1)
  }

  return {
    toasts,
    showToast,
    removeToast
  }
}
