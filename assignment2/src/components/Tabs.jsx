import React from 'react'

const Tabs = () => {
  return (
    <>
        <div className="tab-container w-full h-[3rem] flex items-center justify-between px-8 text-white text-sm lg:absolute lg:top-[4rem] lg:w-[85%] lg:right-0 lg:justify-start lg:p-0 ">
            <p className=' w-[8%] h-full flex items-center justify-center  lg:text-white'>Overview</p>
            <p className=' w-[8%] h-full flex items-center justify-center '>Portfolio</p>
            <p className=' w-[8%] h-full flex items-center justify-center '>Experience</p>
            <p className=' w-[8%] h-full flex items-center justify-center '>Media</p>
            <p className=' w-[8%] h-full lg:flex items-center justify-center hidden lg:relative left-[60%] '>More</p>
        </div>
    </>
  )
}

export default Tabs