import React from "react";
import LatestNews from "../components/LatestNews";
import TopNews from "../components/TopNews";
import { motion } from "framer-motion";

const Home: React.FC<{}> = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <LatestNews />
      <TopNews />
    </motion.div>
  );
};

export default Home;
