// user가 null이면, 실행 시 에러가 될 가능성이 있는 속성에 접근하면 컴파일 에러
// !를 사용해 명시적으로 지정함으로써 컴파일 에러를 억제
function processUser(user?: User) {
  let s = user!.name
}