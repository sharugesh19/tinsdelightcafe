import { createContext, useCallback, useContext, useMemo, useState } from 'react';

/**
 * SearchContext
 * -----------------------------------------------------------------------
 * Small shared bit of state so the navbar search field and the Menu
 * section's own search input read/write the *same* query — typing in
 * one updates the other. `triggerSearch()` also bumps `searchSignal`,
 * which Menu.jsx listens for so a navbar search always resets any active
 * category filter and jumps the page down to the Menu section.
 * -----------------------------------------------------------------------
 */

const SearchContext = createContext(null);

export function SearchProvider({ children }) {
  const [query, setQuery] = useState('');
  const [searchSignal, setSearchSignal] = useState(0);

  const triggerSearch = useCallback((value) => {
    if (value !== undefined) setQuery(value);
    setSearchSignal((n) => n + 1);
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const value = useMemo(
    () => ({ query, setQuery, searchSignal, triggerSearch }),
    [query, searchSignal, triggerSearch],
  );

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return ctx;
}
