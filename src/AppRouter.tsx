import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import socketIO from "socket.io-client";
import HomePage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Players from "./pages/players/Players";
import Player from "./pages/players/Player";
import Clubs from "./pages/clubs/Clubs";
import Club from "./pages/clubs/Club";
import Games from "./pages/games/Games";
import Game from "./pages/games/Game";
import Competitions from "./pages/competitions/Competitions";
import Competition from "./pages/competitions/Competition";
import ChatPage from "./components/chat/chat_components/ChatPage";
import Home from "./components/chat/chat_components/Home";

const socket = socketIO("http://localhost:3000");

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/*" element={<AboutUs />} />
        <Route path="/contact/*" element={<ContactUs />} />
        {/*<Route path="/news/*" element={<News />} />*/}
        <Route path="/players/*" element={<Players />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/clubs/*" element={<Clubs />} />
        <Route path="/club/:id" element={<Club />} />
        <Route path="/games/*" element={<Games />} />
        <Route path="/game/:gameId" element={<Game />} />
        <Route path="/competition/:id" element={<Competition />} />
        <Route path="/competitions/*" element={<Competitions />} />
        <Route path="/chat/login" element={<Home socket={socket} />} />
        <Route path="/chat/room" element={<ChatPage socket={socket} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
