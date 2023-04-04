function sayHello(name: string, greeting?: string): string {
  return `${greeting} ${name}`
}

// 다음은 모두 문제없이 동작한다
sayHello('Hana') // Hana
sayHello('Hana', 'Hello') // Hello Hana
