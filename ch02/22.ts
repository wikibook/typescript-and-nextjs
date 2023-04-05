const age = 10
console.log(age.length) // 에러: age는 number 타입이므로 length 속성은 없다

const user = {
  name: 'Hana',
  age: 36
}
console.log(user.age.length) // 에러: age는 number 타입이므로 length 속성은 없다
