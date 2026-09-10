/**
 * menuData.js
 * -----------------------------------------------------------------------
 * Menu content for Tin's Delight Café: categories + items with pricing.
 *
 * ⚠️ SAMPLE DATA NOTICE ⚠️
 * The café's real menu items and prices were not supplied alongside the
 * design brief. The items below are realistic placeholders (Coimbatore
 * café/pizza pricing in ₹) so the ordering system can be fully built and
 * tested end-to-end. Replace the contents of `menuItems` below with the
 * café's actual dishes and prices — the shape of each object is the
 * contract the rest of the app relies on, so keep the same fields:
 *
 *   - Simple item:  { id, name, description, category, veg, price }
 *   - Sized item (e.g. pizza): { id, name, description, category, veg,
 *     sizes: [{ id, label, price }, ...] }  — no top-level `price`.
 *
 * `category` must match one of the labels in `categories` below exactly.
 *
 * PHOTOS: each item's photo is looked up by its `id` from files dropped
 * into src/assets/menu (e.g. `pizza-margherita.jpg` for the item with
 * id `'pizza-margherita'`) — see src/config/menuImages.js and the
 * README in that assets folder. No field needed here for it.
 *
 * OPTIONAL `featured` FLAG (added for the visual redesign):
 * Set `featured: true` on a real menu item to have it appear in the
 * "Fan Favourites" signature strip at the top of the Menu section (see
 * FeaturedItems.jsx). Leave it unset/false on everything else. Do not
 * add placeholder signature items just to populate that section — it
 * stays hidden until real ones are flagged here.
 * -----------------------------------------------------------------------
 */

export const categories = [
  'Pizza',
  'Beverages',
  'Starters & Snacks',
  'Sandwiches & Burgers',
  'Desserts',
];

