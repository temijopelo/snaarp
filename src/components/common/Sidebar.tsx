import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiSolidBuilding, BiSolidDashboard } from "react-icons/bi";
import { BsBarChart, BsClipboardMinus } from "react-icons/bs";
import { CiCircleQuestion, CiSettings } from "react-icons/ci";
import { HiOutlineCreditCard } from "react-icons/hi";
import { MdOutlineDevices, MdOutlineSdStorage } from "react-icons/md";
import { TbBuildingBank } from "react-icons/tb";

const sidebarItems = [
  {
    name: "Dashboard",
    icon: <BiSolidDashboard size={24} />,
  },
  {
    name: "Organization & Reg",
    icon: <BiSolidBuilding size={24} />,
  },
  {
    name: "Reporting",
    icon: <BsClipboardMinus size={24} />,
  },
  {
    name: "Billings",
    icon: <HiOutlineCreditCard size={24} />,
  },
  {
    name: "Accounts",
    icon: <AiOutlineUser size={24} />,
  },
  {
    name: "Storage",
    icon: <MdOutlineSdStorage size={24} />,
  },
  {
    name: "Settings",
    icon: <CiSettings size={24} />,
  },
  {
    name: "Device Management",
    icon: <MdOutlineDevices size={24} />,
  },
  {
    name: "Productivity Reports",
    icon: <TbBuildingBank size={24} />,
  },
  {
    name: "User Panel",
    icon: <BsBarChart size={24} />,
  },
  {
    name: " Support",
    icon: <CiCircleQuestion size={24} />,
  },
];

const Sidebar = () => {
  return (
    <div className="hidden md:fixed md:flex bg-white top-0 left-0 z-40 h-screen w-64 rounded-md flex-col justify-between">
      <div>
        <div>
          <h3 className="text-xl font-bold text-center py-3 font-sans">
            Snaarp
          </h3>
        </div>
        <ul className="p-3 space-y-2 md:space-y-3">
          {sidebarItems
            .map((item) => (
              <li
                key={item.name}
                className="flex items-center text-gray-600 gap-3 p-2 hover:bg-blue-100 hover:text-blue-800 cursor-pointer text-xs md:text-sm rounded-md transition-colors"
              >
                {item.icon}
                <span className="hidden md:inline">{item.name}</span>
              </li>
            ))
            .splice(0, 9)}
        </ul>
      </div>
      <div>
        <ul className="p-3 space-y-2 md:space-y-3">
          {sidebarItems
            .map((item) => (
              <li
                key={item.name}
                className="flex items-center text-gray-600 gap-3 p-2 hover:bg-blue-100 hover:text-blue-800 cursor-pointer text-xs md:text-sm rounded-md transition-colors"
              >
                {item.icon}
                <span className="hidden md:inline">{item.name}</span>
              </li>
            ))
            .splice(9, 10)}
        </ul>
        <hr />
        <div className="flex items-center gap-3 p-4">
          <span className="w-10 h-10 rounded-full overflow-hidden shrink-0">
            <img src="img.jpg" alt="user" />
          </span>
          <span className="hidden md:flex flex-col">
            <span className="font-semibold text-sm">Temi Ojo</span>
            <span className="text-xs text-gray-500">Admin</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
