import { useCart } from './CartContext';
import { IconBag } from '../../common/Icons';
import './CartLauncher.css';

/**
 * CartLauncher
 * -----------------------------------------------------------------------
 * Persistent entry point into the cart. Renders as a full-width sticky
 * bar at the bottom of the screen on mobile, and collapses into a
 * compact floating pill in the bottom-right corner from the tablet
 * breakpoint up. Hidden whenever the cart is empty or already open, so
 * it never competes with the drawer.
 * -----------------------------------------------------------------------
 */
function CartLauncher() {
  const { itemCount, subtotal, openCart, isOpen } = useCart();

  if (itemCount === 0 || isOpen) return null;

  return (
    <button
      type="button"
      className="cart-launcher"
      onClick={openCart}
      aria-label={`View your order, ${itemCount} item${itemCount !== 1 ? 's' : ''}, total ₹${subtotal}`}
    >
      <span className="cart-launcher__icon">
        <IconBag width={18} height={18} />
        <span className="cart-launcher__count">{itemCount}</span>
      </span>
      <span className="cart-launcher__text">View Order</span>
      <span className="cart-launcher__total">₹{subtotal}</span>
    </button>
  );
}

export default CartLauncher;
