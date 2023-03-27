import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StyledButton } from '../components/StyledButton'
import MDXDocument from './StyledButton.mdx'

export default {
  title: 'StyledButton (5) - 도큐먼트를 사용한다',
  component: StyledButton,
  parameters: {
    docs: {
      // 도큐먼트용의 mdx 컴포넌트를 지정한다
      page: MDXDocument,
    },
  },
} as ComponentMeta<typeof StyledButton>

// 템플릿 컴포넌트를 구현한다
// Storybook으로부터 전달된 props를 그대로 Button에 전달한다
const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args} />

// bind를 호출해 Story를 작성
export const TemplateTest = Template.bind({})

// 기본 props를 설정한다
TemplateTest.args = {
  variant: 'primary',
  children: 'Primary',
}