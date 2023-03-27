enum Direction {
  Up,
  Down,
  Left,
  Right
}

// enum Direction을 참조
let direction: Direction = Direction.Left
// 2라는 숫자가 출력된다
console.log(direction)

// enum을 대입한 변수에 다른 타입의 값을 대입하려고 하면 에러가 된다
direction = 'Left' // string을 넣으려 하면 에러