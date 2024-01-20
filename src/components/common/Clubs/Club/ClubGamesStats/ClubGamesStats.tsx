import React from "react";
import "./style.css";

export const ClubGamesStats = (): JSX.Element => {
  return (
    <div className="club-games-stats">
      <div className="content">
        <div className="section-title-wrapper">
          <div className="section-title">
            <div className="subheading">Explore</div>
            <div className="div">
              <p className="heading">Recent Game Statistics for Clubs</p>
              <p className="text">
                Get insights into the performance of clubs in their recent
                games. Analyze key statistics and make informed decisions.
              </p>
            </div>
          </div>
        </div>
        <div className="stats">
          <div className="row">
            <div className="stat">
              <div className="text-wrapper">50%</div>
              <div className="text-2">Goals Scored</div>
            </div>
            <div className="stat">
              <div className="text-wrapper">50%</div>
              <div className="text-2">Possession Rate</div>
            </div>
          </div>
          <div className="row">
            <div className="stat">
              <div className="text-wrapper">50%</div>
              <div className="text-2">Shots on Target</div>
            </div>
            <div className="stat">
              <div className="text-wrapper">50%</div>
              <div className="text-2">Pass Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
