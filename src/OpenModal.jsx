import React, { useRef } from "react";
import { useClickOutside } from "./Modals/ClickOutSide/ClickOutIn";
import { createPortal } from "react-dom";
import { motion } from 'framer-motion';  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence } from "framer-motion";
const OpenModal = ({ style, isOpen, onClose, children, modalName }) => {
    const modalRef = useRef(null);

    useClickOutside(modalRef, onClose);

    return (
        createPortal(
            <AnimatePresence>
                {isOpen && (
                    <div className={`bg-black/30 inset-0 fixed z-5`}>
                        <motion.div
                            ref={modalRef}
                            className={`bg-white left-[50%] p-5 rounded-xl absolute z-10 overflow-y-auto ${style}`}
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 200, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button
                                type="button"
                                onClick={onClose}
                                className="w-10 h-10  bg-black/20 rounded-full cursor-pointer relative z-10 top-2 right-2"
                            >
                                <FontAwesomeIcon icon={faXmark} size="lg" />
                            </button>
                            {children}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            , document.body, modalName)
    )
}

export default OpenModal;