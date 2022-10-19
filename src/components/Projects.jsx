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
                <h1 className="text-5xl font-bold flex place-content-center">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={sectionHeader}
                    />
                </h1>
            </header>
            <main>
                { projectsArr.map(projectObj => (
                    // <Card imgSrc="https://picsum.photos/id/188/720/400" imgAlt="test" title="Title Here" briefDescription="Brief Description Here - lorem ipsum dolor sit amet - lorem ipsum dolor sit amet lorem dolor sit amet" />
                    <Card imgSrc={projectObj["imgSrc"]} title={projectObj["title"]} techStack={projectObj["techStack"]} briefDescription={projectObj["briefDescription"]} />
                ))}
            </main>
        </section>
    );
}

export default Projects