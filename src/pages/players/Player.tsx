import React from "react";
import { Navbar, Footer } from "../../components/layout";
import {
  PlayerInfoHeader,
  PlayerStats,
} from "../../components/common/Players/Player";

import "../../assets/styles/style.css";

function Player() {
  return (
    <div>
      <Navbar />
      <div className="page-wrapper-1">
        <PlayerInfoHeader />
        <PlayerStats />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
