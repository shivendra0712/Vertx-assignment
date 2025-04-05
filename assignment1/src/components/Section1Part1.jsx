import React from "react";
import FilterButtons from "./FilterButtons";
import StatDisplay from "./StatDisplay ";
import VisitorsLineChart from "./VisitorsLineChart";
const Section1Part1 = () => {
  return (
    <div className="  bg-[#111] px-4 py-2 rounded-lg shadow-lg">
      <div className=""><FilterButtons/></div>
      <div className=""><StatDisplay/></div>
    
      <div className="w-full relative flex items-center  h-40  rounded ml-[-15px]   ">
      <VisitorsLineChart/>
      </div>
    </div>
  );
};

export default Section1Part1;
