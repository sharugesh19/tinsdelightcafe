import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';

/**
 * CartContext
 * -----------------------------------------------------------------------
 * Frontend-only cart state for the ordering feature (menu + cart drawer +
 * mobile sticky cart). No backend/database — state lives in memory and is
 * mirrored to localStorage so a cart survives a page refresh.
 *
 * A cart "line" is one item at one size (for sized items like pizza):
 *   { key, itemId, name, category, sizeLabel, unitPrice, quantity }
 * `key` uniquely identifies an item+size combination so a Regular and a
 * Large of the same pizza are tracked as separate lines.
 * -----------------------------------------------------------------------
 */

const STORAGE_KEY = 'tinsdelight-cart-v1';

const CartContext = createContext(null);

export function makeLineKey(itemId, sizeId) {
  return `${itemId}::${sizeId || 'default'}`;
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { line } = action.payload;
      const existing = state.find((l) => l.key === line.key);
      if (existing) {
        return state.map((l) =>
          l.key === line.key ? { ...l, quantity: l.quantity + 1 } : l,
        );
      }
      return [...state, { ...line, quantity: 1 }];
    }
    case 'INCREASE':
      return state.map((l) =>
        l.key === action.payload.key ? { ...l, quantity: l.quantity + 1 } : l,
      );
    case 'DECREASE':
      return state
        .map((l) =>
          l.key === action.payload.key ? { ...l, quantity: l.quantity - 1 } : l,
        )
        .filter((l) => l.quantity > 0);
    case 'REMOVE':
      return state.filter((l) => l.key !== action.payload.key);
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}

function readInitialLines() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(cartReducer, undefined, readInitialLines);
  const [isOpen, setIsOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // Storage can fail (private mode, quota, etc.) — cart still works
      // in-memory for the session, so we simply skip persistence.
    }
  }, [lines]);

  // Reserve space at the bottom of the page whenever the sticky mobile
  // CartLauncher bar is showing, so it never overlaps the footer or the
  // last section on small screens. See the `body.has-cart-launcher` rule
  // in index.css.
  useEffect(() => {
    const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);
    const showingLauncher = itemCount > 0 && !isOpen;
    document.body.classList.toggle('has-cart-launcher', showingLauncher);
    return () => document.body.classList.remove('has-cart-launcher');
  }, [lines, isOpen]);

  // Let keyboard users close the drawer with Escape, same as clicking the
  // overlay or the close button.
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const addItem = useCallback((line) => {
    dispatch({ type: 'ADD', payload: { line } });
  }, []);

  const increase = useCallback((key) => {
    dispatch({ type: 'INCREASE', payload: { key } });
  }, []);

  const decrease = useCallback((key) => {
    dispatch({ type: 'DECREASE', payload: { key } });
  }, []);

  const removeItem = useCallback((key) => {
    dispatch({ type: 'REMOVE', payload: { key } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' });
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), []);

  const { itemCount, subtotal } = useMemo(() => {
    return lines.reduce(
      (acc, line) => ({
        itemCount: acc.itemCount + line.quantity,
        subtotal: acc.subtotal + line.unitPrice * line.quantity,
      }),
      { itemCount: 0, subtotal: 0 },
    );
  }, [lines]);

  const getQuantity = useCallback(
    (key) => lines.find((l) => l.key === key)?.quantity ?? 0,
    [lines],
  );

  const value = useMemo(
    () => ({
      lines,
      addItem,
      increase,
      decrease,
      removeItem,
      clearCart,
      getQuantity,
      itemCount,
      subtotal,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      customerName,
      setCustomerName,
      notes,
      setNotes,
    }),
    [
      lines,
      addItem,
      increase,
      decrease,
      removeItem,
      clearCart,
      getQuantity,
      itemCount,
      subtotal,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      customerName,
      notes,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return ctx;
}