export const menuItems = [
  // ---------- Pizza (sized) ----------
  {
    id: 'pizza-margherita',
    name: 'Margherita Pizza',
    description: 'Classic tomato base, mozzarella, and a touch of basil.',
    category: 'Pizza',
    veg: true,
    featured: true,
    sizes: [
      { id: 'reg', label: 'Regular', price: 199 },
      { id: 'med', label: 'Medium', price: 349 },
      { id: 'lrg', label: 'Large', price: 499 },
    ],
  },
  {
    id: 'pizza-farmhouse',
    name: 'Farmhouse Pizza',
    description: 'Onion, capsicum, tomato, and mushroom on a cheesy base.',
    category: 'Pizza',
    veg: true,
    sizes: [
      { id: 'reg', label: 'Regular', price: 229 },
      { id: 'med', label: 'Medium', price: 399 },
      { id: 'lrg', label: 'Large', price: 549 },
    ],
  },
  {
    id: 'pizza-peppy-paneer',
    name: 'Peppy Paneer Pizza',
    description: 'Paneer, capsicum, and red pepper with extra cheese.',
    category: 'Pizza',
    veg: true,
    sizes: [
      { id: 'reg', label: 'Regular', price: 249 },
      { id: 'med', label: 'Medium', price: 429 },
      { id: 'lrg', label: 'Large', price: 579 },
    ],
  },
  {
    id: 'pizza-chicken-tikka',
    name: 'Chicken Tikka Pizza',
    description: 'Tandoori chicken tikka, onion, and mozzarella.',
    category: 'Pizza',
    veg: false,
    sizes: [
      { id: 'reg', label: 'Regular', price: 269 },
      { id: 'med', label: 'Medium', price: 459 },
      { id: 'lrg', label: 'Large', price: 619 },
    ],
  },

  // ---------- Beverages ----------
  {
    id: 'bev-filter-coffee',
    name: 'Filter Coffee',
    description: 'South Indian filter coffee, hand-poured.',
    category: 'Beverages',
    veg: true,
    featured: true,
    price: 60,
  },
  {
    id: 'bev-cappuccino',
    name: 'Cappuccino',
    description: 'Espresso, steamed milk, and a light foam top.',
    category: 'Beverages',
    veg: true,
    price: 90,
  },
  {
    id: 'bev-cold-coffee',
    name: 'Cold Coffee',
    description: 'Blended chilled coffee with a scoop of ice cream.',
    category: 'Beverages',
    veg: true,
    price: 120,
  },
  {
    id: 'bev-masala-chai',
    name: 'Masala Chai',
    description: 'Spiced milk tea, brewed the traditional way.',
    category: 'Beverages',
    veg: true,
    price: 40,
  },
  {
    id: 'bev-lime-soda',
    name: 'Fresh Lime Soda',
    description: 'Sweet, salted, or mixed — your choice at the counter.',
    category: 'Beverages',
    veg: true,
    price: 70,
  },
  {
    id: 'bev-chocolate-shake',
    name: 'Chocolate Shake',
    description: 'Rich chocolate milkshake topped with cocoa.',
    category: 'Beverages',
    veg: true,
    price: 130,
  },

  // ---------- Starters & Snacks ----------
  {
    id: 'snack-french-fries',
    name: 'French Fries',
    description: 'Crisp golden fries, lightly salted.',
    category: 'Starters & Snacks',
    veg: true,
    price: 99,
  },
  {
    id: 'snack-peri-peri-fries',
    name: 'Peri Peri Fries',
    description: 'French fries tossed in peri peri seasoning.',
    category: 'Starters & Snacks',
    veg: true,
    price: 129,
  },
  {
    id: 'snack-veg-spring-rolls',
    name: 'Veg Spring Rolls',
    description: 'Crunchy rolls stuffed with mixed vegetables.',
    category: 'Starters & Snacks',
    veg: true,
    price: 149,
  },
  {
    id: 'snack-chicken-65',
    name: 'Chicken 65',
    description: 'Spicy, deep-fried chicken bites, South Indian style.',
    category: 'Starters & Snacks',
    veg: false,
    price: 219,
  },
  {
    id: 'snack-paneer-tikka',
    name: 'Paneer Tikka',
    description: 'Smoky grilled paneer marinated in tandoori spices.',
    category: 'Starters & Snacks',
    veg: true,
    featured: true,
    price: 199,
  },

  // ---------- Sandwiches & Burgers ----------
  {
    id: 'sandwich-veg-grilled',
    name: 'Veg Grilled Sandwich',
    description: 'Toasted sandwich with mixed vegetables and cheese.',
    category: 'Sandwiches & Burgers',
    veg: true,
    price: 129,
  },
  {
    id: 'sandwich-cheese-chilli-toast',
    name: 'Cheese Chilli Toast',
    description: 'Open toast with a spiced cheese and chilli topping.',
    category: 'Sandwiches & Burgers',
    veg: true,
    price: 139,
  },
  {
    id: 'burger-classic-veg',
    name: 'Classic Veg Burger',
    description: 'A crumb-fried veg patty with lettuce and house sauce.',
    category: 'Sandwiches & Burgers',
    veg: true,
    price: 109,
  },
  {
    id: 'burger-chicken',
    name: 'Chicken Burger',
    description: 'Grilled chicken patty with lettuce, cheese, and mayo.',
    category: 'Sandwiches & Burgers',
    veg: false,
    featured: true,
    price: 159,
  },

  // ---------- Desserts ----------
  {
    id: 'dessert-chocolate-brownie',
    name: 'Chocolate Brownie',
    description: 'Warm, fudgy brownie baked in-house.',
    category: 'Desserts',
    veg: true,
    price: 99,
  },
  {
    id: 'dessert-brownie-ice-cream',
    name: 'Brownie with Ice Cream',
    description: 'Our chocolate brownie topped with vanilla ice cream.',
    category: 'Desserts',
    veg: true,
    featured: true,
    price: 149,
  },
  {
    id: 'dessert-gulab-jamun',
    name: 'Gulab Jamun (2 pcs)',
    description: 'Soft milk dumplings soaked in cardamom syrup.',
    category: 'Desserts',
    veg: true,
    price: 79,
  },
  {
    id: 'dessert-vanilla-ice-cream',
    name: 'Vanilla Ice Cream',
    description: 'Two scoops of classic vanilla.',
    category: 'Desserts',
    veg: true,
    price: 69,
  },
];
