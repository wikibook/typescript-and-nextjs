// Container의 props 타입을 정의한다
type ContainerProps = {
  title: string
  children: React.ReactNode
}

// React 컴포넌트의 타입 붙이기에 관해서는 아래를 참조한다
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/
const Container = (props: ContainerProps): JSX.Element => {
  const { title, children } = props

  return (
    <div style={{ background: 'red' }}>
      <span>{title}</span>
      {/* props의 children을 삽입하면, 이 컴포넌트의 시작 태그와 종료 태그로 감싼 요소를 표시한다 */}
      <div>{children}</div>
    </div>
  )
}

const Parent = (): JSX.Element => {
  return (
    // Container를 사용할 때, 다른 요소를 감싸서 사용한다
    <Container title="Hello">
      <p>이 부분은 배경색으로 둘러 싸여 있습니다.</p>
    </Container>
  )
}

export default Parent
