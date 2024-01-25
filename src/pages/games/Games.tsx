import React from "react";
import { Navbar, Footer } from "../../components/layout";
import {
  GamesListHeader,
  GameListTable,
} from "../../components/common/Games/GamesList";

import "../../assets/styles/style.css";

function Games() {
  return (
    <div>
      <Navbar />
      <div className="page-wrapper-1">
        <GamesListHeader />
        <GameListTable />
      </div>
      <Footer />
    </div>
  );
}

export default Games;
