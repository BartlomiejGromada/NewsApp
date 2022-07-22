import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreakingNews from "../assets/BreakingNews.jpg";
import { INews, INewsResponseApi } from "../interfaces/INews";

const mockNews: INews = {
  title: "Pedestrian fatally struck by vehicle in Bradenton",
  link: "https://www.wfla.com/news/pedestrian-fatally-struck-by-vehicle-in-bradenton-2/",
  keywords: [
    "News",
    "Breaking News",
    "Breaking News Email Alerts",
    "Email Alerts",
    "Local News",
    "Mobile",
  ],
  creator: ["Athina Morris"],
  video_url: null,
  description:
    "Authorities are investigating a crash that killed a pedestrian in Bradenton early Wednesday morning.",
  content:
    "Authorities are investigating a crash that killed a pedestrian in Bradenton early Wednesday morning. The crash happened at about 12:15 a.m. in the 400 block of 14th Street West. The roadway was closed for the investigation but has since reopened, the Florida Highway Patrol said. Remains found at Spring Hill serial killer’s house identified as teen who went missing in 1980, family says There is still no word on what led to the collision. News Channel 8 was able to confirm one person died. This is a developing story. Please check back for updates and download the free News Channel 8 app to receive breaking news alerts.",
  pubDate: new Date(),
  expire_at: new Date(),
  image_url:
    "https://www.wfla.com/wp-content/uploads/sites/71/2022/07/bradenton-pedestrian-crash.jpg?w=720",
  source_id: "wfla",
  country: ["united states of america"],
  category: ["top"],
  language: "english",
};

const News: React.FC<{}> = () => {
  let params = useParams();
  const [news, setNews] = useState<INews | null>(mockNews);

  const getNews = async (name: string) => {
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_API_KEY}&language=en&qInTitle=${name}`
    );
    const json = (await response.json()) as INewsResponseApi;
    setNews(json.results[0]);
  };

  useEffect(() => {
    //getNews(params.name!);
  }, [params.name]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col">
        <div className="pb-3">
          <h2 className="font-bold text-2xl text-center">{news?.title}</h2>
        </div>

        <div className="pb-3">
          <p className="font-semibold text-lg text-center">
            {news?.description}
          </p>
        </div>

        <div className="flex px-2 pb-2">
          <p>
            {news?.creator}
            {","}
            &nbsp;
          </p>
          <p>
            {news?.pubDate ? new Date(news?.pubDate).toLocaleString() : "-"}
          </p>
        </div>

        <div className="w-full">
          <div className="min-w-[18rem] pb-5 md:min-w-[40rem] h-fit float-none xl:float-left xl:mr-5">
            <img
              src={news?.image_url ? news.image_url : BreakingNews}
              alt={news?.title}
              className="rounded-xl object-cover"
            />
          </div>
          <div className="text-justify">
            <p className="text-xl">{news?.content}</p>
          </div>
        </div>

        <div className="mt-3 px-2 text-sm italic">
          <a href={news?.link} rel="noreferrer" target="_blank">
            Link to full article
          </a>
        </div>

        <div className="flex flex-wrap pt-2">
          {news?.keywords?.map((keyword, index) => {
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
    </motion.div>
  );
};

export default News;
