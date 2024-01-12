import React from "react";
import { Navbar, Footer } from "../components/layout";
import {
  AboutUsHeader,
  AboutUsOrigin,
  AboutUsStats,
  AboutUsPassionHeader,
  AboutUsTeamGrid,
} from "../components/common/AboutUs/";
import "../assets/styles/style.css";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="page-wrapper-1">
        <AboutUsHeader />
        <AboutUsOrigin />
        <AboutUsStats />
        <AboutUsPassionHeader />
        <AboutUsTeamGrid />
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
