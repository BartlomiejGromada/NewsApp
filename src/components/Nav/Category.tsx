import React from "react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

interface IProps {
  name: string;
  value: string;
  Icon: IconType;
}

const Category: React.FC<IProps> = ({ name, value, Icon }) => {
  return (
    <NavLink
      to={`/category/${value}`}
      className={({ isActive }) =>
        isActive
          ? "flex flex-col justify-center items-center bg-black text-yellow-300 rounded-full py-2 hover:cursor-pointer hover:brightness-90 mr-2 first:ml-2 mb-5 min-w-[8rem] shadow-sm shadow-neutral-700"
          : "flex flex-col justify-center items-center bg-yellow-300 rounded-full py-2 hover:cursor-pointer hover:brightness-90 mr-2 first:ml-2 mb-5 min-w-[8rem] shadow-sm shadow-yellow-700"
      }
    >
      <div>{<Icon />}</div>
      <p className="font-semibold">{name}</p>
    </NavLink>
  );
};

export default Category;
