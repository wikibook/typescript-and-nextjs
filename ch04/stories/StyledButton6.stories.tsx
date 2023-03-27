import { ComponentMeta } from '@storybook/react'
import { StyledButton } from '../components/StyledButton'
import { linkTo } from '@storybook/addon-links'

export default {
  title: 'StyledButton (6) - Link를 사용한다',
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>

export const Primary = (props) => {
  // 클릭하면 StyledButton/Success의 스트리로 이동한다
  return (
    <StyledButton {...props} variant="primary" onClick={linkTo('StyledButton (6) - Link를 사용한다', 'Success')}>
      Primary
    </StyledButton>
  )
}

export const Success = (props) => {
  // 클릭하면 StyledButton/Transparent의 스토리로 이동한다
  return (
    <StyledButton {...props} variant="success" onClick={linkTo('StyledButton (6) - Link를 사용한다', 'Transparent')}>
      Primary
    </StyledButton>
  )
}

export const Transparent = (props) => {
  // 클릭하면 StyledButton/Primary의 스토리로 이동한다
  return (
    <StyledButton {...props} variant="transparent" onClick={linkTo('StyledButton (6) - Link를 사용한다', 'Primary')}>
      Transparent
    </StyledButton>
  )
}