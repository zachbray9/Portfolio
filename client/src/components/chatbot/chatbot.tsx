import { useState } from "react";
import { RxChevronDown, RxChevronUp, RxPaperPlane } from "react-icons/rx";
import FormInput from "../form/formInput";
import Button from "../common/button";
import { Formik } from "formik";
import { FiTrash } from "react-icons/fi";
import Spinner from "../common/spinner";
import ChatbotMessage from "./chatbotMessage";
import { RiRobot2Line } from "react-icons/ri";
import useChatbot from "../../hooks/useChatbot";

export default function Chatbot() {
    const {isThinking, messageThread, lastMessageRef, submitMessage, clearThread} = useChatbot()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="fixed bottom-8 right-8 w-80 rounded-md border bg-bg-light dark:bg-background dark:border-gray-800">
            <button className="flex items-center justify-between px-6 py-3 w-full border-b dark:border-gray-800 hover:underline" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
                <div className="flex flex-col items-start">
                    <p className="text-xs font-semibold">Chat with</p>
                    <div className="flex items-center gap-2">
                        <span className="size-2 bg-emerald-500 rounded-full animate-pulse" />
                        <p className="text-sm font-semibold">ZachBot</p>
                    </div>
                </div>

                {!isOpen ? <RxChevronUp /> : <RxChevronDown />}
            </button>

            <div className={`flex flex-col justify-between overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "h-80 sm:h-96 opacity-100" : "h-0 opacity-0"}`} aria-hidden={!isOpen}>
                <div className="flex flex-col gap-4 overflow-y-auto overflow-x-hidden p-3">
                    {
                        messageThread && messageThread.length > 0 ? (
                            messageThread.map((message, index) => (
                                <ChatbotMessage key={index} role={message.role} message={message.message} />
                            ))
                        ) : (
                            <div className="flex flex-col justify-center items-center gap-2 text-center">
                                <RiRobot2Line size={20} />
                                <p>Send a message to start the chat!</p>
                                <p className="text-sm text-muted-light dark:text-muted-dark">You can ask the bot anything about me and it will help to find the answer!</p>
                            </div>
                        )
                    }

                    {isThinking &&
                        <div className="flex justify-center items-center gap-1 text-xs text-muted-light dark:text-muted-dark">
                            <Spinner size={16} />
                            <span>Thinking...</span>
                        </div>
                    }
                    
                    {/* Reference for the bot to autoscroll when new text is added */}
                    <div ref={lastMessageRef}></div>
                </div>

                <div className="border-t dark:border-gray-800 w-full px-2 py-3">
                    <Formik
                        initialValues={{ message: '' }}
                        onSubmit={(values, { resetForm }) => {
                            resetForm()
                            submitMessage(values.message)
                        }}
                    >
                        {({ handleSubmit, values }) => (
                            <form onSubmit={handleSubmit} className="flex justify-center items-center gap-2 w-full">
                                <Button
                                    className="border p-2 text-red-500 dark:border-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                                    onClick={clearThread}
                                    type="button"
                                    disabled={messageThread.length === 0 || isThinking}
                                >
                                    <FiTrash />
                                </Button>

                                <FormInput name="message" placeholder="Ask something..." autoComplete="off" className="text-sm h-9" wrapperClassName="w-full" />

                                <Button
                                    className="border p-2 bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 disabled:opacity-50 disabled:pointer-events-none transition-colors"
                                    disabled={!values.message || isThinking}
                                    type="submit"
                                >
                                    <RxPaperPlane />
                                </Button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}