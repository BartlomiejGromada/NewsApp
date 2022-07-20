import React from "react";
import Categories from "./Categories";
import Logo from "./Logo";
import SearchInput from "./SearchInput";

const Nav: React.FC<{}> = () => {
  return (
    <div className="flex flex-col space-y-5 px-3 py-5 md:px-20">
      <Logo />
      <SearchInput />
      <Categories />
    </div>
  );
};

export default Nav;
