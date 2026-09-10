import { useEffect, useMemo, useRef, useState } from 'react';
import { cafeConfig } from '../../config/cafeConfig';
import { menuItems } from '../../config/menuData';
import { useCart } from '../sections/ordering/CartContext';
import { useSearch } from '../common/SearchContext';
import LogoMark from '../common/LogoMark';
import { IconBag, IconSearch, IconClose } from '../common/Icons';
import './Navbar.css';

const MAX_SUGGESTIONS = 5;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { brand, nav } = cafeConfig;
  const { itemCount, openCart } = useCart();
  const { query, setQuery, triggerSearch } = useSearch();
  const searchInputRef = useRef(null);

  const handleLinkClick = () => setIsOpen(false);

  const handleSearchToggle = () => {
    setIsOpen(false);
    setIsSearchOpen((prev) => !prev);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    triggerSearch();
    setIsSearchOpen(false);
  };

  // Live "as you type" suggestions for the navbar search field. The Menu
  // section already filters live off the same shared query, but it's
  // below the fold, so typing here felt like nothing was happening —
  // this small dropdown gives instant, visible feedback while typing,
  // before the person even submits/scrolls down to Menu.
  const suggestions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return [];
    return menuItems
      .filter((item) =>
        `${item.name} ${item.description ?? ''}`.toLowerCase().includes(normalizedQuery),
      )
      .slice(0, MAX_SUGGESTIONS);
  }, [query]);

  const showSuggestions = isSearchOpen && query.trim().length > 0;

  const handleSuggestionClick = (name) => {
    triggerSearch(name);
    setIsSearchOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Move focus into the search field the moment the bar opens, and close
  // it again on Escape — small touches that matter a lot on mobile where
  // there's no visible cursor to guide the eye.
  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isSearchOpen) setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  return (
    <header
      className={`navbar ${isOpen ? 'navbar--open' : ''} ${isScrolled ? 'navbar--scrolled' : ''}`}
    >
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={handleLinkClick}>
          <LogoMark size="sm" />
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">{brand.name}</span>
            <span className="navbar__brand-sub">Café &amp; Kitchen</span>
          </span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href={nav.cta.href} className="btn btn--primary navbar__cta">
            {nav.cta.label}
          </a>

          <button
            type="button"
            className={`navbar__search-toggle ${isSearchOpen ? 'navbar__search-toggle--active' : ''}`}
            onClick={handleSearchToggle}
            aria-expanded={isSearchOpen}
            aria-controls="navbar-search-bar"
            aria-label={isSearchOpen ? 'Close search' : 'Search the menu'}
          >
            {isSearchOpen ? (
              <IconClose className="navbar__search-toggle-icon" />
            ) : (
              <IconSearch className="navbar__search-toggle-icon" />
            )}
          </button>

          <button
            type="button"
            className="navbar__cart"
            onClick={openCart}
            aria-label={`Open cart${itemCount > 0 ? `, ${itemCount} item${itemCount !== 1 ? 's' : ''}` : ''}`}
          >
            <IconBag className="navbar__cart-icon" />
            {itemCount > 0 && (
              <span className="navbar__cart-count" aria-hidden="true">
                {itemCount}
              </span>
            )}
          </button>

          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={isOpen}
            aria-controls="navbar-mobile-panel"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => {
              setIsSearchOpen(false);
              setIsOpen((prev) => !prev);
            }}
          >
            <span className="navbar__toggle-bars">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {/* Search bar: a full-width dropdown (same open/close mechanics as
          the mobile nav panel below) so it works identically on phones
          and desktop instead of needing separate inline/overlay variants
          per breakpoint. Typing here updates the same SearchContext
          query the Menu section's own search input reads from. */}
      <div className="navbar__search-bar" id="navbar-search-bar" inert={!isSearchOpen}>
        <div className="navbar__search-bar-inner">
          <form className="container navbar__search-form" onSubmit={handleSearchSubmit}>
            <label className="navbar__search-field" htmlFor="navbar-search-input">
              <IconSearch className="navbar__search-field-icon" />
              <input
                ref={searchInputRef}
                id="navbar-search-input"
                type="search"
                className="navbar__search-field-input"
                placeholder="Search the menu — e.g. paneer, cold coffee, pizza…"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                autoComplete="off"
                role="combobox"
                aria-expanded={showSuggestions}
                aria-controls="navbar-search-suggestions"
              />
            </label>
            <button type="submit" className="btn btn--primary navbar__search-submit">
              View results
            </button>
          </form>

          {showSuggestions && (
            <div className="container navbar__search-suggestions-wrap">
              <ul
                id="navbar-search-suggestions"
                className="navbar__search-suggestions"
                role="listbox"
              >
                {suggestions.length > 0 ? (
                  suggestions.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        className="navbar__search-suggestion"
                        role="option"
                        onClick={() => handleSuggestionClick(item.name)}
                      >
                        <span className="navbar__search-suggestion-name">{item.name}</span>
                        <span className="navbar__search-suggestion-category">
                          {item.category}
                        </span>
                      </button>
                    </li>
                  ))
                ) : (
                  <li className="navbar__search-suggestion navbar__search-suggestion--empty">
                    No dishes match “{query}” — press Enter to search anyway.
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="navbar__mobile-panel" id="navbar-mobile-panel" inert={!isOpen}>
        <div className="navbar__mobile-panel-inner">
          <nav className="container navbar__mobile-links" aria-label="Mobile">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="navbar__mobile-link"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
            <a
              href={nav.cta.href}
              className="btn btn--primary navbar__mobile-cta"
              onClick={handleLinkClick}
            >
              {nav.cta.label}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
