interface User {
  name: string;
  age: number;
  email: string;
}
type UserKey = keyof User // 'name' | 'age' | 'email' 라는 Union 타입이 된다.

const key1: UserKey = 'name' // 대입 가능하다.
const key2: UserKey = 'phone' // 컴파일 시 에러가 발생한다.

// 첫 번째 인수에 전달한 객체 타입의 속성명의 Union 타입과, 두 번째 인수로 전달한 값의 타입이 일치하지 않으면 타입 에러가 된다.
// T[K]에 따라 키에 대응하는 타입이 반환값의 타이이 된다(예를 들어, 위 User의 age를 key로 전달하면, 반환값 쪽은 number가 된다).
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const user: User = {
  name: 'Hana',
  age: 36,
  email: 'test@example.com'
}

// name은 타입의 키로 존재하기 때문에 올바르게 string 타입의 값을 반환한다.
const userName = getProperty(user, 'name')

// gender는 객체의 키로 존재하지 않으므로, 컴파일 시 에러가 된다.
const userGender = getProperty(user, 'gender')
