function calc(isSum: boolean) {
  let a = 100
  if (isSum) {
    // a가 정의된 안쪽의 블록 스코프 안의 사용이므로 에러가 발생하지 않는다
    let b = a + 1
    return b
  }
  // error TS2304: Cannot find name 'b'.
  // var로 정의한 경우는 에러가 발생하지 않지만, let으로 정의했을 때는 에러가 발생한다
  return b
}