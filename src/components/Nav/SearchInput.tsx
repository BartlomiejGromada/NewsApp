import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const SearchInput: React.FC<{}> = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input) navigate("/searched/" + input);
  };

  return (
    <form className="px-2" onSubmit={submitHandler}>
      <div className="relative h-10 w-full sm:w-[25rem] border-2 border-black rounded-full bg-white">
        <FaSearch className="absolute top-[0.6rem] left-2 z-10 text-lg" />
        <input
          type="text"
          name="search"
          value={input}
          placeholder="Search..."
          className="absolute top-2 left-9 outline-none bg-white"
          onChange={(event) => setInput(event.target.value)}
        />
        <HiX
          className={`absolute top-[0.6rem] right-2 text-xl cursor-pointer ${
            !input ? "hidden" : ""
          } hover:text-neutral-600`}
          onClick={() => setInput("")}
        />
      </div>
    </form>
  );
};

export default SearchInput;
