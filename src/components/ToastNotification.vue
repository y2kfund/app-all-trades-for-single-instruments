<template>
  <div class="toast-container">
    <div 
      v-for="toast in toasts" 
      :key="toast.id" 
      :class="['toast', `toast-${toast.type}`]"
    >
      <strong>{{ toast.title }}</strong>
      <span v-if="toast.message">{{ toast.message }}</span>
      <button @click="$emit('remove', toast.id)" class="toast-close">×</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Toast } from '../composables/useToast'

defineProps<{
  toasts: Toast[]
}>()

defineEmits<{
  remove: [id: number]
}>()
</script>
