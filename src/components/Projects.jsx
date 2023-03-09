import AnimatedLetters from './AnimatedLetters'
import { useEffect, useState } from 'react'
import Card from './Card'
import webProjectsArr from '../data/webProjects'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const sectionHeader = ["P", "r", "o", "j", "e", "c", "t", "s"]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
    }, [])

    return (
        <section className="container mx-auto mt-40" id="projects">
            <header>
                <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl sm:font-sans font-mono font-bold flex place-content-center text-teal-500 mb-8">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={sectionHeader}
                    />
                </h1>
            </header>

            <div className="relative flex place-content-center m-5">

                {/* the following is for the glowing bag svg */}
                {/* <div className="absolute w-10 h-10 bg-white dark:bg-[#181818] duration-500 ease-in"> */}
                <div className="absolute -mt-[6px] w-10 h-10 bg-white dark:bg-[#181818] duration-500 ease-in">
                    <div className='rounded-full w-0 h-2  sm:mt-[10px] mt-[6px] sm:ml-[12px] ml-[13px]  dark:shadow-[6px_2px_22px_10px_rgba(20,184,166,1)] shadow-[6px_2px_22px_8px_rgba(109,40,217,1)]' >
                        <svg className="absolute sm:w-[24px] w-[16px]  sm:-mt-[1px] sm:-ml-[4px] -ml-[1px]  fill-black dark:fill-white" aria-hidden="true" viewBox="0 0 24 24" version="1.1" data-view-component="true">
                            <path fill-rule="evenodd" d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0121.25 22H2.75A1.75 1.75 0 011 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5V1.75zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 00.25-.25v-8.26A4.233 4.233 0 0118.75 13H5.25a4.233 4.233 0 01-2.75-1.01zm19-3.24a2.75 2.75 0 01-2.75 2.75H5.25A2.75 2.75 0 012.5 8.75v-3a.25.25 0 01.25-.25h18.5a.25.25 0 01.25.25v3zm-6.5-7V4H9V1.75a.25.25 0 01.25-.25h5.5a.25.25 0 01.25.25z"></path>
                        </svg>
                    </div>
                </div>
                {/* end glowing bag svg */}

                <svg className="sm:w-[485px] w-3/4" viewBox="0 0 485 140" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <defs>

                        <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="52.8762" width="52.876" y="216.124" x="33.3145" id="filter0_dddd_120_10501">
                            <feGaussianBlur stdDeviation="7.5" />
                            <feGaussianBlur stdDeviation="10" />
                            <feGaussianBlur stdDeviation="2.5" />
                            <feGaussianBlur stdDeviation="7.5" />
                        </filter>
                        <linearGradient y2="1" x2="0.35345" y1="0" x1="0.37931" id="paint0_linear_120_10501">
                            <stop stop-opacity="0" stop-color="#6d28d9" offset="0.05157" />
                            <stop stop-opacity="0.6" stop-color="#6d28d9" offset="0.09242" />
                            <stop stop-color="#14b8a6" offset="0.44112" />
                            <stop stop-color="#10b981" offset="0.52232" />
                            <stop stop-color="#14b8a6" offset="0.60155" />
                            <stop stop-opacity="0.6" stop-color="#6d28d9" offset="0.89938" />
                            <stop stop-opacity="0" stop-color="#6d28d9" offset="0.92549" />
                        </linearGradient>
                    </defs>
                    <g>
                        <g id="svg_6">
                            <path transform="rotate(-90 242.5 45.1905)" id="svg_1" stroke-width="3" stroke="url(#paint0_linear_120_10501)" d="m213.5002,-197.30948l-0.00012,33.5188c-0.00009,27.486 10.35406,53.9633 28.99996,74.1572l0,0c18.6457,20.195 28.9999,46.672 28.9999,74.158l0,119.831c0,27.786 -10.3371,54.578 -28.9999,75.164l0,0c-18.6628,20.585 -28.99988,47.378 -28.99994,75.164l-0.00007,33.007" />
                            <g transform="rotate(-90 242.562 16.4381)" id="svg_2" filter="url(#filter0_dddd_120_10501)">
                                <circle cx="182.8095" cy="226.12395" id="svg_3" fill="black" transform="matrix(1 0 0 -1 59.7525 242.562)" r="6.43806" />
                                <circle cx="182.8095" cy="226.12395" id="svg_4" stroke-width="3" stroke="white" transform="matrix(1 0 0 -1 59.7525 242.562)" r="4.93806" />
                            </g>

                            <foreignObject x="0" y="85" width="100" height="50">
                                <button className='button w-24 h-9  bg-teal-500 hover:bg-teal-400 rounded-lg cursor-pointer select-none
                                    active:translate-y-2  active:[box-shadow:0_0px_0_0_#115e59,0_0px_0_0_#1b70f841]
                                    active:border-b-[0px]
                                    transition-all duration-120  [box-shadow:0_10px_0_0_#115e59,0_15px_0_0_#1b70f841]
                                    border-b-[1px] border-blue-400
                                '>
                                    <span className='flex flex-col justify-center items-center h-full text-white font-bold sm:text-lg text-xl'>Solo</span>
                                </button>
                            </foreignObject>

                            <foreignObject x="384" y="85" width="100" height="50">
                                <button className='button w-24 h-9 bg-teal-500 hover:bg-teal-400 rounded-lg cursor-pointer select-none
                                    active:translate-y-2  active:[box-shadow:0_0px_0_0_#115e59,0_0px_0_0_#1b70f841]
                                    active:border-b-[0px]
                                    transition-all duration-120 [box-shadow:0_10px_0_0_#115e59,0_15px_0_0_#1b70f841]
                                    border-b-[1px] border-blue-400
                                '>
                                    <span className='flex flex-col justify-center items-center h-full text-white font-bold sm:text-lg text-xl'>Collab</span>
                                </button>
                            </foreignObject>
                        </g>
                    </g>
                </svg>

            </div>


            <main className="2xl:mx-60 xl:mx-50 lg:mx-40 md:mx-20 sm:mx-10 mx-6">
                {webProjectsArr.map(projectObj => (
                    <Card key={projectObj["id"]}
                        imgSrc={projectObj["imgSrc"]}
                        title={projectObj["title"]}
                        techStack={projectObj["techStack"]}
                        briefDescription={projectObj["briefDescription"]}
                        webSiteUrl={projectObj["webSiteUrl"]}
                        gitHubRepoUrl={projectObj["gitHubRepoUrl"]}
                        hasYoutubeVideo={projectObj["hasYoutubeVideo"]}
                        youtubeVideoUrl={projectObj["youtubeVideoUrl"]}
                    />
                ))}
            </main>
        </section>
    );
}

export default Projects