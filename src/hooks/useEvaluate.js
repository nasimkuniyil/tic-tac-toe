import { useState, useEffect } from "react";
import { WINNING_COMBOS, CELLS } from "../constants/constants";

export default function useEvaluate() {
  const [playerToggle, setPlayerToggle] = useState(true);
  const [isCompleted, setCompleted] = useState(false);
  const [winner, setWinner] = useState("");

  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [playedCells, setPlayedSells] = useState({});

  useEffect(() => {

    function evaluateBoard() {
      WINNING_COMBOS.forEach((arr) => {
        if (arr.every((element) => player1.includes(element))) {
          setWinner("Player 1");
          setCompleted(true);
        } else if (arr.every((element) => player2.includes(element))) {
          setWinner("Player 2");
          setCompleted(true);
        }
      });

      if (player1.length + player2.length === CELLS.length) {
        setCompleted(true);
      }
    }

    if (player1.length >= 3) evaluateBoard();
  }, [player1, player2]);

  function handleClick(cellId) {
    if (playerToggle) {
      setPlayer1([...player1, cellId]);
      setPlayedSells(prev=> {
        prev[cellId] = "✖️";
        return prev;
      })
    } else {
      setPlayer2([...player2, cellId]);
      setPlayedSells(prev=> {
        prev[cellId] = "⭕";
        return prev;
      })
    }
    setPlayerToggle(!playerToggle);
  }

  function resetGame(){
    setPlayerToggle(true);
    setCompleted(false);
    setWinner("");
    setPlayer1([]);
    setPlayer2([]);
    setPlayedSells({});
  }

  return {
    isCompleted,
    winner,
    playedCells,
    handleClick,
    resetGame,
  };
}
