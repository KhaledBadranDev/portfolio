import AnimatedLetters from './AnimatedLetters'
import { useEffect, useState } from 'react'
import Button from "./Button"


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const sectionHeader = ["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
    }, [])


    return (
        <section className="container mx-auto mt-40 mb-40" id="contact">
            <header>
                <h1 className="mb-10 xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl sm:font-sans font-mono font-bold flex place-content-center text-teal-500">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={sectionHeader}
                    />
                </h1>
            </header>
            {/* contact form code resource: https://tailblocks.cc/ */}
            <form className="relative">
                <div className="container mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <p className="dark:text-white mx-5 flex place-content-center text-left">
                            Have any questions or just want to connect?<br/>
                            Feel free to reach out!
                        </p>
                    </div>
                    <div className="py-10 px-5  mt-5 lg:w-1/2 md:w-2/3 sm:mx-auto mx-6 shadow-xl shadow-teal-500/60 rounded-2xl body-font">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm dark:text-[#AAA]">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-[#323330] bg-opacity-80 rounded border-2 border-teal-500 focus:border-violet-700 focus:bg-[#545454] focus:ring-1 focus:ring-violet-700 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-300 ease-in-out"/>
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="email" className="leading-7 text-sm dark:text-[#AAA]">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-[#323330] bg-opacity-80 rounded border-2 border-teal-500 focus:border-violet-700 focus:bg-[#545454] focus:ring-1 focus:ring-violet-700 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="message" className="leading-7 text-sm dark:text-[#AAA]">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-[#323330] bg-opacity-80 rounded border-2 border-teal-500 focus:border-violet-700 focus:bg-[#545454] focus:ring-1 focus:ring-violet-700 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="flex justify-center p-2 w-full">
                                <Button type="Send" text="Send"/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Contact