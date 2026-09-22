/**
 * cakesData.js
 * -----------------------------------------------------------------------
 * Customized cake price list for Tin's Delight Café. These are separate
 * from the regular menuData.js items — cakes are made to order and need
 * at least 2 days' advance notice (see Cakes.jsx for the notice banner
 * and per-cake WhatsApp ordering flow).
 *
 * PHOTOS: drop real cake photos into src/assets/cakes named to match
 * each `id` (e.g. `cake-red-velvet.jpg` for id `cake-red-velvet`) and
 * wire them up the same way menuImages.js does for the regular menu.
 * Until then, CakeCard shows a placeholder.
 * -----------------------------------------------------------------------
 */

export const cakes = [
  { id: 'cake-fresh-vanilla', name: 'Fresh Vanilla', price: 850 },
  { id: 'cake-fresh-strawberry', name: 'Fresh Strawberry', price: 950 },
  { id: 'cake-blueberry', name: 'Blueberry', price: 1000 },
  { id: 'cake-raspberry', name: 'Raspberry', price: 1000 },
  { id: 'cake-fresh-pineapple', name: 'Fresh Pineapple', price: 1000 },
  { id: 'cake-lotus-biscoff', name: 'Lotus Biscoff', price: 1200 },
  { id: 'cake-caramel-butterscotch', name: 'Caramel Butterscotch', price: 1200 },
  { id: 'cake-black-forest', name: 'Black Forest', price: 950 },
  { id: 'cake-chocolate', name: 'Chocolate', price: 1000 },
  { id: 'cake-white-forest', name: 'White Forest', price: 1050 },
  { id: 'cake-rosemilk', name: 'Rosemilk', price: 1100 },
  { id: 'cake-delicious-mango', name: 'Delicious Mango', price: 1100 },
  { id: 'cake-chocotruffle', name: 'Chocotruffle', price: 1300 },
  { id: 'cake-red-velvet', name: 'Red Velvet', price: 1200 },
  { id: 'cake-rainbow', name: 'Rainbow Cake', price: 1300 },
  { id: 'cake-nutty-pistachio', name: 'Nutty Pistachio', price: 1350 },
  { id: 'cake-rasmalai', name: 'Rasmalai', price: 1400 },
  { id: 'cake-gulab-jamun', name: 'Gulab Jamun', price: 1400 },
  { id: 'cake-kitkat-gems', name: 'KitKat Cake with Gems', price: 1400 },
  { id: 'cake-crunchy-oreo', name: 'Crunchy Oreo', price: 1200 },
  { id: 'cake-dark-chocolate-strawberry', name: 'Dark Chocolate Strawberry', price: 1400 },
  { id: 'cake-nutella-hazelnut-chocolate', name: 'Nutella Hazelnut Chocolate', price: 1600 },
];