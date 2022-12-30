import AnimatedLetters from './AnimatedLetters'
import { useEffect, useState } from 'react'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const sectionHeader = ["A", "b", "o", "u", "t", " ", "M", "e"]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
    }, [])

    return (
        <section className="container mx-auto mt-40" id="about">
            <header>
                <h1 className="mb-10 xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl sm:font-sans font-mono font-bold flex place-content-center text-teal-500">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={sectionHeader}
                    />
                </h1>
            </header>
            <p className="sm:mx-10 mx-5 dark:text-[#fff] flex place-content-start text-justify">
            I am a passionate, athletic full stack software developer and occasional content creator.
            My aim is to make people's lives better & easier by developing applications and websites.
            </p>
            <div className="mt-10 sm:mx-10 mx-5">
                <div className="w-full">
                    <h2 className="sm:text-2xl text-xl font-semibold underline underline-offset-[6px] decoration-2 mb-5 text-teal-500">Timeline</h2>
                    <ul className="bg-gradient-to-b p-[1px] from-teal-500 to-violet-700">
                        <div className="square-mask relative ml-[2px] -mt-1 pb-5 -mb-1 w-[101%] pt-5 bg-white dark:bg-[#181818] duration-500 ease-in">
    
                            <li className="relative pt-5 mb-5">
                                <div className="absolute w-4 h-12 -left-2 pb-[50px] bg-white dark:bg-[#181818] duration-500 ease-in">
                                    <div className='mt-[19px] rounded-full w-0 h-2 dark:shadow-[6px_2px_22px_10px_rgba(20,184,166,1)] shadow-[6px_2px_22px_8px_rgba(109,40,217,1)]'>
                                        <svg className="absolute -mt-[6px] -ml-[5px] fill-black dark:fill-white" aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24"  data-view-component="true">
                                            <path fill-rule="evenodd" d="M8.78 4.97a.75.75 0 010 1.06L2.81 12l5.97 5.97a.75.75 0 11-1.06 1.06l-6.5-6.5a.75.75 0 010-1.06l6.5-6.5a.75.75 0 011.06 0zm6.44 0a.75.75 0 000 1.06L21.19 12l-5.97 5.97a.75.75 0 101.06 1.06l6.5-6.5a.75.75 0 000-1.06l-6.5-6.5a.75.75 0 00-1.06 0z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className= " mt-[10.5px] ml-10 mr-5 list-none list-inside dark:text-[#fff] ">
                                    <h3 className="2xl:text-2xl sm:text-xl text-lg font-bold text-teal-500">Software Developer</h3>
                                    <ul className= "pl-5 mt-1 list-disc list-inside dark:text-[#AAA]">
                                        <li className="font-semibold">12/2021 - ongoing</li>
                                        <li className="font-semibold">At STRAFFR GMBH in Germany </li>
                                        <li >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, nulla error aliquam, nobis nam magni officia illo soluta inventore maxime, repudiandae itaque! Labore quaerat quis quidem ea iure minima velit?</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="relative pt-5 mb-5">
                                <div className="absolute w-4 h-12 -left-2 pb-[50px] bg-white dark:bg-[#181818] duration-500 ease-in">
                                    <div className='mt-[19px] rounded-full w-0 h-2 dark:shadow-[6px_2px_22px_10px_rgba(20,184,166,1)] shadow-[6px_2px_22px_8px_rgba(109,40,217,1)]'>
                                        <svg className="absolute -mt-[6px] -ml-[5px] fill-black dark:fill-white" aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24"  data-view-component="true">
                                            <path fill-rule="evenodd" d="M8.78 4.97a.75.75 0 010 1.06L2.81 12l5.97 5.97a.75.75 0 11-1.06 1.06l-6.5-6.5a.75.75 0 010-1.06l6.5-6.5a.75.75 0 011.06 0zm6.44 0a.75.75 0 000 1.06L21.19 12l-5.97 5.97a.75.75 0 101.06 1.06l6.5-6.5a.75.75 0 000-1.06l-6.5-6.5a.75.75 0 00-1.06 0z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className= " mt-[10.5px] ml-10 mr-5 list-none list-inside dark:text-[#fff] ">
                                    <h3 className="2xl:text-2xl sm:text-xl text-lg font-bold text-teal-500">Freelancing as a Programmer</h3>
                                    <ul className= "pl-5 mt-1 list-disc list-inside dark:text-[#AAA]">
                                        <li className="font-semibold">02/2021 - ongoing</li>
                                        <li className="font-semibold">On Fiver</li>
                                        <li >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, nulla error aliquam, nobis nam magni officia illo soluta inventore maxime, repudiandae itaque! Labore quaerat quis quidem ea iure minima velit?</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="relative pt-5 mb-5">
                                <div className="absolute w-4 h-12 -left-2 pb-[50px] bg-white dark:bg-[#181818] duration-500 ease-in">
                                    <div className='mt-[19px] rounded-full w-0 h-2 dark:shadow-[6px_2px_22px_10px_rgba(20,184,166,1)] shadow-[6px_2px_22px_8px_rgba(109,40,217,1)]'>
                                        <svg className="absolute -mt-[6px] -ml-[5px] fill-black dark:fill-white" aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24"  data-view-component="true">
                                            <path fill-rule="evenodd" d="M8.78 4.97a.75.75 0 010 1.06L2.81 12l5.97 5.97a.75.75 0 11-1.06 1.06l-6.5-6.5a.75.75 0 010-1.06l6.5-6.5a.75.75 0 011.06 0zm6.44 0a.75.75 0 000 1.06L21.19 12l-5.97 5.97a.75.75 0 101.06 1.06l6.5-6.5a.75.75 0 000-1.06l-6.5-6.5a.75.75 0 00-1.06 0z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className= " mt-[10.5px] ml-10 mr-5 list-none list-inside dark:text-[#fff] ">
                                    <h3 className="2xl:text-2xl sm:text-xl text-lg font-bold text-teal-500">Programming Tutor</h3>
                                    <ul className= "pl-5 mt-1 list-disc list-inside dark:text-[#AAA]">
                                        <li className="font-semibold">05/2020 - ongoing</li>
                                        <li className="font-semibold">Sole Proprietor</li>
                                        <li >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, nulla error aliquam, nobis nam magni officia illo soluta inventore maxime, repudiandae itaque! Labore quaerat quis quidem ea iure minima velit?</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="relative pt-5 mb-5">
                                <div className="absolute w-4 h-12 -left-2 pb-[50px] bg-white dark:bg-[#181818] duration-500 ease-in">
                                    <div className='mt-[19px] rounded-full w-0 h-2 dark:shadow-[6px_2px_22px_10px_rgba(20,184,166,1)] shadow-[6px_2px_22px_8px_rgba(109,40,217,1)]'>
                                        <svg className="absolute -mt-[6px] -ml-[5px] fill-black dark:fill-white" aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24"  data-view-component="true">
                                            <path fill-rule="evenodd" d="M8.78 4.97a.75.75 0 010 1.06L2.81 12l5.97 5.97a.75.75 0 11-1.06 1.06l-6.5-6.5a.75.75 0 010-1.06l6.5-6.5a.75.75 0 011.06 0zm6.44 0a.75.75 0 000 1.06L21.19 12l-5.97 5.97a.75.75 0 101.06 1.06l6.5-6.5a.75.75 0 000-1.06l-6.5-6.5a.75.75 0 00-1.06 0z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className= " mt-[10.5px] ml-10 mr-5 list-none list-inside dark:text-[#fff] ">
                                    <h3 className="2xl:text-2xl sm:text-xl text-lg font-bold text-teal-500">Computer Science Student</h3>
                                    <ul className= "pl-5 mt-1 list-disc list-inside dark:text-[#AAA]">
                                        <li className="font-semibold">10/2019 - 11/2022</li>
                                        <li className="font-semibold">At Leibniz University Hannover in Germany</li>
                                        <li >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, nulla error aliquam, nobis nam magni officia illo soluta inventore maxime, repudiandae itaque! Labore quaerat quis quidem ea iure minima velit?</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="relative pt-5 mb-5">
                                <div className="absolute w-4 h-12 -left-2 pb-[50px] bg-white dark:bg-[#181818] duration-500 ease-in">
                                    <div className='mt-[19px] rounded-full w-0 h-2 dark:shadow-[6px_2px_22px_10px_rgba(20,184,166,1)] shadow-[6px_2px_22px_8px_rgba(109,40,217,1)]'>
                                        <svg className="absolute -mt-[6px] -ml-[5px] fill-black dark:fill-white" aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24"  data-view-component="true">
                                            <path fill-rule="evenodd" d="M8.78 4.97a.75.75 0 010 1.06L2.81 12l5.97 5.97a.75.75 0 11-1.06 1.06l-6.5-6.5a.75.75 0 010-1.06l6.5-6.5a.75.75 0 011.06 0zm6.44 0a.75.75 0 000 1.06L21.19 12l-5.97 5.97a.75.75 0 101.06 1.06l6.5-6.5a.75.75 0 000-1.06l-6.5-6.5a.75.75 0 00-1.06 0z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className= " mt-[10.5px] ml-10 mr-5 list-none list-inside dark:text-[#fff] ">
                                    <h3 className="2xl:text-2xl sm:text-xl text-lg font-bold text-teal-500">Technical Foundation Course Student</h3>
                                    <ul className= "pl-5 mt-1 list-disc list-inside dark:text-[#AAA]">
                                        <li className="font-semibold">10/2018- 06/2019</li>
                                        <li className="font-semibold">At Leibniz University Hannover in Germany</li>
                                        <li >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, nulla error aliquam, nobis nam magni officia illo soluta inventore maxime, repudiandae itaque! Labore quaerat quis quidem ea iure minima velit?</li>
                                    </ul>
                                </div>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About