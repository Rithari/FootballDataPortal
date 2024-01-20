import React from "react";
import { Navbar, Footer } from "../../components/layout";
import {
  CompetitionsListHeader,
  CompetitionsListTable,
} from "../../components/common/Competitions/CompetitionsList";
import "../../assets/styles/style.css";

function Competitions() {
  return (
    <div>
      <Navbar />
      <div className="page-wrapper-1">
        <CompetitionsListHeader />
        <CompetitionsListTable />
      </div>
      <Footer />
    </div>
  );
}

export default Competitions;
