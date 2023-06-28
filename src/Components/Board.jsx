/* eslint-disable no-unused-vars */
import Square from "./Square";
import { useState } from "react";

export default function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isxturn, setXTurn] = useState(true);

  const CheckWinner = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];

    for (let logic of winner) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] == state[b] && state[a] == state[c])
    
        return true;
    }
    return false;
  };

  const iswinner = CheckWinner();

  const handleClick = (index) => {
    console.log("clicked on index", index);
    const copyState = [...state];
    copyState[index] = isxturn ? "X" : "O";
    
    setState(copyState);
    setXTurn(!isxturn);
    console.log(!isxturn);
  };

  return (
    <div className="boardContainer">
        {iswinner ? (<p> someone wins</p>):(<>
      <div className="board-row">
        <Square Click={() => handleClick(0)} value={state[0]} />
        <Square Click={() => handleClick(1)} value={state[1]} />
        <Square Click={() => handleClick(2)} value={state[2]} />
      </div>
      <div className="board-row">
        <Square Click={() => handleClick(3)} value={state[3]} />
        <Square Click={() => handleClick(4)} value={state[4]} />
        <Square Click={() => handleClick(5)} value={state[5]} />
      </div>
      <div className="board-row">
        <Square Click={() => handleClick(6)} value={state[6]} />
        <Square Click={() => handleClick(7)} value={state[7]} />
        <Square Click={() => handleClick(8)} value={state[8]} />
      </div>
       </> )}
    </div>
  );
}
