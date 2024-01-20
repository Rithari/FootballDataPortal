import React from "react";
import { Navbar, Footer } from "../../components/layout";
import {
  CompetitionInfoHeader,
  CompetitionClubsTable,
  CompetitionStats,
} from "../../components/common/Competitions/Competition";
import "../../assets/styles/style.css";

function Competition() {
  return (
    <div>
      <Navbar />
      <div className="page-wrapper-1">
        <CompetitionInfoHeader />
        <CompetitionClubsTable />
        <CompetitionStats />
      </div>
      <Footer />
    </div>
  );
}

export default Competition;
