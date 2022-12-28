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
        <section className="container mx-auto mt-40 mb-40" id="about">
            <header>
                <h1 className="mb-10 xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl sm:font-sans font-mono font-bold flex place-content-center text-teal-500">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={sectionHeader}
                    />
                </h1>
            </header>
            <p className="sm:mx-10 mx-5 dark:text-[#fff] flex place-content-center text-justify">
            I am a passionate, athletic full stack software developer and occasional content creator.<br/>
            My aim is to make people's lives better & easier by developing applications and websites.
            </p>
        </section>
    );
}

export default About