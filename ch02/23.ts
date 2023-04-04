function getUser() {
  return {
     name: 'Hana',
     age: 36
  }
}
const user = getUser()
console.log(user.age.length) // 에러: age는 number 타입이므로 length 속성은 없다
