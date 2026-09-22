import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Story from './components/sections/story/Story';
import Menu from './components/sections/menu/Menu';
import Cakes from './components/sections/cakes/Cakes';
import Gallery from './components/sections/gallery/Gallery';
import Visit from './components/sections/visit/Visit';
import Contact from './components/sections/contact/Contact';
import { CartProvider } from './components/sections/ordering/CartContext';
import { SearchProvider } from './components/common/SearchContext';
import CartDrawer from './components/sections/ordering/CartDrawer';
import CartLauncher from './components/sections/ordering/CartLauncher';
import LoadingScreen from './components/common/LoadingScreen';

/**
 * App
 * -----------------------------------------------------------------------
 * Page shell. Foundation phase owns Navbar + Hero. The Menu section (and
 * its cart/ordering feature) is implemented under components/sections/menu
 * and components/sections/ordering. Cakes (components/sections/cakes) is
 * the separate customized-cakes tab — made-to-order cakes with a 2-day
 * advance notice, ordered individually via WhatsApp (no cart). Gallery
 * (components/sections/gallery) is a photo grid that auto-picks up
 * whatever images are dropped into src/assets/gallery. Visit (address +
 * embedded map) and Contact (hours, phone, WhatsApp) are two separate
 * sections under components/sections/visit and components/sections/
 * contact respectively — this file just assembles it all into the page.
 * Story remains a structural placeholder for a later phase (see
 * PlaceholderSection.jsx). LoadingScreen shows a logo + circular loader
 * on first load and fades out once the page (and its assets) are ready —
 * see components/common/LoadingScreen.jsx.
 * -----------------------------------------------------------------------
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <CartProvider>
      <SearchProvider>
        {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          <Hero />
          <Menu />
          <Cakes />
          <Gallery />
          <Story />
          <Visit />
          <Contact />
        </main>
        <Footer />
        <CartDrawer />
        <CartLauncher />
      </SearchProvider>
    </CartProvider>
  );
}

export default App;