import React, { useState, FC } from "react";
import "./style.scss";

type Team = {
  logoUrl: string;
  name: string;
};

type MatchData = {
  score: string;
  time: string;
};

type LiveEventsProps = {
  homeTeam: Team;
  awayTeam: Team;
  matchData: MatchData | null;
  children?: React.ReactNode;
};

const LiveEvents: FC<LiveEventsProps> = ({
  homeTeam,
  awayTeam,
  matchData,
  children,
}) => {
  const [expanded, setExpanded] = useState(true);

  const handleCollapseExpand = () => {
    setExpanded(!expanded);
  };

  let eventList = null;
  let stateButtonLabel = "+";

  if (expanded) {
    stateButtonLabel = "-";
    eventList = <div className="SSUI-LiveEvents-List">{children}</div>;
  }

  return (
    <div className="SSUI-LiveEvents">
      <div className="SSUI-LiveEvents-Header">
        <div className="SSUI-LiveEvents-Header-Home">
          <div className="SSUI-LiveEvents-Header-Logo">
            <img src={homeTeam.logoUrl} alt={`${homeTeam.name} Logo`} />
          </div>
          <div className="SSUI-LiveEvents-Header-Text">
            <span>{homeTeam.name}</span>
          </div>
        </div>
        <div className="SSUI-LiveEvents-Header-Data">
          <div className="SSUI-LiveEvents-Header-Data-Score">
            {matchData?.score}
          </div>
          <div className="SSUI-LiveEvents-Header-Data-Time">
            {matchData?.time}
          </div>
        </div>
        <div className="SSUI-LiveEvents-Header-Away">
          <div className="SSUI-LiveEvents-Header-Logo">
            <img src={awayTeam.logoUrl} alt={`${awayTeam.name} Logo`} />
          </div>
          <div className="SSUI-LiveEvents-Header-Text">
            <span>{awayTeam.name}</span>
          </div>
        </div>
        <button
          className="SSUI-LiveEvents-List-ExpandCollapse"
          onClick={handleCollapseExpand}
        >
          {stateButtonLabel}
        </button>
      </div>
      {eventList}
    </div>
  );
};

export default LiveEvents;
