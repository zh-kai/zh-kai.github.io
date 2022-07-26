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