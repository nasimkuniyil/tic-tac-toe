import Cell from "../components/Cell";
import { CELLS } from "../constants/constants";

export default function GameBoard({handleClick, playedCells}) {

  return (
    <div>
      <div className="grid grid-cols-3 gap-5 w-fit">
        {CELLS.map((cellId) => (
          <Cell key={cellId} cellId={cellId} handleClick={handleClick} playedCells={playedCells}/>
        ))}
      </div>
    </div>
  );
}
