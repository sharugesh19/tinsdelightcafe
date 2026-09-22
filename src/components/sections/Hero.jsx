import { useEffect, useRef, useState } from 'react';
import { cafeConfig } from '../../config/cafeConfig';
import './Hero.css';

const VISIBLE = 5;
const BUFFER = 1;
const STEP_MS = 2600;
const TOTAL_SLOTS = VISIBLE + BUFFER * 2; // 7 rendered, 5 visible
const DOT_COUNT = 6; // decorative page indicator, cycles independently

const heroPlateModules = import.meta.glob(
  '../../assets/hero/*.{png,jpg,jpeg,webp,avif}',
  { eager: true, import: 'default' }
);
const heroPlateImages = Object.values(heroPlateModules);

function Hero() {
  const { hero, contact } = cafeConfig;
  const whatsappHref = `https://wa.me/${contact.whatsapp.dial}?text=${encodeURIComponent(
    "Hi! I'd like to place an order.",
  )}`;

  const [plates, setPlates] = useState(() =>
    Array.from({ length: TOTAL_SLOTS }, (_, i) => ({ id: i })),
  );
  const [shifted, setShifted] = useState(false);
  const [activeDot, setActiveDot] = useState(0);
  const nextId = useRef(TOTAL_SLOTS);
  const trackRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const interval = setInterval(() => setShifted(true), STEP_MS);
    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = (e) => {
    if (e.target !== trackRef.current || e.propertyName !== 'transform') return;
    setPlates((prev) => [...prev.slice(1), { id: nextId.current++ }]);
    setShifted(false);
    setActiveDot((prev) => (prev + 1) % DOT_COUNT);
  };

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="hero__badges">
            <span className="hero__veg-badge">
              <span className="hero__veg-icon" aria-hidden="true">
                <span className="hero__veg-dot" />
              </span>
              100% Pure Veg
            </span>

            <span className="hero__stat-badge">
              <strong>5000+</strong> Orders Delivered
            </span>
          </div>

          <p className="hero__eyebrow">{hero.eyebrow}</p>

          <h1 className="hero__headline">
            {hero.headlineLines.map((line) => (
              <span key={line} className="hero__headline-line">
                {line}
              </span>
            ))}
          </h1>

          <p className="hero__subheadline">{hero.subheadline}</p>

          <div className="hero__actions">
            <a href={hero.primaryCta.href} className="btn btn--primary">
              {hero.primaryCta.label}
            </a>

            
            <a  href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="hero__gallery" aria-hidden="true">
          <div className="hero__gallery-viewport">
            <div
              ref={trackRef}
              className={`hero__gallery-track${shifted ? ' hero__gallery-track--shift' : ''}`}
              onTransitionEnd={handleTransitionEnd}
            >
              {plates.map((plate) => {
                const imgSrc =
                  heroPlateImages.length > 0
                    ? heroPlateImages[plate.id % heroPlateImages.length]
                    : null;
                return (
                  <div key={plate.id} className="hero__plate">
                    {imgSrc && (
                      <img
                        src={imgSrc}
                        alt="Café Delight dish"
                        className="hero__plate-img"
                        loading="eager"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hero__gallery-dots">
            {Array.from({ length: DOT_COUNT }).map((_, i) => (
              <span
                key={i}
                className={`hero__gallery-dot${i === activeDot ? ' hero__gallery-dot--active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;