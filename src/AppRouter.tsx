import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import News from "./pages/news/News";
import Players from "./pages/players/Players";
import Player from "./pages/players/Player";
import Clubs from "./pages/clubs/Clubs";
import Club from "./pages/clubs/Club";
import Games from "./pages/games/Games";
import Game from "./pages/games/Game";
import Competitions from "./pages/competitions/Competitions";
import Competition from "./pages/competitions/Competition";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/*" element={<AboutUs />} />
        <Route path="/contact/*" element={<ContactUs />} />
        {/*<Route path="/news/*" element={<News />} />*/}
        <Route path="/players/*" element={<Players />} />
        <Route path="/player/*" element={<Player />} />
        <Route path="/clubs/*" element={<Clubs />} />
        <Route path="/club/*" element={<Club />} />
        <Route path="/games/*" element={<Games />} />
        <Route path="/game/*" element={<Game />} />
        <Route path="/competition/*" element={<Competition />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
