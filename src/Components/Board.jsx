/* eslint-disable no-unused-vars */
import Square from "./Square";
import { useState, useEffect, useRef } from "react";
export default function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isxturn, setXTurn] = useState(true);
  const [winningstate, setWinningState] = useState("");
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const board = useRef(null);

  ///chack winner function
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
      if (
        state[a] !== null &&
        state[a] === state[b] &&
        state[a] === state[c]
      ) {
        board.current.classList.add("winnerbanner");
        return true;
      }
    }
    return false;
  };



  ///handle click 
  const handleClick = (index) => {
    const copyState = [...state];
    if (copyState[index] == null) {
      copyState[index] = isxturn ? "X" : "O";
      setState(copyState);
      setXTurn(!isxturn);
      setWinningState(copyState[index]);
      console.log()
    }
  };


  ////when statechanges ,winner score get updatesd
  useEffect(() => {
    let winner = CheckWinner();
    if (winner) {
      updateScore();
    }
  }, [state]);

  //update scire function 
  const updateScore = () => {
    if (winningstate === "X") {
      setXScore((prevScore) => prevScore + 1);
    } else if (winningstate === "O") {
      setOScore((prevScore) => prevScore + 1);
    }
  };

// useEffect(()=>{
//     if(xScore==oScore && xScore!==0 &&oScore!==0){
//      alert("Match is Draw")
//      }
//   },[xScore,oScore]);



  ///reset game
  const resetGame = () => {
    setState(Array(9).fill(null));
    setXTurn(true);
    setWinningState("");
    setOScore(0);
    setXScore(0);
    board.current.classList.remove("winnerbanner");
  };

//play game
 const playagain=()=>{
  setState(Array(9).fill(null));
  setXTurn(true);
  setWinningState("");   
  }


  return (
    <div className="fullwindow">
      <div className="title">TIC TAC TOE</div>
        <div className="score">
          <p>X Score: {xScore}</p>
          <p>O Score: {oScore}</p>
        </div >
      <div ref={board} className="boardContainer">
        {CheckWinner() ? (
          <div className="winningwindow" > 
            <p className="winningplayer" >Player <span className="winerplayername">{winningstate}</span> wins</p>
        
            <button className="playagain" onClick={playagain}>
              Play Again
            </button>

          </div>
        ) : (
          <> 
          <div  className="board"></div>
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
         
          </>
          
        )}
      </div>
      <button className="btn" onClick={resetGame}>
              Reset Game
      </button>

     
    </div>
  );
}
