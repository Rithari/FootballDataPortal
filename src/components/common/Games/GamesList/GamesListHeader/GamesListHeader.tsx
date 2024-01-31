import "./style.css";

export const GamesListHeader = (): JSX.Element => {
  return (
    <div className="player-list-header">
      <div className="content">
        <div className="short-heading-here">Games</div>
        <p className="lorem-ipsum-dolor">
          Explore our games with results and statistics
        </p>
      </div>
    </div>
  );
};
