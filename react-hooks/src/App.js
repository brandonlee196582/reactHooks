import './App.css';
import React, { useState } from 'react';
import { ToggleButton } from './toggleButton.js';

export const App = () => {
  const [messages, setMessages] = useState(['message1','message2','message3','message4']);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {messages.map(message => <ToggleButton toggleText={message} />)}
        </div>
      </header>
    </div>
  );
}
