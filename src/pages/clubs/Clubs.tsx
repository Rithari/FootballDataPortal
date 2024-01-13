import React from "react";
import { Navbar, Footer } from "../../components/layout";
import {
  ClubListHeader,
  ClubListStats,
  ClubListTable,
} from "../../components/common/Clubs/ClubList";

import "../../assets/styles/style.css";

function Clubs() {
  return (
    <div>
      <Navbar />
      <div className="page-wrapper-1">
        <ClubListHeader />
        <ClubListTable />
        <ClubListStats />
      </div>
      <Footer />
    </div>
  );
}

export default Clubs;
