import { useState, useEffect } from "react";
import { WINNING_COMBOS , CELLS} from "../constants/constants";

export default function useEvaluate() {
  const [playerToggle, setPlayerToggle] = useState(true);
  const [isCompleted, setCompleted] = useState(false);
  const [winner, setWinner] = useState("");

  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);

  useEffect(() => {
    if (player1.length >= 3) evaluateBoard();
  }, [player1, player2]);

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

  function handleClick(markCell, cellId) {
    if (playerToggle) {
      setPlayer1([...player1, cellId]);
      markCell("✖️");
    } else {
      setPlayer2([...player2, cellId]);
      markCell("⭕");
    }

    setPlayerToggle(!playerToggle);
  }

  return {
    isCompleted,
    winner,
    handleClick
  };
}
