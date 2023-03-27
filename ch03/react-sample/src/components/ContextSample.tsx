import React from 'react'

// Title을 전달하기 위한 Context를 작성한다
const TitleContext = React.createContext('')

// Title 컴포넌트 안에서 Context의 값을 참조한다
const Title = () => {
  // Consumer를 사용해, Context의 값을 참조한다
  return (
    <TitleContext.Consumer>
      {/* Consumer 바로 아래 함수를 두고, Context 값을 참조한다 */}
      {(title) => {
        return <h1>{title}</h1>
      }}
    </TitleContext.Consumer>
  )
}

const Header = () => {
  return (
    <div>
      {/* Header로부터 Title로는 아무 데이터도 전달하지 않는다 */}
      <Title />
    </div>
  )
}

// Page 컴포넌트 안에서 Context에 값을 전달한다
const Page = () => {
  const title = 'React Book'

  // Provider를 사용해 Context에 값을 설정한다.
  // Provider 아래의 컴포넌트로부터 값을 참조할 수 있다.
  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  )
}

export default Page