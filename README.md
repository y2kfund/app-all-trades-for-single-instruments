# app-trades

Vue component library for displaying trading data with real-time updates.

## Features

- Real-time trades data from Supabase
- AG Grid integration with sorting, filtering, pagination
- Buy/Sell side highlighting
- Commission tracking
- TypeScript support
- Responsive design

## Installation

```bash
pnpm install @y2kfund/trades
```

## Usage

```vue
<script setup lang="ts">
import { Trades } from '@y2kfund/trades'
import '@y2kfund/trades/dist/style.css'

function handleRowClick(trade) {
  console.log('Trade clicked:', trade)
}
</script>

<template>
  <Trades 
    account-id="demo"
    @row-click="handleRowClick"
  />
</template>
```

## Props

- `accountId` (string, required): Account ID to filter trades
- `highlightPnL` (boolean, default: false): Highlight P&L columns
- `showHeaderLink` (boolean, default: false): Show clickable header link
- `userId` (string, optional): User ID for access control

## Events

- `row-click`: Emitted when a trade row is clicked
- `minimize`: Emitted when minimize button is clicked

## Development

```bash
pnpm dev    # Start development server
pnpm build  # Build library
```

## Dependencies

- `@y2kfund/core` - Core functionality and data hooks
- `ag-grid-vue3` - Data grid component
- `vue` - Vue 3 framework
