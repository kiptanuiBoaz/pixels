import Link from 'next/link';
import { BiMenuAltLeft } from 'react-icons/bi';
import { BsArrowUpRight } from 'react-icons/bs';
import { RiArrowRightUpLine } from 'react-icons/ri';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-transparent mt-2  p-6 md:p-4 fixed top-0 w-full z-10">
            <div className="container mx-auto flex justify-between items-center">


                <div className="px-4 py-2 hidden lg:flex space-x-4 bg-white rounded-3xl">
                    <Link className="text-gray-700 hover:text-gray-950  hover:underline" href="/home">
                        Home
                    </Link>

                    <Link className="text-gray-700 hover:text-gray-950 hover:underline text-gray-800" href="/contact">
                        Contact
                    </Link>
                    <Link className="text-gray-700 hover:text-gray-950 hover:underline text-gray-800" href="/contact">
                        About
                    </Link>
                </div >

                {/* Brand */}

                <Link className="text-white text-lg font-bold text-2xl md:text-2xl lg:text-3xl" href="/">
                    Pixels
                </Link>

                <div className=" flex space-x-2 lg:space-x-3">
                    <button className="bg-white text-gray-800 px-2 px-2 lg:px-4 py-0 rounded-3xl flex inline-block flex items-center justify-center">
                        Contact
                        &nbsp;&nbsp;
                        <RiArrowRightUpLine style={{ color: "rgb(31 41 55)" }} className='text-gray-800' size={20} />
                    </button>
                    <div className="p-1 lg:p-2 text-gray-800 bg-white rounded-3xl cursor-pointer">
                        <BiMenuAltLeft size={20} />
                    </div>
                </div>


            </div>
        </nav>
    );
};

export default Navbar;
