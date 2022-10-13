import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <navbar className='shadow-xl w-full fixed top-0 left-0'>
            <div className='sm:flex items-center justify-between bg-white py-2 sm:px-10 px-7'>
                <span className='font-bold text-2xl flex items-center font-[Poppins] text-gray-800'>
                    <AnchorLink href="#home">
                        Khaled Badran
                    </AnchorLink>
                </span>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-4 top-1 cursor-pointer sm:hidden'>
                    {open ? <ImMenu4 style={{ fontSize: '40px' }} /> : <ImMenu3 style={{ fontSize: '40px' }} />}
                </div>

                <ul className={`sm:flex grid justify-items-end sm:items-center sm:pb-0 pb-6 absolute sm:static bg-white shadow-xl sm:shadow-none sm:z-auto z-[-1] left-0 w-full sm:w-auto sm:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-0' : 'top-[-490px]'}`}>
                    <li className="sm:ml-8 mr-4 text-xl sm:my-0 mt-16">
                        <AnchorLink href="#projects" className='hover:text-cyan-500 duration-300'>
                            Projects
                        </AnchorLink>
                    </li>
                    <li className="sm:ml-8  mr-4 text-xl sm:my-0 mt-5">
                        <AnchorLink href="#about" className='hover:text-cyan-500 duration-300'>
                            About
                        </AnchorLink>
                    </li>
                    <li className="sm:ml-8 mr-4 text-xl sm:my-0 mt-5">
                        <AnchorLink href="#contact" className='hover:text-cyan-500 duration-300'>
                            Contact
                        </AnchorLink>
                    </li>
                    <li>
                        <BsFillMoonStarsFill className="sm:ml-8 mr-4 text-xl sm:my-0 mt-5 hover:text-cyan-500 duration-300" style={{ fontSize: '25px' }} />
                    </li>
                </ul>
            </div>
        </navbar>


        // <div className='shadow-md w-full fixed top-0 left-0'>
        //     <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        //         <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
        // text-gray-800'>
        //             <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        //                 <ion-icon name="logo-ionic"></ion-icon>
        //             </span>
        //             Designer
        //         </div>


        //         <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        //             {open ? <ImMenu4 style={{ fontSize: '40px' }}/>:<ImMenu3 style={{ fontSize: '40px' }}/>}
        //         </div>

        //         <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
        //             <li className="mx-2 md:ml-8 text-xl md:my-0 my-7">Home</li>
        //             <li className="mx-2 md:ml-8 text-xl md:my-0 my-7">Projects</li>
        //             <AnchorLink href="#about">
        //                 <li className="mx-2">About</li>
        //             </AnchorLink>
        //             <li className="mx-2">Contact</li>
        //         </ul>
        //     </div>
        // </div>
    );
}

export default Navbar