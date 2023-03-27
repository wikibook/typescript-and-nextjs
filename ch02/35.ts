interface Point {
  x: number;
  y: number;
}

function printPoint(point: Point) {
  console.log(`x 좌표는 ${point.x}입니다`)
  console.log(`y 좌표는 ${point.y}입니다`)
  console.log(`z 좌표는 ${point.z}입니다`)
}

interface Point {
  z: number;
}

// 인수의 객체에 z가 존재하지 않으므로 컴파일 시 에러가 된다
printPoint({ x: 100, y: 100 })

// 문제없이 동작한다
printPoint({ x: 100, y: 100, z: 200 })