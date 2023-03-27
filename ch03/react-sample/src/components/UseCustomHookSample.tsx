import React, { useState, useCallback, useDebugValue } from 'react'

// input용으로 콜백과 현재의 입력 내용을 모은 훅
const useInput = () => {
  // 현재 입력값을 저장하는 훅
  const [state, setState] = useState('')
  // input이 변화하면, 훅 안의 상황을 업데이트 한다
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }, [])

  // 디버그용으로 값을 출력한다
  // 값은 개발자 도구의 Components 탭에 표시된다
  useDebugValue(`Input: ${state}`)

  // 현재 입력 내용과 콜백 함수만 반환한다
  return [state, onChange] as const
}

const Input = () => {
  const [text, onChangeText] = useInput()
  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
      <p>Input: {text}</p>
    </div>
  )
}

export default Input