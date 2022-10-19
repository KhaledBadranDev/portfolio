import { useState} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { BsFillMoonStarsFill } from "react-icons/bs";

import useTheme from "../hooks/useTheme"
import useThemeUpdate from "../hooks/useThemeUpdate"


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const darkMode = useTheme()
    const toggleTheme = useThemeUpdate()

    return (
        <div className={darkMode ? "dark" : ""}>
            <nav className="z-20 shadow-xl w-full fixed top-0 left-0 transition-all duration-500 ease-in bg-white dark:bg-[#212121]">
                <div className='container mx-auto px-20 sm:px-7 py-2 sm:flex items-center justify-between'>
                    <span className='font-bold text-2xl flex items-center font-[Poppins] text-gray-800'>
                        <AnchorLink href="#home">
                            Khaled Badran
                        </AnchorLink>
                    </span>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-4 top-1 cursor-pointer sm:hidden'>
                        {open ? <ImMenu4 style={{ fontSize: '40px' }} /> : <ImMenu3 style={{ fontSize: '40px' }} />}
                    </div>

                    <ul className={`sm:flex grid justify-items-end sm:items-center sm:pb-0 pb-6 absolute sm:static dark:bg-[#212121] bg-white shadow-xl sm:shadow-none sm:z-auto z-[-1] left-0 w-full sm:w-auto sm:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-0' : 'top-[-490px]'}`}>
                        <li className="sm:ml-8 mr-4 text-xl sm:my-0 mt-16">
                            <AnchorLink href="#projects" className='hover:text-indigo-700 duration-300'>
                                Projects
                            </AnchorLink>
                        </li>
                        <li className="sm:ml-8  mr-4 text-xl sm:my-0 mt-5">
                            <AnchorLink href="#about" className='hover:text-indigo-700 duration-300'>
                                About
                            </AnchorLink>
                        </li>
                        <li className="sm:ml-8 mr-4 text-xl sm:my-0 mt-5">
                            <AnchorLink href="#contact" className='hover:text-indigo-700 duration-300'>
                                Contact
                            </AnchorLink>
                        </li>
                        <li>
                            <BsFillMoonStarsFill onClick={() => toggleTheme()} className="sm:ml-8 mr-4 text-xl sm:my-0 mt-5 hover:text-indigo-700 duration-300" style={{ fontSize: '25px' }} />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar