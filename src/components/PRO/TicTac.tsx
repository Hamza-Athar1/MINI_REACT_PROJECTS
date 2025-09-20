import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/animations.css";
function TicTac() {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  function handleClick(index: number) {
    if (board[index] !== null || calculateWinner(board)) return;
    const tempBoard = board.slice();
    tempBoard[index] = isX ? "X" : "O";
    setBoard(tempBoard);
    setIsX(!isX);
  }

  function reset() {
    setBoard(Array(9).fill(null));
    setIsX(true);
  }
  function calculateWinner(squares: (string | null)[]): string | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      } else if (!squares.includes(null)) {
        return "Draw";
      }
    }
    return null;
  }

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isX ? "X" : "O"}`;

  return (
    <div className={`fade-in`}>
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <h1 className="display-4">Tic Tac Toe</h1>
          <p className="lead" style={{ textAlign: "center" }}>
            A tic tac game between two players
          </p>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {status}
      </div>
      <div>
        <div
          className="container-fluid"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30px",
            width: "200px",
          }}
        >
          {[0, 1, 2].map((row) => (
            <div
              key={row}
              className="row"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {[0, 1, 2].map((col) => {
                const index = row * 3 + col;
                return (
                  <button
                    key={index}
                    onClick={() => handleClick(index)}
                    style={{
                      width: "50px",
                      height: "50px",
                      margin: "5px",
                      border: "1px solid black",
                    }}
                  >
                    {board[index]}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
        <div
          className="container-fluid"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <button className="bt1" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
export default TicTac;
