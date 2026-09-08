import { useEffect, useState } from "react";

import img1_1 from "../assets/images/Reforma de habitación en Alhama de Murcia.jpeg";
import img1_2 from "../assets/images/Instalación de falso techo en Alhama de Murcia.jpeg";
import img2 from "../assets/images/Reforma de baño en Alhama de Murcia.jpeg";
import img2_1 from "../assets/images/Trabajos de fontanería y electricidad en Alhama de Murcia.jpeg";
import img3 from "../assets/images/Acabado de pintura y pladur en Alhama de Murcia.jpeg";

const images = [
  {
    src: img1_1,
    alt: "Reforma de habitación en Alhama de Murcia",
    category: "Reformas",
    className: "md:col-span-6 min-h-80",
  },
  {
    src: img1_2,
    alt: "Instalación de falso techo en Alhama de Murcia",
    category: "Instalaciones",
    className: "md:col-span-6 min-h-80",
  },
  {
    src: img2,
    alt: "Reforma de baño en Alhama de Murcia",
    category: "Reformas",
    className: "md:col-span-4 min-h-120",
  },
  {
    src: img2_1,
    alt: "Trabajos de fontanería y electricidad en Alhama de Murcia",
    category: "Instalaciones",
    className: "md:col-span-4 min-h-120",
  },
  {
    src: img3,
    alt: "Acabado de pintura y pladur en Alhama de Murcia",
    category: "Acabados",
    className: "md:col-span-4 min-h-120",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return (current + 1) % images.length;
    });
  };

  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return (current - 1 + images.length) % images.length;
    });
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event) => {
      switch (event.key) {
        case "Escape":
          closeLightbox();
          break;

        case "ArrowRight":
          showNext();
          break;

        case "ArrowLeft":
          showPrevious();
          break;

        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Evita hacer scroll en la página mientras el lightbox está abierto.
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <>
      {/* Gallery */}
      <div className="mt-12 grid gap-4 md:grid-cols-12">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={`group relative overflow-hidden rounded-2xl bg-ink p-6 text-left text-white ${image.className}`}
            aria-label={`Ver imagen de ${image.category}`}
          >
            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />

            {/* Content */}
            <div className="relative flex h-full flex-col">
              <span className="mb-auto w-fit rounded-full border border-white/20 bg-ink px-3 py-1 text-xs font-bold">
                {image.category}
              </span>
            </div>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Galería de imágenes"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >
          {/* Image container */}
          <div className="relative flex h-full w-full items-center justify-center">
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
            />

            {/* Close */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Cerrar galería"
              className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-full bg-ink/80 text-2xl text-white backdrop-blur transition hover:bg-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="currentColor" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z" />
            </svg>
            </button>

            {/* Previous */}
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Imagen anterior"
              className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ink/80 text-2xl text-white backdrop-blur transition hover:bg-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="none" stroke="currentColor" stroke-width="2" d="M17 2L7 12l10 10" />
              </svg>
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={showNext}
              aria-label="Imagen siguiente"
              className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ink/80 text-2xl text-white backdrop-blur transition hover:bg-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="none" stroke="currentColor" stroke-width="2" d="m7 2l10 10L7 22" />
              </svg>  
            </button>

            {/* Counter */}
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white backdrop-blur">
              {selectedIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}