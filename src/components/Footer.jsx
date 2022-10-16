import AnchorLink from 'react-anchor-link-smooth-scroll'
import { AiFillYoutube, AiFillGithub } from "react-icons/ai"
import { FaBlogger } from "react-icons/fa"

const Footer = () => {
    return (

        <footer className="shadow-xl w-full">
            <div className='flex place-content-center mx-auto bg-white'>
                <figure className="text-5xl flex justify-center py-3">
                    <a href="https://www.youtube.com/channel/UCq1qtlU3urNPLd5yIwhht1w" target="_blank" rel="noreferrer">
                        <AiFillYoutube className="sm:ml-8 mr-4 text-xl sm:my-0 mt-5 hover:text-cyan-500 duration-300" style={{ fontSize: '25px' }} />
                    </a>
                </figure>
                <figure className="text-5xl flex justify-center py-3">
                    <a href="https://github.com/ProgrammingGym" target="_blank" rel="noreferrer">
                        <AiFillGithub className="sm:ml-8 mr-4 text-xl sm:my-0 mt-5 hover:text-cyan-500 duration-300" style={{ fontSize: '25px' }} />
                    </a>
                </figure>

                <figure className="text-5xl flex justify-center py-3">
                    <a href="https://programming-gym.blogspot.com/" target="_blank" rel="noreferrer">
                        <FaBlogger className="sm:ml-8 mr-4 text-xl sm:my-0 mt-5 hover:text-cyan-500 duration-300" style={{ fontSize: '25px' }} />
                    </a>
                </figure>
            </div>
            <div>
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2022 &nbsp;
                    <AnchorLink href="#home" className="hover:underline">
                        Khaled Badran
                    </AnchorLink>
                    .&nbsp;All rights reserved.
                    <br />
                    Built with ❤️
                </span>
            </div>
        </footer>
    );
}

export default Footer