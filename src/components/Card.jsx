
import AnchorLink from "react-anchor-link-smooth-scroll"
import Button from "./Button"

const Card = ({ projectId, imgSrc, title, techStack, briefDescription, hasUrl, webSiteUrl, hasGitHubRepoUrl, gitHubRepoUrl, hasYoutubeVideo, youtubeVideoUrl }) => {
    return (
        <article className="mt-10 sm:mb-20 mb-12">
            <div className="justify-items-start justify-between h-full shadow-xl shadow-teal-500/60 rounded-2xl overflow-hidden">
                <div className="backdrop-blur-sm dark:bg-black/10 bg-black/50 transition duration-300 ease-in-out">
                    <figure>
                        {/* 
                            the conditional rendering here is just to change 
                            the a tag to an anchor tag if the user clicks on visiting this portfolio.
                            Instead of opening a new tap, we just scroll up the home section/page
                            */}
                        {webSiteUrl === "https://www.khaledbadran.ca" &&
                            <AnchorLink href="#home">
                                <img className="w-full object-cover object-center opacity-60 hover:opacity-95 transition duration-150 ease-in"
                                    src={imgSrc} alt="Project Thumbnail" />
                            </AnchorLink>
                        }
                        {(webSiteUrl !== "https://www.khaledbadran.ca" && hasUrl) &&
                            <a href={webSiteUrl} target="_blank" rel="noreferrer">
                                <img className="w-full object-cover object-center opacity-60 hover:opacity-95 transition duration-150 ease-in"
                                    src={imgSrc} alt="Project Thumbnail" />
                            </a>
                        }
                        {(webSiteUrl !== "https://www.khaledbadran.ca" && !hasUrl) &&
                            <img className="w-full object-cover object-center opacity-60 hover:opacity-95 transition duration-150 ease-in"
                                src={imgSrc} alt="Project Thumbnail" />
                        }
                    </figure>
                </div>
                <div className="relative container p-5 pb-2">
                    <h2 className="flex place-content-center lg:text-3xl sm:text-2xl text-lg font-semibold mb-5 dark:text-[#fff]">{title}</h2>
                    <h3 className="mt-10 lg:text-3xl sm:text-2xl text-lg dark:text-white">Tech Stack:
                    </h3>
                    <div className="container mx-auto flex flex-wrap">
                        {
                            // add spaces between words
                            techStack.map(element => {
                                return (
                                    <div key={projectId+element}>
                                        <label className="text-[#000] bg-amber-200 py-1 px-2 mr-2 mt-2">
                                            {element}
                                        </label>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h3 className="mt-5 lg:text-3xl sm:text-2xl text-lg dark:text-white">Description:
                    </h3>
                    <p className="dark:text-[#AAA] text-justify">{briefDescription}</p>

                    <div className="mt-[55px] mb-5 flex place-content-center flex-wrap justify-center items-center">
                        {hasUrl &&
                            <div className="sm:mx-5 mx-3 mb-3">
                                <Button type="visit" text="Visit Site" url={webSiteUrl} />
                            </div>
                        }
                        {hasGitHubRepoUrl &&
                            <div className="sm:mx-5 mx-3 mb-3">
                                <Button type="github" text="See Code" url={gitHubRepoUrl} />
                            </div>
                        }
                        {hasYoutubeVideo &&
                            <div className="sm:mx-5 mx-3 mb-3">
                                <Button type="youtube" text="See Video" url={youtubeVideoUrl} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Card