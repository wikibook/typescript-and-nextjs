// 에러가 항상 반환되는 함수로 절대로 값이 정상으로 반환되지 않을 때 never 타입을 지정한다
function error(message: string): never {
  throw new Error(message)
}

function foo(x: string | number | number[]): boolean {
  if (typeof x === 'string') {
    return true
  } else if (typeof x === 'number') {
    return false
  }
  // never를 사용함으로써 명시적으로 값이 반환되지 않은 것을 컴파일러에게 전달할 수 있다
  // never를 사용하지 않으면 TypeScript는 컴파일 에러를 일으킨다
  return error('Never happens')
}