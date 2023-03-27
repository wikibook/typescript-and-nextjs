import { useState } from 'react'

type CounterProps = {
  initialValue: number
}

const Counter = (props: CounterProps) => {
  const { initialValue } = props
  // カウントを保持する1つの状態をuseState()で宣言します。引数には初期値を指定します。
  // 계정을 유지하는 하나의 상태를 useState()로 선언한다. 인수에는 초깃값을 지정한다.
  // count는 현재 상태, setCount는 상태를 업데이트하는 함수다。
  const [count, setCount] = useState(initialValue)

  return (
    <div>
      <p>Count: {count}</p>
      {/* setCount를 호출해서 상태를 업데이트한다 */}
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  )
}

export default Counter