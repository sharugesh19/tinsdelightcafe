import { cafeConfig } from '../../config/cafeConfig';
import LogoMark from '../common/LogoMark';
import { IconPin } from '../common/Icons';
import './Hero.css';

/**
 * Hero
 * -----------------------------------------------------------------------
 * Desktop renders a two-panel composition: brand/copy/CTAs on the left,
 * a decorative "visual" panel (no food photography available yet, so it
 * leans on typography + the tin-badge motif + texture) on the right.
 * Mobile drops the visual panel and composes logo → headline → copy →
 * CTAs → location, all above the fold on common phone sizes.
 * -----------------------------------------------------------------------
 */
function Hero() {
  const { hero, contact } = cafeConfig;
  const whatsappHref = `https://wa.me/${contact.whatsapp.dial}?text=${encodeURIComponent(
    "Hi! I'd like to place an order.",
  )}`;

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <LogoMark size="lg" className="hero__logo" />

          <p className="hero__eyebrow">{hero.eyebrow}</p>

          <h1 className="hero__headline">
            {hero.headlineLines.map((line, index) => (
              <span key={line} className="hero__headline-line" style={{ '--i': index }}>
                {line}
              </span>
            ))}
          </h1>

          <p className="hero__subheadline">{hero.subheadline}</p>

          <div className="hero__actions">
            <a href={hero.primaryCta.href} className="btn btn--primary">
              {hero.primaryCta.label}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <p className="hero__location">
            <IconPin className="hero__location-icon" />
            {hero.locationTag}
          </p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__visual-frame">
            <span className="hero__visual-ring hero__visual-ring--outer" />
            <span className="hero__visual-ring hero__visual-ring--inner" />
            <span className="hero__visual-emblem">T</span>
            <span className="hero__visual-caption">Since the corner-shop days</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
