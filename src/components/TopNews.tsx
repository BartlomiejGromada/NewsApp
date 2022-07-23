import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React from "react";
import { BsFillCalendar2EventFill, BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import BreakingNews from "../assets/BreakingNews.jpg";
import useFetchGet from "../hooks/useFetchGet";
import { INews } from "../interfaces/INews";
import Spinner from "./Spinner";

const TopNews: React.FC<{}> = () => {
  const { loading, response: news } = useFetchGet<INews[]>(
    "https://newsdata.io/api/1/news?language=en&category=top"
  );

  return (
    <div>
      <h3 className="font-semibold text-2xl pb-2">Top news</h3>

      {loading ? (
        <Spinner />
      ) : (
        <Splide
          hasTrack={false}
          options={{
            rewind: true,
            pagination: false,
            gap: "3rem",
            autoplay: true,
            padding: "0.5rem",
            fixedWidth: "40rem",
            breakpoints: {
              640: {
                fixedWidth: "28rem",
              },
            },
          }}
        >
          <SplideTrack className="p-2">
            {news?.map((item, index) => {
              return (
                <SplideSlide
                  key={index}
                  className="rounded-lg shadow-md shadow-black bg-slate-50 ease-in duration-200
                hover:scale-[1.05]"
                >
                  <Link to={`/news/${item.title}`}>
                    <div>
                      <p className="font-semibold text-center p-3 h-[5rem] overflow-hidden">
                        {item.title && item.title.length > 80
                          ? item.title.substring(0, 80) + "..."
                          : item.title}
                      </p>
                      <div className="relative w-full h-[18rem] bg-gradient-to-tr from-black to-neutral-200">
                        <img
                          src={item.image_url ? item.image_url : BreakingNews}
                          alt={item.title}
                          className="relative w-full h-full m-auto object-cover mix-blend-overlay"
                        />
                      </div>

                      <div className="flex justify-between p-2 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <BsPersonCircle className="text-2xl text-black" />
                          <p className="text-sm text-black">
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

                      <div className="absolute bottom-[4rem] left-5">
                        {item.category?.map((categoryItem, index) => {
                          return (
                            <div
                              key={index}
                              className="rounded-full bg-neutral-900 text-white p-2 min-w-[5rem] text-center border-2 border-white"
                            >
                              {categoryItem}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </Link>
                </SplideSlide>
              );
            })}
          </SplideTrack>
        </Splide>
      )}
    </div>
  );
};

export default TopNews;
