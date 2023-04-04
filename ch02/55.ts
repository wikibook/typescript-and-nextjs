// null이 될 수 있는 social이라는 속성의 타입을 정의한다
interface User {
  name: string
  social?: {
    facebook: boolean
    twitter: boolean
  }
}

let user: User

user = { name: 'Hana', social: { facebook: true, twitter: true } }
// true가 출력된다
console.log(user.social?.facebook)

user = { name: 'Hana' }
// social이 존재하지 않는 경우에도 다음 코드는 실행 시 에러가 되지 않는다
console.log(user.social?.facebook) 
