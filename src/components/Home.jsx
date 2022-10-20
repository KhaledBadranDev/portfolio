import {useEffect, useState} from 'react'
import AnimatedLetters from './AnimatedLetters'
import { AiFillYoutube, AiFillGithub } from "react-icons/ai"
import { FaBlogger } from "react-icons/fa"


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArr = ['K', 'h', 'a', 'l', 'e', 'd', ' ', 'B', 'a', 'd', 'r', 'a', 'n']
    const jobArr = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
    }, [])

    return (
        <section className="container mx-auto pt-40 pb-40" id="home">
            <header className="mb-10 flex place-content-center">
                <h1 className="text-5xl font-bold text-teal-500">
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _13`}>,</span>
                    <br />
                    <span className={`${letterClass} _14`}>I&nbsp;</span>
                    <span className={`${letterClass} _15`}>a</span>
                    <span className={`${letterClass} _16`}>m</span>
                    &nbsp;
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArr}
                        idx={17}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArr}
                        idx={17 + nameArr.length}
                    />
                </h1>
            </header>
            <figure className="text-5xl flex justify-center py-3 ">
                <a href="https://www.youtube.com/channel/UCq1qtlU3urNPLd5yIwhht1w" target="_blank" rel="noreferrer">
                    <AiFillYoutube className="sm:ml-8 mr-4 text-xl sm:my-0 mt-5 hover:text-violet-700 text-teal-500 duration-300" style={{ fontSize: '25px' }} />
                </a>
                <a href="https://github.com/ProgrammingGym" target="_blank" rel="noreferrer">
                    <AiFillGithub className="sm:ml-8 mr-4 text-xl sm:my-0 mt-5 hover:text-violet-700 text-teal-500 duration-300" style={{ fontSize: '25px' }} />
                </a>
                <a href="https://programming-gym.blogspot.com/" target="_blank" rel="noreferrer">
                    <FaBlogger className="sm:ml-8 mr-4 text-xl sm:my-0 mt-5 hover:text-violet-700 text-teal-500 duration-300" style={{ fontSize: '25px' }} />
                </a>
            </figure>
        </section>
    )
}

export default Home