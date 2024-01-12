import React from "react";
import "./style.css";

export const LatestArticles = (): JSX.Element => {
  return (
    <div className="latest-articles">
      <div className="section-title">
        <div className="content">
          <p className="heading">Latest Football News and Updates</p>
          <p className="text">
            Stay informed with the latest football news and updates.
          </p>
        </div>
      </div>
      <div className="div">
        <div className="row">
          <div className="card">
            <img
              className="placeholder-image"
              alt="Placeholder image"
              src="/media/placeholder-image.png"
            />
            <div className="content-2">
              <div className="content-3">
                <p className="heading-2">
                  Exciting Match Highlights and Analysis
                </p>
                <p className="p">
                  Get a detailed analysis of the latest football matches and
                  highlights.
                </p>
              </div>
            </div>
            <div className="style-link-small">
              <button className="button">Read</button>
              <img
                className="icon-chevron-right"
                alt="Icon chevron right"
                src="/media/chevron-right.svg"
              />
            </div>
          </div>
          <div className="card">
            <img
              className="placeholder-image"
              alt="Placeholder image"
              src="/media/placeholder-image.png"
            />
            <div className="content-2">
              <div className="content-3">
                <div className="heading-2">Expert Opinions and Insights</div>
                <p className="p">
                  Discover expert opinions and insights on the latest football
                  news.
                </p>
              </div>
            </div>
            <div className="style-link-small">
              <button className="button">Read</button>
              <img
                className="icon-chevron-right"
                alt="Icon chevron right"
                src="/media/chevron-right.svg"
              />
            </div>
          </div>
          <div className="card">
            <img
              className="placeholder-image"
              alt="Placeholder image"
              src="/media/placeholder-image.png"
            />
            <div className="content-2">
              <div className="content-3">
                <div className="heading-2">Player Interviews and Profiles</div>
                <p className="p">
                  Get insights from player interviews and profiles in the
                  football world.
                </p>
              </div>
            </div>
            <div className="style-link-small">
              <button className="button">Read</button>
              <img
                className="icon-chevron-right"
                alt="Icon chevron right"
                src="/media/chevron-right.svg"
              />
            </div>
          </div>
        </div>
        <div className="style-secondary">
          <button className="button-2">View All</button>
        </div>
      </div>
    </div>
  );
};
