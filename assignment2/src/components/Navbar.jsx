import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import { LuPyramid } from "react-icons/lu";

const Navbar = () => {
  return (
    <>
        <header className="w-full h-[4rem] flex justify-between items-center px-4 md:hidden">
            <div className='w-[1.8rem] h-[1.8rem] bg-white rounded-full'></div>
            <LuPyramid className='text-white text-2xl rotate-[180deg]'/>
            <HiDotsVertical className='text-white text-2xl'/>
        </header>
        <header className="hidden w-full h-[4rem] md:flex items-center lg:flex lg:items-center text-white">
          <div className='left w-[14.9%] h-full flex justify-start items-center px-4 gap-12'>
            <div className='w-[2.5rem] h-[2.5rem] bg-white rounded-full flex items-center justify-center'>
              <LuPyramid className='text-black text-2xl rotate-[180deg]'/>
            </div>
            <p className='text-lg '>Vertxlabs, Inc</p>
          </div>
          <div className='middle w-[70%] h-full flex px-8 items-center l'>
            <p>Profile</p>
          </div> 
          <div className='right w-[15%] h-full flex justify-end items-center'>
            <p className='w-1/2 flex items-center justify-center border-'>Activity</p>
            <p className='w-1/2 flex items-center justify-center border-'>Logout</p>
          </div>
        </header>
    </>
  )
}

export default Navbar