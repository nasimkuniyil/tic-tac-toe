import Modal from "../components/Modal";
import GameHeader from "../components/GameHeader";
import GameBoard from "./GameBoard";

import useEvaluate from "../hooks/useEvaluate";
import GameFooter from "../components/GameFooter";

export default function Main() {
  const { handleClick, winner, isCompleted, playedCells, resetGame} = useEvaluate();

  return (
    <div className="h-full flex flex-col justify-center items-center gap-10">
      {isCompleted && <Modal winner={winner} resetGame={resetGame}/>}
      <GameHeader />
      <GameBoard handleClick={handleClick} playedCells={playedCells}/>
      <GameFooter resetGame={resetGame}/>
    </div>
  );
}
