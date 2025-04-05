import React, { useState } from "react";

const Dropdown = ({ label, options, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative text-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-2  md:px-4 lg:px-4 py-2 rounded-full border border-[#333] flex items-center gap-2 text-sm"
      >
        {selected}
        <span className="text-white text-sm">▼</span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 bg-black border border-[#333] rounded-xl p-2 shadow-xl text-sm">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-md hover:bg-gray-800 ${
                selected === option
                  ? "bg-gray-800 font-semibold"
                  : "text-gray-400"
              }`}
              disabled={option !== selected}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const FilterButtons = () => {
  const [type, setType] = useState("Visitors");
  const [time, setTime] = useState("Last 30 days");
  const [add, setAdd] = useState("Add");

  return (
    <div className="flex flex-wrap gap-3 items-center">
      <Dropdown
        label="Type"
        options={["Visitors", "Connections", "Interactions", "Impressions"]}
        selected={type}
        setSelected={setType}
      />
      <Dropdown
        label="Time"
        options={[
          "Today",
          "Yesterday",
          "This week",
          "Last week",
          "Last 7 days",
          "Last 30 days",
        ]}
        selected={time}
        setSelected={setTime}
      />

      <Dropdown
      
        label="Add"
        options={["Connections", "Interactions", "Impressions"]}
        selected={add}
        setSelected={setAdd}
      />
    </div>
  );
};

export default FilterButtons;
