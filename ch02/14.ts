function printName(obj: { firstName: string; lastName?: string }) {
  // ...
}
// 다음 패턴은 모두 정상 작동한다
printName({ firstName: 'Hana' })
printName({ firstName: 'Hana', lastName: 'Kim' })
