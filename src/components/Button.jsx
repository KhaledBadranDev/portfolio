
import { AiOutlineEye, AiFillGithub, AiFillYoutube } from "react-icons/ai"
import {RiMailSendFill} from "react-icons/ri"
import {MdReadMore} from "react-icons/md"

const Button = ({ type, text }) => {
    return (
        <button>
            <a href="#_" className="relative inline-block group">
                <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 dark:text-[#fff] transition-colors duration-300 ease-out border-2 border-teal-500 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-[#000]"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-teal-500 group-hover:-rotate-180 ease"></span>

                    <div className="flex place-content-center justify-center items-center">
                        {type === "visit" &&
                            <>
                                <AiOutlineEye className="relative mt-0.5 mr-2 z-10 dark:text-white" style={{ fontSize: '20px' }} />
                            </>
                        }
                        {type === "github" &&
                            <>
                                <AiFillGithub className="relative mt-0.5 mr-2 z-10 dark:text-white" style={{ fontSize: '20px' }} />
                                <span className="relative"></span>
                            </>
                        }
                        {type === "youtube" &&
                            <>
                                <AiFillYoutube className="relative mt-0.5 mr-2 z-10 dark:text-white" style={{ fontSize: '20px' }} />
                            </>
                        }
                        {type === "Send" &&
                            <>
                                <RiMailSendFill className="relative mt-0.5 mr-2 z-10 dark:text-white" style={{ fontSize: '20px' }} />
                            </>
                        }
                        { type === "Read" &&
                            <>
                                <MdReadMore className="relative mt-0.5 mr-2 z-10 dark:text-white" style={{ fontSize: '20px' }} />
                            </>
                        }
                        { (type === null || type === undefined) &&
                            <>
                            </>
                        }
                        {/* text := e.g. Visit Site, See Code, See Video, Send*/}
                        <span className="relative sm:text-base text-sm">{text}</span>
                    </div>

                </span>
                <span className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-teal-500 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </a>

        </button>
    )
}

export default Button