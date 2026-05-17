import { Button, Dropdown } from "antd";
import Image from "next/image";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import CountryTabs from "../ui/CountryTabs";
import { countryData } from "@/src/constant";

const items: any[] = [
  {
    label: "January",
    key: "1",
  },
  {
    label: "February",
    key: "2",
  },
  {
    label: "March",
    key: "3",
    danger: true,
  },
  {
    label: "April",
    key: "4",
    danger: true,
    disabled: true,
  },
];

const ActiveUser = () => {
  const menuProps = {
    items,
    onClick: ({ key }: any) => {
      console.log("Clicked menu item:", key);
    },
  };
  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <span className="bg-gray-100 rounded-md p-2">
            <AiOutlineUser />
          </span>
          Active Users
        </div>
        <div>
          <Dropdown menu={menuProps}>
            <Button
              onClick={(e) => e.preventDefault()}
              icon={<IoIosArrowDown />}
              iconPlacement="end"
            >
              Month
            </Button>
          </Dropdown>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex-1 w-full">
          <Image
            src="/map.png"
            alt="Active Users Chart"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          {countryData.map((country, index) => (
            <div key={index}>
              <CountryTabs
                img={country.img}
                name={country.name}
                number={country.number}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveUser;
