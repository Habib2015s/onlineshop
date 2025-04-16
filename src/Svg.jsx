import React from "react";
const Svg=()=>{
    return(
        <div>
            <svg viewBox="0 0 18 17" xmlns="https://www.w3.org/2000/svg">
  <circle id="myCircle" cx="5" cy="5" r="4" stroke="blue" />
  <use href="#myCircle" x="10" fill="blue" />
  <use href="#myCircle" x="20" fill="white" stroke="red" />
</svg>
        </div>
    )
}
export default Svg