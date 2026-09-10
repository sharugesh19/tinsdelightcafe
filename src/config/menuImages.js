/**
 * menuImages.js
 * -----------------------------------------------------------------------
 * Looks up a photo for a given menu item id. Photos live in
 * src/assets/menu and are matched to an item purely by filename: an
 * image named `pizza-margherita.jpg` will be used for the menu item
 * whose `id` is `'pizza-margherita'` in menuData.js.
 *
 * Uses Vite's import.meta.glob so this never breaks the build even when
 * a photo hasn't been added yet — glob only picks up files that
 * actually exist. Until a photo is added, MenuCard/FeaturedItems show a
 * neat placeholder graphic instead (see the README in src/assets/menu).
 * -----------------------------------------------------------------------
 */
const menuImageModules = import.meta.glob('../assets/menu/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
});

const menuImageMap = {};
for (const path in menuImageModules) {
  const filename = path.split('/').pop() ?? '';
  const id = filename.replace(/\.[^./]+$/, '');
  menuImageMap[id] = menuImageModules[path];
}

export function getMenuImage(itemId) {
  return menuImageMap[itemId] ?? null;
}
