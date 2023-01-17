import { useEffect, useState } from 'react'
import AnimatedLetters from './AnimatedLetters'
import Button from "./Button"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { AiFillYoutube, AiFillGithub } from "react-icons/ai"
import { FaBlogger } from "react-icons/fa"


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const hiArr = ['H', 'i', ',']
    const nameArr = ['I', ' ', 'a', 'm', ' ', 'K', 'h', 'a', 'l', 'e', 'd', ' ', 'B', 'a', 'd', 'r', 'a', 'n', "👋"]
    const jobArr = ['F', 'u', 'l', 'l', ' ', 'S', 't', 'a', 'c', 'k', ' ', 'S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 6500)
    }, [])

    return (
        <section className="container mx-auto pt-40" id="home">
            <header className="mb-10 flex place-content-center 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-base sm:font-sans font-mono font-bold">
                <h1 className=" text-teal-500">
                    <div className="flex place-content-center">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={hiArr}
                            idx={1}
                        />
                        &nbsp;
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArr}
                            idx={hiArr.length}
                        />
                    </div>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArr}
                        idx={hiArr.length + nameArr.length}
                    />
                </h1>
            </header>
            <div className="flex place-content-center sm:mt-40 mt-5">
                <AnchorLink offset='150' href="#about" className='hover:text-violet-700 text-teal-500'>
                    <Button type="Read" text="More About Me" />
                </AnchorLink>
            </div>
            <figure className="text-5xl flex justify-center py-3 ">
                <a href="https://www.youtube.com/channel/UCq1qtlU3urNPLd5yIwhht1w" target="_blank" rel="noreferrer">
                    <AiFillYoutube className="text-xl sm:my-10 my-5 hover:text-violet-700 text-teal-500 duration-300" style={{ fontSize: '25px' }} />
                </a>
                <a href="https://github.com/ProgrammingGym" target="_blank" rel="noreferrer">
                    <AiFillGithub className="md:ml-12 sm:ml-8  ml-4 text-xl sm:my-10 my-5 hover:text-violet-700 text-teal-500 duration-300" style={{ fontSize: '25px' }} />
                </a>
                <a href="https://programming-gym.blogspot.com/" target="_blank" rel="noreferrer">
                    <FaBlogger className="md:ml-12 sm:ml-8 ml-4 text-xl sm:my-10 my-5 hover:text-violet-700 text-teal-500 duration-300" style={{ fontSize: '25px' }} />
                </a>
            </figure>
            <div className="flex place-content-center mt-[70px] mb-60 pb-40">
                <AnchorLink offset='150' href="#projects" className='hover:text-violet-700 text-teal-500'>
                    <div className=" flex items-center justify-center animate-bounce bg-white dark:bg-[#181818] p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full">
                        <svg className="w-12 h-12 text-violet-700" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </AnchorLink>

            </div>
        </section>
    )
}

export default Home