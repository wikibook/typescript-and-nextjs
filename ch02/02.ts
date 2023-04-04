// firstName 뒤에 string 타입을 붙여, 문자열 이외의 값을 전달하지 못하게 할 수 있다
function sayHello (firstName: string) {
  console.log('Hello ' + firstName)
}

let firstName: string = 'Hana'
sayHello(firstName)
