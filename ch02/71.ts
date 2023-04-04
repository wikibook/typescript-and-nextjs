// noImplicitAny 옵션을 지정해 컴파일을 실행하면 아래 인수의 타입 정의가 없는 경우 에러가 된다.
// error TS7006: Parameter 'word' implicitly has an 'any' type.
function hello(word) {
  console.log(`Hello, ${name}`)
}

hello('Hana')
