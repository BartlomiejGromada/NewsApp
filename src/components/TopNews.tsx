import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import { BsFillCalendar2EventFill, BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import BreakingNews from "../assets/BreakingNews.jpg";
import { INews, INewsResponseApi } from "../interfaces/INews";

const TopNews: React.FC<{}> = () => {
  const [news, setNews] = useState<INews[]>([]);

  const getNews = async () => {
    const cachedNews = localStorage.getItem("topNews");
    if (cachedNews) {
      setNews(JSON.parse(cachedNews));
    } else {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_API_KEY}&language=en&category=top`
      );
      const json = (await response.json()) as INewsResponseApi;
      setNews(json.results);
      localStorage.setItem("topNews", JSON.stringify(json.results));
    }
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <div>
      <h3 className="font-semibold text-xl">Top news</h3>

      <Splide
        options={{
          rewind: true,
          pagination: false,
          gap: "3rem",
          fixedWidth: "40rem",
          autoplay: true,
        }}
      >
        {news.map((item, index) => {
          return (
            <SplideSlide key={index} className="p-2 bg-amber-50 rounded-lg">
              <Link to={`/news/${item.title}`}>
                <>
                  <p className="font-semibold text-center p-3 h-[6rem]">
                    {item.title}
                  </p>
                  <div className="relative w-full h-[22rem] rounded-lg bg-gradient-to-tr from-black to-neutral-200">
                    <img
                      src={item.image_url ? item.image_url : BreakingNews}
                      alt={item.title}
                      className="relative w-full h-full m-auto object-cover rounded-lg mix-blend-overlay"
                    />
                  </div>

                  <div className="flex justify-between py-2">
                    <div className="flex items-center space-x-2">
                      <BsPersonCircle className="text-2xl" />
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

                  <div className="absolute bottom-16 left-5">
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
                </>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default TopNews;
