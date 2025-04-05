import { FaBars, FaEllipsisV } from "react-icons/fa";
import { LuPyramid } from "react-icons/lu";

const Sidebar = () => {
    return (
        <>
            <div className="md:hidden lg:hidden flex justify-between items-center bg-black p-4">
                <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" // Replace with actual image URL
                    alt="Profile"
                    className="w-10 h-10 rounded-full bg-white"
                />

                <div className="text-white text-3xl rotate-45deg"> <LuPyramid /></div>

                <button className="text-white">
                    <FaEllipsisV size={20} />
                </button>
            </div>
            <div className="hidden md:flex flex-col items-center w-[60px] h-screen bg-black p-4 space-y-6">

                <div className="w-10 h-10 flex justify-center items-center rounded-full text-black text-3xl bg-white">
                    <LuPyramid />
                </div>
                <div className="w-10 h-10 ">
                    <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Profile"
                        className="w-10 h-10 rounded-full bg-white"
                    />
                </div>
                <div className="mt-auto">
                    <button className="text-white">
                        <FaEllipsisV size={20} />
                    </button>
                </div>
            </div>


        </>
    );
};

export default Sidebar;
