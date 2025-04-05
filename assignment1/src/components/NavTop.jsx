import React from "react";

const NavTop = () => {
  return (
    <div className="hidden w-full bg-black text-white py-4 px-6 md:flex lg:flex justify-between items-center">
      
      <h2 className="text-lg font-base">Analytics</h2>

    
      <div className="flex items-center space-x-6">
        <p className="cursor-pointer hover:underline">Activity</p>
        <p className="cursor-pointer hover:underline">Log out</p>
      </div>
    </div>
  );
};

export default NavTop;
