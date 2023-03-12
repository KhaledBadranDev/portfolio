import timelineArr from '../data/timeline'
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai"
import { useEffect, useState } from 'react'

const Timeline = () => {
    // bu default show latest  timeline first
    const [latest, setLatest] = useState(true)

    useEffect(() => {
        // to rerender when the user wants to change the order of the array 
    }, [latest])

    const handelTimelineOrder = () => {
        setLatest(!latest)
        timelineArr.reverse() // reverse the order of the timeline array
    }

    return (
        <div className="mt-14 sm:mx-10 mx-7">
            <div className="w-full">
                <div className="flex items-center justify-between">
                    <h2 className="sm:text-2xl text-xl font-semibold underline underline-offset-[6px] decoration-2 mb-5 text-teal-500">Timeline</h2>
                    <button
                        className="relative py-[1px] pl-1 pr-2 mt-[3px] mb-3 text-gray-800 dark:text-[#fff] group"
                        onClick={handelTimelineOrder}
                    >
                        <span className="absolute inset-0   transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-teal-500 group-hover:bg-teal-500 group-hover:skew-x-12 "></span>
                        <span className="absolute inset-0  transition-all duration-300 ease-out transform skew-x-12 dark:bg-[#2f2e2e] dark:group-hover:bg-black bg-[#d4d4d4] group-hover:bg-[#e5e5e5] group-hover:-skew-x-12"></span>
                        <span className="absolute bottom-0 left-0 hidden  transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-teal-500 -rotate-12"></span>
                        <span className="absolute bottom-0 right-0 hidden transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-teal-500 -rotate-12"></span>
                        <span className="relative flex place-content-center justify-center items-center">
                            {latest &&
                                <AiOutlineArrowDown className="relative mt-0.5 ml-0 mr-1 z-10 dark:text-white" style={{ fontSize: '18px' }} />
                            }
                            {!latest &&
                                <AiOutlineArrowUp className="relative mt-0.5 ml-0 mr-1 z-10 dark:text-white" style={{ fontSize: '18px' }} />
                            }
                            Latest
                        </span>
                    </button>
                </div>
                <ul className="bg-gradient-to-b p-[1px] from-teal-500 to-violet-700">
                    <div className="square-mask relative ml-[2px] -mt-1 pb-5 -mb-1 w-[101%] pt-5 bg-white dark:bg-[#181818] duration-500 ease-in">

                        {timelineArr.map(timelineItem => (
                            <>
                                <li className="relative pt-5 mb-5">
                                    <div className="absolute w-4 h-12 -left-2 pb-[50px] bg-white dark:bg-[#181818] duration-500 ease-in">
                                        <div className='mt-[19px] rounded-full w-0 h-2 dark:shadow-[6px_2px_22px_10px_rgba(20,184,166,1)] shadow-[6px_2px_22px_8px_rgba(109,40,217,1)]'>
                                            <svg className="absolute -mt-[6px] -ml-[5px] fill-black dark:fill-white" aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true">
                                                <path fill-rule="evenodd" d="M8.78 4.97a.75.75 0 010 1.06L2.81 12l5.97 5.97a.75.75 0 11-1.06 1.06l-6.5-6.5a.75.75 0 010-1.06l6.5-6.5a.75.75 0 011.06 0zm6.44 0a.75.75 0 000 1.06L21.19 12l-5.97 5.97a.75.75 0 101.06 1.06l6.5-6.5a.75.75 0 000-1.06l-6.5-6.5a.75.75 0 00-1.06 0z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className=" mt-[10.5px] ml-10 mr-5 list-none list-inside dark:text-[#fff] ">
                                        <h3 className="2xl:text-2xl sm:text-xl text-lg font-bold text-teal-500">{timelineItem.jobTitle}</h3>
                                        <ul className="pl-5 mt-1 list-disc list-inside dark:text-[#AAA]">
                                            <li className="font-semibold">{timelineItem.date}</li>
                                            <li className="font-semibold">{timelineItem.company}</li>
                                            <li >{timelineItem.description}</li>
                                        </ul>
                                    </div>
                                </li>
                            </>
                        ))}
                    </div>
                </ul>
            </div>
        </div>

    )
}

export default Timeline