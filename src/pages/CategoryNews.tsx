import { motion } from "framer-motion";
import React from "react";
import { BsFillCalendar2EventFill, BsPersonCircle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import BreakingNews from "../assets/BreakingNews.jpg";
import Spinner from "../components/Spinner";
import useFetchGet from "../hooks/useFetchGet";
import { INews } from "../interfaces/INews";

const CategoryNews: React.FC<{}> = () => {
  let params = useParams();
  const { loading, response: news } = useFetchGet<INews[]>(
    `https://newsdata.io/api/1/news?language=en&category=${params.name}`
  );

  return (
    <motion.div
      className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-10"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {loading ? (
        <Spinner />
      ) : (
        news?.map((item, index) => {
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
                    <p className="text-sm">
                      {item.creator ? item.creator : "-"}
                    </p>
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
        })
      )}
    </motion.div>
  );
};

export default CategoryNews;
