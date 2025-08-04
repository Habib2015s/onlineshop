import { create } from "zustand";

const useLikeCounter = create((set) => ({
  likedItems: [],
  toggleLike: (productId) =>
    set((state) => {
      const isLiked = state.likedItems.includes(productId);
      return {
        likedItems: isLiked
          ? state.likedItems.filter((id) => id !== productId)
          : [...state.likedItems, productId],
      };
    }),
}));

export default useLikeCounter;
