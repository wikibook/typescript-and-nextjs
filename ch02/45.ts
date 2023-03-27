enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}

// 예를 들어, API의 파라미터로 문자열이 전달된 경우를 가정한다
const value = 'DOWN'
// 문자열에서 Enum 타입으로 변환한다
const enumValue = value as Direction

if (enumValue === Direction.Down) {
  console.log('Down is selected')
}