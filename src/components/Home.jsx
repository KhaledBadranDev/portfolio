import { useEffect, useState } from 'react'
import AnimatedLetters from './AnimatedLetters'

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
        <article className="mt-20 m-12 flex place-content-center">
            <h1 className="text-5xl">
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                &nbsp;
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArr}
                    idx={15}
                />
                <br />
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArr}
                    idx={15 + nameArr.length}
                />
            </h1>
        </article>
    )
}

export default Home