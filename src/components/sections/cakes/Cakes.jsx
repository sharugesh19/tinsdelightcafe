import { useState } from 'react';
import { cafeConfig } from '../../../config/cafeConfig';
import './Cakes.css';

const CAKE_TYPES = [
  'Photo Cake',
  'Theme / Character Cake',
  'Wedding Cake',
  'Anniversary Cake',
  'Corporate / Event Cake',
  'Fondant & Sugar Craft',
  'Other',
];

const WEIGHTS = ['0.5 kg', '1 kg', '1.5 kg', '2 kg', '3 kg', '3+ kg (specify in message)'];

const FEATURES = [
  'Photo Cakes (any size)',
  'Theme & Character Cakes',
  'Wedding & Anniversary Cakes',
  'Corporate & Event Cakes',
  'Fondant & Sugar Craft',
  'Free Message Writing',
];

const INITIAL_FORM = {
  name: '',
  phone: '',
  cakeType: '',
  weight: '',
  date: '',
  message: '',
};

/**
 * Cakes
 * -----------------------------------------------------------------------
 * The "Customized Cakes" tab. Previously showed a price grid of fixed
 * cake flavours (now moved into the Menu section's "Cakes" category,
 * ordered through the normal cart). This section is now dedicated to
 * fully bespoke cake requests (photo cakes, theme cakes, wedding cakes,
 * etc.) that can't be pre-priced — the person fills in a short form and
 * it's sent to the café as a WhatsApp message for a manual quote.
 * -----------------------------------------------------------------------
 */
function Cakes() {
  const [form, setForm] = useState(INITIAL_FORM);
  const { contact } = cafeConfig;

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const lines = [
      "Hi! I'd like to place a custom cake order.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Cake Type/Theme: ${form.cakeType}`,
      `Weight: ${form.weight}`,
      `Delivery Date: ${form.date}`,
    ];
    if (form.message.trim()) lines.push(`Message: ${form.message.trim()}`);
    lines.push('(Customized cakes need at least 2 days advance notice.)');

    const whatsappHref = `https://wa.me/${contact.whatsapp.dial}?text=${encodeURIComponent(
      lines.join('\n'),
    )}`;
    window.open(whatsappHref, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="cakes" className="cakes">
      <div className="container cakes__inner">
        <div className="cakes__intro">
          <p className="cakes__eyebrow">Made just for you</p>
          <h2 className="cakes__title">
            Custom <span className="cakes__title-accent">Cake Orders</span>
          </h2>
                    <p className="cakes__subtitle">
            Turn your dream cake into reality. Photo cakes, theme cakes, wedding cakes — we craft
            it all with love. Share your idea and we&apos;ll make it happen!
          </p>

          <div className="cakes__notice" role="note">
            <span className="cakes__notice-icon" aria-hidden="true">⏰</span>
            <span>
              <strong>Please note:</strong> Customized cakes must be ordered at least{' '}
              <strong>2 days in advance</strong>.
            </span>
          </div>

          <ul className="cakes__features">
            {FEATURES.map((feature) => (
              <li key={feature} className="cakes__feature">
                <span className="cakes__feature-check" aria-hidden="true">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <form className="cakes__form" onSubmit={handleSubmit}>
          <h3 className="cakes__form-title">Design Your Cake</h3>

          <label className="cakes__field" htmlFor="cake-name">
            Your Name
            <input
              id="cake-name"
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange('name')}
              required
            />
          </label>

          <label className="cakes__field" htmlFor="cake-phone">
            Phone Number
            <input
              id="cake-phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={form.phone}
              onChange={handleChange('phone')}
              required
            />
          </label>

          <label className="cakes__field" htmlFor="cake-type">
            Cake Type / Theme
            <select id="cake-type" value={form.cakeType} onChange={handleChange('cakeType')} required>
              <option value="" disabled>
                Select theme…
              </option>
              {CAKE_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label className="cakes__field" htmlFor="cake-weight">
            Weight Required
            <select id="cake-weight" value={form.weight} onChange={handleChange('weight')} required>
              <option value="" disabled>
                Select weight…
              </option>
              {WEIGHTS.map((weight) => (
                <option key={weight} value={weight}>
                  {weight}
                </option>
              ))}
            </select>
          </label>

          <label className="cakes__field" htmlFor="cake-date">
            Delivery Date
            <input
              id="cake-date"
              type="date"
              value={form.date}
              onChange={handleChange('date')}
              required
            />
          </label>

          <label className="cakes__field" htmlFor="cake-message">
            Message / Special Instructions
            <textarea
              id="cake-message"
              rows={4}
              placeholder="Describe your cake idea, message to write on cake, any specific design…"
              value={form.message}
              onChange={handleChange('message')}
            />
          </label>

          <p className="cakes__form-notice">
            <strong>Please note:</strong> Customized cakes need at least 2 days advance notice.
          </p>

          <button type="submit" className="btn btn--primary cakes__form-submit">
            Send Custom Order Request
          </button>
        </form>
      </div>
    </section>
  );
}

export default Cakes;