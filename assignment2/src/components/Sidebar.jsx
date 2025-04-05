import React from 'react'

const Sidebar = () => {
  return (
    <>
        <section className='w-[15vw] h-[93.3%] absolute bottom-0 hidden lg:flex lg:border-t-2 lg:border-white/30'>
            <div className="left w-[25%] h-full">
                <div className="image-container w-full h-[25%] flex flex-col items-center justify-between py-4  border-b-2 border-white/30">
                    <div className='w-[2.5rem] h-[2.5rem] bg-white rounded-full'></div>
                    <div className='w-[2.5rem] h-[2.5rem] bg-white rounded-full'></div>
                    <div className='w-[2.5rem] h-[2.5rem] bg-white rounded-full'></div>
                </div>
            </div>
            <div className="right w-[75%] h-full border-2 border-t-0 border-b-0 border-white/30 py-6 lg:flex lg:flex-col lg:gap-8 text-[0.9rem] text-white/40">
                <p className='w-full px-8'>Dashboadrd</p>
                <p className='w-full px-8'>Analytics</p>
                <p className='w-full px-8'>Connect</p>
                <p className='w-full px-8'>Dealroom</p>
                <p className='w-full px-8'>Profile</p>
                <p className='w-full px-8'>Settings</p>
            </div>
        </section>
    </>
  )
}

export default Sidebar