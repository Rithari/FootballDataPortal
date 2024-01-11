import React from "react";
import "./style.css";

export const LatestNewsCard = (): JSX.Element => {
  return (
    <div className="latest-news-articles">
      <div className="section-title">
        <div className="subheading">Latest</div>
        <div className="content">
          <p className="heading">Stay Informed with Our News</p>
          <p className="text">Get the latest updates on football news and events.</p>
        </div>
      </div>
      <div className="div">
        <div className="row">
          <div className="card">
            <img className="placeholder-image" alt="Placeholder image" src="/media/placeholder-image.png" />
            <div className="content-2">
              <div className="content-3">
                <div className="heading-2">Title Goes Here</div>
                <p className="p">Summary of the blog post will be displayed here.</p>
              </div>
            </div>
            <div className="style-link-small">
              <div className="text-wrapper-2">Read</div>
              <img className="icon-chevron-right" alt="Icon chevron right" src="/media/chevron-right.svg" />
            </div>
          </div>
          <div className="card">
            <img className="placeholder-image" alt="Placeholder image" src="/media/placeholder-image.png" />
            <div className="content-2">
              <div className="content-3">
                <div className="heading-2">Title Goes Here</div>
                <p className="p">Summary of the blog post will be displayed here.</p>
              </div>
            </div>
            <div className="style-link-small">
              <div className="text-wrapper-2">Read</div>
              <img className="icon-chevron-right" alt="Icon chevron right" src="/media/chevron-right.svg" />
            </div>
          </div>
          <div className="card">
            <img className="placeholder-image" alt="Placeholder image" src="/media/placeholder-image.png" />
            <div className="content-2">
              <div className="content-3">
                <div className="heading-2">Title Goes Here</div>
                <p className="p">Summary of the blog post will be displayed here.</p>
              </div>
            </div>
            <div className="style-link-small">
              <div className="text-wrapper-2">Read</div>
              <img className="icon-chevron-right" alt="Icon chevron right" src="/media/chevron-right.svg" />
            </div>
          </div>
        </div>
        <div className="style-secondary">
          <button className="button">View All</button>
        </div>
      </div>
    </div>
  );
};
