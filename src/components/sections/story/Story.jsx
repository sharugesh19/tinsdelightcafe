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
            <h3 className="story__headline">Crafted with passion, served with warmth</h3>
            <p className="story__paragraph">
              Tin&rsquo;s Delight Café started with a simple belief: great coffee and comforting food can turn any ordinary morning into a memorable moment. What began in a modest corner shop in Vadavalli has grown into a beloved destination for coffee purists and food lovers alike.
            </p>
            <p className="story__paragraph">
              Every cup of our South Indian filter coffee is hand-poured using traditional methods, while our pizzas, burgers, and artisanal desserts are prepared fresh daily using local ingredients.
            </p>

            <div className="story__highlights">
              <div className="story__highlight-item">
                <span className="story__highlight-num">100%</span>
                <span className="story__highlight-label">Fresh & Local Ingredients</span>
              </div>
              <div className="story__highlight-item">
                <span className="story__highlight-num">10+</span>
                <span className="story__highlight-label">Years of Crafting Coffee</span>
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
