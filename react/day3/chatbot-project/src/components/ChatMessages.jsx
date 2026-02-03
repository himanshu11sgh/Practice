import { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage.jsx';
import './ChatMessages.jsx';

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);
  const chatMessageComponents = chatMessages.map((chatMessage, i) => {
    return (
      <ChatMessage
        message={chatMessage.message}
        sender={chatMessage.sender}
        time={chatMessage.time}
        key={i}
      />
    );
  });
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessageComponents}
    </div>
  );
}

export default ChatMessages;