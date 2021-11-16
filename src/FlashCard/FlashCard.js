import React, { useState, useEffect } from 'react'
import './FlashCard.css';

function FlashCard() {

  const initialDeck = [
    { front: 'Customer Obsession', back: 'Pixelgram' },
    { front: 'Ownership', back: 'CU@Home' },
    { front: 'Invent and Simplify', back: 'Pixelgram' },
    { front: 'Are Right, A Lot', back: 'Pixelgram' },
    { front: 'Learn and Be Curious', back: 'HTML/CSS' },
    { front: 'Hire and Develop the Best', back: '-' },
    { front: 'Insist on the Highest Standards', back: '-'}
  ];

  const [deck] = useState(initialDeck);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === 'ArrowLeft') goBack();
      else if (e.key === 'ArrowRight') goForward();
    }, [])
  })

  const goBack = () => {
    (current === 0) ? setCurrent(deck.length-1) : setCurrent(current-1)
  }

  const goForward = () => {
    (current === deck.length-1) ? setCurrent(0) : setCurrent(current+1)
  }

  return (
    <div 
      id="flashcards" 
      onKeyDown={(e) => { 
        if (e.key === '37') goBack(); 
        else if (e.key === '39') goForward();
      }}
    >
      <button onClick={goBack}>Back</button>
      <Card front={deck[current].front} back={deck[current].back} />
      <button onClick={goForward}>Next</button>
    </div>
  )
}

export default FlashCard

const Card = (props) => {
  const {front, back} = props;
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === ' ') setFlip(!flip)
    }, [])
  })
  
  return (
    <div 
      className={"card " + (flip ? "flip" : "")} 
      onClick={() => setFlip(!flip)} 
      onKeyDown={(e) => { if (e.key === '32') setFlip(!flip) }}
    >
      <div className="front">{front}</div>
      <div className="back">{back}</div>    
    </div>
  )
}
