import React from "react";
import { Navbar, Footer } from "../../components/layout";
import "../../assets/styles/style.css";
import {
  FeaturedArticles,
  LatestArticles,
  NewsletterCTA2,
} from "../../components/common/News/NewsPage";

function News() {
  return (
    <div>
      <Navbar />
      <div className="page-wrapper-1">
        <FeaturedArticles />
        <NewsletterCTA2 />
        <LatestArticles />
      </div>
      <Footer />
    </div>
  );
}

export default News;
