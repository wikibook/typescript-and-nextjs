type User = {
  readonly name: string;
  readonly gender: string;
}

let user: User = { name: 'Hana', gender: 'Male' }

// 아래 대입을 수행했을 때 컴파일 시 에러가 발생한다
user.gender = 'Female'
