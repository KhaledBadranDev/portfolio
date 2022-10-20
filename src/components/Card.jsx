
import Button from "./Button"

const Card = ({ imgSrc, title, techStack, briefDescription }) => {
    return (
        <article className="my-10">
            <div className="justify-items-start justify-between h-full shadow-xl shadow-teal-500/60 rounded-2xl overflow-hidden">
                <figure>
                    <img className="w-full object-cover object-center"
                        src={imgSrc} alt="Project Thumbnail" />
                </figure>
                <div className="relative container p-5 pb-2">
                    <h2 className="flex place-content-center text-3xl font-semibold mb-3 dark:text-[#fff]">{title}</h2>
                    <h3 className="text-2xl dark:text-white">Tech Stack:
                    </h3>
                    <label className="mb-3 dark:text-[#AAA]">{techStack}</label>

                    <h3 className="text-2xl dark:text-white">Description:
                    </h3>
                    <p className="mb-3 dark:text-[#AAA]">{briefDescription}</p>

                    <div className="mt-10 mb-5 flex place-content-center justify-center items-center">
                        <div className="mr-5">
                            <Button type="visit"/>
                        </div>
                        <div className="mr-5">
                            <Button type="github"/>
                        </div>
                        <div className="mr-5">
                            <Button type="youtube"/>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Card