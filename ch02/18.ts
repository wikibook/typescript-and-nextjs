function sayHello(name: string, greeting: string = 'Hello'): string {
  return `${greeting} ${name}`
}

// 다음은 모두 문제없이 동작한다
sayHello('Takuya') // Hello Takuya
sayHello('Takuya', 'Hey')　// Hey Takuya