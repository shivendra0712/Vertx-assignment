import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";

const Overview = () => {
  return (
    <div className="px-6 py-2 bg-black text-white  ">
      <h1 className="hidden md:block lg:block text-2xl font-semibold mb-2">Overview</h1>
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Overview;
