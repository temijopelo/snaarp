import { Progress } from "antd";
import React from "react";

const CountryTabs = ({
  img,
  name,
  number,
}: {
  img: string;
  name: string;
  number: number;
}) => {
  return (
    <div className="border border-gray-300 p-2 rounded-md">
      <div className="flex gap-2 items-center">
        <span className="rounded-md">
          <img src={img} alt={name} width={32} height={32} />
        </span>
        <span className="flex-1">
          <span>{name}</span>
          <span>
            <Progress
              style={{ color: "green" }}
              percent={number}
              status="active"
            />
          </span>
        </span>
      </div>
    </div>
  );
};

export default CountryTabs;
