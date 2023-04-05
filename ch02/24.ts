const names = ['Hana', 'Wonjoon', 'Eunjeong']

names.forEach((name) => {
  // string 타입으로 다뤄지므로, 함수명이 잘못된 호출은 컴파일 에러가 된다.
  // toUpperCase가 올바른 함수명이다
  console.log(name.toUppercase())
})
