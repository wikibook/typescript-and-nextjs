import React, { useState, useRef, useImperativeHandle } from 'react'

const Child = React.forwardRef((props, ref) => {
  const [message, setMessage] = useState<string | null>(null)

  // useImperativeHandle에서 부모의 ref로부터 참조할 수 있는 값을 지정
  useImperativeHandle(ref, () => ({
    showMessage: () => {
      const date = new Date()
      const message = `Hello, it's ${date.toLocaleString()} now`
      setMessage(message)
    },
  }))

  return <div>{message !== null ? <p>{message}</p> : null}</div>
})

const Parent = () => {
  const childRef = useRef<{ showMessage: () => void }>(null)
  const onClick = () => {
    if (childRef.current !== null) {
      // 자녀의 useImperativeHandle에서 지정한 값을 참조
      childRef.current.showMessage()
    }
  }

  return (
    <div>
      <button onClick={onClick}>Show Message</button>
      <Child ref={childRef} />
    </div>
  )
}

export default Parent