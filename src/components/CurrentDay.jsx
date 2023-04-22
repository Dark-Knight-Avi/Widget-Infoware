import Sun from "@/icons/Sun";
import React from "react";

const CurrentDay = ({temp, Icon, time, meridian}) => {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center">
        <span className="font-semibold text-lg">{temp}°C</span>
        <Sun />
        <span className="font-semibold mt-1 text-sm">{time}</span>
        <span className="text-xs font-semibold text-gray-400">{meridian}</span>
      </div>
    </React.Fragment>
  );
};

export default CurrentDay;
