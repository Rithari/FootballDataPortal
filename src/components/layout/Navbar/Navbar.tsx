import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const Navbar = (): JSX.Element => {
  return (
    <div className="navbar">
      <div className="container">
        <Link className="logo" to="/">
          <img alt="Website Logo" src="/logos/logo-no-background.svg" />
        </Link>
        <div className="menu">
          <Link to="/players">Players</Link>
          <Link to="/clubs">Clubs</Link>
          <Link to="/competitions">Competitions</Link>
          <Link to="/games">Games</Link>
        </div>
      </div>
    </div>
  );
};
