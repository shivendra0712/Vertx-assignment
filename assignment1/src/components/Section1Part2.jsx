
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const insights = [
  {
    label: "Founders",
    value: "7.4K",
    percent: "+000%",
    diff: "(000)",
  },
  {
    label: "Investors",
    value: "6.09K",
    percent: "+000%",
    diff: "(000)",
  },
];

const Section1Part2 = () => {
  return (
    <div className="bg-[#111111] text-white rounded-xl p-4 w-full max-w-sm space-y-4 overflow-x-hidden">

      <h2 className="text-lg font-semibold">Insights</h2>

      <div className="w-full flex md:block lg:block gap-14 ">
        {insights.map((item) => (
          <div key={item.label}>
            <p className="text-xl text-white mb-1">{item.label}</p>
            <div className="flex  justify-start gap-4 items-center">
              <span className="text-3xl font-semibold">{item.value}</span>
              <div className="text-left">
                <p className="text-green-500 text-sm font-medium">
                  {item.percent}
                </p>
                <p className="text-gray-500 text-sm ml-2">{item.diff}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-zinc-800 my-2" />

      <div className="flex items-center justify-end gap-4 cursor-pointer text-sm font-medium text-white hover:underline">
        <span>View detailed insights</span>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Section1Part2;
