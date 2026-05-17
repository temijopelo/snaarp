import React from "react";

const Cardfooter = ({ data }: { data?: any[] }) => {
  if (!data || data.length === 0) return null;

  return (
    // the last child shouldnt have a border

    <div className="flex items-center gap-2 bg-white rounded-md p-3 w-full">
      {data.map((item: any, idx: number) => (
        <div
          className={
            idx === data.length - 1
              ? "flex-1 p-2 flex flex-col justify-center items-center"
              : "flex-1 p-2 flex flex-col justify-center items-center border-r border-gray-200"
          }
          key={item?.name ?? idx}
        >
          <span className="flex items-center gap-1">
            <span className=" ">{item?.icon}</span>
            <span className="text-[10px] ">{item?.name}</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="text-[8px] xl:text-sm">{item?.number}</span>
            <span className="text-[8px] xl:text-sm">{item?.text}</span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Cardfooter;
