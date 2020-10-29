import { useEffect, useState } from 'react';
import './App.css';

const initialBoard = Array(9).fill(null);

function App() {
  function handleClick(index) {
    if (winner) {
      alert('Acabou o jogo!');
      return null;
    }

    if (board[index] === null) {
      let newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
    }
  }

  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(initialBoard);

  const checkWinner = () => {
    const list = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    list.forEach((cells) => {
      if (cells.every((cell) => cell === 'O')) {
        setWinner('O');
      }

      if (cells.every((cell) => cell === 'X')) {
        setWinner('X');
      }
    });
  };

  const checkDraw = () => {
    if (board.every((item) => item !== null) && winner === null) {
      setWinner('D');
    }
  };

  checkDraw();

  useEffect(checkWinner, [board]);

  const resetGame = () => {
    setCurrentPlayer('X');
    setBoard(initialBoard);
    setWinner(null);
  };

  return (
    <div className='App'>
      <p>Tic Tac Toe</p>
      <div className={`board ${winner ? 'game-over' : ''}`}>
        {board.map((space, index) => {
          return (
            <>
              <div
                key={index}
                className={`cell ${space}`}
                onClick={() => handleClick(index)}
              >
                <h3>{space}</h3>
              </div>
            </>
          );
        })}
      </div>
      {winner && (
        <footer>
          {winner === 'D' ? (
            <h2 className='win-message'>
              <span className={winner}>Draw!</span>
            </h2>
          ) : (
            <h2 className='win-message'>
              <span className={winner}>{winner}</span> won!
            </h2>
          )}
          <button onClick={() => resetGame()}>Restart!</button>
        </footer>
      )}
    </div>
  );
}

export default App;
