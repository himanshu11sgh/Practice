import {useState} from 'react';
import {Chatbot} from 'supersimpledev';
import dayjs from 'dayjs';
import './ChatInput.css';

export function ChatInput({chatMessages, setChatMessages, isLoading, setIsLoading}) {
  const [inputText, setInputText] = useState('');

  function saveInputText(e) {
    setInputText(e.target.value);

  }

  function keyDownHandler(e) {
    if (e.key == 'Enter') {
      sendMessage();
    } else if (e.key == 'Escape') {
      setInputText('')
    }
  }

  async function sendMessage() {
    setIsLoading(true);
    if (isLoading || !inputText) {
      return null;
    }
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        key: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ];
    setChatMessages([
      ...newChatMessages,
      {
        message: '',
        sender: "robot",
        key: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ])
    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        key: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ])
    setInputText('');
    setIsLoading(false);
  }

  function clearMessage() {
    setChatMessages([]);
  }

  return (
    <div className="chat-input-container">
      <input placeholder="Send a message with Chatbot" size="30" onChange={saveInputText} onKeyDown={keyDownHandler} value={inputText} className="chat-input"/>
      <button onClick={sendMessage} className="send-button">Send</button>
      <button onClick={clearMessage} className="clear-button">Clear</button>
    </div>
  )
}