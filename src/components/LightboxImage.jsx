import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function LightboxImage({ src, alt = "", className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="lightbox-trigger"
        onClick={() => setIsOpen(true)}
        aria-label="Open image larger"
      >
        <img src={src} alt={alt} className={className} />
      </button>

      {isOpen &&
        createPortal(
          <div
            className="lightbox-overlay"
            onClick={() => setIsOpen(false)}
            role="presentation"
          >
            <div
              className="lightbox-paper"
              onClick={(event) => event.stopPropagation()}
            >
              <img src={src} alt={alt} className="lightbox-image" />
            </div>

            <button
              type="button"
              className="lightbox-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close image"
            >
              ×
            </button>
          </div>,
          document.body
        )}
    </>
  );
}

export default LightboxImage;