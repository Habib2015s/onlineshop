import { create } from "zustand";

const UseBasket = create((set) => ({
  items: [],
  invoice: {
    totalPrice: 0,
    deliveryPrice: 0,
    totalDiscount: 0,
    finalPrice: 0,
  },

  actions: {
    addToBasket: (item) => {
      set((state) => {
        const existingItem = state.items.find((i) => i.id === item.id);

        if (existingItem) {
          // اگر محصول وجود داشت، مقدار quantity رو افزایش بده
          return {
            items: state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          };
        } else {
          // اگه نبود، محصول رو با quantity 1 اضافه کن
          return {
            items: [...state.items, { ...item, quantity: 1 }],
          };
        }
      });
    },

    editItem: (item) => {
      set((state) => {
        if (item.quantity === 0) {
          // اگر quantity صفر شد، حذفش کن
          return {
            items: state.items.filter((cartItem) => cartItem.id !== item.id),
          };
        } else {
          // وگرنه مقدار جدید رو جایگزین کن
          return {
            items: state.items.map((cartItem) =>
              cartItem.id === item.id ? item : cartItem
            ),
          };
        }
      });
    },

    setPrice: () => {
      set((state) => ({
        invoice: {
          ...state.invoice,
          totalPrice: state.items.reduce(
            (total, item) => total + item.price * (item.quantity || 0),
            0
          ),
        },
      }));
    },

    setTotalQuantity: (quantity) => {
      set((state) => ({
        invoice: {
          ...state.invoice,
          totalQuantity: quantity,
        },
      }));
    },
  },
}));

export default UseBasket;
