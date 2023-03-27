type Point = {
  x: number;
  y: number;
}

function printPoint(point: Point) {
  console.log(`x 좌표는 ${point.x}입니다`)
  console.log(`y 좌표는 ${point.y}입니다`)
}

printPoint({ x: 100, y: 100 })
// 타입이 맞아도 속성명이 다르면 에러
// printPoint({ z: 100, t: 100 })