// window.confirm 함수의 반환 타입은 boolean인 것을 TypeScript가 알고 있으므로
// 대입하는 함수 타입이 일치하지 않으면 컴파일 에러가 된다
window.confirm = () => {
  // boolean을 return하지 않는 한 에러가 된다
  console.log('confirm 함수')
}