import { AnimatePresence } from "framer-motion";
import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import CategoryNews from "./CategoryNews";
import Home from "./Home";
import News from "./News";
import Searched from "./Sarched";

const Pages: React.FC<{}> = () => {
  const location = useLocation();

  return (
    <div className="py-5 px-3 md:px-20">
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/news/:name" element={<News />} />
          <Route path="/category/:name" element={<CategoryNews />} />
          <Route path="/searched/:name" element={<Searched />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default Pages;
