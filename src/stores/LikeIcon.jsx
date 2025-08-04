// components/icons/LikeIcon.jsx
import useWishlist from "../../stores/utils/useWishlist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const LikeIcon = ({ productId }) => {
  const likedItems = useWishlist((state) => state.likedItems);
  const toggleLike = useWishlist((state) => state.toggleLike);
  const isLiked = likedItems.includes(productId);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation(); // جلوگیری از باز شدن مودال هنگام کلیک روی قلب
        toggleLike(productId);
      }}
      className="absolute top-3 right-3 text-red-500 hover:scale-110 transition-transform z-10"
    >
      <FontAwesomeIcon icon={isLiked ? solidHeart : regularHeart} size="lg" />
    </button>
  );
};

export default LikeIcon;
