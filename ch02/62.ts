type User = {
  name: string;
  gender: string;
}

type UserReadonly = Readonly<User>

let user: User = { name: 'Hana', gender: 'Male' }
let userReadonly: UserReadonly = { name: 'Hana', gender: 'Male' }

user.name = 'Jinho' // OK
userReadonly.name = 'Jinho' // 컴파일 시 에러가 발생한다
