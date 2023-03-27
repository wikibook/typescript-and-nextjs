function printName(obj: { firstName: string; lastName?: string }) {
  // ...
}
// 다음 패턴은 모두 정상 동작한다
printName({ firstName: 'Takuya' })
printName({ firstName: 'Takuya', lastName: 'Tejima' })