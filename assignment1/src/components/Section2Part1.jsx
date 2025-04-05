import React from "react";
import WorldMap from "./WorldMap ";
import CountryFilters from "./CountryFilters ";
const Section2Part1 = () => {
  return (
    <div className="  p-4 rounded-lg shadow-lg overflow-x-hidden">
      <h2 className="text-xl font-medium mb-2">Demographics</h2>
      {/* Placeholder for Demographics Map */}
      <div className="w-full h-40 bg-black rounded mt-4 flex items-center justify-start my-2 ">
      <WorldMap/>
      </div>
      <CountryFilters/>
    </div>
  );
};

export default Section2Part1;
