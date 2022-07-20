import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoryNews from "../components/CategoryNews";
import News from "../components/News";
import Home from "./Home";

const Pages: React.FC<{}> = () => {
  return (
    <div className="py-5 px-3 md:px-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:name" element={<News />} />
        <Route path="/category/:name" element={<CategoryNews />} />
      </Routes>
    </div>
  );
};

export default Pages;
