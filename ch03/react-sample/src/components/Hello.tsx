// Hello를 클릭하면 얼럿을 표시하는 텍스트를 반환한다
const Hello = () => {
  // 클릭 시에 호출되는 함수
  const onClick = () => {
    // 얼럿을 표시한다
    alert('hello')
  }
  const text = 'Hello, React'

  // 텍스트 자녀로 가진 div 요소를 반환한다
  return (
    // div의 onClick에 클릭 시의 콜백 함수를 전달한다
    <div onClick={onClick}>
      {text}
    </div>
  )
}

// 외부로부터 Hello를 읽도록 익스포트 한다
export default Hello