import { useState } from "react";
import Buttons from "./Buttons";


const SetSize = () => {
    const [sizeChecked, setSizeChecked] = useState('s');

    return (
        <div className="flex gap-x-3 mt-5">
            <Buttons
                id="s"
                name="s"
                sizeChecked={sizeChecked}
                setSizeChecked={setSizeChecked}
                text="S"
            />
            <Buttons
                id="m"
                name="m"
                sizeChecked={sizeChecked}
                setSizeChecked={setSizeChecked}
                text="M"
            />
            <Buttons
                id="l"
                name="l"
                sizeChecked={sizeChecked}
                setSizeChecked={setSizeChecked}
                text="L"
            />
            <Buttons
                id="xl"
                name="xl"
                sizeChecked={sizeChecked}
                setSizeChecked={setSizeChecked}
                text="XL"
            />
            <Buttons
                id="xxl"
                name="xxl"
                sizeChecked={sizeChecked}
                text="XXL"
                setSizeChecked={setSizeChecked}
            />
        </div>
    )
}

export default SetSize;