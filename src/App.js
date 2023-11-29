import './App.css';
import React, {useEffect, useState} from 'react';
import SingleCard from './components/SingleCard';

const cardImages = [
  {"src": "/img/helmet-1.png", matched: false},
  {"src": "/img/potion-1.png", matched: false},
  {"src": "/img/ring-1.png", matched: false},
  {"src": "/img/scroll-1.png", matched: false},
  {"src": "/img/shield-1.png", matched: false},
  {"src": "/img/sword-1.png", matched: false}
]

function App() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiseOne, setChoiseOne] = useState(null);
  const [choiseTwo, setChoiseTwo] = useState(null);
  //Shuffle Cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
  
    setCards(shuffledCards);
    setTurns(0);
  }


  //handle choise
  const handleChoise = (card) =>{
      choiseOne ? setChoiseTwo(card) : setChoiseOne(card)
  }

  // compare 2 selected cards
useEffect(() => {
  if(choiseOne && choiseTwo){

    if(choiseOne.src === choiseTwo.src){
      setCards(prevCards => {
        return prevCards.map(card =>{
            if(card.src === choiseOne.src){
              return {...card, matched: true};
            }else{
              return card;
            }
        })
      })
      resetTurn()
    }else {
      resetTurn()
    }
  }
},[choiseOne, choiseTwo])

  //reset choise & increment turn

  const resetTurn = () =>{
    setChoiseOne(null)
    setChoiseTwo(null)
    setTurns(prevTurns => prevTurns +1 )
  }

  return (
    <div className="App">
    <h1>Enchanted Matches</h1>
    <button onClick={shuffleCards}>New Game</button>

    <div className='card-grid'>
      {cards.map(card =>(
       <SingleCard key={card.id} card ={card} handleChoise={handleChoise}/>
      ))}
    </div>
    </div>
  );
}

export default App;
