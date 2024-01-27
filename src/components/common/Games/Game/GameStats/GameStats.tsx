import React from "react";
import "./style.scss";

interface Player {
  tShirtNr: string;
  name: string;
}

interface PlayerInfoProps {
  infoType: "home" | "away";
  player: Player;
  onPlayerClick: () => void;
}

interface PlayersProps {
  team: "home" | "away";
  players: Player[];
  onPlayerClick: (player: Player) => void;
}

interface Stat {
  home: string;
  away: string;
  type: string;
}

interface StatInfoProps {
  data: Stat;
}

interface PossessionData {
  home: string;
  away: string;
}

interface PossesionProps {
  fieldTextureUrl: string;
  possesionData: PossessionData;
}

interface StatsProps {
  stats: Stat[];
  fieldTextureUrl: string;
  possesionData: PossessionData;
}

interface GameStatsProps {
  homePlayers: Player[];
  awayPlayers: Player[];
  stats: Stat[];
  fieldTextureUrl: string;
  possesionData: PossessionData;
  onPlayerClick: (player: Player) => void;
}

const Possesion: React.FC<PossesionProps> = ({
  fieldTextureUrl,
  possesionData,
}) => {
  let fieldTextureTypeParts = fieldTextureUrl.split(".");
  let fieldTextureType =
    fieldTextureTypeParts[fieldTextureTypeParts.length - 1].toLowerCase();
  let homeWidth = parseInt(possesionData.home);
  let awayWidth = parseInt(possesionData.away);

  if (homeWidth + awayWidth === 0) {
    homeWidth = 1150;
  } else {
    homeWidth = (homeWidth / (homeWidth + awayWidth)) * 1150;
  }

  let textureComponent = null;
  if (fieldTextureType) {
    if (fieldTextureType === "svg") {
      textureComponent = (
        <object
          data={fieldTextureUrl}
          type="image/svg+xml"
          style={{
            width: "100%",
            height: "auto",
            boxShadow: "0 10px 20px 2px rgba(0, 0, 0, 0.5)",
          }}
        ></object>
      );
    } else {
      textureComponent = (
        <img
          src={fieldTextureUrl}
          style={{
            width: "100%",
            height: "auto",
            boxShadow: "0 10px 20px 2px rgba(0, 0, 0, 0.5)",
          }}
        ></img>
      );
    }
  }

  return (
    <div
      style={{
        position: "relative",
        transform: "perspective(1200px) rotateX(45deg)",
      }}
    >
      {textureComponent}
      <svg viewBox="0 0 1150 720" style={{ position: "absolute", left: 0 }}>
        <rect
          x="0"
          y="0"
          width={homeWidth}
          height="720"
          fill="rgba(55, 255, 55, 0.25)"
        ></rect>
        <text
          x="350"
          y="150"
          fontSize="100"
          fill="white"
          style={{ textShadow: "0 0 10px black" }}
        >
          Possesion
        </text>
        <text x="150" y="450" fontSize="100" fill="white">
          {possesionData.home}
        </text>
        <text x="750" y="450" fontSize="100" fill="white">
          {possesionData.away}
        </text>
      </svg>
    </div>
  );
};

const PlayerInfo: React.FC<PlayerInfoProps> = ({
  infoType,
  player,
  onPlayerClick,
}) => {
  if (infoType === "home") {
    return (
      <div className="SSUI-GameStats-Player">
        <div className="SSUI-GameStats-TShirtNr">{player.tShirtNr}</div>
        <div className="SSUI-GameStats-PlayerName text-left">
          <button
            className="SSUI-GameStats-Text-Button"
            onClick={onPlayerClick}
          >
            {player.name}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="SSUI-GameStats-Player">
      <div className="SSUI-GameStats-PlayerName text-right">
        <button className="SSUI-GameStats-Text-Button" onClick={onPlayerClick}>
          {player.name}
        </button>
      </div>
      <div className="SSUI-GameStats-TShirtNr">{player.tShirtNr}</div>
    </div>
  );
};

const Players: React.FC<PlayersProps> = ({ team, players, onPlayerClick }) => (
  <div className="SSUI-GameStats-Zone bigger">
    {players.map((player, i) => (
      <PlayerInfo
        infoType={team}
        player={player}
        onPlayerClick={() => onPlayerClick(player)}
        key={i}
      />
    ))}
  </div>
);

const StatInfo: React.FC<StatInfoProps> = ({ data }) => (
  <div className="SSUI-GameStats-Stats">
    <div className="SSUI-GameStats-Stats-Number">{data.home}</div>
    <div className="SSUI-GameStats-Stats-Type">{data.type}</div>
    <div className="SSUI-GameStats-Stats-Number">{data.away}</div>
  </div>
);

const Stats: React.FC<StatsProps> = ({
  stats,
  fieldTextureUrl,
  possesionData,
}) => (
  <div className="SSUI-GameStats-Zone">
    {stats.map((stat, i) => (
      <StatInfo data={stat} key={i} />
    ))}
    <Possesion
      fieldTextureUrl={fieldTextureUrl}
      possesionData={possesionData}
    />
  </div>
);

export const GameStats: React.FC<GameStatsProps> = ({
  homePlayers,
  awayPlayers,
  stats,
  fieldTextureUrl,
  possesionData,
  onPlayerClick,
}) => (
  <div className="SSUI-GameStats">
    <Players team="home" players={homePlayers} onPlayerClick={onPlayerClick} />
    <Stats
      stats={stats}
      fieldTextureUrl={fieldTextureUrl}
      possesionData={possesionData}
    />
    <Players team="away" players={awayPlayers} onPlayerClick={onPlayerClick} />
  </div>
);
