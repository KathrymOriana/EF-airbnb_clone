import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PlaceDescriptionProps {
  description: string;
}

export const PlaceDescription = ({ description }: PlaceDescriptionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const shortText =
    description.length > 250
      ? description.slice(0, 290).trim() + "..."
      : description;

  return (
    <>
      <section className="c-description">
        <h3 className="c-description__title">Acerca de este lugar</h3>
        <p className="c-description__text">{shortText}</p>
        {description.length > 250 && (
          <button
            className="c-description__more"
            onClick={() => setIsOpen(true)}
          >
            Mostrar más
          </button>
        )}
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="c-modal__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="c-modal__content"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <header className="c-modal__header">
                <h2>Acerca de este lugar</h2>
                <button
                  className="c-modal__close"
                  onClick={() => setIsOpen(false)}
                >
                  ×
                </button>
              </header>

              <div className="c-modal__body">
                <p className="c-modal__text">{description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
