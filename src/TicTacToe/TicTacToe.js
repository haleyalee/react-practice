import React, {useState, useEffect} from 'react'
import './TicTacToe.css';

function TicTacToe() {
  const board = [
    {idx: 0, player: ''},
    {idx: 1, player: ''},
    {idx: 2, player: ''},
    {idx: 3, player: ''},
    {idx: 4, player: ''},
    {idx: 5, player: ''},
    {idx: 6, player: ''},
    {idx: 7, player: ''},
    {idx: 8, player: ''},
  ];

  const [player, setPlayer] = useState('X');
  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState('');
  const [game, setGame] = useState(Array(9).fill(null));
  
  const switchPlayer = () => {
    (player === 'X') ? setPlayer('O') : setPlayer('X')
    setCount(count+1)
  }

  const playMove = (idx) => {
    const gameCopy = [...game];
    gameCopy[idx] = player;
    console.log(gameCopy)
    setGame(gameCopy);
  }

  useEffect(() => {
    if (count > 5) {
      setWinner(determineWinner())
    }
  }, [count])

  const determineWinner = () => {
    const outcomes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8]
    ]

    for (let i=0; i<outcomes.length; i++) {
      const [a, b, c] = outcomes[i];
      if (game[a] && game[a] === game[b] && game[b] === game[c])
        return game[a]
    }

    return null;
  }

  const resetGame = () => {
    setGame([]);
    setPlayer('X');
    setCount(0);
    setWinner('');
  }

  return (
    <div>
      <p>{ winner ? `Winner is: ${winner}` : `${player}'s turn to play` }</p>
      <div id="board" onClick={switchPlayer}>
        {board.map((cell) => 
          <Cell key={cell.idx} cell={cell} player={player} playMove={playMove} />
        )}
      </div>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  )
}

export default TicTacToe

const Cell = (props) => {
  const {cell, player, playMove} = props;
  const [move, setMove] = useState(cell.player);

  return (
    <div className="cell" onClick={() => {setMove(player); playMove(cell.idx)}}>{move}</div>
  )
}