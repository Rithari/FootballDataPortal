import React from "react";
import { Navbar, Footer } from "../../components/layout";
import {
  ClubInfoHeader,
  ClubGamesStats,
  ClubStats,
} from "../../components/common/Clubs/Club";

import "../../assets/styles/style.css";

function Club() {
  return (
    <div>
      <Navbar />
      <div className="page-wrapper-1">
        <ClubInfoHeader />
        <ClubGamesStats />
        <ClubStats />
      </div>
      <Footer />
    </div>
  );
}

export default Club;
