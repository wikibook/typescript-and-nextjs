interface Point {
  x: number;
  y: number;
  z?: number;
}

// 에러는 발생하지 않는다
class MyPoint implements Point {
  x: number;
  y: number;
}