import {useRef, useEffect} from 'react';
import {ChatMessage} from './ChatMessage';
import './ChatMessages.css';

function useAutoScroll(dependencies) {
  const ref = useRef(null);
  useEffect(() => {
    const containerElem = ref.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, dependencies)
  return ref;
}

export function ChatMessages({chatMessages, isLoading}) {
  const ref = useAutoScroll([chatMessages])
  const chatMessageComponents = chatMessages.map((message) => {
    return <ChatMessage message={message.message} sender={message.sender} key={message.key} isLoading={isLoading} time={message.time}/>
  })
  const defaultChatMessage = 'Welcome to the chatbot project! Send a message using the textbox below.'
  return (
    <div className={(chatMessages.length==0) ? "chat-messages-container welcome-msg" : "chat-messages-container"} ref={ref}>
      {(chatMessages.length==0) ? defaultChatMessage : chatMessageComponents}
    </div>
  );
}