import { cafeConfig } from '../../../config/cafeConfig';
import { IconPin, IconClock } from '../../common/Icons';
import './Visit.css';

/**
 * Visit
 * -----------------------------------------------------------------------
 * "Where we are" — address, hours, a Get Directions button, and an
 * embedded Google Map. Split out from the old combined Contact section
 * so location/hours (Visit) and phone/WhatsApp (Contact) are two
 * separate, clearly-labelled nav destinations.
 *
 * The map uses cafeConfig.contact.mapEmbedUrl, a key-free Google Maps
 * "output=embed" URL built from the same address string as
 * directionsUrl, so both always stay in sync with one source of truth.
 * -----------------------------------------------------------------------
 */
function Visit() {
  const { contact } = cafeConfig;

  return (
    <section id="visit" className="section visit">
      <div className="container visit__inner">
        <div className="section-heading">
          <p className="eyebrow">Come say hello</p>
          <span className="section-heading__rule" aria-hidden="true" />
          <h2 className="section-heading__title">Visit Us</h2>
          <p className="section-heading__subtitle">
            Drop by for a slow morning — we&rsquo;re easy to find, tucked right on Amman Kovil
            Street.
          </p>
        </div>

        <div className="visit__grid">
          <article className="card visit__card">
            <span className="visit__card-icon">
              <IconPin />
            </span>
            <span className="visit__card-label">Address</span>
            <p className="visit__card-value">{contact.address}</p>

            <span className="visit__card-icon visit__card-icon--secondary">
              <IconClock />
            </span>
            <span className="visit__card-label">Hours</span>
            <ul className="visit__hours-list">
              {contact.hours.map((row) => (
                <li key={row.day} className="visit__hours-row">
                  <span className="visit__hours-day">{row.day}</span>
                  <span className="visit__hours-time">{row.time}</span>
                </li>
              ))}
            </ul>

            <a
              href={contact.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary visit__directions"
            >
              Get Directions
            </a>
          </article>

          <div className="visit__map card">
            <iframe
              className="visit__map-frame"
              src={contact.mapEmbedUrl}
              title="Map to Tin's Delight Café"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Visit;
