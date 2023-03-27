<h2>과거 메시지</h2>
<ul id="messages">
  {messages.map((message, index) => (
    <li key={index} dangerouslySetInnerHTML={{ __html: message }} />
  ))}
</ul>