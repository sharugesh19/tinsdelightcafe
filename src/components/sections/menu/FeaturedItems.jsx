import { useCart, makeLineKey } from '../ordering/CartContext';
import { getMenuImage } from '../../../config/menuImages';
import { IconImage } from '../../common/Icons';
import './FeaturedItems.css';

/**
 * FeaturedItems
 * -----------------------------------------------------------------------
 * Hero treatment for signature items (brief mentions "Tin's Chocolate
 * Cloud", "Pink Berry Tres Leches", etc.). Those exact items are not
 * present in menuData.js — only real menu items should ever be marked
 * `featured: true` there, so this component simply renders nothing
 * until the café's actual signature items are added with that flag.
 * Do not add placeholder/fake items here to make this section appear.
 * -----------------------------------------------------------------------
 */
function FeaturedItems({ items }) {
  const { addItem, increase, decrease, getQuantity } = useCart();

  if (!items || items.length === 0) return null;

  return (
    <div className="featured">
      <div className="section-heading featured__heading">
        <p className="eyebrow">Signature</p>
        <span className="section-heading__rule" aria-hidden="true" />
        <h3 className="featured__title">Fan Favourites</h3>
      </div>

      <div className="featured__grid">
        {items.map((item) => {
          const hasSizes = Array.isArray(item.sizes) && item.sizes.length > 0;
          const unitPrice = hasSizes ? item.sizes[0].price : item.price;
          const sizeLabel = hasSizes ? item.sizes[0].label : null;
          const lineKey = makeLineKey(item.id, hasSizes ? item.sizes[0].id : null);
          const quantity = getQuantity(lineKey);
          const image = getMenuImage(item.id);

          return (
            <article key={item.id} className="card featured__card">
              <div className="featured__card-media" aria-hidden={!image}>
                {image ? (
                  <img src={image} alt="" className="featured__card-img" loading="lazy" />
                ) : (
                  <IconImage className="featured__card-media-icon" />
                )}
                <span className="featured__badge">Signature</span>
              </div>
              <h4 className="featured__card-name">{item.name}</h4>
              {item.description && <p className="featured__card-desc">{item.description}</p>}
              <div className="featured__card-footer">
                <span className="featured__card-price">₹{unitPrice}</span>
                {quantity > 0 ? (
                  <div className="featured__stepper">
                    <button type="button" onClick={() => decrease(lineKey)} aria-label={`Decrease ${item.name}`}>
                      −
                    </button>
                    <span aria-live="polite">{quantity}</span>
                    <button type="button" onClick={() => increase(lineKey)} aria-label={`Increase ${item.name}`}>
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="btn btn--primary featured__add"
                    onClick={() =>
                      addItem({
                        key: lineKey,
                        itemId: item.id,
                        name: item.name,
                        category: item.category,
                        sizeLabel,
                        unitPrice,
                      })
                    }
                  >
                    Add
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedItems;
