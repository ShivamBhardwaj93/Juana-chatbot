import React, { useState } from 'react';
import { Chatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';
import config from './chatbot/Config';

function App() {
  const [showChatbot, toggleChatbot] = useState(true);

  return (
    <div className="App">
      <div className="app-chatbot-container">
        {showChatbot && (
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        )}
      </div>

      <button
        className="app-chatbot-button"
        onClick={() => toggleChatbot((prev) => !prev)}
      >
        Toggle Chatbot
      </button>
    </div>
  );
}

export default App;
