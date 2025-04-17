import React from "react";
import Close from "../icons/Close";
const ClickCardModal=({visible,onclose})=>{
    if(!visible){return null}
    return(
        <div className="w-full h-screen bg-black/30 flex justify-center items-center fixed top-0 left-0">
            <div className="bg-white p-5 rounded-xl absolute z-10 overflow-y-auto translate-[-50%] w-[90%] sm:w-[80%] max-w-[1000px] max-h-[70%] overflow ">
           <button onClick={onclose}>
            <Close />
            </button>    
            <div className="grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-5 gap-5 max-h-[100%] mt-10">

                <div className="opacity: 1; transform: none;  border border-gray-500 lg:col-span-3 lg:row-span-3 p-4 rounded-lg overflow-y-auto max-h-[350px]">cart detail</div>  
                <div className="border border-gray-500 lg:row-start-4 lg:col-span-3 lg:row-span-2 p-4 rounded-lg"> <h2>
                    delivery information
                    </h2>
                    <address className="text-gray-500">John Smith
                    New Zealand
                    <br/>
                    CrossRoad - Po25698
                    United States

                    </address>
                    </div>
                <div className="border border-gray-500 lg:col-span-2 lg:row-span-5 rounded-lg flex flex-col"><h2 className="text-xl mb-5 m-4">

                    order summary
                </h2>
                <div className="flex flex-col gap-y-3 m-4"></div>
                <div>
                    <h3>product added</h3>
                    <p></p>
                </div>
                <div>
                    <h3>total price</h3>
                    <p></p>
                </div>
                <div>
                    <h3>Tax Percentage</h3>
                    <p></p>
                </div>
                <div>
                    <h3>final price</h3>
                    <p className="text-2xl font-bold text-secondary-theme"></p>
                </div>
                    
                    </div>  
            </div>
            </div>
        </div>
    )
}
export default ClickCardModal