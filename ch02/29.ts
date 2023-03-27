const foo: any = 'test'
const bar: number = foo as number
// 컴파일 시에는 number 타입으로서 다뤄져 에러가 발생하지 않지만, 실행 시 사실은 string 타입이 전달되므로 다음 에러가 발생한다
// TypeError: fuga.toFixed is not a function
console.log(bar.toFixed(2))