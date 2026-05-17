"use client";
import { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Cardbody from "../ui/Card";
import {
  cloudNetworkData,
  data,
  deviceMgtData,
  deviceMgtDataSide,
} from "@/src/constant";
import PieCard from "../ui/PieCard";
import FileSharingChart from "../charts/FileSharingChart";
import ActiveUser from "./ActiveUser";
import { PiDevices } from "react-icons/pi";
import { Button } from "antd";
import { AiOutlineThunderbolt } from "react-icons/ai";
import Cardfooter from "../ui/Cardfooter";

const DeviceManagement = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="mb-4">
      <div className="bg-white px-3 md:px-4 py-2 flex items-center justify-between rounded-md mb-4">
        <div className="flex gap-2 items-center min-w-0">
          <span className="bg-gray-100 rounded-md p-2 ">
            <PiDevices />
          </span>
          <span className="text-base md:text-lg font-bold truncate">
            Device Management Dashboard
          </span>
        </div>
        <span className="flex items-center gap-2 md:gap-3 shrink-0">
          <Button
            type="primary"
            className="flex items-center text-xs md:text-sm p-1 md:p-2"
          >
            <AiOutlineThunderbolt size={16} />{" "}
            <span className="hidden sm:inline">Upgrade</span>
          </Button>
          <span
            role="button"
            aria-label="toggle device management section"
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
          <div className="flex flex-col lg:flex-row gap-2 md:gap-3 mb-2 md:mb-4">
            <div className="flex-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
              {deviceMgtData.map((item) => (
                <div key={item.id} className="flex flex-col gap-2 md:gap-3">
                  <Cardbody
                    icon={item.icon}
                    title={item.title}
                    data={item.data}
                    number={item.number}
                    percentage={item.percentage}
                    text={item.text}
                    direction={item.direction}
                    device={true}
                    deviceIcon1={item.deviceIcon1}
                    deviceText1={item.deviceText1}
                    deviceNumber1={item.deviceNumber1}
                    deviceIcon2={item.deviceIcon2}
                    deviceText2={item.deviceText2}
                    deviceNumber2={item.deviceNumber2}
                  />

                  <Cardfooter data={item.cardData} />
                </div>
              ))}
            </div>
            <div className="flex-1 flex flex-col justify-between gap-2 md:gap-3">
              {deviceMgtDataSide.map((item) => (
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
          </div>
        </>
      )}
    </div>
  );
};

export default DeviceManagement;
