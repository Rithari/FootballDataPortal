import React from "react";
import "./style.css";

const scrollToDiv = () => {
  const element = document.querySelector(".newsletter-CTA");
  element?.scrollIntoView({ behavior: "smooth" });
};

export const HomepageHeader: React.FC = () => {
  return (
    <div className="homepage-header">
      <div className="column">
        <div className="content">
          <p className="medium-length-hero">
            Experience the thrill of live football
          </p>
          <p className="lorem-ipsum-dolor">
            Stay updated with real-time scores and latest headlines
          </p>
        </div>
        <div className="actions">
          <div className="style-primary-small">
            <button onClick={scrollToDiv} className="button">
              Explore
            </button>
          </div>
        </div>
      </div>
      <img
        className="placeholder-image"
        alt="Placeholder"
        src="/media/homepage-header.png"
      />
    </div>
  );
};
