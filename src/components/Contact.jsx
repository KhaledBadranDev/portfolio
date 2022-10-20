import AnimatedLetters from './AnimatedLetters'
import { useEffect, useState } from 'react'


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
                <h1 className="mb-10 text-5xl font-bold flex place-content-center text-teal-500">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={sectionHeader}
                    />
                </h1>
            </header>
            <p className="dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis veniam, nesciunt eos voluptate adipisci ullam.
                Ad necessitatibus vero cumque suscipit iste, minus veritatis
                tenetur vel illum natus doloremque quisquam commodi maxime eaque dicta
            </p>
        </section>
    );
}

export default Contact