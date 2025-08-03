import { useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import ProductDetails from "../stores/components/ProductDetails";
import Close from "../icons/Close";
import { useClickOutside } from "./ClickOutSide/ClickOutIn";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: "-50px", scale: 0.8 },
  visible: { opacity: 1, y: "0", scale: 1 },
  exit: { opacity: 0, y: "50px", scale: 0.8 },
};

const SideBarModal = ({ visible, onclose, productId }) => {
  const modalRef = useRef(null);
  useClickOutside(modalRef, onclose);

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[1000] bg-black/30 flex justify-center items-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            ref={modalRef}
            className="bg-white p-5 rounded-xl overflow-y-auto w-full max-w-md max-h-[90vh] relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <button
              onClick={onclose}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-600 transition-colors"
            >
              <Close />
            </button>

            <ProductDetails onclose={onclose} productId={productId} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default SideBarModal;
