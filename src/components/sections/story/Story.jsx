import './Story.css';

const storyImages = import.meta.glob(
  '../../../assets/story/*.{png,jpg,jpeg,webp,avif}',
  { eager: true, import: 'default' }
);
const storyImageList = Object.values(storyImages);

function Story() {
  const heritageImg = storyImageList[0] || null;
  const craftImg = storyImageList[1] || null;

  return (
    <section id="story" className="section story">
      <div className="container story__inner">
        <div className="section-heading">
          <p className="eyebrow">Poured since the corner shop days</p>
          <span className="section-heading__rule" aria-hidden="true" />
          <h2 className="section-heading__title">Our Story</h2>
          <p className="section-heading__subtitle">
            From humble beginnings under a tin roof to a neighbourhood favourite in Vadavalli.
          </p>
        </div>

        <div className="story__grid">
          <div className="story__content card">
                        <h3 className="story__headline">From a baking academy to a neighbourhood café</h3>
            <p className="story__paragraph">
              Before Tin&rsquo;s Delight Café opened its doors, it began life as Tin&rsquo;s
              Delight Baking Academy &mdash; teaching the craft of baking to students who shared
              a love for good food made the right way. That hands-on experience, recipe after
              recipe, became the foundation for something bigger.
            </p>
            <p className="story__paragraph">
              What started as a place to teach baking soon grew into a full café in Vadavalli,
              where that same care now goes into every cup of hand-poured South Indian filter
              coffee, every pizza, and every dessert baked fresh in-house daily.
            </p>

            <div className="story__highlights">
              <div className="story__highlight-item">
                <span className="story__highlight-num">100%</span>
                <span className="story__highlight-label">Fresh & Local Ingredients</span>
              </div>
              <div className="story__highlight-item">
                <span className="story__highlight-num">5000+</span>
                <span className="story__highlight-label">Orders Successfully Delievered</span>
              </div>
            </div>
          </div>

          <div className="story__media">
            {heritageImg && (
              <div className="story__image-wrapper story__image-wrapper--primary">
                <img
                  src={heritageImg}
                  alt="Coffee roasting and bean heritage"
                  className="story__img"
                  loading="lazy"
                />
                <span className="story__badge">Est. Vadavalli</span>
              </div>
            )}
            {craftImg && (
              <div className="story__image-wrapper story__image-wrapper--secondary">
                <img
                  src={craftImg}
                  alt="Café kitchen and artisan coffee craft"
                  className="story__img"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
