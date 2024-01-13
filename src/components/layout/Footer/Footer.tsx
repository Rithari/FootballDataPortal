import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = (): JSX.Element => {
  return (
    <div className="footer">
      <div className="container">
        <Link className="logo" to="/">
          <img alt="Website Logo" src="logos/logo-no-background.svg" />
        </Link>
        <div className="menu">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/news">News</Link>
        </div>
        <div className="socials">
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://youtube.com">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
      <div className="credits">
        &copy; 2024 Football data portal. All Rights Reserved.
      </div>
    </div>
  );
};
