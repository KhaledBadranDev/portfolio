
import Button from "./Button"

const Card = ({ imgSrc, title, techStack, briefDescription }) => {
    return (
        <article className="mt-10 sm:mb-20 mb-12">
            <div className="justify-items-start justify-between h-full shadow-xl shadow-teal-500/60 rounded-2xl overflow-hidden">
                <figure>
                    <img className="w-full object-cover object-center"
                        src={imgSrc} alt="Project Thumbnail" />
                </figure>
                <div className="relative container p-5 pb-2">
                    <h2 className="flex place-content-center lg:text-3xl sm:text-2xl text-lg font-semibold mb-5 dark:text-[#fff]">{title}</h2>
                    <h3 className="lg:text-3xl sm:text-2xl text-lg dark:text-white">Tech Stack:
                    </h3>
                    <div className="container mx-auto flex flex-wrap">
                        {
                            // add spaces between words
                            techStack.map(element => {
                                return (
                                    <>
                                        <label className="text-[#000] bg-amber-200 py-1 px-2 mr-2 mt-2">
                                            {element}
                                        </label>
                                    </>
                                )
                            })
                        }
                    </div>
                    <h3 className="mt-5 lg:text-3xl sm:text-2xl text-lg dark:text-white">Description:
                    </h3>
                    <p className="dark:text-[#AAA] text-justify">{briefDescription}</p>

                    <div className="mt-10 mb-5 flex place-content-center flex-wrap justify-center items-center">
                        <div className="sm:mr-5 mr-3 mb-3">
                            <Button type="visit" text="Visit Site"/>
                        </div>
                        <div className="sm:mr-5 mr-3 mb-3">
                            <Button type="github" text="See Code"/>
                        </div>
                        <div className="sm:mr-5 mr-3 mb-3">
                            <Button type="youtube" text="See Video"/>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Card