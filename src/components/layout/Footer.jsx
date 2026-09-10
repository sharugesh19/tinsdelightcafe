import { cafeConfig } from '../../config/cafeConfig';
import LogoMark from '../common/LogoMark';
import { IconPin, IconWhatsApp, IconPhone } from '../common/Icons';
import './Footer.css';

function Footer() {
  const { brand, nav, contact } = cafeConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand-block">
          <LogoMark size="sm" showWordmark />
          <p className="footer__tagline">{brand.tagline}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} className="footer__nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__meta">
          <a
            href={contact.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__meta-link"
          >
            <IconPin className="footer__meta-icon" />
            {contact.address}
          </a>
          <a href={`tel:+${contact.phoneNumbers[0].dial}`} className="footer__meta-link">
            <IconPhone className="footer__meta-icon" />
            {contact.phone}
          </a>
          <a
            href={`https://wa.me/${contact.whatsapp.dial}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__meta-link"
          >
            <IconWhatsApp className="footer__meta-icon" />
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="container">
        <hr className="footer__rule" />
        <p className="footer__copyright">
          &copy; {year} {brand.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
