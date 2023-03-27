// T는 클래스 안에서 사용하는 임시 타입 이름이다.
class Queue<T> {
  // 내부에서 T 타입의 배열을 초기화한다
  private array: T[] = []

  // T 타입의 값을 배열에 추가한다
  push(item: T) {
    this.array.push(item)
  }

  // T 타입의 배열의 첫 번째 값을 꺼낸다
  pop(): T | undefined {
    return this.array.shift()
  }
}

const queue = new Queue<number>() // 숫자 타입을 다루는 큐를 생성한다
queue.push(111)
queue.push(112)
queue.push('foo') // number 타입이 아니므로 컴파일 시 에러가 된다

let str = 'bar'
str = queue.pop() // str은 number 타입이 아니므로 컴파일 시 에러가 된다