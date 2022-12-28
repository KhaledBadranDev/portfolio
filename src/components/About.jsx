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
            <p className="sm:mx-10 mx-5 dark:text-[#fff] flex place-content-start text-justify">
            I am a passionate, athletic full stack software developer and occasional content creator.
            My aim is to make people's lives better & easier by developing applications and websites.
            </p>

            <ul className= "mt-10 sm:mx-10 mx-5 list-none list-inside dark:text-[#fff] ">
                <li className= "mb-8 ">
                    <p className="font-semibold ">STRAFFR GMBH in Germany</p>
                    <ul className= "pl-5 mt-1 list-disc list-inside">
                        <li className="text-teal-500 font-bold">Software Developer | 12/2021 - ongoing</li>
                        <li className="dark:text-[#AAA]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, nulla error aliquam, nobis nam magni officia illo soluta inventore maxime, repudiandae itaque! Labore quaerat quis quidem ea iure minima velit?</li>
                    </ul>
                </li>
                <li className= "mb-8">
                    <p className="font-semibold">Fiver</p>
                    <ul className= "pl-5 mt-1 list-disc list-inside">
                        <li className="text-teal-500 font-bold">Freelancing as a Programmer | 02/2021 - ongoing</li>
                        <li className="dark:text-[#AAA]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, nulla error aliquam, nobis nam magni officia illo soluta inventore maxime, repudiandae itaque! Labore quaerat quis quidem ea iure minima velit?</li>
                    </ul>
                </li>
                <li className= "mb-8 ">
                    <p className="font-semibold">Sole Proprietorship</p>
                    <ul className= "pl-5 mt-1 list-disc list-inside">
                        <li className="text-teal-500 font-bold">Programming Tutor | 05/2020 - ongoing</li>
                        <li className="dark:text-[#AAA]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, nulla error aliquam, nobis nam magni officia illo soluta inventore maxime, repudiandae itaque! Labore quaerat quis quidem ea iure minima velit?</li>
                    </ul>
                </li>
                <li className= "mb-8">
                    <p className="font-semibold">Leibniz University Hannover in Germany</p>
                    <ul className= "pl-5 mt-1 list-disc list-inside">
                        <li className="text-teal-500 font-bold">Student | 10/2019 - 11/2022</li>
                        <li className="dark:text-[#AAA]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, nulla error aliquam, nobis nam magni officia illo soluta inventore maxime, repudiandae itaque! Labore quaerat quis quidem ea iure minima velit?</li>
                    </ul>
                </li>
                <li className= "mb-8">
                    <p className="font-semibold">Leibniz University Hannover in Germany</p>
                    <ul className= "pl-5 mt-1 list-disc list-inside">
                        <li className="text-teal-500 font-bold">Student | 10/2018- 06/2019</li>
                        <li className="dark:text-[#AAA]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, nulla error aliquam, nobis nam magni officia illo soluta inventore maxime, repudiandae itaque! Labore quaerat quis quidem ea iure minima velit?</li>
                    </ul>
                </li>
            </ul>
        </section>
    );
}

export default About