import React from "react";
import Section1Part1 from "./Section1Part1";
import Section1Part2 from "./Section1Part2";

const Section1 = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-6 mb-6">
      <div className="lg:col-span-2  ">
        <Section1Part1 />
      </div>
      <div className=" ">
        <Section1Part2 />
      </div>
    </div>
  );
};

export default Section1;
