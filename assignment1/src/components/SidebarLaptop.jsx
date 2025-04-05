import React from "react";


const SidebarLaptop = () => {
  return (
    <div className="hidden md:w-[10%] lg:w-[190px]  lg:block md:flex flex-col w-64 h-screen bg-black text-white p-6">
    
      <h1 className="text-lg font-base mb-6">Vertxlabs, Inc</h1>

      <ul className="space-y-4 my-4">
        <li className="flex items-center space-x-3 text-gray-400 hover:text-white cursor-pointer py-4">
         
          <span>Dashboard</span>
        </li>
        <li className="flex items-center space-x-3 text-white font-semibold  my-4">
        
          <span>Analytics</span>
        </li>
        <li className="flex items-center space-x-3 text-gray-400 hover:text-white cursor-pointer py-4">
        
          <span>Connect</span>
        </li>
        <li className="flex items-center space-x-3 text-gray-400 hover:text-white cursor-pointer py-2">
         
          <span>Dealroom</span>
        </li>
        <li className="flex items-center space-x-3 text-gray-400 hover:text-white cursor-pointer  py-4">
         
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default SidebarLaptop;
