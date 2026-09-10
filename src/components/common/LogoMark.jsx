import './LogoMark.css';

/**
 * LogoMark
 * -----------------------------------------------------------------------
 * Single source of brand-mark truth used by Navbar, mobile nav panel,
 * Hero, and Footer.
 *
 * Looks for a real logo at src/assets/logo.png (or .jpg/.jpeg/.svg/.webp)
 * via Vite's import.meta.glob. This is safe even when the file doesn't
 * exist yet — glob only picks up files that are actually there, so the
 * build never breaks waiting on a logo. Until one is added, this renders
 * a designed placeholder emblem (brass-ringed circular badge with the
 * café's initial) that already matches the "tin badge" motif described
 * in DESIGN_SYSTEM.md.
 *
 * TO ADD THE REAL LOGO: just save the file as `src/assets/logo.png`
 * (exact name). It will be picked up automatically — no code change
 * needed anywhere, including here.
 * -----------------------------------------------------------------------
 */
const logoModules = import.meta.glob('../../assets/logo.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
});
const logoImage = Object.values(logoModules)[0] ?? null;

function LogoMark({ size = 'md', showWordmark = false, className = '' }) {
  const classes = `logo-mark logo-mark--${size} ${className}`.trim();

  if (logoImage) {
    return (
      <span className={classes}>
        <img src={logoImage} alt="Tin's Delight Café" className="logo-mark__image" />
        {showWordmark && <span className="logo-mark__wordmark">Tin&rsquo;s Delight</span>}
      </span>
    );
  }

  return (
    <span className={classes}>
      <span className="logo-mark__badge" aria-hidden="true">
        <span className="logo-mark__badge-ring" />
        <span className="logo-mark__badge-letter">T</span>
      </span>
      {showWordmark && <span className="logo-mark__wordmark">Tin&rsquo;s Delight</span>}
      <span className="visually-hidden">Tin&rsquo;s Delight Café</span>
    </span>
  );
}

export default LogoMark;
