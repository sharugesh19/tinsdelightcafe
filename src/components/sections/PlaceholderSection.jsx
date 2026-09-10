import './PlaceholderSection.css';

/**
 * PlaceholderSection
 * -----------------------------------------------------------------------
 * A structural stand-in for sections owned by later phases (menu, story,
 * visit/contact). It exists so the page has a complete, scrollable,
 * anchor-linked layout today, without pre-empting the content or data
 * decisions of the developer who builds those sections for real.
 *
 * Follow the existing card/button/spacing tokens from DESIGN_SYSTEM.md
 * when replacing this component — do not introduce new colors or radii.
 * -----------------------------------------------------------------------
 */
function PlaceholderSection({ id, eyebrow, title, note, alt = false }) {
  return (
    <section
      id={id}
      className={`section placeholder-section ${alt ? 'placeholder-section--alt' : ''}`}
    >
      <div className="container placeholder-section__inner">
        {eyebrow && <p className="eyebrow placeholder-section__eyebrow">{eyebrow}</p>}
        <h2 className="placeholder-section__title">{title}</h2>
        {note && <p className="placeholder-section__note">{note}</p>}
      </div>
    </section>
  );
}

export default PlaceholderSection;
