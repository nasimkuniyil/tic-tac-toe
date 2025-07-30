import { useEffect, useState } from "react";
import Cell from "../components/Cell";
import Modal from "../components/Modal";
import Button from "../components/Button";
import GameTitle from "../components/GameTitle";

import { CELLS, WINNING_COMBOS } from "../constants";

export default function Home() {
  const [playerToggle, setPlayerToggle] = useState(true);
  const [isCompleted, setCompleted] = useState(false);
  const [winner, setWinner] = useState("");

  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);

  useEffect(() => {
    if (player1.length >= 3) evaluateBoard();
  }, [player1, player2]);

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

  return (
    <div className="wrapper">
      {isCompleted && <Modal winner={winner} />}
      <div>
        <GameTitle />
      </div>
      <div className="play-ground">
        {CELLS.map((cellId) => (
          <Cell key={cellId} onclick={handleClick} cellId={cellId} />
        ))}
      </div>
      <div>
        <Button text={"Retry"} />
      </div>
    </div>
  );
}
