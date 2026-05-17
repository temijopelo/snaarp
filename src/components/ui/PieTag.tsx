import React from "react";
import { PiWarningOctagonLight } from "react-icons/pi";

const PieTag = () => {
  return (
    <div className="bg-white w-[70%] absolute top-5 right-0 p-2 rounded-md flex border-x-4 border-yellow-500 gap-4 xl:w-md shadow-md">
      <div>
        <PiWarningOctagonLight size={20} className="text-yellow-500" />
      </div>
      <div className="text-[0.625rem] xl:text-sm">
        <h5 className="text-purple-700 font-bold">Note</h5>
        <p>You've almost reached your storage limit.</p>
        <p>
          You have used 80% of your available storage. Upgrade plan to access
          more space.
        </p>
      </div>
    </div>
  );
};

export default PieTag;
