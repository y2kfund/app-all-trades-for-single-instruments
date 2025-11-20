# AGENTS.md — y2kfund/app-trades

**Purpose:** This repo contains the **Trades app**. The app exposes a Vue 3 **component** that displays trading data using ag-grid. Published privately to GitHub Packages as `@y2kfund/trades`.

- **Repo name:** `app-trades`
- **Package name:** `@y2kfund/trades`
- **Component export:** `Trades`
- **Core pkg:** `@y2kfund/core` — provides `useTradesQuery()` with realtime updates and shared types
- **Functionality:** Displays trades table with buy/sell highlighting, commission tracking

**System layout**
- **app-core** (`@y2kfund/core`) ⟶ provides `useTradesQuery()` with realtime updates
- **app-trades** (`@y2kfund/trades`) ⟶ consumes core's hook; exports `<Trades />`
- **app-dashboard** ⟶ uses **app-core** + **app-trades**

---

## 1) Architecture & Rules

- ✅ Use `useTradesQuery()` from `@y2kfund/core` directly
- ✅ Real-time updates handled automatically by core
- ✅ AG Grid for data display with sorting/filtering
- ✅ TypeScript throughout
- ❌ No local Supabase clients or QueryClient creation
- ❌ No localStorage caching (handled by core)

---

## 2) File Layout

```
src/
  Trades.vue          # main component with ag-grid
  index.ts            # library entry: export component + props interface
dev/
  dev.ts              # dev harness: installs app-core, mounts <Trades/>
index.html            # dev harness page
package.json
vite.config.ts
tsconfig.json
README.md
AGENTS.md            # this file
```

---

## 3) Library Entry & Exports

**`src/index.ts`**
```ts
import Trades from './Trades.vue'

export { Trades }
export default Trades

export interface TradesProps {
  accountId: string
  highlightPnL?: boolean
  showHeaderLink?: boolean
  userId?: string | null
}
```

---

## 4) Component Implementation

**Key features:**
- ✅ Direct import: `import { useTradesQuery, type Trade } from '@y2kfund/core'`
- ✅ AG Grid with buy/sell side highlighting
- ✅ Commission tracking and summary
- ✅ Real-time updates from core hook
- ✅ Clean loading/error states
- ✅ Proper cleanup in `onBeforeUnmount`

**Grid columns:**
- Symbol, Side (BUY/SELL), Quantity, Price
- Asset Class, Trade Date, Settlement Date
- Commission (highlighted in red)

---

## 5) Data Pattern

Uses core's `useTradesQuery()` hook directly:

```ts
const q = useTradesQuery(props.accountId)
// q.data - trades array
// q.isLoading - loading state
// q.isError - error state
// q._cleanup() - cleanup realtime subscription
```

Core handles:
- ✅ Supabase queries to `hf.trades` table
- ✅ Real-time subscriptions and invalidation
- ✅ Query state management
- ✅ Error handling

---

## 6) Usage

**In dashboard app:**
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
    :account-id="accountId"
    @row-click="handleRowClick"
  />
</template>
```

---

## 7) Do / Don't

- ✅ Install **app-core** and consume its `useTradesQuery()` hook
- ✅ Use **AG Grid** for data display
- ✅ Emit typed events (`row-click`)
- ✅ Use CSS variables for theming
- ❌ Don't create Supabase clients or `QueryClient`s
- ❌ Don't add global CSS
- ❌ Don't use localStorage for caching

---

## 8) Definition of Done

- ✅ `pnpm dev` runs standalone demo
- ✅ `pnpm build` produces clean `dist/` ESM library
- ✅ Component uses `useTradesQuery` with automatic realtime
- ✅ AG Grid with proper column definitions
- ✅ Published as `@y2kfund/trades` on GitHub Packages