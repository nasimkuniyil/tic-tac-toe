import useEvaluate from "../hooks/useEvaluate";

export default function Cell({ handleClick, cellId, playedCells }) {

  return (
    <div className="bg-gray-200 rounded-xl flex items-center justify-center w-16 lg:w-20 h-16 lg:h-20 lg:hover:cursor-pointer lg:hover:bg-gray-100 lg:hover:scale-105 transition-all duration-300 " onClick={() => !playedCells[cellId] && handleClick(cellId)}>
      {playedCells[cellId] && (<h2 className="animate-popup-150">{playedCells[cellId]}</h2>)}
    </div>
  );
}
