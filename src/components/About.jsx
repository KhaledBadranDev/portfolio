import AnimatedLetters from './AnimatedLetters'
import Timeline from './Timeline'
import { useEffect, useState } from 'react'
import Button from "./Button"

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
            <div>
                <p className="sm:mx-10 mx-5 dark:text-[#fff] flex place-content-start text-justify">
                I am a passionate, athletic, full stack software developer and occasional content creator.
                My aim is to make people's lives better & easier by developing applications and websites.
                I also love to teach coding as I believe that programming can empower people to achieve their full potential and live a better life.
                This is why I occasionally post coding and tech videos. Aside from that,
                I am a very athletic person as I regularly practice Olympic weightlifting and Powerlifting.
                Hence, I also occasionally post some sports content.
                </p>
                <p className="sm:mx-10 mx-5 mt-10 dark:text-[#fff] flex place-content-center">
                    Feel free to check out my YouTube channel.
                </p>
                <div className="mt-3 mb-5 flex place-content-center flex-wrap justify-center items-center">
                    <div className="sm:mx-5 mx-2 mb-3">
                        <Button type="youtube" text="Khaled Badran" url="https://www.youtube.com/channel/UCq1qtlU3urNPLd5yIwhht1w" />
                    </div>
                </div>
            </div>
            <Timeline>
            </Timeline>
        </section>
    );
}

export default About