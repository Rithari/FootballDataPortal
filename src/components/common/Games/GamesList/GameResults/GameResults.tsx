import React from "react";
import "./style.css";

export const GameResults = (): JSX.Element => {
  return (
    <div className="game-results">
      <div className="result">
        <div className="team">
          <div className="div">
            <div className="frame" />
            <div className="text-wrapper">Argentina</div>
          </div>
          <div className="score">
            <div className="text-wrapper-2">1 - 2</div>
          </div>
          <div className="team-2">
            <div className="text-wrapper-3">Italy</div>
            <div className="frame-2" />
          </div>
        </div>
        <div className="time">
          <div className="text-wrapper-4">Full - Time</div>
        </div>
        <div className="status">
          <div className="text-wrapper-5">18 December 2022</div>
          <img className="icon" alt="Icon" src="icon.svg" />
        </div>
      </div>
      <div className="result">
        <div className="team">
          <div className="div">
            <div className="frame-3" />
            <div className="text-wrapper">Portugal</div>
          </div>
          <div className="score">
            <div className="text-wrapper-2">2 - 3</div>
          </div>
          <div className="team-2">
            <div className="text-wrapper-3">Belgium</div>
            <div className="frame-4" />
          </div>
        </div>
        <div className="time">
          <div className="text-wrapper-4">Full - Time</div>
        </div>
        <div className="status">
          <div className="text-wrapper-5">18 December 2022</div>
          <img className="icon" alt="Icon" src="image.svg" />
        </div>
      </div>
      <div className="result">
        <div className="team">
          <div className="div">
            <div className="frame-5" />
            <div className="text-wrapper">Ghana</div>
          </div>
          <div className="score">
            <div className="text-wrapper-2">1 - 3</div>
          </div>
          <div className="team-2">
            <div className="text-wrapper-3">Brazil</div>
            <div className="frame-6" />
          </div>
        </div>
        <div className="time">
          <div className="text-wrapper-4">Full - Time</div>
        </div>
        <div className="status">
          <div className="text-wrapper-6">17 December 2022</div>
          <img className="icon" alt="Icon" src="icon-2.svg" />
        </div>
      </div>
      <div className="result">
        <div className="team">
          <div className="div">
            <div className="frame-7" />
            <div className="text-wrapper">Uruguay</div>
          </div>
          <div className="score">
            <div className="text-wrapper-2">2 - 2</div>
          </div>
          <div className="team-2">
            <div className="text-wrapper-3">Poland</div>
            <div className="frame-8" />
          </div>
        </div>
        <div className="time">
          <div className="text-wrapper-4">Full - Time</div>
        </div>
        <div className="status">
          <div className="text-wrapper-6">17 December 2022</div>
          <img className="icon" alt="Icon" src="icon-3.svg" />
        </div>
      </div>
      <div className="result">
        <div className="team">
          <div className="div">
            <div className="frame-9" />
            <div className="text-wrapper">Spain</div>
          </div>
          <div className="score">
            <div className="text-wrapper-2">3 - 3</div>
          </div>
          <div className="team-2">
            <div className="text-wrapper-3">Czech</div>
            <div className="frame-10" />
          </div>
        </div>
        <div className="time">
          <div className="text-wrapper-4">Full - Time</div>
        </div>
        <div className="status">
          <div className="text-wrapper-5">16 December 2022</div>
          <img className="icon" alt="Icon" src="icon-4.svg" />
        </div>
      </div>
    </div>
  );
};
