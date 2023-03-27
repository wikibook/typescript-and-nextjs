import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StyledButton } from '../components/StyledButton'

export default {
  title: 'StyledButton (4) - Control을 사용한다',
  component: StyledButton,
  argTypes: {
    // props에 전달하는 variant를 Storybook으로부터 변경할 수 있도록 추가
    variant: {
      // 라디오 버튼으로 설정할 수 있도록 지정
      control: { type: 'radio' },
      options: ['primary', 'success', 'transparent'],
    },
    // props에 전달하는 children을 Storybook으로부터 변경할 수 있도록 추가
    children: {
      // 텍스트 박스에서 입력할 수 있도록 지정
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof StyledButton>

// 템플릿 컴포넌트를 구현
// Storybook으로부터 전달된 props를 그대로 Button에 전달한다
const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args} />

// bind를 호출해 Story를 작성
export const TemplateTest = Template.bind({})

// 기본 props를 설정한다
TemplateTest.args = {
  variant: 'primary',
  children: 'Primary',
}