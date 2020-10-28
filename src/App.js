import { useState } from 'react';
import './App.css';

const initialBoard = Array(9).fill(null);

//print the boar with empty strings - OK
// check to see if cell is empty - OK
//when we click to set x or O
//check winning condition

function App() {
  function handleClick(index) {
    console.log(index, board[index]);

    if (board[index] === null) {
      let newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
    }
  }

  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [board, setBoard] = useState(initialBoard);

  return (
    <div className='App'>
      <p>Tic Tac Toe</p>
      <div className='board'>
        {board.map((space, index) => {
          return (
            <>
              {/* {index === 3 || index === 6 ? <br /> : null} */}
              <div
                className={`cell ${space}`}
                key={index}
                onClick={() => handleClick(index)}
              >
                <h3>{space}</h3>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
