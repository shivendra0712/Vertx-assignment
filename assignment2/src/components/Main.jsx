import React from 'react'
import { LuPyramid } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";

const Main = () => {
    return (
        <>
            <main className='w-full h-[80vh] bg-[#131212] flex flex-col items-center gap-[1rem] px-4 z-30 lg:absolute lg:right-0 lg:w-[83vw] lg:h-[83vh] top-[7rem] lg:px-12 md:overtflow-y-hidden lg:overtflow-y-hidden'>
                <div className="top w-full h-[5%] flex items-center justify-between text-xl font-semibold text-white">
                    <p>Overview</p>
                </div>
                <div className="middle w-full h-[45%] bg-black flex flex-col items-center justify-between rounded-xl p-4 lg:flex-row lg:gap-8 lg:justify-start">
                    <div className="top w-full h-[60%] lg:w-[30%] lg:h-full">
                        <div className="empty-box bg-white w-[50%] h-full rounded-xl lg:w-full lg:bg-black lg:justify-center lg:items-center lg:flex">
                            <img src="https://www.poynter.org/wp-content/uploads/2019/01/background.png" alt="background" className='w-full h-full object-cover rounded-xl md:hidden' />
                            <IoPersonSharp className='hidden lg:inline-block w-[80%] h-[70%] text-white' />
                        </div>
                    </div>
                    <div className="bottom w-full h-[40%] flex text-white lg:flex-col lg:w-[25%] lg:h-full lg:py-8 lg:justify-center">
                        <div className="left w-[70%] h-full">
                            <div className="box1 w-full h-[45%] flex items-center justify-between ">
                                <p className='font-semibold text-4xl'>Mr.ABC</p>
                                <img src="badge-icon.png" alt="varification-badge" className='w-[1.5rem] h-[1.5rem]' />
                            </div>
                            <div className="box2 w-full h-[28%] flex items-center justify-start text-sm font-semibold gap-4">
                                <p>Co-Founder and CEO @ Vertex</p>
                                <div className='logo-container w-[1rem] h-[1rem] bg-white flex items-center justify-center'>
                                    <LuPyramid className='text-black rotate-[180deg]' />
                                </div>
                            </div>
                            <div className="box3 w-full h-[28%] flex items-center justify-start text-[0.7rem]">
                                <button className='bg-stone-300 px-[1rem] rounded-sm text-black py-[0.15rem]'>Enterpreneur</button>
                            </div>
                        </div>
                        <div className="right w-[30%] h-full relative">
                            <div className="social-container w-full h-[35%] flex bottom-0 absolute justify-between items-center lg:gap-4">
                                <img src="https://img.icons8.com/?size=48&id=13930&format=png" alt="linked-icon" className='w-[22%] h-[55%] lg:w-[30%] lg:h-[60%]' />
                                <img src="x-icon.png" alt="x-icon" className='w-[22%] h-[55%] lg:w-[30%] lg:h-[60%]' />
                                <img src="https://img.icons8.com/?size=48&id=P7UIlhbpWzZm&format=png" alt="gmail-icon" className='w-[22%] h-[55%] lg:w-[30%] lg:h-[60%]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[40%] lg:flex lg:gap-4'>

                    <div className="bottom w-full h-[100%] lg:w-1/2 lg:hfull flex flex-col items-center rounded-xl text-white bg-black">
                        <div className="box1 w-full h-[12%] px-4 flex items-center font-semibold text-xl">
                            <p>Founded Companies</p>
                        </div>
                        <div className="box1 w-full h-[25%] px-4 flex items-center text-6xl">
                            <p>02</p>
                        </div>
                        <div className="box1 w-full h-[27%] px-4 flex items-center">
                            <div className="left w-full h-full flex items-center justify-between">
                                <div className="w-[75%] h-full left flex items-center justify-between">
                                    <div className='logo-container w-[25%] h-[70%] bg-white flex items-center justify-center rounded-sm lg:w-[15%]'>
                                        <LuPyramid className='text-black text-3xl rotate-[180deg]' />
                                    </div>
                                    <div className="text-container w-[75%] h-[80%] text-sm lg:w-[80%]">
                                        <div className="top h-1/2 flex items-center justify-start gap-4 px-2">
                                            <p className='text-lg'>Vertx</p>
                                            <div className='tag bg-green-700 rounded-sm px-[1rem] py-[0.1rem] text-[0.5rem] text-black'>
                                                <p>CEO</p>
                                            </div>
                                        </div>
                                        <div className="bottom h-1/2 flex items-center justify-between gap-2 px-2">
                                            <p className='text-[0.65rem]'>Founded in 2025. in <span className='font-semibold'>Fintech.</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="right w-[25%] h-full flex items-center justify-center text-[0.7rem] lg:items-start lg:py-4">
                                    <p>View Profile</p>
                                </div>
                            </div>
                        </div>
                        <div className="box1 w-full h-[27%] px-4 flex items-center">
                            <div className="left w-full h-full flex items-center justify-between">
                                <div className="w-[75%] h-full left flex items-center justify-between">
                                    <div className='logo-container w-[25%] h-[70%] bg-white flex items-center justify-center rounded-sm lg:w-[15%]'>
                                        <LuPyramid className='text-black text-3xl rotate-[180deg]' />
                                    </div>
                                    <div className="text-container w-[75%] h-[80%] text-sm lg:w-[80%]">
                                        <div className="top h-1/2 flex items-center justify-start gap-8 px-2">
                                            <p className='text-lg'>Comp 1</p>
                                            <div className='tag bg-blue-200 rounded-sm px-[1rem] py-[0.1rem] text-[0.5rem]'>
                                                <p className='uppercase text-black'>propreitor</p>
                                            </div>
                                        </div>
                                        <div className="bottom h-1/2 flex items-center justify-between gap-2 px-2">
                                            <p className='text-[0.65rem]'>Founded in 2023.Accquired by abc in <span className='font-semibold'>QuickCommerce.</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="right w-[25%] h-full flex items-center justify-center text-[0.7rem] lg:items-start lg:py-4">
                                    <p>View Profile</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom w-full h-[100%] lg:w-1/2 lg:hfull lg:flex flex-col items-center rounded-xl text-white bg-black hidden">
                        <div className="box1 w-full h-[12%] px-4 flex items-center font-semibold text-xl">
                            <p>Founded Companies</p>
                        </div>
                        <div className="box1 w-full h-[25%] px-4 flex items-center text-6xl">
                            <p>03</p>
                        </div>
                        <div className="box1 w-full h-[27%] px-4 flex items-center">
                            <div className="left w-full h-full flex items-center justify-between">
                                <div className="w-[75%] h-full left flex items-center justify-between">
                                    <div className='logo-container w-[25%] h-[70%] bg-white flex items-center justify-center rounded-sm lg:w-[15%]'>
                                        <LuPyramid className='text-black text-3xl rotate-[180deg]' />
                                    </div>
                                    <div className="text-container w-[75%] h-[80%] text-lg flex items-center justify-start lg:w-[80%]">
                                        <p>Company 1</p>
                                    </div>
                                </div>
                                <div className="right w-[25%] h-full flex items-center justify-center text-[0.7rem]">
                                    <p>View Profile</p>
                                </div>
                            </div>
                        </div>
                        <div className="box1 w-full h-[27%] px-4 flex items-center">
                            <div className="left w-full h-full flex items-center justify-between">
                                <div className="w-[75%] h-full left flex items-center justify-between">
                                    <div className='logo-container w-[25%] h-[70%] bg-white flex items-center justify-center rounded-sm lg:w-[15%]'>
                                        <LuPyramid className='text-black text-3xl rotate-[180deg]' />
                                    </div>
                                    <div className="text-container w-[75%] h-[80%] text-lg flex items-center justify-start lg:w-[80%]">
                                        <p>Company 2</p>
                                    </div>
                                </div>
                                <div className="right w-[25%] h-full flex items-center justify-center text-[0.7rem]">
                                    <p>View Profile</p>
                                </div>
                            </div>
                        </div>
                        <div className="box1 w-full h-[27%] px-4 flex items-center">
                            <div className="left w-full h-full flex items-center justify-between">
                                <div className="w-[75%] h-full left flex items-center justify-between">
                                    <div className='logo-container w-[25%] h-[70%] bg-white flex items-center justify-center rounded-sm lg:w-[15%]'>
                                        <LuPyramid className='text-black text-3xl rotate-[180deg]' />
                                    </div>
                                    <div className="text-container w-[75%] h-[80%] text-lg flex items-center justify-start lg:w-[80%]">
                                        <p>Company 3</p>
                                    </div>
                                </div>
                                <div className="right w-[25%] h-full flex items-center justify-center text-[0.7rem]">
                                    <p>View Profile</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Main