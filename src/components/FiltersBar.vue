<template>
  <div v-if="activeFilters.length" class="filters-bar">
    <span class="filters-label">Filtered by:</span>
    <div class="filters-tags">
      <span v-for="f in activeFilters" :key="`${f.field}-${f.value}`" class="filter-tag">
        <strong>{{ getFieldLabel(f.field) }}:</strong> {{ f.value }}
        <button class="tag-clear" @click="$emit('clear-filter', f.field)">✕</button>
      </span>
      <button class="btn-clear-all" @click="$emit('clear-all')">Clear all</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ActiveFilter, FilterField } from '../composables/useTradesFilters'

defineProps<{
  activeFilters: ActiveFilter[]
}>()

defineEmits<{
  'clear-filter': [field: FilterField]
  'clear-all': []
}>()

function getFieldLabel(field: FilterField): string {
  const labels: Record<FilterField, string> = {
    legal_entity: 'Account',
    symbol: 'Symbol',
    assetCategory: 'Asset Class',
    quantity: 'Quantity',
    contract_quantity: 'Contract Quantity',
    accounting_quantity: 'Accounting Quantity'
  }
  return labels[field] || 'Unknown'
}
</script>
