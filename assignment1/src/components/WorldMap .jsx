
import React from "react";

import image from '../assists/image.png'

const WorldMap = () => {
  return (
    <div className="relative  w-[100vw]  -left-8 mx-auto min-h-[200px] bg-black overflow-hidden scale-80 md:scale-65 ">
      {/* Background Map Image */}
      <img
        src={image}
        alt="World Map"
        className="w-full h-full object-fill opacity-80"
      />
    </div>
  );
};

export default WorldMap;
