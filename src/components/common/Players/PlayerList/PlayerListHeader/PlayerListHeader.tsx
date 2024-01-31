import "./style.css";

export const PlayerListHeader = (): JSX.Element => {
  return (
    <div className="player-list-header">
      <div className="content">
        <div className="short-heading-here">Explore Players</div>
        <p className="lorem-ipsum-dolor">
          Discover the profiles and statistics of your favorite football
          players.
        </p>
      </div>
    </div>
  );
};
