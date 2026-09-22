import { useEffect, useMemo, useState } from 'react';
import { IconImage, IconClose, IconArrowRight } from '../../common/Icons';
import './Gallery.css';

/**
 * Gallery
 * -----------------------------------------------------------------------
 * Photo grid for the café, grouped into categories. Uses Vite's
 * import.meta.glob to pick up every image sitting in a subfolder of
 * src/assets/gallery — so adding real photos later is just "drop a file
 * into the right category subfolder", no code change required. The
 * subfolder name becomes the category label (e.g. `cafe-interior/` →
 * "Cafe Interior"). Because glob only matches files that actually
 * exist, this never breaks the build even when the folder is empty; it
 * just falls back to a short "photos coming soon" note instead of a
 * grid of empty placeholder tiles.
 * -----------------------------------------------------------------------
 */
const ALL = 'All';

const galleryModules = import.meta.glob(
  '../../../assets/gallery/*/*.{png,jpg,jpeg,webp,avif}',
  { eager: true, import: 'default' },
);

function toLabel(slug) {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

const galleryImages = Object.entries(galleryModules)
  .map(([path, src]) => {
    const parts = path.split('/');
    const filename = parts.pop() ?? '';
    const categorySlug = parts.pop() ?? '';
    const nameWithoutExt = filename.replace(/\.[^./]+$/, '');
    const alt = toLabel(nameWithoutExt) || "Tin's Delight Café";
    const category = toLabel(categorySlug) || 'Gallery';
    return { src, alt, category };
  })
  .sort((a, b) => a.src.localeCompare(b.src));

const categories = Array.from(new Set(galleryImages.map((image) => image.category))).sort();

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState(ALL);
  const hasImages = galleryImages.length > 0;

  const tabs = useMemo(() => [ALL, ...categories], []);

  const filteredImages = useMemo(() => {
    if (activeCategory === ALL) return galleryImages;
    return galleryImages.filter((image) => image.category === activeCategory);
  }, [activeCategory]);

  const closeLightbox = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredImages.length) % filteredImages.length,
    );
  const showNext = () =>
    setActiveIndex((prev) => (prev === null ? null : (prev + 1) % filteredImages.length));

  useEffect(() => {
    if (activeIndex === null) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, filteredImages.length]);

  return (
    <section id="gallery" className="section gallery">
      <div className="container gallery__inner">
        <div className="section-heading">
          <p className="eyebrow">A peek inside</p>
          <span className="section-heading__rule" aria-hidden="true" />
          <h2 className="section-heading__title">Gallery</h2>
          <p className="section-heading__subtitle">
            Snapshots of the café, the kitchen, and the food — tap any photo to see it larger.
          </p>
        </div>

        {hasImages && categories.length > 1 && (
          <div className="gallery__categories" role="group" aria-label="Filter gallery by category">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                aria-pressed={tab === activeCategory}
                className={`gallery__category-pill ${
                  tab === activeCategory ? 'gallery__category-pill--active' : ''
                }`}
                onClick={() => {
                  setActiveCategory(tab);
                  setActiveIndex(null);
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

                {hasImages ? (
          <div className="gallery__grid">
            {filteredImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className="gallery__tile"
                onClick={() => setActiveIndex(index)}
                aria-label={`View larger photo: ${image.alt}`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" className="gallery__tile-img" />
              </button>
            ))}
          </div>
        ) : (
          <div className="gallery__grid gallery__grid--placeholder">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="gallery__tile gallery__tile--placeholder"
                aria-hidden="true"
              >
                <IconImage className="gallery__placeholder-icon" />
              </div>
            ))}
          </div>
        )}
      </div>

      {activeIndex !== null && (
        <div
          className="gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={filteredImages[activeIndex].alt}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="gallery__lightbox-close"
            onClick={closeLightbox}
            aria-label="Close photo viewer"
          >
            <IconClose />
          </button>

          {filteredImages.length > 1 && (
            <button
              type="button"
              className="gallery__lightbox-nav gallery__lightbox-nav--prev"
              onClick={(event) => {
                event.stopPropagation();
                showPrev();
              }}
              aria-label="Previous photo"
            >
              <IconArrowRight />
            </button>
          )}

          <img
            src={filteredImages[activeIndex].src}
            alt={filteredImages[activeIndex].alt}
            className="gallery__lightbox-img"
            onClick={(event) => event.stopPropagation()}
          />

          {filteredImages.length > 1 && (
            <button
              type="button"
              className="gallery__lightbox-nav gallery__lightbox-nav--next"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
            >
              <IconArrowRight />
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default Gallery;