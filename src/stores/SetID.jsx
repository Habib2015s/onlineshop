
import { create } from "zustand";
const SetID = create((set) =>{
    return {id: null,

        setProductId: (id) => {
            set(() => {
                return { id: id,};}
            );}
        }
})
export default SetID