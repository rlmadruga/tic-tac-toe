import { useState } from 'react';
import './App.css';

const initialBoard = Array(9).fill('');

function App() {
  function handleClick(index) {
    console.log(index, board[index]);

    if (board[index] === '') {
      let newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
    }
  }

  const [currentPlayer, setCurrentPlayer] = useState('X');
  // const [initialCell, setCell] = useState('');

  //print the boar with empty strings - OK
  // check to see if cell is empty
  //when we click to set x or O
  //check winning condition

  const [board, setBoard] = useState(initialBoard);

  return (
    <div className='App'>
      <div className='board'>
        {board.map((space, index) => {
          return (
            <>
              {index === 3 || index === 6 ? <br /> : null}
              <div className='cel' key={index} onClick={() => handleClick(index)}>
                | {space} |{' '}
              </div>
            </>
          );
        })}
        {/* <p onClick={() => handleClick(0)}> S</p>
        <p>O</p> <p>X</p>
        <hr />
        <p>X</p>
        <p>O</p> <p>X</p>
        <hr />
        <p>X</p> <p>O</p> <p>X</p> */}
      </div>
    </div>
  );
}

export default App;
