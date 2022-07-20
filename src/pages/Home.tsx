import React from "react";
import LatestNews from "../components/LatestNews";
import TopNews from "../components/TopNews";

const Home: React.FC<{}> = () => {
  return (
    <div>
      <LatestNews />
      <TopNews />
    </div>
  );
};

export default Home;
