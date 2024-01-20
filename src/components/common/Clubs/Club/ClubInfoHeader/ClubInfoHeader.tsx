import React from "react";
import "./style.css";

export const ClubInfoHeader = (): JSX.Element => {
  return (
    <div className="club-info-header">
      <div className="content">
        <div className="user" />
        <div className="div">
          <div className="column">
            <div className="heading">Club Name</div>
            <p className="text">€ 1.29bn Total Market Value</p>
          </div>
          <div className="list">
            <div className="content-2">
              <div className="list-item">
                <div className="text-wrapper">Squad size</div>
                <div className="text-2">24</div>
              </div>
              <div className="list-item">
                <div className="text-wrapper">National team players</div>
                <div className="text-2">21</div>
              </div>
            </div>
            <div className="content-2">
              <div className="list-item-2">
                <div className="text-wrapper">Average age</div>
                <div className="text-2">27.3</div>
              </div>
              <div className="list-item-2">
                <div className="text-wrapper">Stadium</div>
                <div className="text-3">Etihad Stadium 55017 Seats</div>
              </div>
            </div>
            <div className="content-2">
              <div className="list-item-2">
                <div className="text-wrapper">Foreigners</div>
                <div className="text-2">17 (70.8%)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
