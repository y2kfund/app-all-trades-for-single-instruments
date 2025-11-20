<!-- filepath: /Users/sb/gt/y2kfund/app-trades/src/Trades.new.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import type { Trade } from '@y2kfund/core/trades'
import type { TradesProps } from './index'
import 'flatpickr/dist/flatpickr.min.css'

// Components
import ToastNotification from './components/ToastNotification.vue'
import TradeData from './components/TradeData.vue'
import OrderData from './components/OrderData.vue'

// Props & Emits
const props = withDefaults(defineProps<TradesProps>(), {
  accountId: '1',
  userId: null,
  window: null,
  symbolRoot: 'META',
})

const emit = defineEmits<{ 
  'row-click': [row: Trade]
  'minimize': []
  'maximize': []
}>()

// Tab management
const activeTab = ref<'trades' | 'orders'>('trades')

// Handle row click from TradeData component
const handleTradeRowClick = (row: Trade) => {
  emit('row-click', row)
}

const handleOrderRowClick = (row: Order) => {
  emit('row-click', row)
}
</script>

<template>
  <div class="trades-card">
    <!-- Tabs -->
    <div class="tabs">
      <button 
        :class="['tab', { active: activeTab === 'trades' }]"
        @click="activeTab = 'trades'"
      >
        All Trades
      </button>
      <button 
        :class="['tab', { active: activeTab === 'orders' }]"
        @click="activeTab = 'orders'"
      >
        All Orders
      </button>
    </div>

    <!-- Trades Tab -->
    <div v-show="activeTab === 'trades'" class="tab-content">
      <TradeData
        :account-id="props.accountId"
        :user-id="props.userId"
        :symbol-root="props.symbolRoot"
        :window="props.window"
        :on-row-click="props.onRowClick"
        @row-click="handleTradeRowClick"
      />
    </div>

    <!-- Orders Tab -->
    <div v-show="activeTab === 'orders'" class="tab-content">
      <OrderData
        :account-id="props.accountId"
        :user-id="props.userId"
        :symbol-root="props.symbolRoot"
        :window="props.window"
        :on-row-click="props.onRowClick"
        @row-click="handleOrderRowClick"
      />
    </div>
  </div>
</template>

<style>
.tabulator-header-filter input {
    padding: 2px 4px !important;
}

body {
    margin: 0;
}

.trades-header h2 {
    margin: 0;
}
</style>

<style scoped>
.trades-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tabs {
  display: flex;
  border-bottom: 1px solid #ddd;
  background-color: #f5f5f5;
}

.tab {
  padding: 12px 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
}

.tab:hover {
  color: #333;
  background-color: #e8e8e8;
}

.tab.active {
  color: #0066cc;
  border-bottom-color: #0066cc;
  background-color: #fff;
}

.tab-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.placeholder {
  padding: 40px;
  text-align: center;
  color: #999;
  font-size: 16px;
}
</style>