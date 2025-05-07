import React, { useEffect, useState } from 'react'
import UseBasket from './UseBasket';
import Counter from '../../store/Counter';

export default function Basket  ({ product})  {
  console.log(product);
  
  const [quantity, setQuantity] = useState(product.quantity ||0 );
  console.log(quantity);
  const editItem = UseBasket((state) => state.actions.editItem);
  const setTotalPrice = UseBasket((state) => state.actions.setPrice);
  const { id, title,image, price, description } = product;
  
  console.log(product); 
  
  const handleClick=(amount) =>{
    if (amount > 0) {
      setQuantity((prev) =>prev + amount< 999 ?prev + amount : prev);
    }
    else {
      setQuantity((prev) =>prev + amount>= 0 ?prev + amount : prev);
    }
  }
  
  const handleChange=()=> {
      const newValue = Number();
      if (newValue) {
          setQuantity(newValue);
        }
        else {
          setQuantity(0);
      }
    }
    
    useEffect(() => {
      if (product) {
        editItem({ id, quantity, price })
        setTotalPrice();
      }
    }, [quantity]);
    
    return (
      <div className="grid grid-rows-[2fr_1fr] gap-y-5 sm:grid-rows-none sm:grid-cols-[150px_1fr] items-center mb-2 bg-gray-100 p-2">
          <div className="flex flex-col items-center">
              <img src={image} alt="" />
              <Counter quantity={quantity} handleChange={handleChange} handleClick={handleClick} />
          </div>
          <div className="flex justify-between gap-x-2">
              <div>
                  <h3 className="clamp-text w-[70%] text-lg">{title}</h3>
                  <p className="clamp-text text-sm text-gray-500">{description}</p>
                  
              </div>
              <div>
                  <p className="font-semibold">{price}</p>
              </div>
          </div>
      </div>
  )
}