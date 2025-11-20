<template>
  <div v-if="show" ref="dropdownRef" class="columns-dropdown" @click.stop>
    <div class="columns-header">
      <span class="columns-title">Columns</span>
    </div>
    <div class="columns-content">
      <!-- Visible columns with reorder controls -->
      <label
        v-for="(opt, idx) in visibleOptions"
        :key="opt.field"
        class="column-option"
        style="align-items: center;"
      >
        <input 
          type="checkbox" 
          :value="opt.field" 
          :checked="visibleCols.includes(opt.field)"
          @change="toggleColumn(opt.field)"
          class="column-checkbox"
        />
        <span class="column-label">
          {{ columnRenames[opt.field] || opt.label }}
          <span v-if="columnRenames[opt.field]" style="font-size: 11px; color: #888; font-style: italic; display: inline-block;">
            ({{ opt.label }})
          </span>
        </span>
        <button
          class="col-rename-btn"
          type="button"
          @click.stop="$emit('open-rename', opt.field, columnRenames[opt.field] || opt.label)"
          title="Rename column"
          style="margin-left: 6px; font-size: 13px; background: none; border: none; color: #888; cursor: pointer;"
        >✎</button>
        <span class="move-icons" style="display: flex; flex-direction: column; margin-left: 8px;">
          <button
            type="button"
            @click.stop="$emit('move-up', idx)"
            :disabled="idx === 0"
            title="Move up"
            style="background: none; border: none; cursor: pointer; padding: 0; margin-bottom: 2px;"
          >
            ▲
          </button>
          <button
            type="button"
            @click.stop="$emit('move-down', idx)"
            :disabled="idx === visibleCols.length - 1"
            title="Move down"
            style="background: none; border: none; cursor: pointer; padding: 0;"
          >
            ▼
          </button>
        </span>
      </label>
      
      <!-- Unchecked columns -->
      <label
        v-for="opt in hiddenOptions"
        :key="opt.field"
        class="column-option"
      >
        <input 
          type="checkbox" 
          :value="opt.field" 
          :checked="visibleCols.includes(opt.field)"
          @change="toggleColumn(opt.field)"
          class="column-checkbox"
        />
        <span class="column-label">{{ opt.label }}</span>
      </label>
    </div>
    <div class="columns-footer">
      <button 
        class="btn-link" 
        @click="$emit('show-all')"
      >
        Show All
      </button>
      <button class="btn-done" @click="$emit('close')">Done</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

export interface ColumnOption {
  field: string
  label: string
}

const props = defineProps<{
  show: boolean
  visibleCols: any[]
  allOptions: ColumnOption[]
  columnRenames: Record<string, string>
}>()

const emit = defineEmits<{
  'update:visibleCols': [cols: any[]]
  'move-up': [index: number]
  'move-down': [index: number]
  'open-rename': [field: string, currentName: string]
  'show-all': []
  'close': []
}>()

const dropdownRef = ref<HTMLElement | null>(null)

const visibleOptions = computed(() => {
  return props.visibleCols
    .map(field => props.allOptions.find(opt => opt.field === field))
    .filter((opt): opt is ColumnOption => opt !== undefined)
})

const hiddenOptions = computed(() => {
  return props.allOptions.filter(opt => !props.visibleCols.includes(opt.field))
})

function toggleColumn(field: string) {
  const cols = [...props.visibleCols]
  const index = cols.indexOf(field)
  
  if (index > -1) {
    cols.splice(index, 1)
  } else {
    cols.push(field)
  }
  
  emit('update:visibleCols', cols)
}
</script>
