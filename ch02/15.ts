let user: any = { firstName: 'Hana' }
// 다음 행의 코드는 모두 컴파일러 에러가 발생하지 않는다
user.hello()
user()
user.age = 100
user = 'hello'

// 다른 타입으로 대입해도 에러가 발생하지 않는다
const n: number = user
