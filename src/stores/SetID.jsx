
import { create } from "zustand";
const useSetID = create((set) =>{
    return {
        productModalOpen: false,
        id: null,
        setProductModalOpen: (isOpen) => {
            set(() => {
                return {
                    productModalOpen: isOpen,
                };
            });
        },

        setProductId: (id) => {
            set(() => {
                return { id: id,};}
            );}
        }
})
export default useSetID