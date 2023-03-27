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

// Buzz는 메모이제이션한 함수 컴포넌트
// isBuzz가 true이면 Buzz라 표시하고, 그 이외에는 아무것도 표시하지 않는다
// 부모 컴포넌트가 다시 그려져도, isBuzz가 바뀌지 않는 한 Buzz는 다시 그려지지 않는다
type BuzzProps = {
  isBuzz: boolean
  // props에 onClick을 추가
  onClick: () => void
}

const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz, onClick } = props
  console.log(`Buzz가 다시 그려졌습니다. izBuzz=${isBuzz}`)
  return (
    <span onClick={onClick}>
      {isBuzz ? 'Buzz' : ''}
    </span>
  )
})

const Parent = () => {
  const [count, setCount] = useState(1)
  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0

  // 이 함수는 Parent의 다시 그려질 때마다 작성된다
  const onBuzzClick = () => {
    console.log(`Buzz가 클릭되었습니다. isBuzz=${isBuzz}`)
  }
  console.log(`Parent가 다시 그려졌습니다. count=${count}`)

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <p>{`현재 카운트: ${count}`}</p>
      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
      </p>
    </div>
  )
}

export default Parent