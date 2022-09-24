# Math

```js [abc.js]
// @note: 极坐标 -> 直角坐标
function Polar2Rectangular(radius, angle) {
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle),
  };
}

// @note: 直角坐标 -> 极坐标
function Rectangular2Polar(x, y) {
  return {
    radius: Math.sqrt(x * x + y * y),
    angle: Math.atan2(y, x),
  };
}
```
