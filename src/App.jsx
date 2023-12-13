import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Chatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';
import config from './chatbot/Config';


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
    <header className='App-header'>
      < Chatbot  config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
    </header>
   </div> 
  )
}

export default App
