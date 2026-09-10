import { useEffect, useState } from 'react';
import { IconImage, IconClose, IconArrowRight } from '../../common/Icons';
import './Gallery.css';

/**
 * Gallery
 * -----------------------------------------------------------------------
 * Photo grid for the café. Uses Vite's import.meta.glob to pick up every
 * image already sitting in src/assets/gallery — so adding real photos
 * later is just "drop files into that folder", no code change required.
 * Because glob only matches files that actually exist, this never
 * breaks the build even when the folder is empty (see the README in
 * that folder for naming tips); it just falls back to a friendly
 * "photos coming soon" placeholder grid instead.
 * -----------------------------------------------------------------------
 */
const galleryModules = import.meta.glob(
  '../../../assets/gallery/*.{png,jpg,jpeg,webp,avif}',
  { eager: true, import: 'default' },
);

const galleryImages = Object.entries(galleryModules)
  .map(([path, src]) => {
    const filename = path.split('/').pop() ?? '';
    const nameWithoutExt = filename.replace(/\.[^./]+$/, '');
    const alt = nameWithoutExt
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
    return { src, alt: alt || "Tin's Delight Café" };
  })
  .sort((a, b) => a.src.localeCompare(b.src));

const PLACEHOLDER_COUNT = 8;
const FULL_GALLERY_PLACEHOLDER_COUNT = 20;

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isFullGalleryOpen, setIsFullGalleryOpen] = useState(false);
  const hasImages = galleryImages.length > 0;

  const closeLightbox = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((prev) => (prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length));
  const showNext = () =>
    setActiveIndex((prev) => (prev === null ? null : (prev + 1) % galleryImages.length));

  useEffect(() => {
    if (activeIndex === null) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  useEffect(() => {
    if (!isFullGalleryOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsFullGalleryOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullGalleryOpen]);

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

        {hasImages ? (
          <div className="gallery__grid">
            {galleryImages.map((image, index) => (
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
          <div className="gallery__empty">
            <div className="gallery__grid gallery__grid--placeholder">
              {Array.from({ length: PLACEHOLDER_COUNT - 1 }).map((_, index) => (
                <div
                  key={index}
                  className="gallery__tile gallery__tile--placeholder"
                  aria-hidden="true"
                >
                  <IconImage className="gallery__placeholder-icon" />
                </div>
              ))}
              <button
                type="button"
                className="gallery__tile gallery__tile--placeholder gallery__tile--more"
                onClick={() => setIsFullGalleryOpen(true)}
                aria-haspopup="dialog"
              >
                <span className="gallery__tile-more-plus">+</span>
                <span className="gallery__tile-more-label">View full gallery</span>
              </button>
            </div>
            <p className="gallery__empty-note">
              Photos coming soon — add images to <code>src/assets/gallery</code> and they&rsquo;ll
              show up here automatically.
            </p>
          </div>
        )}

        {isFullGalleryOpen && (
          <div
            className="gallery__full-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Full gallery"
            onClick={() => setIsFullGalleryOpen(false)}
          >
            <div className="gallery__full-panel" onClick={(event) => event.stopPropagation()}>
              <div className="gallery__full-panel-header">
                <h3 className="gallery__full-panel-title">Full Gallery</h3>
                <button
                  type="button"
                  className="gallery__full-panel-close"
                  onClick={() => setIsFullGalleryOpen(false)}
                  aria-label="Close full gallery"
                >
                  <IconClose />
                </button>
              </div>
              <div className="gallery__grid gallery__grid--placeholder gallery__grid--full">
                {Array.from({ length: FULL_GALLERY_PLACEHOLDER_COUNT }).map((_, index) => (
                  <div
                    key={index}
                    className="gallery__tile gallery__tile--placeholder"
                    aria-hidden="true"
                  >
                    <IconImage className="gallery__placeholder-icon" />
                  </div>
                ))}
              </div>
              <p className="gallery__empty-note">
                This is a placeholder gallery page — real photos will replace these tiles.
              </p>
            </div>
          </div>
        )}
      </div>

      {activeIndex !== null && (
        <div
          className="gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={galleryImages[activeIndex].alt}
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

          {galleryImages.length > 1 && (
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
            src={galleryImages[activeIndex].src}
            alt={galleryImages[activeIndex].alt}
            className="gallery__lightbox-img"
            onClick={(event) => event.stopPropagation()}
          />

          {galleryImages.length > 1 && (
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
