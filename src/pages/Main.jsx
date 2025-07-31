import Modal from "../components/Modal";
import GameHeader from "../components/GameHeader";
import GameBoard from "./GameBoard";

import useEvaluate from "../hooks/useEvaluate";
import GameFooter from "../components/GameFooter";

export default function Main() {
  const { handleClick, winner, isCompleted } = useEvaluate();

  return (
    <div className="p-5 h-screen flex flex-col justify-center items-center gap-10">
      {/* {isCompleted && <Modal winner={winner} />} */}
      {/* <GameHeader />
      <GameBoard handleClick={handleClick} />
      <GameFooter /> */}
      <h5>Hhytgfr</h5>
    </div>
  );
}
