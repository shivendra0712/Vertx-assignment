import React from 'react'
import { FaEarthAmericas } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { AiOutlineBell } from "react-icons/ai";

const Hovermenu = () => {
  return (
    <>
        <section className='absolute w-full h-[4rem] bg-black bottom-0 flex items-center justify-between px-4 md:hidden text-white z-99'>
            <div className="box1 h-[80%] flex flex-col items-center justify-between">
            <MdOutlineDashboard className='text-2xl'/>
            <p className='text-sm'>Dashboard</p>
            </div>
            <div className="box1 h-[80%] flex flex-col items-center justify-between">
            <VscGraph className='text-2xl'/>
            <p className='text-sm'>Analytics</p>
            </div>
            <div className="box1 h-[80%] flex flex-col items-center justify-between">
            <FaEarthAmericas className='text-2xl'/>
            <p className='text-sm'>Connect</p>
            </div>
            <div className="box1 h-[80%] flex flex-col items-center justify-between">
            <AiOutlineBell className='text-2xl'/>
            <p className='text-sm'>Activity</p>
            </div>
            <div className="box1 h-[80%] flex flex-col items-center justify-between">
            <LiaNetworkWiredSolid className='text-2xl'/>
            <p className='text-sm'>Dealroom</p>
            </div>
        </section>
    </>
  )
}

export default Hovermenu