/**
 * Icons.jsx
 * -----------------------------------------------------------------------
 * Shared, lightweight SVG icon set for the redesign. Centralising these
 * here (instead of scattering one-off inline <svg> per component) keeps
 * stroke weight, sizing, and viewBox conventions consistent everywhere
 * an icon appears — navbar cart glyph, contact actions, cart drawer
 * call/WhatsApp buttons, cart launcher bag, etc.
 *
 * Conventions:
 *  - 24x24 viewBox, 1.6px stroke, currentColor — so icons always inherit
 *    the surrounding text/button color and can be resized with font-size
 *    or an explicit width/height prop.
 *  - No fills except where a small dot/badge is genuinely a solid shape
 *    (e.g. the veg/non-veg dot lives in MenuCard, not here).
 * -----------------------------------------------------------------------
 */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
  focusable: 'false',
};

export function IconWhatsApp(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 17.5 5 21l3.6-1.45A8.5 8.5 0 1 0 5.2 15.9" />
      <path d="M9 9.6c0 3 2.4 5.6 5.6 5.6.5 0 .9-.3 1-.7l.4-1.2a.8.8 0 0 0-.4-.9l-1.6-.8a.8.8 0 0 0-.9.2l-.4.5c-.9-.5-1.7-1.3-2.2-2.2l.5-.4a.8.8 0 0 0 .2-.9l-.8-1.6a.8.8 0 0 0-.9-.4l-1.2.4c-.4.1-.7.5-.3 1.1Z" />
    </svg>
  );
}

export function IconPhone(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1-.3 1.1.4 2.3.6 3.5.6.6 0 1 .5 1 1V19.5c0 .6-.5 1-1 1C10.7 20.5 3.5 13.3 3.5 4.5c0-.6.4-1 1-1H8c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.3 1l-2 2Z" />
    </svg>
  );
}

export function IconPin(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function IconClock(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconBag(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 8h11l.9 11.2a1.6 1.6 0 0 1-1.6 1.8H7.2a1.6 1.6 0 0 1-1.6-1.8L6.5 8Z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </svg>
  );
}

export function IconClose(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function IconMinus(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function IconPlus(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconSearch(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.35-4.35" />
    </svg>
  );
}

export function IconChevronDown(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IconImage(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.6" />
      <path d="M20.5 15.5 15 11l-4 4-2.5-2-4.5 4.5" />
    </svg>
  );
}

export function IconArrowRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
