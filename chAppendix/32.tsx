const Page = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:8000/messages')
      const messages = await response.json()
      setMessages(messages)
    })()
  })

  const [inputMessage, setInputMessage] = useState('')
  const onInputMessageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputMessage(e.target.value)
    },
    []
  )

  const onSubmit = useCallback(() => {
    // 메시지를 API에 전송한다
    ...
  }, [inputMessage])

  return (
    <div>
      <h1>게시판</h1>
      <h2>메시지 송신</h2>
      <div>
        <textarea
          name="message"
          rows={3}
          value={inputMessage}
          onChange={onInputMessageChange}
          style={{ display: 'block' }}
        />
        <button onClick={onSubmit}>송신</button>
      </div>
      <h2>과거 메시지</h2>
      <ul id="messages">
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  )
}