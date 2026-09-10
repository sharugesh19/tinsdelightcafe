import { cafeConfig } from '../../../config/cafeConfig';
import { IconClock, IconPhone, IconWhatsApp } from '../../common/Icons';
import './Contact.css';

/**
 * Contact
 * -----------------------------------------------------------------------
 * "How to reach us" — hours, both phone numbers, and a WhatsApp button.
 * Address + map now live in the separate Visit section
 * (components/sections/visit/Visit.jsx), so this section can stay
 * focused on numbers and call/message details, matching its own nav
 * entry. Still reads everything from cafeConfig.contact — no new content
 * decisions here.
 * -----------------------------------------------------------------------
 */
function Contact() {
  const { contact } = cafeConfig;

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <div className="section-heading">
          <p className="eyebrow">Ring us up</p>
          <span className="section-heading__rule" aria-hidden="true" />
          <h2 className="section-heading__title">Contact Us</h2>
          <p className="section-heading__subtitle">
            Call ahead, message us on WhatsApp, or just check today&rsquo;s hours before you head
            over.
          </p>
        </div>

        <div className="contact__grid">
          <article className="card contact__card">
            <span className="contact__card-icon">
              <IconClock />
            </span>
            <span className="contact__card-label">Hours</span>
            <ul className="contact__hours-list">
              {contact.hours.map((row) => (
                <li key={row.day} className="contact__hours-row">
                  <span className="contact__hours-day">{row.day}</span>
                  <span className="contact__hours-time">{row.time}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="card contact__card">
            <span className="contact__card-icon">
              <IconPhone />
            </span>
            <span className="contact__card-label">Call or WhatsApp</span>
            <div className="contact__phones">
              {contact.phoneNumbers.map((phone) => (
                <a key={phone.dial} href={`tel:+${phone.dial}`} className="contact__phone-link">
                  <IconPhone className="contact__phone-icon" />
                  {phone.display}
                </a>
              ))}
            </div>
            <a
              href={`https://wa.me/${contact.whatsapp.dial}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary contact__whatsapp"
            >
              <IconWhatsApp className="contact__whatsapp-icon" />
              Message on WhatsApp
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contact;
