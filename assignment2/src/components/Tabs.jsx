import React from 'react'

const Tabs = () => {
  return (
    <>
        <div className="tab-container w-full h-[3rem] flex items-center justify-between px-8 text-white text-sm lg:absolute lg:top-[4rem] lg:w-[85%] lg:right-0 lg:justify-start lg:p-0 lg:border-b-2 lg:border-t-2 lg:border-white/30 lg:text-white/40">
            <p className='border-0 lg:border-white/30 lg:border-2 w-[8%] h-full flex items-center justify-center lg:border-l-0 lg:border-t-0 lg:border-b-0 lg:text-white'>Overview</p>
            <p className='border-0 lg:border-white/30 lg:border-2 w-[8%] h-full flex items-center justify-center lg:border-l-0 lg:border-t-0 lg:border-b-0'>Portfolio</p>
            <p className='border-0 lg:border-white/30 lg:border-2 w-[8%] h-full flex items-center justify-center lg:border-l-0 lg:border-t-0 lg:border-b-0'>Experience</p>
            <p className='border-0 lg:border-white/30 lg:border-2 w-[8%] h-full flex items-center justify-center lg:border-l-0 lg:border-t-0 lg:border-b-0'>Media</p>
            <p className='border-white/30 border-2 w-[8%] h-full lg:flex items-center justify-center hidden lg:relative left-[60%] lg:border-t-0 lg:border-b-0'>More</p>
        </div>
    </>
  )
}

export default Tabs