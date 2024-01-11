import React from "react";
import { Navbar, Footer } from "../components/layout";
import {
  HomepageHeader,
  LiveChatCTA,
  LatestNewsCard,
  NewsletterCTA,
} from "../components/common/HomePage";
import "../assets/styles/style.css";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="homepage">
        <HomepageHeader />
        <LiveChatCTA />
        <LatestNewsCard />
        <NewsletterCTA />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
