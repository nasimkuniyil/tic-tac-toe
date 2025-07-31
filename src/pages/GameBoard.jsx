import Cell from "../components/Cell";
import { CELLS } from "../constants/constants";

export default function GameBoard({ handleClick }) {
  return (
    <div className="h-[60%]">
      <div className="grid grid-cols-3 gap-5 w-fit">
        {CELLS.map((cellId) => (
          <Cell key={cellId} onclick={handleClick} cellId={cellId} />
        ))}
      </div>
    </div>
  );
}
