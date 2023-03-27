import { NextPage } from 'next'
import styled from 'styled-components'

// span 요소에 스타일을 적용한 컴포넌트
const Badge = styled.span`
  padding: 8px 16px;
  font-weight: bold;
  text-align: center;
  color: white;
  background: red;
  border-radius: 16px;
`

const Page: NextPage = () => {
  return <Badge>Hello World!</Badge>
}

export default Page