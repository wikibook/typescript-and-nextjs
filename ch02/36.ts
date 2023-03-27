interface Point {
  x: number;
  y: number;
  z: number;
}

// 클래스가 인터페이스를 implements했을 때, z가 존재하지 않으므로 컴파일 시 에러가 된다
class MyPoint implements Point {
  x: number;
  y: number;
}