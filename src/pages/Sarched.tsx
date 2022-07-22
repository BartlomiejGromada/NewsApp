import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsFillCalendar2EventFill, BsPersonCircle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import BreakingNews from "../assets/BreakingNews.jpg";
import NoNews from "../assets/NoNews.png";
import { INews, INewsResponseApi } from "../interfaces/INews";

const Sarched: React.FC<{}> = () => {
  let params = useParams();
  const [news, setNews] = useState<INews[]>([]);

  const getNews = async (name: string) => {
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_API_KEY}&language=en&q=${name}`
    );
    const json = (await response.json()) as INewsResponseApi;
    setNews(json.results);
  };

  useEffect(() => {
    getNews(params.name!);
  }, [params.name]);

  const contentNews = (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-10"
    >
      {news.map((item, index) => {
        return (
          <Link to={`/news/${item.title}`} key={index}>
            <div
              className="rounded-lg shadow-md shadow-black bg-slate-50 ease-in duration-200
          hover:scale-[1.05]"
            >
              {" "}
              <p className="font-semibold text-center p-3 h-[5rem]">
                {item.title && item.title.length > 80
                  ? item.title.substring(0, 80) + "..."
                  : item.title}
              </p>
              <div className="relative w-full h-[22rem] bg-gradient-to-tr from-black to-neutral-200">
                <img
                  src={item.image_url ? item.image_url : BreakingNews}
                  alt={item.title}
                  className="relative w-full h-full m-auto object-cover mix-blend-overlay"
                />
              </div>
              <div className="flex justify-between p-2">
                <div className="flex items-center space-x-2 max-w-[15rem]">
                  <BsPersonCircle className="text-2xl flex-shrink-0" />
                  <p className="text-sm">{item.creator ? item.creator : "-"}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <BsFillCalendar2EventFill className="text-2xl" />
                  <p className="text-sm">
                    {item.pubDate
                      ? new Date(item.pubDate).toLocaleString()
                      : "-"}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </motion.div>
  );

  const contentEmptyNews = (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center text-2xl font-bold flex flex-col items-center space-y-5 px-2"
    >
      <h3>
        No message found.
        <br />
        Try searching for something else.
      </h3>
      <img
        src={NoNews}
        alt="No news"
        className="w-[50rem] rounded-lg shadow-md shadow-black ring-4 ring-yellow-400"
      />
    </motion.div>
  );

  return news.length > 0 ? contentNews : contentEmptyNews;
};

export default Sarched;
