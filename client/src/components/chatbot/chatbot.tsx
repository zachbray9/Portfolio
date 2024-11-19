import { useState } from "react";
import { RxChevronDown, RxChevronUp, RxPaperPlane } from "react-icons/rx";
import FormInput from "../form/formInput";
import Button from "../common/button";
import { Formik } from "formik";
import { FiTrash } from "react-icons/fi";
import Message from "../../models/message";
import { GoDependabot } from "react-icons/go";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])

    return (
        <div className="fixed bottom-8 right-8 w-80 rounded-md border bg-bg-light dark:bg-bg-dark dark:border-gray-800">
            <button className="flex items-center justify-between px-6 py-3 w-full border-b dark:border-gray-800 hover:underline" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
                <div className="flex flex-col items-start">
                    <p className="text-xs font-semibold">Chat with</p>
                    <div className="flex items-center gap-2">
                        <span className="size-2 bg-emerald-500 rounded-full animate-pulse" />
                        <p className="text-sm font-semibold">Zach Support</p>
                    </div>
                </div>

                {!isOpen ? <RxChevronUp /> : <RxChevronDown />}
            </button>

            <div className={`flex flex-col justify-between overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "h-96 opacity-100" : "h-0 opacity-0"}`} aria-hidden={!isOpen}>
                <div className="overflow-y-auto p-3">
                    {
                        messages && messages.length > 0 ? (
                            messages.map(message => (
                                <div key={message.message} className={`flex ${message.isUser ? "justify-end" : "justify-start"} items-center mb-3`}>
                                    {!message.isUser && <GoDependabot />}
                                    <div className={`${message.isUser ? "bg-black dark:bg-white text-white dark:text-black" : "bg-white dark:bg-black"} rounded border px-3 py-2`}>
                                        <p className="text-sm">{message.message}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col justify-center items-center gap-2 text-center">
                                <GoDependabot size={20}/>
                                <p>Send a message to start the chat!</p>
                                <p className="text-sm text-muted">You can ask the bot anything about me and it will help to find the answer!</p>
                            </div>
                        )
                    }
                </div>

                <div className="border-t dark:border-gray-800 w-full px-2 py-3">
                    <Formik
                        initialValues={{ message: '' }}
                        onSubmit={(values, { resetForm }) => {
                            const newMessage: Message = { isUser: true, message: values.message }
                            setMessages([...messages, newMessage])
                            resetForm()
                        }}
                    >
                        {({ isSubmitting, handleSubmit, values }) => (
                            <form onSubmit={handleSubmit} className="flex justify-center items-center gap-2 w-full">
                                <Button
                                    className="border p-2 text-red-500 dark:border-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                                    onClick={() => {
                                        setMessages([])
                                    }}
                                    type="button"
                                    disabled={messages.length === 0}
                                >
                                    <FiTrash />
                                </Button>

                                <FormInput name="message" placeholder="Ask something..." autoComplete="off" className="text-sm h-9" wrapperClassName="w-full" />

                                <Button
                                    className="border p-2 bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 disabled:opacity-50 disabled:pointer-events-none transition-colors"
                                    disabled={!values.message}
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