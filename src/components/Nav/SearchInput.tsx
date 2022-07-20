import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput: React.FC<{}> = () => {
  const [input, setInput] = useState("");

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="px-2" onSubmit={submitHandler}>
      <div className="relative h-10 w-full sm:w-[25rem] border-2 border-black rounded-full bg-white">
        <FaSearch className="absolute top-[0.7rem] left-2 z-10 text-lg" />
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="absolute top-2 left-9 outline-none bg-white"
          onChange={(event) => setInput(event.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchInput;
