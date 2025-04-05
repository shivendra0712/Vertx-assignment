
import React from "react";

const StatDisplay = () => {
  return (
    <div className="flex items-end gap-2 mt-2">
      <h2 className="text-3xl font-semibold text-white">13.49K</h2>
      <div className="flex flex-col ml-2">
        <span className="text-green-500 text-sm font-medium">+469%</span>
        <span className="text-gray-500 text-sm font-medium ml-2">(897)</span>
      </div>
    </div>
  );
};

export default StatDisplay;
