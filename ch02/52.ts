// -1, 0, 1 중 하나만 반환하는 타입 정보를 정의한다
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1
}