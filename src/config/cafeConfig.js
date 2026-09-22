/**
 * cafeConfig.js
 * -----------------------------------------------------------------------
 * Site-wide, non-menu configuration for Tin's Delight Café.
 *
 * SCOPE NOTE: This file intentionally contains NO menu items, prices,
 * cart logic, or ordering data. That belongs to a later phase owned by
 * a different developer. Keep this file limited to brand/identity,
 * navigation, and hero content so it stays a stable contract that other
 * components (Navbar, Hero, Footer) can rely on without breaking when
 * menu/cart features are added later.
 * -----------------------------------------------------------------------
 */

export const cafeConfig = {
  brand: {
    name: "Tin's Delight",
    fullName: "Tin's Delight Café",
    tagline: 'Small-batch coffee & kitchen, poured since the corner shop days',
    emblemInitial: 'T',
  },

    nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Menu', href: '#menu' },
      { label: 'Customized Cakes', href: '#cakes' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Our Story', href: '#story' },
      { label: 'Visit', href: '#visit' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: { label: 'Reserve a Table', href: '#visit' },
  },

  hero: {
    eyebrow: 'Est. in a tin-roofed corner shop',
    headlineLines: ['Good Food.', 'Good Times.'],
    subheadline:
      'Freshly brewed coffee, indulgent desserts and café favourites \u2014 made for moments worth savouring.',
    locationTag: 'Vadavalli, Coimbatore',
    primaryCta: { label: 'Explore Menu', href: '#menu' },
    // secondaryCta href is resolved at render time from contact.whatsapp.dial
    // (see Hero.jsx) rather than hardcoded here, so it always matches the
    // single WhatsApp number used everywhere else on the site.
    secondaryCta: { label: 'Order on WhatsApp' },
  },

  contact: {
    address: 'RR Complex, Amman Kovil Street, Vadavalli, Coimbatore - 641041',
    hours: [
      { day: 'Tue', time: '7:30am \u2013 6:00pm' },
      { day: 'Wed', time: '7:30am \u2013 6:00pm' },
      { day: 'Thu', time: '7:30am \u2013 6:00pm' },
      { day: 'Fri', time: '7:30am \u2013 6:00pm' },
      { day: 'Sat', time: '7:30am \u2013 6:00pm' },
      { day: 'Sun', time: '7:30am \u2013 6:00pm' },
    ],
    phone: '+91 96299 36178',
    // Google Maps "search" deep link built from the address above — works
    // without an API key and opens directions/search in Maps on both
    // mobile and desktop.
    directionsUrl:
      'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent('RR Complex, Amman Kovil Street, Vadavalli, Coimbatore - 641041'),
    // Embeddable Google Maps URL (no API key required) for the <iframe>
    // on the Visit section. Built the same "no-key" way as directionsUrl
    // above, just with output=embed instead of the search deep link.
    mapEmbedUrl:
      'https://www.google.com/maps?q=' +
      encodeURIComponent('RR Complex, Amman Kovil Street, Vadavalli, Coimbatore - 641041') +
      '&output=embed',
    // Used by the ordering feature (WhatsApp order button + call-to-order
    // links). Dial numbers are digits-only with country code, as required
    // by tel:/wa.me links.
    whatsapp: {
      display: '96299 36178',
      dial: '919629936178',
    },
    phoneNumbers: [
      { display: '96299 36178', dial: '919629936178' },
      { display: '99446 85650', dial: '919944685650' },
    ],
  },
};
