"use client";
import { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Cardbody from "../ui/Card";
import { cloudNetworkData, data, productivityData } from "@/src/constant";
import PieCard from "../ui/PieCard";
import FileSharingChart from "../charts/FileSharingChart";
import ActiveUser from "./ActiveUser";
import { Button } from "antd";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { LuHousePlus } from "react-icons/lu";
import EmailDashboard from "./EmailChart";
import OnlineUsers from "./UserTable";
import ActivityDashboard from "./ActivityDashboard";

const ProductivityReport = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="mb-4">
      <div className="bg-white px-3 md:px-4 py-2 flex items-center justify-between rounded-md my-4">
        <div className="flex gap-2 items-center min-w-0">
          <span className="bg-gray-100 rounded-md p-2 shrink-0">
            <LuHousePlus />
          </span>
          <span className="text-base md:text-lg font-bold truncate">
            Productivity Report
          </span>
        </div>
        <span className="flex items-center gap-2 md:gap-3 shrink-0">
          <Button
            type="primary"
            className="flex items-center gap-1 text-xs md:text-sm p-1 md:p-2"
          >
            <AiOutlineThunderbolt size={16} />{" "}
            <span className="hidden sm:inline">Upgrade</span>
          </Button>
          <span
            role="button"
            aria-label="toggle productivity report section"
            className="cursor-pointer"
            onClick={() => setCollapsed((prev) => !prev)}
          >
            <IoIosArrowDown
              className={`transition-transform ${collapsed ? "rotate-180" : ""}`}
            />
          </span>
        </span>
      </div>
      {!collapsed && (
        <>
          <div className="flex gap-2 md:gap-3 mb-2 md:mb-4">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
              {productivityData.map((item) => (
                <Cardbody
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  subtext={item.subtext}
                  data={item.data}
                  number={item.number}
                  percentage={item.percentage}
                  text={item.text}
                  direction={item.direction}
                />
              ))}
            </div>
          </div>
          <div className="mb-4">
            <EmailDashboard />
          </div>
          <div className="mb-4">
            <OnlineUsers />
          </div>
          <div className="mt-4">
            <ActivityDashboard />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductivityReport;
