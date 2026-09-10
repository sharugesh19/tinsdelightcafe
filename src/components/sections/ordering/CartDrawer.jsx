import { useMemo } from 'react';
import { cafeConfig } from '../../../config/cafeConfig';
import { useCart } from './CartContext';
import { buildWhatsAppLink } from './whatsappOrder';
import { IconClose, IconMinus, IconPlus, IconWhatsApp, IconPhone, IconBag } from '../../common/Icons';
import './CartDrawer.css';

/**
 * CartDrawer
 * -----------------------------------------------------------------------
 * Slide-in order summary: cart lines with quantity/remove controls,
 * customer name + order notes, subtotal, and the two order paths
 * (WhatsApp with a pre-filled message, or a direct phone call).
 * Frontend-only — no backend request is made; WhatsApp/tel links simply
 * hand off to the customer's own apps.
 * -----------------------------------------------------------------------
 */
function CartDrawer() {
  const {
    lines,
    isOpen,
    closeCart,
    increase,
    decrease,
    removeItem,
    clearCart,
    subtotal,
    itemCount,
    customerName,
    setCustomerName,
    notes,
    setNotes,
  } = useCart();

  const { brand, contact } = cafeConfig;

  const whatsappHref = useMemo(
    () =>
      buildWhatsAppLink({
        whatsappNumber: contact.whatsapp.dial,
        brandName: brand.fullName,
        lines,
        customerName,
        notes,
        subtotal,
      }),
    [lines, customerName, notes, subtotal, brand.fullName, contact.whatsapp.dial],
  );

  const hasItems = lines.length > 0;

  return (
    <>
      <div
        className={`cart-drawer__overlay ${isOpen ? 'cart-drawer__overlay--visible' : ''}`}
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        className={`cart-drawer ${isOpen ? 'cart-drawer--open' : ''}`}
        aria-hidden={!isOpen}
        inert={!isOpen}
        aria-label="Your order"
      >
        <div className="cart-drawer__header">
          <h2 className="cart-drawer__title">Your Order</h2>
          <button
            type="button"
            className="cart-drawer__close"
            onClick={closeCart}
            aria-label="Close cart"
          >
            <IconClose width={18} height={18} />
          </button>
        </div>

        <div className="cart-drawer__body">
          {!hasItems ? (
            <p className="cart-drawer__empty">
              <IconBag className="cart-drawer__empty-icon" />
              Your cart is empty. Add something delicious from the menu!
            </p>
          ) : (
            <>
              <ul className="cart-drawer__list">
                {lines.map((line) => (
                  <li key={line.key} className="cart-drawer__line">
                    <div className="cart-drawer__line-info">
                      <span className="cart-drawer__line-name">
                        {line.name}
                        {line.sizeLabel ? ` (${line.sizeLabel})` : ''}
                      </span>
                      <span className="cart-drawer__line-price">
                        ₹{line.unitPrice} × {line.quantity} = ₹{line.unitPrice * line.quantity}
                      </span>
                    </div>
                    <div className="cart-drawer__line-actions">
                      <div className="cart-drawer__stepper">
                        <button
                          type="button"
                          onClick={() => decrease(line.key)}
                          aria-label={`Decrease quantity of ${line.name}`}
                        >
                          <IconMinus width={13} height={13} />
                        </button>
                        <span aria-live="polite">{line.quantity}</span>
                        <button
                          type="button"
                          onClick={() => increase(line.key)}
                          aria-label={`Increase quantity of ${line.name}`}
                        >
                          <IconPlus width={13} height={13} />
                        </button>
                      </div>
                      <button
                        type="button"
                        className="cart-drawer__remove"
                        onClick={() => removeItem(line.key)}
                        aria-label={`Remove ${line.name} from cart`}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="cart-drawer__fields">
                <label className="cart-drawer__label" htmlFor="cart-customer-name">
                  Your name
                </label>
                <input
                  id="cart-customer-name"
                  type="text"
                  className="cart-drawer__input"
                  placeholder="e.g. Priya"
                  value={customerName}
                  onChange={(event) => setCustomerName(event.target.value)}
                />

                <label className="cart-drawer__label" htmlFor="cart-order-notes">
                  Order notes (optional)
                </label>
                <textarea
                  id="cart-order-notes"
                  className="cart-drawer__textarea"
                  rows={2}
                  placeholder="e.g. less spicy, extra cheese"
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                />
              </div>

              <div className="cart-drawer__summary">
                <span>
                  Subtotal ({itemCount} item{itemCount !== 1 ? 's' : ''})
                </span>
                <span className="cart-drawer__total">₹{subtotal}</span>
              </div>
            </>
          )}
        </div>

        <div className="cart-drawer__footer">
          <a
            href={hasItems ? whatsappHref : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn--primary cart-drawer__whatsapp ${
              !hasItems ? 'cart-drawer__whatsapp--disabled' : ''
            }`}
            aria-disabled={!hasItems}
            onClick={(event) => {
              if (!hasItems) event.preventDefault();
            }}
          >
            <IconWhatsApp className="cart-drawer__whatsapp-icon" />
            Order via WhatsApp
          </a>

          <div className="cart-drawer__call">
            <span className="cart-drawer__call-label">Prefer to call?</span>
            <div className="cart-drawer__call-links">
              {contact.phoneNumbers.map((phone) => (
                <a
                  key={phone.dial}
                  href={`tel:+${phone.dial}`}
                  className="cart-drawer__call-btn"
                >
                  <IconPhone className="cart-drawer__call-icon" />
                  Call {phone.display}
                </a>
              ))}
            </div>
          </div>

          {hasItems && (
            <button type="button" className="btn btn--ghost cart-drawer__clear" onClick={clearCart}>
              Clear cart
            </button>
          )}
        </div>
      </aside>
    </>
  );
}

export default CartDrawer;
