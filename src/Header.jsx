import React from "react";
import Call from "./icons/Call";
import Headers from "./Headers";
const Header=()=>{
    return(<div >

        <div className="w-screen p-4 h-12 fixed flex bg-amber-600">
             

             <Call />
                <p className="text-white">+91 (720) 090 1896</p>
             
            <div className="text-white text-center pl-96">
                <p >Get 50%  Off on Selected Items   |   Shop Now</p>

            </div>
        </div>
            <Headers/>
            
    </div>


    )
}
export default Header