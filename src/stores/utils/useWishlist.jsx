import { create } from "zustand";

export const useWishlist = create((set) => {
    return {
        itemIds: [],
        actions: {
            addItem: (itemId) => {
                set((state) => {
                    return {
                        itemIds: [...state.itemIds, itemId],
                    };
                });
            },
            removeItem: (itemId) => {
                set((state) => {
                    return {
                        itemIds: state.itemIds.filter(
                            (item) => item !== itemId
                        ),
                    };
                });
            },
        },
    };
});

