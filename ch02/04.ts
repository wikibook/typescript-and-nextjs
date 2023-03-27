// number 타임을 인수로 전달하는 경우, 컴파일 시 다음 에러가 발생한다. 이 기능은 JavaScript에는 없다.
// error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
let age: number = 36
sayHello(age)