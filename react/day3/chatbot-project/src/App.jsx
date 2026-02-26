import { useState, useEffect} from 'react';
import {Chatbot} from 'supersimpledev';
import {ChatMessages} from './components/ChatMessages';
import {ChatInput} from './components/ChatInput';
import './App.css';

function App() {
  const defaultChatMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
  const [chatMessages, setChatMessages] = useState(defaultChatMessages);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const newResponses = {
      'name': 'Himanshu',
      'age': 22,
      'hobby': 'Playing basketball'
    }
    Chatbot.addResponses(newResponses)
  }, []);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(chatMessages))
  }, [chatMessages])
  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} isLoading={isLoading}/>
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} isLoading={isLoading} setIsLoading={setIsLoading}/>
    </div>
  );
}

export default App
