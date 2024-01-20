import React from "react";
import "./style.css";

export const PlayerInfoHeader = (): JSX.Element => {
  return (
    <div className="player-info-header">
      <div className="content">
        <div className="user" />
        <div className="div">
          <div className="column">
            <div className="heading">Full Name</div>
            <div className="text">€ 40.00m Valuation</div>
          </div>
          <div className="list">
            <div className="content-2">
              <div className="list-item">
                <p className="text-wrapper">Date of birth / Age</p>
                <div className="text-2">Aug 17, 1993</div>
              </div>
              <div className="list-item">
                <div className="text-wrapper">Height</div>
                <div className="text-2">1,88 m</div>
              </div>
            </div>
            <div className="content-2">
              <div className="list-item">
                <div className="text-wrapper">Place of birth</div>
                <div className="text-2">Osasco (SP)</div>
              </div>
              <div className="list-item">
                <div className="text-wrapper">Position</div>
                <div className="text-2">Goalkeeper</div>
              </div>
            </div>
            <div className="content-2">
              <div className="list-item-2">
                <div className="text-wrapper">Citizenship</div>
                <div className="text-2">Brazil</div>
              </div>
              <div className="list-item-2">
                <div className="text-wrapper">Agent</div>
                <div className="text-3">Gestifute</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
