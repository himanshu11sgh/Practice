import { useState } from 'react'
// import {Chatbot} from 'supersimpledev';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg';
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false);
  function showPasswordHandler() {
    setShowPassword(!showPassword);
  }
  return (
    <>
      <p className="heading">Hello, welcome to my website</p>
      <p><input type="email" placeholder="Email"/></p>
      <p><input type={showPassword ? "text" : "password"} placeholder="Password"/> <button onClick={showPasswordHandler} className="btn">{showPassword ? "Show" : "Hide"}</button></p>
      <p>
        <button className="btn">Login</button>
        <button className="btn">Sign up</button>
      </p>
    </>
  )
}

export default App
