import React from "react";
import Section2Part1 from "./Section2Part1";
import Section2Part2 from "./Section2Part2";

const Section2 = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-6 bg-[#111111]">
      <div className="lg:col-span-2 w-[84%] md:w-full lg:w-full">
        <Section2Part1 />
      </div>
      <div className="overflow-x-hidden w-[84%] md:w-full lg:w-full ">
        <Section2Part2 />
      </div>
    </div>
  );
};

export default Section2;
