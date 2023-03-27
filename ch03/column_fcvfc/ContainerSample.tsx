// src/components/ContainerSample.tsx
import React from 'react'

// React17 이전에는 FC를 지정한 경우,
// children이 props에 암묵적으로 포함되어 있다
type ContainerProps = {
  title: string
}

const Container: React.FC<ContainerProps> = (props) => {
  const { title, children } = props

  return (
    <div style={{ background: 'red' }}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  )
}

// React17 이전에는 children를 사용하지 않는 경우, VFC를 지정한다
const Parent: React.VFC = () => {
  return (
    <Container>
      <p>ここの部分は背景色で囲まれています</p>
    </Container>
  )
}
