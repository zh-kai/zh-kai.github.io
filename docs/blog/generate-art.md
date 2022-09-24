# Generate Art

## Code Snippet

```typescript
// from https://github.com/georgedoescode/generative-utils
// @note: 将一个数字从 a~b 映射到 a1~b1
const map = (n: number, start1: number, end1: number, start2: number, end2: number) => {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
};

// @note: 随机返回 min~max 的一个数 / 随机返回数组中的一个元素
export function random<T>(array: T[]): T;
export function random(min: number, max: number, clamp?: boolean): number;
export function random<T>(minOrArray: number | T[], max?: number, clamp = true): number | T {
  const isArray = Array.isArray(minOrArray);
  if (isArray) {
    const targetArray = minOrArray;
    return targetArray[random(0, targetArray.length - 1)];
  } else {
    const seed = seedrandom();
    const min = minOrArray as number;
    const val = seed() * (max - min) + min;
    return clamp ? Math.round(val) : val;
  }
}
```
