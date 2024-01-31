import "./style.css";

export const FeaturedArticles = (): JSX.Element => {
  return (
    <div className="featured-articles">
      <div className="section-title">
        <div className="content">
          <p className="heading">Stay Updated with Our Blog</p>
          <p className="text">
            Read the latest blog posts for insights and updates.
          </p>
        </div>
      </div>
      <div className="blog-hero">
        <div className="text-wrapper">Featured Blog Posts</div>
        <div className="div">
          <div className="card">
            <img
              className="placeholder-image"
              alt="Placeholder image"
              src="/media/placeholder-featured.png"
            />
            <div className="content-2">
              <div className="title">
                <p className="p">The Power of Teamwork in Sports</p>
                <p className="text-4">
                  Discover how teamwork can lead to success in sports.
                </p>
              </div>
            </div>
            <div className="style-link-small">
              <button className="button">Read</button>
              <img
                className="icon-chevron-right"
                alt="Icon chevron right"
                src="/media/chevron-right.svg"
              />
            </div>
          </div>
          <div className="blogs">
            <div className="card-2">
              <img
                className="img"
                alt="Placeholder image"
                src="/media/placeholder-featured-small.png"
              />
              <div className="content-3">
                <div className="content-2">
                  <p className="heading-2">
                    The Importance of Nutrition for Athletes
                  </p>
                </div>
                <div className="style-link-small">
                  <button className="button">Read</button>
                  <img
                    className="icon-chevron-right"
                    alt="Icon chevron right"
                    src="/media/chevron-right.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card-2">
              <img
                className="img"
                alt="Placeholder image"
                src="/media/placeholder-featured-small.png"
              />
              <div className="content-3">
                <div className="content-2">
                  <p className="heading-2">How to Improve Your Soccer Skills</p>
                </div>
                <div className="style-link-small">
                  <button className="button">Read</button>
                  <img
                    className="icon-chevron-right"
                    alt="Icon chevron right"
                    src="/media/chevron-right.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card-2">
              <img
                className="img"
                alt="Placeholder image"
                src="/media/placeholder-featured-small.png"
              />
              <div className="content-3">
                <div className="content-2">
                  <p className="heading-2">The Benefits of Yoga for Athletes</p>
                </div>
                <div className="style-link-small">
                  <button className="button">Read</button>
                  <img
                    className="icon-chevron-right"
                    alt="Icon chevron right"
                    src="/media/chevron-right.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
