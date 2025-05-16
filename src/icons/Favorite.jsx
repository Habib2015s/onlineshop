import useLikeCounter from '../stores/useLikeCounter'; 
import { useWishlist } from '../stores/utils/useWishlist';
import Like from './Like';

export const Favorite = ({ itemId, isFavorite }) => {
  const addItem = useWishlist((state) => state.actions.addItem);
  const removeItem = useWishlist((state) => state.actions.removeItem);

  const increment = useLikeCounter((state) => state.increment);
  const decrement = useLikeCounter((state) => state.decrement);

  const handleClicks = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      removeItem(itemId);
      decrement(); // حذف از لایک
    } else {
      addItem(itemId);
      increment(); // افزودن به لایک
    }
  };

  return (
    <span
      className="absolute top-3 right-3 z-10 bg-white w-10 h-10 flex justify-center 
      items-center rounded-full text-lg cursor-pointer transition-transform pointer-events-auto"
      onClick={handleClicks}
    >
      <Like
        stroke={isFavorite ? "#F61B5A" : "#999999"}
        fill={isFavorite ? "#F61B5A" : "transparent"}
      />
    </span>
  );
};
