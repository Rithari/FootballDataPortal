import React from "react";
import "./style.css";

export const GameScore = (): JSX.Element => {
  return (
    <div className="game-score">
      <div className="score">
        <div className="country">
          <div className="div">
            <div className="frame" />
            <div className="text-wrapper">Portugal</div>
          </div>
          <div className="score-2">
            <div className="text-wrapper-2">2</div>
            <div className="text-wrapper-3">FT</div>
            <div className="text-wrapper-4">3</div>
          </div>
          <div className="div">
            <div className="text-wrapper-5">Belgium</div>
            <div className="frame-2" />
          </div>
        </div>
        <div className="goal-socre">
          <div className="goal-score">
            <div className="text-wrapper-6">C. Ronaldo 15’</div>
            <div className="text-wrapper-6">C. Ronaldo 68’</div>
          </div>
          <div className="goal-score">
            <div className="text-wrapper-7">R. Lukaku 42’</div>
            <div className="text-wrapper-7">E. Hazard 58’</div>
            <div className="text-wrapper-8">E. Hazard 90 ’+3</div>
          </div>
        </div>
      </div>
      <div className="text-wrapper-9">Lusail Stadium</div>
    </div>
  );
};
