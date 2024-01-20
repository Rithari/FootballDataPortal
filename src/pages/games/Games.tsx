import React from "react";
import { Navbar, Footer } from "../../components/layout";
import {
  GamesListHeader,
  GameResults,
} from "../../components/common/Games/GamesList";

import "../../assets/styles/style.css";

function Games() {
  return (
    <div>
      <Navbar />
      <div className="page-wrapper-1">
        <GamesListHeader />
        <GameResults />
      </div>
      <Footer />
    </div>
  );
}

export default Games;
