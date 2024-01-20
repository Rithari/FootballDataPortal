import React from "react";
import "./style.css";

export const GameStats = (): JSX.Element => {
  return (
    <div className="player-stats">
      <div className="content">
        <div className="div">
          <div className="heading">Statistical Graphs</div>
          <p className="text">
            Explore detailed graphs and statistics for games
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
