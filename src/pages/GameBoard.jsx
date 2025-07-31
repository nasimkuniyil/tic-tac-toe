import Cell from "../components/Cell";
import { CELLS } from "../constants/constants";

export default function GameBoard({ handleClick }) {
  return (
    <div className="play-ground">
      {CELLS.map((cellId) => (
        <Cell key={cellId} onclick={handleClick} cellId={cellId} />
      ))}
    </div>
  );
}
