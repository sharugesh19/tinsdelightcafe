/**
 * menuData.js
 * -----------------------------------------------------------------------
 * Menu content for Tin's Delight Café: categories + items with pricing.
 * Sourced from the café's real printed menu (100% Pure Veg).
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
 * `featured: true` puts an item in the "Fan Favourites" strip
 * (FeaturedItems.jsx). Keep this to a small handful of real bestsellers.
 *
 * CAKES: customized cakes are just another category here now (`Cakes`),
 * ordered through the same cart/checkout flow as every other item. Each
 * one is made to order, so its description carries the 2-day-advance
 * notice that used to live in the separate Cakes.jsx banner.
 * -----------------------------------------------------------------------
 */

export const categories = [
  'Coffee',
  'Macchiato',
  'Iced Coffee & Cold Brew',
  'Tea & Hot Chocolate',
  'Milkshakes',
  'Pizza',
  'Waffles',
  'Quick Bites',
  'Desserts',
  'Signature Desserts',
  'Cakes',
];

export const menuItems = [
  // ---------- Coffee ----------
  { id: 'coffee-fresh-espresso', name: 'Fresh Espresso', description: 'A bold, classic shot of espresso.', category: 'Coffee', veg: true, price: 79 },
  { id: 'coffee-americano', name: 'Americano', description: 'Espresso lengthened with hot water.', category: 'Coffee', veg: true, price: 99 },
  { id: 'coffee-cappuccino', name: 'Cappuccino', description: 'Espresso, steamed milk, and a light foam top.', category: 'Coffee', veg: true, price: 129 },
  { id: 'coffee-cafe-latte', name: 'Café Latte', description: 'Smooth espresso balanced with steamed milk.', category: 'Coffee', veg: true, price: 129 },
  { id: 'coffee-matcha', name: 'Coffee Matcha', description: 'A layered blend of coffee and matcha.', category: 'Coffee', veg: true, price: 149 },
  { id: 'coffee-caramel-latte', name: 'Caramel Latte', description: 'Espresso and steamed milk with caramel.', category: 'Coffee', veg: true, price: 149 },
  { id: 'coffee-hazelnut-latte', name: 'Hazelnut Latte', description: 'Espresso and steamed milk with hazelnut.', category: 'Coffee', veg: true, price: 159 },
  { id: 'coffee-vanilla-latte', name: 'Vanilla Latte', description: 'Espresso and steamed milk with vanilla.', category: 'Coffee', veg: true, price: 149 },

  // ---------- Macchiato ----------
  { id: 'macchiato-caramel', name: 'Caramel Macchiato', description: 'Espresso marked with caramel and milk foam.', category: 'Macchiato', veg: true, price: 179 },
  { id: 'macchiato-hazelnut', name: 'Hazelnut Macchiato', description: 'Espresso marked with hazelnut and milk foam.', category: 'Macchiato', veg: true, price: 179 },
  { id: 'macchiato-vanilla', name: 'Vanilla Macchiato', description: 'Espresso marked with vanilla and milk foam.', category: 'Macchiato', veg: true, price: 169 },

  // ---------- Iced Coffee & Cold Brew ----------
  { id: 'iced-americano', name: 'Iced Americano', description: 'Chilled espresso and water over ice.', category: 'Iced Coffee & Cold Brew', veg: true, price: 119 },
  { id: 'iced-latte', name: 'Iced Latte', description: 'Chilled espresso with cold milk over ice.', category: 'Iced Coffee & Cold Brew', veg: true, price: 149 },
  { id: 'iced-peanut-butter-latte', name: 'Peanut Butter Iced Latte', description: 'Iced latte blended with peanut butter.', category: 'Iced Coffee & Cold Brew', veg: true, price: 179 },
  { id: 'iced-caramel-latte', name: 'Iced Caramel Latte', description: 'Chilled latte with caramel over ice.', category: 'Iced Coffee & Cold Brew', veg: true, price: 179 },
  { id: 'iced-spanish-latte', name: 'Spanish Latte', description: 'Espresso with condensed and steamed milk, over ice.', category: 'Iced Coffee & Cold Brew', veg: true, price: 189 },
  { id: 'iced-biscoff-spanish-latte', name: 'Biscoff Spanish Latte', description: 'Spanish latte with Biscoff.', category: 'Iced Coffee & Cold Brew', veg: true, price: 189 },
  { id: 'iced-classic-cold-coffee', name: 'Classic Cold Coffee', description: 'Blended chilled coffee, house style.', category: 'Iced Coffee & Cold Brew', veg: true, price: 179 },
  { id: 'iced-nutella-cold-coffee', name: 'Nutella Cold Coffee', description: 'Classic cold coffee blended with Nutella.', category: 'Iced Coffee & Cold Brew', veg: true, price: 199 },
  { id: 'iced-cranberry-cold-brew', name: 'Cranberry Cold Brew', description: 'Cold brew coffee with cranberry.', category: 'Iced Coffee & Cold Brew', veg: true, price: 169 },
  { id: 'iced-orange-cold-brew', name: 'Orange Cold Brew', description: 'Cold brew coffee with orange.', category: 'Iced Coffee & Cold Brew', veg: true, price: 169 },

  // ---------- Tea & Hot Chocolate ----------
  { id: 'tea-masala-chai', name: 'Masala Chai', description: 'Spiced milk tea, brewed the traditional way.', category: 'Tea & Hot Chocolate', veg: true, price: 69 },
  { id: 'tea-ginger-chai', name: 'Ginger Chai', description: 'Milk tea brewed with fresh ginger.', category: 'Tea & Hot Chocolate', veg: true, price: 69 },
  { id: 'tea-green-tea', name: 'Green Tea', description: 'Light and refreshing green tea.', category: 'Tea & Hot Chocolate', veg: true, price: 69 },
  { id: 'tea-hot-chocolate', name: 'Hot Chocolate', description: 'Rich, warm chocolate drink.', category: 'Tea & Hot Chocolate', veg: true, price: 145 },

  // ---------- Milkshakes ----------
  { id: 'shake-vanilla', name: 'Vanilla Milkshake', description: 'Classic creamy vanilla milkshake.', category: 'Milkshakes', veg: true, price: 129 },
  { id: 'shake-chocolate', name: 'Chocolate Milkshake', description: 'Rich chocolate milkshake.', category: 'Milkshakes', veg: true, price: 139 },
  { id: 'shake-strawberry', name: 'Strawberry Milkshake', description: 'Fresh, fruity strawberry milkshake.', category: 'Milkshakes', veg: true, price: 139 },
  { id: 'shake-oreo', name: 'Oreo Milkshake', description: 'Creamy milkshake loaded with Oreo.', category: 'Milkshakes', veg: true, price: 159 },
  { id: 'shake-brownie', name: 'Brownie Milkshake', description: 'Milkshake blended with chunks of brownie.', category: 'Milkshakes', veg: true, price: 169 },
  { id: 'shake-kitkat', name: 'KitKat Milkshake', description: 'Milkshake blended with KitKat.', category: 'Milkshakes', veg: true, price: 169 },
  { id: 'shake-nutella', name: 'Nutella Milkshake', description: 'Milkshake blended with Nutella.', category: 'Milkshakes', veg: true, price: 179 },

  // ---------- Pizza (sized) ----------
  {
    id: 'pizza-veg',
    name: 'Veg Pizza',
    description: 'Classic loaded veg pizza.',
    category: 'Pizza',
    veg: true,
    sizes: [
      { id: 'reg', label: 'Regular', price: 190 },
      { id: 'med', label: 'Medium', price: 280 },
      { id: 'lrg', label: 'Large', price: 390 },
    ],
  },
  {
    id: 'pizza-veg-overloader',
    name: 'Veg Overloader',
    description: 'Sweet corn, mushroom, capsicum, olives, and jalapeño.',
    category: 'Pizza',
    veg: true,
    sizes: [
      { id: 'reg', label: 'Regular', price: 210 },
      { id: 'med', label: 'Medium', price: 310 },
      { id: 'lrg', label: 'Large', price: 490 },
    ],
  },
  {
    id: 'pizza-paneer',
    name: 'Paneer Pizza',
    description: 'Loaded with fresh paneer and cheese.',
    category: 'Pizza',
    veg: true,
    sizes: [
      { id: 'reg', label: 'Regular', price: 260 },
      { id: 'med', label: 'Medium', price: 400 },
      { id: 'lrg', label: 'Large', price: 560 },
    ],
  },
  {
    id: 'pizza-margherita',
    name: 'Margherita Pizza',
    description: 'Classic tomato base, mozzarella, and a touch of basil.',
    category: 'Pizza',
    veg: true,
    sizes: [
      { id: 'reg', label: 'Regular', price: 150 },
      { id: 'med', label: 'Medium', price: 230 },
      { id: 'lrg', label: 'Large', price: 350 },
    ],
  },
  {
    id: 'pizza-sweet-corn',
    name: 'Sweet Corn Pizza',
    description: 'Topped generously with sweet corn and cheese.',
    category: 'Pizza',
    veg: true,
    sizes: [
      { id: 'reg', label: 'Regular', price: 180 },
      { id: 'med', label: 'Medium', price: 240 },
      { id: 'lrg', label: 'Large', price: 380 },
    ],
  },

  // ---------- Waffles ----------
  { id: 'waffle-classic', name: 'Classic Waffle', description: 'Honey + cinnamon.', category: 'Waffles', veg: true, price: 99 },
  { id: 'waffle-dark-chocolate', name: 'Dark Chocolate Waffle', description: 'Topped with rich dark chocolate.', category: 'Waffles', veg: true, price: 110 },
  { id: 'waffle-white-chocolate', name: 'White Chocolate Waffle', description: 'Topped with creamy white chocolate.', category: 'Waffles', veg: true, price: 125 },
  { id: 'waffle-milk-chocolate', name: 'Milk Chocolate Waffle', description: 'Topped with milk chocolate.', category: 'Waffles', veg: true, price: 120},
  { id: 'waffle-white-hazelnut', name: 'White Hazelnut Waffle', description: 'White chocolate and hazelnut.', category: 'Waffles', veg: true, price: 160 },
  { id: 'waffle-kunafa-pistachio', name: 'Kunafa Pistachio Waffle', description: 'Crispy kunafa and pistachio topping.', category: 'Waffles', veg: true, price: 195 },

  // ---------- Quick Bites ----------
  { id: 'bites-classic-salted-fries', name: 'Classic Salted Fries', description: 'Crisp golden fries, lightly salted.', category: 'Quick Bites', veg: true, price: 89 },
  { id: 'bites-peri-peri-fries', name: 'Peri-Peri Fries', description: 'French fries tossed in peri-peri seasoning.', category: 'Quick Bites', veg: true, price: 109 },
  { id: 'bites-cheese-fries', name: 'Cheese Fries', description: 'Fries loaded with melted cheese.', category: 'Quick Bites', veg: true, price: 139 },
  { id: 'bites-loaded-cheese-fries', name: 'Loaded Cheese Fries', description: 'Extra loaded, extra cheesy fries.', category: 'Quick Bites', veg: true, price: 169 },
  { id: 'bites-veg-nuggets', name: 'Veg Nuggets (5 pcs)', description: 'Crispy fried veg nuggets.', category: 'Quick Bites', veg: true, price: 110},
  { id: 'bites-cheese-cigar-rolls', name: 'Cheese Cigar Rolls (5 pcs)', description: 'Crisp rolls with a melting cheese centre.', category: 'Quick Bites', veg: true, price: 120 },
  { id: 'bites-spinach-hara-bhara-kebab', name: 'Spinach Hara Bhara Kebab', description: 'Spinach and mixed vegetable kebabs.', category: 'Quick Bites', veg: true, price: 135 },
  { id: 'bites-veg-momos', name: 'Veg Momos (6 pcs)', description: 'Steamed vegetable momos.', category: 'Quick Bites', veg: true, price: 109 },

  // ---------- Desserts (Brownies, Tres Leches & Special Desserts) ----------
  { id: 'dessert-classic-brownie', name: 'Classic Brownie', description: 'Warm, fudgy brownie baked in-house.', category: 'Desserts', veg: true, price: 75 },
  { id: 'dessert-double-chocolate-brownie', name: 'Double Chocolate Brownie', description: 'Extra rich double chocolate brownie.', category: 'Desserts', veg: true, price: 90 },
  { id: 'dessert-nutella-brownie', name: 'Nutella Brownie', description: 'Brownie swirled with Nutella.', category: 'Desserts', veg: true, price: 110 },
  { id: 'dessert-kunafa-brownie', name: 'Kunafa Brownie', description: 'Brownie topped with crispy kunafa.', category: 'Desserts', veg: true, price: 120 },
  { id: 'dessert-triple-chocolate-brownie', name: 'Triple Chocolate Brownie', description: 'Three layers of chocolate indulgence.', category: 'Desserts', veg: true, price: 145 },
  { id: 'dessert-oreo-brownie', name: 'Oreo Brownie', description: 'Brownie loaded with Oreo crumble.', category: 'Desserts', veg: true, price: 120 },
  { id: 'dessert-biscoff-brownie', name: 'Biscoff Brownie', description: 'Brownie topped with Biscoff.', category: 'Desserts', veg: true, price: 135 },
  { id: 'dessert-nutty-brownie', name: 'Nutty Brownie', description: 'Brownie loaded with mixed nuts.', category: 'Desserts', veg: true, price: 145 },
  { id: 'dessert-mango-tres-leches', name: 'Mango Tres Leches', description: 'Mango soaked three-milk sponge cake.', category: 'Desserts', veg: true, price: 120 },
  { id: 'dessert-milk-tres-leches', name: 'Milk Tres Leches', description: 'Classic three-milk soaked sponge cake.', category: 'Desserts', veg: true, price: 120 },
  { id: 'dessert-blueberry-tres-leches', name: 'Blueberry Tres Leches', description: 'Blueberry soaked three-milk sponge cake.', category: 'Desserts', veg: true, price: 120 },
  { id: 'dessert-rosemilk-tres-leches', name: 'Rosemilk Tres Leches', description: 'Rose milk soaked three-milk sponge cake.', category: 'Desserts', veg: true, price: 120 },
  { id: 'dessert-chocolate-lava-cupcake', name: 'Chocolate Lava Cupcake', description: 'Cupcake with a warm molten chocolate centre.', category: 'Desserts', veg: true, price: 100 },
  { id: 'dessert-vanilla-buttercream-cupcake', name: 'Vanilla Buttercream Cupcake', description: 'Soft vanilla cupcake with buttercream frosting.', category: 'Desserts', veg: true, price: 55 },
  { id: 'dessert-chocolate-buttercream-cupcake', name: 'Chocolate Buttercream Cupcake', description: 'Chocolate cupcake with buttercream frosting.', category: 'Desserts', veg: true, price: 65 },
  { id: 'dessert-burnt-basque-cheesecake', name: 'Burnt Basque Cheesecake', description: 'Caramelised, creamy Basque-style cheesecake.', category: 'Desserts', veg: true, price: 250 },
  { id: 'dessert-tiramisu', name: 'Tiramisu', description: 'Classic coffee-soaked Italian dessert.', category: 'Desserts', veg: true, price: 180 },

  // ---------- Tin's Café Signature Desserts ----------
  { id: 'signature-chocolate-cloud', name: "Tin's Chocolate Cloud", description: 'Warm chocolate mousse, chocolate mousse, soil + vanilla ice cream.', category: 'Signature Desserts', veg: true, price: 189 },
  { id: 'signature-pink-berry-tres-leches', name: 'Pink Berry Tres Leches', description: 'Soft vanilla sponge soaked in strawberry milk, whipped cream, strawberry compote + fresh strawberries.', category: 'Signature Desserts', veg: true, price: 169 },
  { id: 'signature-crunchy-choco-kunafa', name: 'Crunchy Choco Kunafa', description: 'Chocolate mousse, crispy kunafa, chocolate ganache + pistachio.', category: 'Signature Desserts', veg: true, price: 199 },
  { id: 'signature-cookie-lava-skillet', name: 'Cookie Lava Skillet', description: 'Fresh baked chocolate chip cookie, molten chocolate centre + ice cream.', category: 'Signature Desserts', veg: true, price: 199 },

  // ---------- Cakes (customized, made to order) ----------
  { id: 'cake-fresh-vanilla', name: 'Fresh Vanilla', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 850 },
  { id: 'cake-fresh-strawberry', name: 'Fresh Strawberry', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 950 },
  { id: 'cake-blueberry', name: 'Blueberry', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 1000 },
  { id: 'cake-raspberry', name: 'Raspberry', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 1000 },
  { id: 'cake-fresh-pineapple', name: 'Fresh Pineapple', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 1000 },
  { id: 'cake-lotus-biscoff', name: 'Lotus Biscoff', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 1200 },
  { id: 'cake-caramel-butterscotch', name: 'Caramel Butterscotch', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 1200 },
  { id: 'cake-black-forest', name: 'Black Forest', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 950 },
  { id: 'cake-chocolate', name: 'Chocolate', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 1000 },
  { id: 'cake-white-forest', name: 'White Forest', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 1050 },
  { id: 'cake-rosemilk', name: 'Rosemilk', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 1100 },
  { id: 'cake-delicious-mango', name: 'Delicious Mango', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 1100 },
  { id: 'cake-chocotruffle', name: 'Chocotruffle', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 1300 },
  { id: 'cake-red-velvet', name: 'Red Velvet', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 1200 },
  { id: 'cake-rainbow', name: 'Rainbow Cake', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 1300 },
  { id: 'cake-nutty-pistachio', name: 'Nutty Pistachio', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 1350 },
  { id: 'cake-rasmalai', name: 'Rasmalai', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 1400 },
  { id: 'cake-gulab-jamun', name: 'Gulab Jamun', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 1400 },
  { id: 'cake-kitkat-gems', name: 'KitKat Cake with Gems', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 1400 },
  { id: 'cake-crunchy-oreo', name: 'Crunchy Oreo', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 1200 },
  { id: 'cake-dark-chocolate-strawberry', name: 'Dark Chocolate Strawberry', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 1400 },
  { id: 'cake-nutella-hazelnut-chocolate', name: 'Nutella Hazelnut Chocolate', description: 'Made to order — please allow 2 days advance notice.', category: 'Cakes', veg: true, price: 1600 },
];