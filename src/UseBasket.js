import { create } from "zustand";
import { persist } from "zustand/middleware";
const UseBasket =create(
    persist((set,get)=>{
    return{ 
    items:[],
    invoice: {
        totalPrice:0,
        deliveryPrice:0,
        totalDiscount:0,
        finalPrice:0,
    },
    actions:{
        addToBasket:(payload)=>{
            const already = get().items.some((item)=>item.id===payload.id);
            if(!already){
                
                set((oldState)=>{
                    return{
                        items:[...oldState.items,{...payload,quantity: 1 }],
                        invoice:{...oldState.invoice,
                            totalPrice:oldState.invoice.totalPrice+payload.price,
                        },
                    };
                });
            }else{set((oldState)=>{return{
                invoice:{...oldState.invoice,
                totalPrice:oldState.invoice.totalPrice+payload.price,
            },
            items:oldState.items.map((item)=>{
                if (item.id===payload.id){
                    return{...item,quantity:item.quantity+1};
                }else return item;
                
            }),
};
    
});

}
},
removeFromBasket:(payload)=>{
    const shouldRemove=payload.quantity===1
        if(shouldRemove){
            set((oldState)=>{
                return{
                    invoice:{...oldState.invoice,totalPrice:oldState.invoice.totalPrice-payload.totalPrice},
                    items:oldState.items.filter((item)=>item.id!==payload.id)
                }})
            }else{set((oldState)=>{
                return{invoice:{...oldState.invoice,totalPrice:oldState.invoice.totalPrice-payload.totalPrice},
                items:oldState.items.map((item)=>{
                    if (item.id===payload.id){
                        return{...item,quantity:item.quantity-1};
                    }else return item;
                    
                }),
            };
        }
);
}
},
},
};
},
{ partialize: (state) =>
    Object.fromEntries(
        Object.entries(state).filter(([key]) => !["actions"].includes(key)),
    ),
}
)
);
export default UseBasket