import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import PlaceholderSection from './components/sections/PlaceholderSection';
import Menu from './components/sections/menu/Menu';
import Gallery from './components/sections/gallery/Gallery';
import Visit from './components/sections/visit/Visit';
import Contact from './components/sections/contact/Contact';
import { CartProvider } from './components/sections/ordering/CartContext';
import { SearchProvider } from './components/common/SearchContext';
import CartDrawer from './components/sections/ordering/CartDrawer';
import CartLauncher from './components/sections/ordering/CartLauncher';

/**
 * App
 * -----------------------------------------------------------------------
 * Page shell. Foundation phase owns Navbar + Hero. The Menu section (and
 * its cart/ordering feature) is implemented under components/sections/menu
 * and components/sections/ordering. Gallery (components/sections/gallery)
 * is a photo grid that auto-picks up whatever images are dropped into
 * src/assets/gallery. Visit (address + embedded map) and Contact (hours,
 * phone, WhatsApp) are two separate sections under components/sections/
 * visit and components/sections/contact respectively — this file just
 * assembles it all into the page. Story remains a structural placeholder
 * for a later phase (see PlaceholderSection.jsx).
 * -----------------------------------------------------------------------
 */
function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          <Hero />
          <Menu />
          <Gallery />
          <PlaceholderSection
            id="story"
            eyebrow="Coming up next"
            title="Our Story"
            note="Reserved for the café's story and photography."
            alt
          />
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
