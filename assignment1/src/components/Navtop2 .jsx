
import React from "react";

const Navtop2 = () => {
  return (
    <div className="hidden w-full bg-black text-white py-2 px-6 md:flex lg:flex justify-between items-center">
      {/* Left Section */}
      <div className="flex space-x-6">
        <p className="font-semibold cursor-pointer">Overview</p>
        <p className="text-gray-400 cursor-pointer">Demographics</p>
      </div>

      {/* Right Section */}
      <div className="cursor-pointer">More</div>
    </div>
  );
};

export default Navtop2;