import "./style.css";

export const ClubStats = (): JSX.Element => {
  return (
    <div className="player-stats">
      <div className="content">
        <div className="div">
          <div className="heading">Statistics</div>
          <p className="text">
            Explore detailed graphs and statistics for clubs
          </p>
        </div>
      </div>
      <img
        className="placeholder-image"
        alt="Placeholder image"
        src="placeholder-image.png"
      />
    </div>
  );
};
