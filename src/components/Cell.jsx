import { useState } from "react";

export default function Cell({ onclick, cellId }) {
  const [value, setValue] = useState("");

  return (
    <div className="bg-gray-200 rounded-xl flex items-center justify-center w-16 lg:w-20 h-16 lg:h-20 lg:hover:cursor-pointer lg:hover:bg-gray-100 lg:hover:scale-105 transition-all duration-300 " onClick={() => !value && onclick(setValue, cellId)}>
      {value && (<h2 className="animate-popup-150">{value}</h2>)}
    </div>
  );
}
