import { useState } from "react";

export default function Cell({ onclick, cellId }) {
  const [value, setValue] = useState("");

  return (
    <div className="bg-gray-200 rounded-xl flex items-center justify-center w-[100px] h-[100px] hover:cursor-pointer hover:bg-gray-100 hover:scale-105 transition-all duration-300 " onClick={() => !value && onclick(setValue, cellId)}>
      <h2>{value}</h2>
    </div>
  );
}
