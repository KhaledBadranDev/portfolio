import { useEffect, useState } from 'react'
import AnimatedLetters from './AnimatedLetters'
import { AiFillYoutube, AiFillGithub } from "react-icons/ai"
import { FaBlogger } from "react-icons/fa"

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArr = ['K', 'h', 'a', 'L', 'e', 'd', ' ', 'B', 'a', 'd', 'r', 'a', 'n']
    const jobArr = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
    }, [])

    return (
        <div>
            <article className="mt-20 m-12 flex place-content-center">
                <h1 className="text-5xl">
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
            </article>
            <div className="text-5xl flex justify-center py-3 ">
                <a href="https://www.youtube.com/channel/UCq1qtlU3urNPLd5yIwhht1w" target="_blank">
                    <AiFillYoutube className="sm:ml-8 mr-4 text-xl sm:my-0 mt-5 hover:text-cyan-500 duration-300" style={{ fontSize: '25px' }} />
                </a>
                <a href="https://github.com/ProgrammingGym" target="_blank">
                    <AiFillGithub className="sm:ml-8 mr-4 text-xl sm:my-0 mt-5 hover:text-cyan-500 duration-300" style={{ fontSize: '25px' }} />
                </a>
                <a href="https://programming-gym.blogspot.com/" target="_blank">
                    <FaBlogger className="sm:ml-8 mr-4 text-xl sm:my-0 mt-5 hover:text-cyan-500 duration-300" style={{ fontSize: '25px' }} />
                </a>
            </div>
        </div>
    )
}

export default Home