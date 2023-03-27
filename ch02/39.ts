class Point {
  x: number;
  y: number;

  // 인수가 없는 경우의 초깃값을 지정한다
  constructor(x: number = 0, y: number = 0) {
    this.x = x
    this.y = y
  }

  // 반환값이 없는 함수를 정의할 때는 void를 지정한다
  moveX(n: number): void {
    this.x += n
  }

  moveY(n: number): void {
    this.y += n
  }
}

const point = new Point()
point.moveX(10)
console.log(`${point.x}, ${point.y}`) // 10, 0