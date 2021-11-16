import React, { useState } from 'react'
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

  const [deck, setDeck] = useState(initialDeck);
  const [current, setCurrent] = useState(0);

  const goBack = () => {
    (current === 0) ? setCurrent(deck.length-1) : setCurrent(current-1)
  }

  const goForward = () => {
    (current === deck.length-1) ? setCurrent(0) : setCurrent(current+1)
  }

  return (
    <div id="flashcards">
      <button onClick={goBack}>Back</button>
      <Card front={deck[current].front} back={deck[current].back} />
      <button onClick={goForward}>Next</button>
    </div>
  )
}

export default FlashCard

const Card = (props) => {
  const {front, back} = props;

  const [showFront, setShowFront] = useState(true);

  const handleFlip = () => {
    setShowFront(!showFront)
  }
  
  return (
    <div className="card" onClick={handleFlip}>
      { (showFront)
        ? <div className="front">{front}</div>
        : <div className="back">{back}</div>
      }
    </div>
  )
}
