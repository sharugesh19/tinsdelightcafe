import { useEffect, useMemo, useState } from 'react';
import { categories, menuItems } from '../../../config/menuData';
import MenuCard from './MenuCard';
import FeaturedItems from './FeaturedItems';
import { IconSearch } from '../../common/Icons';
import { useSearch } from '../../common/SearchContext';
import './Menu.css';

const ALL = 'All';

/**
 * Menu
 * -----------------------------------------------------------------------
 * Search + category filtering over the static menuData list (unchanged
 * logic from the original implementation), now rendered as an editorial
 * menu: results are grouped under their category heading with a small
 * decorative rule, rather than one flat grid — this is what the redesign
 * brief calls "premium café menu rather than a grid of generic cards."
 * No cart/ordering logic lives here directly — that's owned by
 * CartContext and read by MenuCard.
 *
 * The search query itself lives in SearchContext (not local state) so
 * the navbar's search field and this section's own search input always
 * show/filter the same thing, whichever one the person typed into.
 * -----------------------------------------------------------------------
 */
function Menu() {
  const { query, setQuery, searchSignal } = useSearch();
  const [activeCategory, setActiveCategory] = useState(ALL);

  // A search submitted from the navbar always resets the category filter
  // to "All", so a search never appears to return zero results just
  // because a different category pill was active from earlier browsing.
  useEffect(() => {
    if (searchSignal) setActiveCategory(ALL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchSignal]);

  const tabs = useMemo(() => [ALL, ...categories], []);

  const featuredItems = useMemo(() => menuItems.filter((item) => item.featured), []);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === ALL || item.category === activeCategory;
      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;
      const haystack = `${item.name} ${item.description ?? ''}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [query, activeCategory]);

  const groupedItems = useMemo(() => {
    const groups = [];
    const byCategory = new Map();
    for (const item of filteredItems) {
      if (!byCategory.has(item.category)) {
        const group = { category: item.category, items: [] };
        byCategory.set(item.category, group);
        groups.push(group);
      }
      byCategory.get(item.category).items.push(item);
    }
    // Keep the category order defined in menuData rather than filter order.
    return groups.sort(
      (a, b) => categories.indexOf(a.category) - categories.indexOf(b.category),
    );
  }, [filteredItems]);

  return (
    <section id="menu" className="section menu">
      <div className="container menu__inner">
        <div className="section-heading">
          <p className="eyebrow">Fresh, made to order</p>
          <span className="section-heading__rule" aria-hidden="true" />
          <h2 className="section-heading__title">Our Menu</h2>
          <p className="section-heading__subtitle">
            Browse by category or search for something specific — everything below can be added
            straight to your order.
          </p>
        </div>

        <div className="menu__controls">
          <label className="menu__search" htmlFor="menu-search">
            <span className="visually-hidden">Search the menu</span>
            <IconSearch className="menu__search-icon" />
            <input
              id="menu-search"
              type="search"
              className="menu__search-input"
              placeholder="Search the menu…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>

          <div className="menu__categories" role="group" aria-label="Filter menu by category">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                aria-pressed={tab === activeCategory}
                className={`menu__category-pill ${
                  tab === activeCategory ? 'menu__category-pill--active' : ''
                }`}
                onClick={() => setActiveCategory(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeCategory === ALL && !query.trim() && <FeaturedItems items={featuredItems} />}

        {groupedItems.length > 0 ? (
          <div className="menu__groups">
            {groupedItems.map((group) => (
              <div key={group.category} className="menu__group">
                <div className="menu__group-heading">
                  <h3 className="menu__group-title">{group.category}</h3>
                  <span className="menu__group-rule" aria-hidden="true" />
                </div>
                <div className="menu__group-list">
                  {group.items.map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="menu__empty">
            No dishes match “{query}”{activeCategory !== ALL ? ` in ${activeCategory}` : ''}. Try
            a different search or category.
          </p>
        )}
      </div>
    </section>
  );
}

export default Menu;
