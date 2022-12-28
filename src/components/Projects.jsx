import AnimatedLetters from './AnimatedLetters'
import { useEffect, useState } from 'react'
import Card from './Card'
import projectsArr from '../data/constants'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const sectionHeader = ["P", "r", "o", "j", "e", "c", "t", "s"]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
    }, [])

    return (
        <section className="container mx-auto" id="projects">
            <header>
                <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl sm:font-sans font-mono font-bold flex place-content-center text-teal-500">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={sectionHeader}
                    />
                </h1>
            </header>
            <main className="2xl:mx-60 xl:mx-50 lg:mx-40 md:mx-20 sm:mx-10 mx-6">
                { projectsArr.map(projectObj => (
                    <Card imgSrc={projectObj["imgSrc"]} title={projectObj["title"]} techStack={projectObj["techStack"]} briefDescription={projectObj["briefDescription"]} />
                ))}
            </main>
        </section>
    );
}

export default Projects