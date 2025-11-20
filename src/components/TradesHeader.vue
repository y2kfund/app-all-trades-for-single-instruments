<template>
  <div class="trades-header">
    <h2>All Trades</h2>
    <div class="trades-tools">
      <div class="trades-count">{{ totalTrades }} trades</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  totalTrades: number
}>()

const emit = defineEmits<{
  
}>()

const columnsBtnRef = ref<HTMLElement | null>(null)

defineExpose({
  columnsBtnRef
})
</script>
