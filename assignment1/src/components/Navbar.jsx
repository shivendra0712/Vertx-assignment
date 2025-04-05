import { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Reports", "Demographics"];

  return (
    <div className="md:hidden lg:hidden left-0 w-full bg-black text-white flex justify-around py-3 border-t border-gray-700">
      {tabs.map((tab) => (
        <button
          key={tab}
          className="relative text-gray-400 hover:text-white px-1 my-1"
          onClick={() => setActiveTab(tab)}
        >
          {tab}
          {activeTab === tab && (
            <span className="absolute left-0 right-0 bottom-0 h-1 bg-white rounded-full transition-all duration-300 "></span>
          )}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
