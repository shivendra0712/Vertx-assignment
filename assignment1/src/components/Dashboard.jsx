import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import SidebarLaptop from './SidebarLaptop'
import NavTop from './NavTop'
import Navtop2 from './Navtop2 '
import Overview from './Overview'
import MobileNav from './MobileNav'
const Dashboard = () => {
    return (
        <>
            <div className="md:flex lg:flex bg-black">
                <Sidebar />
                <Navbar />
                <SidebarLaptop />
                <div className="w-full h-full overflow-y-hidden bg-black">
                    <NavTop/>
                    <Navtop2/>
                    <Overview/>
                </div>
                <MobileNav/>
            </div>
        </>

    )
}

export default Dashboard