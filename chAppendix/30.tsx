<html>
  <head>...</head>
  <body>
    <h1>게시판</h1>
    <h2>메시지 송신</h2>
    <div>
      <textarea id="input-message" name="message" rows="3" style="display: block;"></textarea>
      <button onclick="onSubmit()">송신</button>
    </div>
    <h2>과거의 메시지</h2>
    <ul id="messages">
      <!-- JavaScript를 사용해 동적으로 메시지를 추가한다 -->
    </ul>
  </body>
  <script>
    const onSubmit = (e) => {
      // ...API에 메시지를 던진다
    }

    const showMessages = () => {
      // API로부터 메시지를 얻는다
      // API는 과거 메시지의 리스트를 반환한다
      fetch('http://localhost:8000/messages')
      .then(response => response.json())
      .then(messages => {
        for(const message of messages) {
          const messagesContainer = document.getElementById('messages')
          const messageContainer = document.createElement('li')
          // innerHTML에 대입하고, li 태그 안에 메시지를 표시한다
          messageContainer.innerHTML = message
          messagesContainer.appendChild(messageContainer)
        }
      })
    }

    // 페이지를 모두 읽은 단계에서 API로부터 메시지를 얻어서 표시한다
    showMessages()
  </script>
</html>