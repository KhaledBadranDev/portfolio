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
                <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl sm:font-sans font-mono font-bold flex place-content-center text-teal-500">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={sectionHeader}
                    />
                </h1>
            </header>
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