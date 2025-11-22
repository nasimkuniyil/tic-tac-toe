import Button from "./Button";

export default function GameFooter({resetGame}){
    return (
        <div className="h-[20%]">
            <Button text={"Retry"} onclick={resetGame}/>
        </div>
    )
}