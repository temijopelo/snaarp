import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdContentCopy } from "react-icons/md";
import { RiNotification4Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 md:left-64 right-0 z-30 rounded-md bg-white p-2 md:p-3 shadow-sm h-14 flex items-center justify-between gap-2 md:gap-3 m-2 md:m-0">
      <div className="flex-1 flex border border-gray-300 max-w-sm md:max-w-xl p-2 rounded-md gap-2">
        <CiSearch size={24} />
        <input
          className="flex-1 outline-none hidden sm:block text-sm"
          type="search"
          name=""
          id=""
          placeholder="Search..."
        />
      </div>
      <div className="flex gap-1 md:gap-2">
        <span className="bg-gray-100 rounded-md p-2 flex items-center justify-center">
          <RiNotification4Line />
        </span>
        <span className="hidden md:flex rounded-md gap-2 items-center text-xs md:text-sm bg-gray-100 p-2">
          <span>
            <span className="hidden lg:inline">Agent Code: </span>
            <span className="text-blue-600">2222777736</span>
          </span>
          <MdContentCopy size={16} />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
