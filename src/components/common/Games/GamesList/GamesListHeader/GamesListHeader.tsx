import React from "react";
import "./style.css";

export const GamesListHeader = (): JSX.Element => {
  return (
    <div className="player-list-header">
      <div className="content">
        <div className="short-heading-here">Latest Games</div>
        <p className="lorem-ipsum-dolor">
          Explore previous game results and statistics
        </p>
      </div>
    </div>
  );
};
