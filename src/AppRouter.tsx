import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import News from "./pages/news/News";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/*" element={<AboutUs />} />
        <Route path="/contact/*" element={<ContactUs />} />
        <Route path="/news/*" element={<News />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
