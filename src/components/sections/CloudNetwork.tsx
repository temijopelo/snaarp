"use client";
import { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Cardbody from "../ui/Card";
import { cloudNetworkData, data } from "@/src/constant";
import PieCard from "../ui/PieCard";
import FileSharingChart from "../charts/FileSharingChart";
import ActiveUser from "./ActiveUser";

const CloudNetwork = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="mb-4">
      <div className="bg-white px-3 md:px-4 py-2 flex items-center justify-between rounded-md mb-4">
        <div className="flex gap-2 items-center min-w-0">
          <span className="bg-gray-100 rounded-md p-2 shrink-0">
            <CiGlobe />
          </span>
          <span className="text-base md:text-lg font-bold truncate">
            Cloud Network
          </span>
        </div>
        <span
          role="button"
          aria-label="toggle cloud network section"
          className="cursor-pointer shrink-0 ml-2"
          onClick={() => setCollapsed((prev) => !prev)}
        >
          <IoIosArrowDown
            className={`transition-transform ${collapsed ? "rotate-180" : ""}`}
          />
        </span>
      </div>
      {!collapsed && (
        <>
          <div className="flex flex-col lg:flex-row gap-2 md:gap-3 mb-2 md:mb-4">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
              {cloudNetworkData.map((item) => (
                <Cardbody
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  data={item.data}
                  number={item.number}
                  percentage={item.percentage}
                  text={item.text}
                  direction={item.direction}
                />
              ))}
            </div>
            <div className="flex-1 bg-white rounded-md p-3 md:p-4">
              <PieCard />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
            <div className="bg-white rounded-md p-3 md:p-4">
              <FileSharingChart />
            </div>
            <div className="bg-white rounded-md p-3 md:p-4">
              <ActiveUser />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CloudNetwork;
