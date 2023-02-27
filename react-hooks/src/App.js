import './App.css';
import React, { useState, useEffect } from 'react';
import { ToggleButton } from './toggleButton.js';

export const App = () => {
  const [messages, setMessages] = useState(['message1','message2','message3','message4']);
  const [test, setTest] = useState("");
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    fetch(`https://api.scryfall.com/cards/search?q=forest`)
    .then(response => response.json())
    .then(searchData => {
      setCardList(searchData.data.map(card => {
        return {cardName: card.name, picUrl: card.image_uris.small}
      })
      )
    })
}, [test])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {cardList.map(card => <ToggleButton toggleText={card.cardName} toggleImage={card.picUrl} />)}
        </div>
      </header>
    </div>
  );
}
