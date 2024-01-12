import React from "react";
import "./style.css";

export const AboutUsStats = (): JSX.Element => {
  return (
    <div className="about-us-stats">
      <div className="content">
        <div className="column">
          <div className="subheading">Innovative</div>
          <p className="heading">
            Unparalleled Success in Football Data Visualisation
          </p>
        </div>
        <div className="column">
          <p className="text">
            Our company has achieved remarkable milestones in the field of
            football data visualisation. With our cutting-edge technology and
            comprehensive data analysis, we provide unparalleled insights into
            player performance, league statistics, and club information. Our
            platform is designed to empower football enthusiasts with the most
            accurate and up-to-date data, enabling them to make informed
            decisions and gain a competitive edge.
          </p>
        </div>
      </div>
      <div className="stats">
        <div className="stat">
          <div className="text-wrapper">30%</div>
          <div className="div">Data-driven Insights</div>
        </div>
        <div className="stat">
          <div className="text-wrapper">30%</div>
          <div className="div">User-friendly Interface</div>
        </div>
        <div className="stat">
          <div className="text-wrapper">30%</div>
          <div className="div">Real-time Updates</div>
        </div>
      </div>
    </div>
  );
};
