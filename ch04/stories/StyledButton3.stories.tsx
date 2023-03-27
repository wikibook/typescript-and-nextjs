import { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import { StyledButton } from '../components/StyledButton'
// 새로운 action을 임포트
import { action } from '@storybook/addon-actions'

export default {
  title: 'StyledButton (3) - 동적으로 action을 호출한다',
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>

// increment라는 이름으로 action을 출력하기 위한 함수를 만든다
const incrementAction = action('increment')

export const Primary = (props) => {
  const [count, setCount] = useState(0)
  const onClick = (e: React.MouseEvent) => {
    // 현재 계정을 전달하고, Action을 호출한다
    incrementAction(e, count)
    setCount((c) => c + 1)
  }

  return (
    <StyledButton {...props} variant="primary" onClick={onClick}>
      Count: {count}
    </StyledButton>
  )
}