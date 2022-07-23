import { motion } from "framer-motion";
import React from "react";
import { useParams } from "react-router-dom";
import BreakingNews from "../assets/BreakingNews.jpg";
import Spinner from "../components/Spinner";
import useFetchGet from "../hooks/useFetchGet";
import { INews } from "../interfaces/INews";

const News: React.FC<{}> = () => {
  let params = useParams();
  const { loading, response: news } = useFetchGet<INews[]>(
    `https://newsdata.io/api/1/news?language=en&qInTitle=${params.name}`
  );

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {loading ? (
        <Spinner />
      ) : (
        news && (
          <div className="flex flex-col">
            <div className="pb-3">
              <h2 className="font-bold text-2xl text-center">
                {news[0].title}
              </h2>
            </div>

            <div className="pb-3">
              <p className="font-semibold text-lg text-center">
                {news[0].description}
              </p>
            </div>

            <div className="flex px-2 pb-2">
              <p>
                {news[0].creator}
                {","}
                &nbsp;
              </p>
              <p>
                {news[0].pubDate
                  ? new Date(news[0].pubDate).toLocaleString()
                  : "-"}
              </p>
            </div>

            <div className="w-full">
              <div className="min-w-[18rem] pb-5 md:min-w-[40rem] h-fit float-none xl:float-left xl:mr-5">
                <img
                  src={news[0].image_url ? news[0].image_url : BreakingNews}
                  alt={news[0].title}
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="text-justify">
                <p className="text-xl">{news[0].content}</p>
              </div>
            </div>

            <div className="mt-3 px-2 text-sm italic">
              <a href={news[0].link} rel="noreferrer" target="_blank">
                Link to full article
              </a>
            </div>

            <div className="flex flex-wrap pt-2">
              {news[0].keywords?.map((keyword, index) => {
                return (
                  <p
                    className="mx-2 mt-2 bg-yellow-300 rounded-xl py-1 px-2 text-sm"
                    key={index}
                  >
                    {keyword}
                  </p>
                );
              })}
            </div>
          </div>
        )
      )}
    </motion.div>
  );
};

export default News;
