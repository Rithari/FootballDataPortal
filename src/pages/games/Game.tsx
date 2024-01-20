import React from "react";
import { Navbar, Footer } from "../../components/layout";
import { GameScore, GameStats } from "../../components/common/Games/Game";

function Game() {
  return (
    <div>
      <Navbar />
      <div className="page-wrapper-1">
        <GameScore />
        <GameStats />
      </div>
      <Footer />
    </div>
  );
}

export default Game;
