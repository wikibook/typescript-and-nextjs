// 머릿 글자의 I는 인터페이스임을 나타내기 위한 것이다
interface IUser {
  name: string;
  age: number;
  sayHello: () => string; // 인수 없이 문자열을 반환한다
}

class User implements IUser {
  name: string;
  age: number;

  constructor() {
    this.name = ''
    this.age = 0
  }

  // 인터페이스에 정의되어 있는 메서드를 구현하지 않으면, 컴파일 시 에러가 된다
  sayHello(): string {
    return `안녕하세요. 저는 ${this.name}이며, ${this.age}살입니다.`
  }
}

const user = new User()
user.name = 'Hana'
user.age = 36
console.log(user.sayHello()) // '안녕하세요. 저는 Hana이며, 36살입니다.'
