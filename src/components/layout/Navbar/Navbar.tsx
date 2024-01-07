import React from "react";
import "./style.css";

export const Navbar = (): JSX.Element => {
  return (
    <div className="navbar">
      <div className="container">
        <a className="logo" href="/"><img alt="Website Logo" src="/public/logos/logo-no-background.svg" /></a>
        <div className="menu">
          <a href="/games">Games</a>
          <a href="/competitions">Competitions</a>
          <a href="/clubs">Clubs</a>
          <a href="/news">News</a>
        </div>
      </div>
    </div>
  );
};