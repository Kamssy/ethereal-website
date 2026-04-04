import { useState } from "react";

const images = [
  {
    src: "/assets/images/forest-path.jpg",
    alt: "Forest Path",
  },
  {
    src: "/assets/images/waterfall2.jpg",
    alt: "Waterfall",
  },
  {
    src: "/assets/images/ocean-reef.jpg",
    alt: "Ocean Reef",
  },
  {
    src: "/assets/images/tropical.jpg",
    alt: "Tropical Beach",
  },
  {
    src: "/assets/images/mountains.jpg",
    alt: "Mountain Range",
  },
  {
    src: "/assets/images/valley-vista.jpg",
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
