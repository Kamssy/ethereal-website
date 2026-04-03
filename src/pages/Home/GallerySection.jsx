import { useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&auto=format&fit=crop",
    alt: "Forest Path",
  },
  {
    src: "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=700&auto=format&fit=crop",
    alt: "Waterfall",
  },
  {
    src: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=700&auto=format&fit=crop",
    alt: "Ocean Reef",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop",
    alt: "Tropical Beach",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=700&auto=format&fit=crop",
    alt: "Mountain Range",
  },
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&auto=format&fit=crop",
    alt: "Valley Vista",
  },
];

function GallerySection() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (src) => setLightbox(src);
  const closeLightbox = () => setLightbox(null);

  return (
    <section className="gallery section">
      <div className="container">
        <p className="section__eyebrow">Gallery</p>
        <h2 className="section__title">Moments from the Wild</h2>

        <div className="gallery__grid">
          {images.map((img, i) => (
            <div
              key={i}
              className="gallery__item"
              onClick={() => openLightbox(img.src)}
              role="button"
              tabIndex={0}
              aria-label={`View ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery__item-overlay">
                <span>+ View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <img src={lightbox} alt="Full size view" />
          <button
            className="lightbox__close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}

export default GallerySection;
