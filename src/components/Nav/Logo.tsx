import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";

const Logo: React.FC<{}> = () => {
  return (
    <div className="w-fit">
      <Link to={"/"} className="flex items-center hover:brightness-90">
        <AiFillThunderbolt className="text-amber-300" size={"2rem"} />
        <h2 className="font-bold text-2xl">news</h2>
      </Link>
    </div>
  );
};

export default Logo;
