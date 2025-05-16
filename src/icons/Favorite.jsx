import React from 'react'
import Like from './Like';
import  {useWishlist}  from '../stores/utils/useWishlist';

export const Favorite = ({itemId,isFavorite}) => {
     const addItem = useWishlist(state => state.actions.addItem);
    const removeItem = useWishlist(state => state.actions.removeItem);
  return (
     <span
            className="absolute top-3 right-3 bg-white w-10 h-10 flex justify-center 
            items-center rounded-full text-lg cursor-pointer hover:scale-105 
            transition-transform pointer-events-auto z-5"
            onClick={(e) => {
                isFavorite ? removeItem(itemId) : addItem(itemId);
                e.stopPropagation();
            }
            }
        >
            <Like
                stroke={isFavorite ? "#F61B5A" : "#999999"}
                fill={isFavorite ? "#F61B5A" : "transparent"}
            />
        </span>
    
  )
}
