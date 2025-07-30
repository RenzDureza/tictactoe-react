import Square from "./Square"
import { useState } from "react"

function Board() {
  const [player, setPlayer] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function addValue(i) {
    if (winner(squares) || squares[i]) {
      return;
    }

    let input = squares.slice();
    if (player) {
      input[i] = 'X';
    } else {
      input[i] = 'O';
    }
    setSquares(input);
    setPlayer(!player);
  }

  function winner (squares) {
    const win = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < win.length; i++) {
      const [x, y, z] = win[i]
      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        return squares[x];
      }
    }
  }

  const player_winner = winner(squares);
  let status;
  if (player_winner) {
    status = "Winner: " + player_winner;
  } else {
    status = "Player: " + (player ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className='board'>
        <div className="board-row">
          <Square val={squares[0]} handler={() => addValue(0)}/>
          <Square val={squares[1]} handler={() => addValue(1)}/>
          <Square val={squares[2]} handler={() => addValue(2)}/>
        </div>
        <div className="board-row">
          <Square val={squares[3]} handler={() => addValue(3)}/>
          <Square val={squares[4]} handler={() => addValue(4)}/>
          <Square val={squares[5]} handler={() => addValue(5)}/>
        </div>
        <div className="board-row">
          <Square val={squares[6]} handler={() => addValue(6)}/>
          <Square val={squares[7]} handler={() => addValue(7)}/>
          <Square val={squares[8]} handler={() => addValue(8)}/>
        </div>
      </div>
    </>
  );
}

export default Board
