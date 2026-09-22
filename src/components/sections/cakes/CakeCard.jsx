import { cafeConfig } from '../../../config/cafeConfig';
import './Cakes.css';

function CakeCard({ cake }) {
  const { contact } = cafeConfig;
  const message = `Hi! I'd like to order a customized ${cake.name} cake (₹${cake.price}). I understand customized cakes need to be ordered at least 2 days in advance.`;
  const whatsappHref = `https://wa.me/${contact.whatsapp.dial}?text=${encodeURIComponent(message)}`;

  return (
    <div className="cake-card">
      <div className="cake-card__photo cake-card__photo--placeholder" aria-hidden="true">
        <span className="cake-card__photo-icon">🎂</span>
        <span className="cake-card__photo-label">Photo coming soon</span>
      </div>

      <div className="cake-card__body">
        <h3 className="cake-card__name">{cake.name}</h3>
        <p className="cake-card__price">₹{cake.price}</p>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary cake-card__order-btn"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default CakeCard;