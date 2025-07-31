import Modal from "../components/Modal";
import GameHeader from "../components/GameHeader";
import GameBoard from "./GameBoard";

import useEvaluate from "../hooks/useEvaluate";
import GameFooter from "../components/GameFooter";

export default function Main() {
  const { handleClick, winner, isCompleted } = useEvaluate();

  return (
    <div className="wrapper">
      {isCompleted && <Modal winner={winner} />}
      <GameHeader />
      <GameBoard handleClick={handleClick} />
      <GameFooter />
    </div>
  );
}
