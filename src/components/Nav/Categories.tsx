import React from "react";
import Category from "./Category";
import {
  MdBusinessCenter,
  MdFastfood,
  MdOutlineSportsSoccer,
  MdScience,
  MdHealthAndSafety,
} from "react-icons/md";
import { GiPublicSpeaker } from "react-icons/gi";

const items = [
  {
    name: "Business",
    value: "business",
    icon: MdBusinessCenter,
  },
  {
    name: "Food",
    value: "food",
    icon: MdFastfood,
  },
  {
    name: "Politics",
    value: "politics",
    icon: GiPublicSpeaker,
  },
  {
    name: "Sports",
    value: "sports",
    icon: MdOutlineSportsSoccer,
  },
  {
    name: "Science",
    value: "science",
    icon: MdScience,
  },
  {
    name: "Health",
    value: "health",
    icon: MdHealthAndSafety,
  },
];

const Categories: React.FC<{}> = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-start">
      {items.map((item, index) => {
        return (
          <Category
            key={index}
            name={item.name}
            value={item.value}
            Icon={item.icon}
          />
        );
      })}
    </div>
  );
};

export default Categories;
