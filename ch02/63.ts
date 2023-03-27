// any와 마찬가지로 어떤 값에도 unknown으로 대입할 수 있다
const x: unknown = 123
const y: unknown = 'Hello'

// 함수나 속성에 접근했을 때, unknown 타입 그대로는 컴파일 시 에러가 발생한다.
// error TS2339: Property 'toFixed' does not exist on type 'unknown'.
console.log(x.toFixed(1))
// error TS2339: Property 'toLowerCase' does not exist on type 'unknown'.
console.log(y.toLowerCase())

// 타입 안전한 상황에서 함수나 속성에 접근해서 실행할 수 있다
if (typeof x === 'number') {
  console.log(x.toFixed(1)) // 123.0
}

if (typeof y === 'string') {
  console.log(y.toLowerCase()) // hello
}