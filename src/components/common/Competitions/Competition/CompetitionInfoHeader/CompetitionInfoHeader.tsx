import React from "react";
import "./style.css";

export const CompetitionInfoHeader = (): JSX.Element => {
  return (
    <div className="league-info-header">
      <div className="content">
        <div className="user" />
        <div className="div">
          <div className="column">
            <div className="heading">League Name</div>
            <p className="text">€ 1.29bn Total Market Value</p>
          </div>
          <div className="list">
            <div className="content-2">
              <div className="list-item">
                <div className="text-wrapper">Teams</div>
                <div className="text-2">20 teams</div>
              </div>
              <div className="list-item">
                <div className="text-wrapper">ø-Market value</div>
                <div className="text-2">£ 19.29m</div>
              </div>
            </div>
            <div className="content-2">
              <div className="list-item-2">
                <div className="text-wrapper">Players</div>
                <div className="text-2">568</div>
              </div>
              <div className="list-item-2">
                <div className="text-wrapper">ø-Age</div>
                <div className="text-3">26.5</div>
              </div>
            </div>
            <div className="content-2">
              <div className="list-item-2">
                <div className="text-wrapper">Foreigners</div>
                <div className="text-2">387 (68.1 %)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
