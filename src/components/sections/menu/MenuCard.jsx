import { useState } from 'react';
import { useCart, makeLineKey } from '../ordering/CartContext';
import { getMenuImage } from '../../../config/menuImages';
import { IconMinus, IconPlus, IconImage } from '../../common/Icons';
import './MenuCard.css';

/**
 * MenuCard
 * -----------------------------------------------------------------------
 * One menu item, rendered as an editorial row (name — price, short
 * description, size pills where relevant, Add control) rather than a
 * boxed card, per the redesign brief: "the menu should remain fast and
 * easy to scan on mobile" and "do NOT make every item a huge card."
 * Items with a `sizes` array (pizzas) show a size picker pill row and
 * price/cart-state tracks the selected size; simple items show a single
 * price. Cart wiring (add/increase/decrease) is unchanged from the
 * original implementation.
 * -----------------------------------------------------------------------
 */
function MenuCard({ item }) {
  const hasSizes = Array.isArray(item.sizes) && item.sizes.length > 0;
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const { addItem, increase, decrease, getQuantity } = useCart();
  const image = getMenuImage(item.id);

  const activeSize = hasSizes ? item.sizes[selectedSizeIndex] : null;
  const unitPrice = hasSizes ? activeSize.price : item.price;
  const sizeLabel = hasSizes ? activeSize.label : null;
  const lineKey = makeLineKey(item.id, hasSizes ? activeSize.id : null);
  const quantity = getQuantity(lineKey);

  const handleAdd = () => {
    addItem({
      key: lineKey,
      itemId: item.id,
      name: item.name,
      category: item.category,
      sizeLabel,
      unitPrice,
    });
  };

  return (
    <article className="menu-row">
      <div className="menu-row__thumb" aria-hidden={!image}>
        {image ? (
          <img src={image} alt="" className="menu-row__thumb-img" loading="lazy" />
        ) : (
          <IconImage className="menu-row__thumb-icon" />
        )}
      </div>

      <div className="menu-row__main">
        <div className="menu-row__heading">
          <span
            className={`menu-row__veg-dot menu-row__veg-dot--${item.veg ? 'veg' : 'nonveg'}`}
            role="img"
            aria-label={item.veg ? 'Vegetarian' : 'Non-vegetarian'}
            title={item.veg ? 'Vegetarian' : 'Non-vegetarian'}
          />
          <h3 className="menu-row__name">{item.name}</h3>
          <span className="menu-row__rule" aria-hidden="true" />
          <span className="menu-row__price">₹{unitPrice}</span>
        </div>

        {item.description && <p className="menu-row__desc">{item.description}</p>}

        {hasSizes && (
          <div className="menu-row__sizes" role="radiogroup" aria-label={`Size for ${item.name}`}>
            {item.sizes.map((size, index) => (
              <button
                key={size.id}
                type="button"
                role="radio"
                aria-checked={index === selectedSizeIndex}
                className={`menu-row__size-pill ${
                  index === selectedSizeIndex ? 'menu-row__size-pill--active' : ''
                }`}
                onClick={() => setSelectedSizeIndex(index)}
              >
                {size.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="menu-row__action">
        {quantity > 0 ? (
          <div className="menu-row__stepper">
            <button
              type="button"
              className="menu-row__stepper-btn"
              onClick={() => decrease(lineKey)}
              aria-label={`Decrease quantity of ${item.name}${sizeLabel ? `, ${sizeLabel}` : ''}`}
            >
              <IconMinus width={14} height={14} />
            </button>
            <span className="menu-row__stepper-count" aria-live="polite">
              {quantity}
            </span>
            <button
              type="button"
              className="menu-row__stepper-btn"
              onClick={() => increase(lineKey)}
              aria-label={`Increase quantity of ${item.name}${sizeLabel ? `, ${sizeLabel}` : ''}`}
            >
              <IconPlus width={14} height={14} />
            </button>
          </div>
        ) : (
          <button type="button" className="menu-row__add" onClick={handleAdd}>
            + Add
          </button>
        )}
      </div>
    </article>
  );
}

export default MenuCard;
