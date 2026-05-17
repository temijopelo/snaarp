"use client";
import { Card } from "antd";
import { dir } from "console";
import React from "react";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

const Cardbody = ({
  icon = <LuUser />,
  title = "User",
  data,
  number = 0,
  percentage = 0,
  text = "compared to last month",
  direction = "up",
  device = false,
  deviceIcon1,
  deviceText1,
  deviceIcon2,
  deviceText2,
  deviceNumber1,
  deviceNumber2,
  subtext,
}: {
  icon: React.ReactNode;
  title: string;
  data: any;
  number: number;
  percentage: number;
  text: string;
  subtext?: string;
  direction: string;
  device?: boolean;
  deviceIcon1?: React.ReactNode;
  deviceText1?: string;
  deviceIcon2?: React.ReactNode;
  deviceText2?: string;
  deviceNumber1?: number;
  deviceNumber2?: number;
}) => {
  return (
    <Card type="inner" className="">
      <div className="flex gap-2 items-center mb-4">
        <span className="bg-gray-100 rounded-md p-2">{icon}</span>
        {title}
      </div>
      <div className="flex">
        <span className="flex-1 flex flex-col justify-between">
          <span className="flex items-center gap-2">
            <span className="text-lg font-bold">
              {number} {subtext ? `${subtext}` : ""}
            </span>
            <span
              className={`flex items-center ${direction === "up" ? "text-green-500" : "text-red-500"}`}
            >
              {direction === "up" ? (
                <IoIosArrowRoundUp />
              ) : (
                <IoIosArrowRoundDown />
              )}{" "}
              {percentage}%
            </span>
          </span>
          <span className="text-[10px] text-gray-500">{text}</span>
        </span>
        <span className="flex-1 h-16">
          <ResponsiveContainer>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={direction === "up" ? "#10b981" : "#ef4444"}
                    stopOpacity={0.35}
                  />
                  <stop
                    offset="95%"
                    stopColor={direction === "up" ? "#10b981" : "#ef4444"}
                    stopOpacity={0.02}
                  />
                </linearGradient>
              </defs>
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke={direction === "up" ? "#10b981" : "#ef4444"}
                fill="url(#colorUv)"
                strokeWidth={2}
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </span>
      </div>
      {device && (
        <div>
          <hr className="my-3 opacity-15" />
          <div className="flex justify-between">
            <span className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                <span className="bg-gray-100 rounded-md p-2">
                  {deviceIcon1}
                </span>
                {deviceText1}
              </span>
              <span className="font-bold">{deviceNumber1}</span>
            </span>
            <span className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                <span className="bg-gray-100 rounded-md p-2">
                  {deviceIcon2}
                </span>
                {deviceText2}
              </span>
              <span className="font-bold">{deviceNumber2}</span>
            </span>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Cardbody;
