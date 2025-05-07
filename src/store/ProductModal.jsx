import { create } from "zustand";

const useProductModal = create((set) => {
  return {
      productId: null,
      setProductId: (id) => {
        set(() => {
            return {
                productId: id,
            };
        });
    }
    };

  
})

export default useProductModal