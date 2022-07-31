# Nuxtjs (v3)

## echarts
### Instance
保存 echarts 实例时，使用 `shallowRef` 或 直接声明，不要使用 `ref` 或 `reactive` 进行保存。
```javascript
// ✅
let chart
const chart = shallowRef()

// ❎
const chart = ref()
const chart = reactive()
```

## Errors
### `nuxt3 To load an ES module, set "type": "module" in the package.json or use the .mjs extension.`
某个库没有正确引入 mjs，需要在 `nuxt.config.ts` 中配置 `alias`。
```typescript
const alias: Record<string, string> = {}
if (process.env.NODE_ENV === 'development') {
  alias.ethers = 'ethers/lib/index'
}

export default defineNuxtConfig({
  alias
})
```