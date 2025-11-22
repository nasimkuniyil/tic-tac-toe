export default function Button({text, onclick}){
    return (
        <div>
            <button onClick={onclick} className="bg-gray-200 text-xm lg:text-lg px-4 py-1.5 rounded-xl text-gray-700 cursor-pointer">{text}</button>
        </div>
    )
}