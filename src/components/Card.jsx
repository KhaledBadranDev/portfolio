
import Button from "./Button"
import { AiFillYoutube, AiFillGithub } from "react-icons/ai"

const Card = ({ imgSrc, title, techStack, briefDescription }) => {
    return (
        <article className="my-10">
            <div className="justify-items-start justify-between h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <figure>
                    <img className="w-full object-cover object-center"
                        src={imgSrc} alt="Project Thumbnail" />
                </figure>
                <div className="relative container p-5 pb-2">
                    <h2 className="flex place-content-center text-3xl font-semibold mb-3">{title}</h2>
                    <h3 className="text-2xl">Tech Stack:
                    </h3>
                    <p className="mb-3">{techStack}</p>

                    <h3 className="text-2xl">Description:
                    </h3>
                    <p className="mb-3">{briefDescription}</p>

                    <div className="mt-5 flex place-content-center justify-center items-center">
                        <Button btnType="more" />
                    </div>
                    <div className="flex place-content-center mt-2">
                        <a href="https://github.com/ProgrammingGym" target="_blank" rel="noreferrer">
                            <AiFillGithub className="hover:text-cyan-500 duration-300 mr-2" style={{ fontSize: '40px' }} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCq1qtlU3urNPLd5yIwhht1w" target="_blank" rel="noreferrer">
                            <AiFillYoutube className=" hover:text-cyan-500 duration-300" style={{ fontSize: '40px' }} />
                        </a>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Card