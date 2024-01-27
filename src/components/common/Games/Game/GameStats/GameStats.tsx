import React from "react";
import "./style.css";

export const GameStats = (): JSX.Element => {
  return (
    <div className="player-list-stats">
      <div className="section-title">
        <div className="heading">Statistics</div>
        <p className="text">Explore club statistics and performance visually</p>
      </div>
      <div className="content">
        <img
          className="placeholder-image"
          alt="Placeholder image"
          src="placeholder-image-1.png"
        />
        <div className="div">
          <img
            className="img"
            alt="Placeholder image"
            src="placeholder-image-2.png"
          />
          <img
            className="img"
            alt="Placeholder image"
            src="placeholder-image-3.png"
          />
        </div>
      </div>
    </div>
  );
};
