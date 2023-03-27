import { NextPage } from 'next'
import styled from 'styled-components'

const Text = styled.span`
  /* theme으로부터 값을 참조해 스타일을 적용 */
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSizes[3]};
  margin: ${(props) => props.theme.space[2]};
`

const Page: NextPage = () => {
  return (
    <div>
      <Text>Theme으로부터 참조한 색상을 사용하고 있습니다</Text>
    </div>
  )
}

export default Page