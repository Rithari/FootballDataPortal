import React from "react";
import "./style.css";

export const PlayerStats = (): JSX.Element => {
  return (
    <div className="player-stats">
      <div className="content">
        <div className="div">
          <div className="heading">Statistics &amp; Infos</div>
          <p className="text">
            Explore player statistics, information and performance
          </p>
        </div>
      </div>
      <img
        className="placeholder-image"
        alt="Placeholder image"
        src="placeholder-image.png"
      />
    </div>
  );
};
