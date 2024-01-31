import "./style.css";

export const AboutUsHeader = (): JSX.Element => {
  return (
    <div className="about-us-header">
      <div className="container">
        <div className="section-title">
          <div className="tagline">Innovative</div>
          <div className="content">
            <div className="heading">Revolutionizing Football Data</div>
            <p className="subtitle">
              Our mission is to provide football enthusiasts with comprehensive
              and visually appealing data insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
