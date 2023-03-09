import AnchorLink from 'react-anchor-link-smooth-scroll'
import { AiFillYoutube, AiFillGithub } from "react-icons/ai"
import { FaBlogger } from "react-icons/fa"

const Footer = () => {
    return (

        <footer className="container mx-auto pb-5">
            <hr className="sm:mx-auto mx-5"/>
            <div className='flex place-content-center mx-auto'>
                <figure className="text-5xl flex justify-center py-3">
                    <a href="https://www.youtube.com/channel/UCq1qtlU3urNPLd5yIwhht1w" target="_blank" rel="noreferrer">
                        <AiFillYoutube className="sm:ml-8 mr-4 text-xl mt-5 text-teal-500 hover:text-violet-700 duration-300" style={{ fontSize: '25px' }} />
                    </a>
                </figure>
                <figure className="text-5xl flex justify-center py-3">
                    <a href="https://github.com/KhaledBadranDev" target="_blank" rel="noreferrer">
                        <AiFillGithub className="sm:ml-8 mr-4 text-xl mt-5 text-teal-500 hover:text-violet-700 duration-300" style={{ fontSize: '25px' }} />
                    </a>
                </figure>

                <figure className="text-5xl flex justify-center py-3">
                    <a href="https://khaledbadran.blogspot.com/" target="_blank" rel="noreferrer">
                        <FaBlogger className="sm:ml-8 mr-4 text-xl mt-5 text-teal-500 hover:text-violet-700 duration-300" style={{ fontSize: '25px' }} />
                    </a>
                </figure>
            </div>
            <div>
                <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
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