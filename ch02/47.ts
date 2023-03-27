// 변수나 인수 선언 시 Union 타입을 지정해, number 또는 string을 받을 수 있다
function printId(id: number | string) {
  console.log(id)
}
// number라도 정상 동작한다
printId(11)
// string이라도 정상 동작한다
printId('22')