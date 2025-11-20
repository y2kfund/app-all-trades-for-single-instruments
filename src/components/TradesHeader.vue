<template>
  <div class="trades-header">
    <h2>
      <router-link v-if="showHeaderLink" to="/trades">{{ appName }}</router-link>
      <span v-else>{{ appName }}</span>
      <button
        class="appname-rename-btn"
        @click="$emit('rename-app')"
        title="Rename app"
        style="width:auto;padding: 2px 7px; font-size: 13px; background: none; border: none; color: #888; cursor: pointer;"
      >✎</button>
    </h2>
    <div class="trades-tools">
      <div class="trades-count">{{ totalTrades }} trades</div>
      <button
        ref="columnsBtnRef"
        class="columns-btn"
        aria-label="Column settings"
        @click.stop="$emit('toggle-columns')"
        title="Column Settings"
      >
        <svg class="icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path fill="currentColor" d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.21-.37-.3-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.03-.22-.22-.39-.44-.39h-3.84c-.22 0-.41.16-.44.39l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96c-.22-.09-.47 0-.59.22l-1.92 3.32c-.12.21-.07.47.12.61l2.03 1.58c.04.31.06.63.06.94s-.02.63-.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.21.37.3.59.22l2.39.96c.5.38 1.03.7 1.62.94l.36 2.54c.03.22.22.39.44.39h3.84c.22 0 .41-.16.44-.39l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.09.47 0 .59-.22l1.92-3.32c.12-.21.07-.47-.12-.61l-2.03-1.58ZM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5Z"/>
        </svg>
      </button>
      <button
        @click="handleMaximize"
        class="minimize-button"
        title="Maximize"
        type="button"
      >
        ⤢
      </button>
      <button 
        v-if="showHeaderLink"
        @click="handleMinimize"
        class="minimize-button"
        title="Close"
        type="button"
      >
        X
      </button>
      <slot name="columns-dropdown"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  appName: string
  totalTrades: number
  showHeaderLink: boolean
}>()

const emit = defineEmits<{
  'rename-app': []
  'toggle-columns': []
  'maximize': []
  'minimize': []
}>()

const columnsBtnRef = ref<HTMLElement | null>(null)

function handleMaximize() {
  console.log('Maximize button clicked in TradesHeader')
  emit('maximize')
}

function handleMinimize() {
  console.log('Minimize button clicked in TradesHeader')
  emit('minimize')
}

defineExpose({
  columnsBtnRef
})
</script>
