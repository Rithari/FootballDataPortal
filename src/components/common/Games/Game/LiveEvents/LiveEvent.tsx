import React from "react";
import "./style.scss";

type Player = {
  name: string;
};

type EventProps = {
  players: Player[];
  time: string;
  logoUrl: string;
  type: "home" | "away";
};

const displayPlayers = (playersArray: Player[]) =>
  playersArray.map((player, i) => (
    <div className="SSUI-LiveEvent-Text" key={i}>
      <button className="SSUI-LiveEvent-Text-Button">{player.name}</button>
    </div>
  ));

const AwayEvent: React.FC<EventProps> = ({ players, time, logoUrl }) => (
  <div className="SSUI-LiveEvent">
    <div className="SSUI-LiveEvent-Home"></div>
    <div className="SSUI-LiveEvent-Logo"></div>
    <div className="SSUI-LiveEvent-Time">
      <span>{time}</span>
    </div>
    <div className="SSUI-LiveEvent-Logo">
      <img src={logoUrl} alt="Logo" />
    </div>
    <div className="SSUI-LiveEvent-Away">{displayPlayers(players)}</div>
  </div>
);

const HomeEvent: React.FC<EventProps> = ({ players, time, logoUrl }) => (
  <div className="SSUI-LiveEvent">
    <div className="SSUI-LiveEvent-Home">{displayPlayers(players)}</div>
    <div className="SSUI-LiveEvent-Logo">
      <img src={logoUrl} alt="Logo" />
    </div>
    <div className="SSUI-LiveEvent-Time">
      <span>{time}</span>
    </div>
    <div className="SSUI-LiveEvent-Logo"></div>
    <div className="SSUI-LiveEvent-Away"></div>
  </div>
);

const LiveEvent: React.FC<EventProps> = (props) => {
  if (props.type === "home") {
    return <HomeEvent {...props} />;
  }
  if (props.type === "away") {
    return <AwayEvent {...props} />;
  }
  return null;
};

export default LiveEvent;
