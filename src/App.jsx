import React, { useState } from 'react';

export default function App() {
  // array to use with map
  const [board, setBoard] = useState([
    ['','',''],
    ['','',''],
    ['','',''],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const handleClick = (rowIndex, colIndex) => {
    let newBoard = [...board];
    newBoard[rowIndex][colIndex] = currentPlayer;
    setBoard([...newBoard]);
    currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
  }

  const rows = board.map((row, rowIndex) => {
    // row is one *unnested* array
    console.log('row', row);
    const buttons = row.map((square, colIndex) => (<button onClick={() => handleClick(rowIndex, colIndex)}>{square}</button>));
    return (
    <div className="boardRow">
      {buttons}
    </div>);
  });

  return (
    <div className="board">
      {rows}
    </div>
  )
};
