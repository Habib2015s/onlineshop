import React from "react";
const Buttons = ({ id, name, text, sizeChecked, setSizeChecked }) => {
    return (
        <div
            className={`w-10 h-10 rounded-lg border border-main-theme flex justify-center
                 items-center ${sizeChecked === name ? "bg-red-700 text-white"
                 : " "} cursor-pointer`}
            onClick={() => setSizeChecked(name)}
        >
            <label htmlFor={id} className="cursor-pointer" >
                {text}
            </label>
            <input
                type="radio"
                name="size"
                id={id}
                className="hidden"
                defaultChecked={sizeChecked === name}
            />
        </div>
    )
}

export default Buttons;