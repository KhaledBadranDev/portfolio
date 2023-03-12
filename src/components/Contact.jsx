import AnimatedLetters from './AnimatedLetters'
import { useEffect, useState, useCallback } from 'react'
import Button from "./Button"
import { sendEmail } from "../utils/APIs"
import { AiOutlineCheckCircle } from "react-icons/ai"

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const sectionHeader = ["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]

    const [senderEmail, setSenderEmail] = useState("")
    const [senderName, setSenderName] = useState("")
    const [senderMessage, setSenderMessage] = useState("")
    
    const [submissionStatusString, setSubmissionStatusString] = useState("initial")
    const [isError, setIsError] = useState(false)
    const [isSent, setIsSent] = useState(false)
    const [showSubmissionMessage, setShowSubmissionMessage] = useState(false);
    // using arrow functions or binding in JSX is a bad practice as it hurts the performance.
    // because the function is recreated on each render.
    // to solve this issue, use the callback with the useCallback() hook,
    // and assign the dependencies to an empty array.
    const setSenderEmailCallBack = useCallback(event => setSenderEmail(event.target.value), [])
    const setSenderNameCallBack = useCallback(event => setSenderName(event.target.value), [])
    const setSenderMessageCallBack = useCallback(event => setSenderMessage(event.target.value), [])

    const sleep = milliseconds => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const handleOkCallBack = useCallback(event => setShowSubmissionMessage(false),[])

    const handleSubmitCallBack = useCallback(async event => {
        event.preventDefault()

        // subject of the email is the current data + the name of the sender
        let todaysDate = new Date();
        const dd = String(todaysDate.getDate()).padStart(2, '0');
        const mm = String(todaysDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = todaysDate.getFullYear();
        todaysDate = mm + '/' + dd + '/' + yyyy;
        const subject = senderName + " " + todaysDate
        const emailInfoObj = {
            "Sender Email": senderEmail,
            "Sender Name": senderName,
            "Sender Message": senderMessage,
            "_subject": subject,
            "_template": "table",
            "_captcha": "false"
        }
        setSubmissionStatusString("") // just to start rendering the progress bar while the email is being sent.
        setShowSubmissionMessage(false) // to reset the values, to remove the status from the old submission 
        setIsError(false) // to rest the value
        setIsSent(false) // to rest the value
        try {
            const sentEmailStatus = await sendEmail(emailInfoObj)
            //sentEmailStatus looks somehow as follows: {success: 'false', message: 'Email address test is not formatted correctly.'}
            if (sentEmailStatus["success"] === "false") {
                setIsError(true)
                await sleep(1500) // just wait one second and half to make the sending status look nice
                setSubmissionStatusString(sentEmailStatus["message"])
                setIsSent(true)
                setShowSubmissionMessage(true) // to show the sender that the message couldn't be sent
                throw new Error(sentEmailStatus["message"])
            }
            else { // if success
                setIsError(false)
                await sleep(1500) // just wait one second and half to make the sending status look nice
                setSubmissionStatusString("success")
                setIsSent(true)
                setShowSubmissionMessage(true) // to show the sender that the message has been successfully sent.
                resetInputFields() // reset input fields if success
            }
        } catch (error) {
            setIsError(true)
            await sleep(1500) // just wait one second and half to make the sending status look nice
            setSubmissionStatusString(error)
            setIsSent(true)
            setShowSubmissionMessage(true) // to show the sender that the message couldn't be sent
        }
    }, [senderEmail, senderName, senderMessage])


    const resetInputFields = () => {
        setSenderEmail("")
        setSenderName("")
        setSenderMessage("")
    }


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
            <form className="relative" onSubmit={handleSubmitCallBack}>
                <div className="container mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <p className="dark:text-white mx-5 flex place-content-center text-left">
                            Have any questions or just want to connect?
                        </p>
                        <p className="text-white place-content-center">
                            Feel free to reach out!
                        </p>
                    </div>
                    <div className="py-10 px-5  mt-5 lg:w-1/2 md:w-2/3 sm:mx-auto mx-6 shadow-xl shadow-teal-500/60 rounded-2xl body-font">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm dark:text-[#AAA]">
                                        Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full bg-[#323330] bg-opacity-80 rounded border-2 border-teal-500 focus:border-violet-700 focus:bg-[#545454] focus:ring-1 focus:ring-violet-700 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-300 ease-in-out"
                                        value={senderName}
                                        onChange={setSenderNameCallBack}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm dark:text-[#AAA]">
                                        Email
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-[#323330] bg-opacity-80 rounded border-2 border-teal-500 focus:border-violet-700 focus:bg-[#545454] focus:ring-1 focus:ring-violet-700 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        value={senderEmail}
                                        onChange={setSenderEmailCallBack}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm dark:text-[#AAA]">Message</label>
                                    <textarea
                                        required
                                        id="message"
                                        name="message"
                                        className="w-full resize-y bg-[#323330] bg-opacity-80 rounded border-2 border-teal-500 focus:border-violet-700 focus:bg-[#545454] focus:ring-1 focus:ring-violet-700 h-32 text-base outline-none text-white py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                                        value={senderMessage}
                                        onChange={setSenderMessageCallBack}
                                    >

                                    </textarea>
                                </div>
                            </div>
                            <div className="flex justify-center p-2 w-full">
                                <Button type="Send" text="Send" />
                            </div>
                            {/* submission status */}
                            {(submissionStatusString !== "initial" && (isSent === false)) &&
                                <div className="flex place-content-center w-full mt-5">
                                    <svg className="mx-1 mt-[2px] animate-spin h-5 w-5 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-50 text-violet-700" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span className="dark:text-[#AAA] mx-1">Sending ...</span>
                                </div>
                            }
                            {showSubmissionMessage &&
                                <div className="flex place-content-center w-full mt-5 flex-wrap justify-center items-center">
                                    <div className="flex place-content-center w-full flex-wrap justify-center items-center">
                                        <span className="dark:text-[#AAA] mx-1">
                                            {`${!isError ? "Your email has been sent":submissionStatusString}`}
                                        </span>
                                    </div>
                                    <div>
                                        <button className="border-b-4 border-teal-500 hover:border-violet-700 dark:text-white text-gray-800  rounded inline-flex items-center" onClick={handleOkCallBack}>
                                            <AiOutlineCheckCircle className="relative mt-0.5 mr-[2px] z-10 dark:text-white" style={{ fontSize: '18px' }} />
                                            <span className="mr-[2px]">ok</span>
                                        </button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Contact