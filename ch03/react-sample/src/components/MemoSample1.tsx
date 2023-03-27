import { memo, useState } from 'react'

type FizzProps = {
  isFizz: boolean
}

// Fizz는 보통 함수 컴포넌트
// isFizz가 true이면 Fizz라고 표시하고, 그 이외에는 아무것도 표시하지 않는다
// isFizz의 변화에 관계없이, 부모가 다시 그려지면 Fizz도 다시 그려진다
const Fizz = (props: FizzProps) => {
  const { isFizz } = props
  console.log(`Fizz가 다시 그려졌습니다. isFizz=${isFizz}`)
  return <span>{isFizz ? 'Fizz' : ''}</span>
}

type BuzzProps = {
  isBuzz: boolean
}

// Buzz는 메모이제이션한 함수 컴포넌트
// isBuzz가 true이면 Buzz라 표시하고, 그 이외에는 아무것도 표시하지 않는다
// 부모 컴포넌트가 다시 그려져도, isBuzz가 바뀌지 않는 한 Buzz는 다시 그려지지 않는다
const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz } = props
  console.log(`Buzz가 다시 그려졌습니다. izBuzz=${isBuzz}`)
  return (
    <span>
    {isBuzz ? 'Buzz' : ''}
    </span>
  )
})

const Parent = () => {
  const [count, setCount] = useState(1)
  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0

  console.log(`Parent가 다시 그려졌습니다. count=${count}`)
  return (
    <div>
      <button onClick={() => setCount((c) => c+1)}>+1</button>
      <p>{`편재 카운트: ${count}`}</p>
      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} />
      </p>
    </div>
  )
}

export default Parent