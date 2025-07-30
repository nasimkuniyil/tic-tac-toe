import Button from "./Button";
import confetti from "canvas-confetti";

export default function Modal({ winner }) {
  winner && confetti({
      spread: 150,
    });
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-black/70 backdrop-blur-xs z-50">
      <div className="w-full flex flex-col gap-5 items-center max-w-md text-white py-10 rounded animate-popup">
        <div className="pb-5">
          {winner ? (
            <div>
              <p className="text-center text-2xl">Congrats !</p>
              <h1>{winner}</h1>
            </div>
          ) : (
            <div className="pb-5">
              <h1>It's a tie!</h1>
            </div>
          )}
        </div>
        <div className="pt-4">
          <Button text={"Try again"} />
        </div>
      </div>
    </div>
  );
}
