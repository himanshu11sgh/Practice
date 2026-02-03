import { useState, useEffect } from 'react';
import { Chatbot } from 'supersimpledev';
import dayjs from 'dayjs';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
  // Component
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages))
  }, [chatMessages])

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function clearMessages() {
    setChatMessages([])
    localStorage.setItem('messages', '[]');
  }

  async function sendMessage() {
    if (isLoading || !inputText) {
      console.log(isLoading, inputText);
      return false;
    }
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        time: dayjs().valueOf()
      },
    ];
    setInputText("");
    setChatMessages([
      ...newChatMessages,
      {
        message: "Loading...",
        sender: "robot",
        time: dayjs().valueOf()
      },
    ]);
    setIsLoading(true);
    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        time: dayjs().valueOf()
      },
    ]);
    setIsLoading(false);
  }

  function keyDownHandler(event) {
    console.log("event.key", event.key);
    if (event.key == "Enter") {
      sendMessage();
    } else if (event.key == "Escape") {
      setInputText("");
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Send a message to Chatbot"
        className=""
        onChange={saveInputText}
        onKeyDown={keyDownHandler}
        value={inputText}
      />
      <button type="button" className="send-button" onClick={sendMessage}>
        Send
      </button>
      <button type="button" className="send-button" onClick={clearMessages}>
        Clear
      </button>

    </div>
  );
}