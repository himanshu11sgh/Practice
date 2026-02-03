import { useState } from "react";
// import dayjs from 'dayjs';
import { ChatInput } from './components/ChatInput.jsx';
import ChatMessages from './components/ChatMessages.jsx';
import "./App.css";


function App() {
  // const defaultChatMessages = [
  //   {
  //     message: "Hello Hi",
  //     sender: "user",
  //     time: dayjs().valueOf()
  //   },
  //   {
  //     message: "What's up what can I do for you",
  //     sender: "robot",
  //     time: dayjs().valueOf()
  //   },
  //   {
  //     message: "Flip the coin",
  //     sender: "user",
  //     time: dayjs().valueOf()
  //   },
  //   {
  //     message: "You got heads",
  //     sender: "robot",
  //     time: dayjs().valueOf()
  //   },
  // ];
  const chatMessagesLocal = JSON.parse(localStorage.getItem('messages')) || [];
  console.log('chatMessagesLocal', chatMessagesLocal);
  const [chatMessages, setChatMessages] = useState(chatMessagesLocal);

  return (
    <>
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </>
  );
}

export default App;
