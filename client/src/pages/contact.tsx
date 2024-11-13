import { Formik } from "formik";
import { Helmet } from "react-helmet-async";
import FormInput from "../components/form/formInput";
import FormTextArea from "../components/form/formTextArea";
import { RxPaperPlane } from "react-icons/rx";
import * as Yup from 'yup'
import { sendForm } from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";
import Button from "../components/common/button";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null)

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required."),
        email: Yup.string().email("Must be a valid email.").required("Email is required."),
        message: Yup.string().required("Message is required.")
    })

    const sendEmail = async (resetForm: () => void) => {
        try {
            await sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formRef.current!, { publicKey: import.meta.env.VITE_PUBLIC_KEY })
            toast('Your message has been sent. Thanks for reaching out!', { type: 'success' })
            resetForm()
        } catch {
            toast('There was a problem sending your message. Please try again later.', { type: 'error' })
        }
    }

    return (
        <>
            <Helmet>
                <title>Contact - Zach's Portfolio</title>
            </Helmet>

            <div className="flex flex-col gap-8">
                <h3 className="font-bold">Contact Me</h3>

                <Formik
                    initialValues={{ name: '', email: '', message: '', error: '' }}
                    onSubmit={(_, {resetForm}) => sendEmail(resetForm)}
                    validationSchema={validationSchema}
                >
                    {({ isSubmitting, handleSubmit }) => (
                        <form ref={formRef} className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8" onSubmit={handleSubmit}>
                            <FormInput name="name" placeholder="Name" autoComplete="name" />
                            <FormInput name="email" placeholder="Email" autoComplete="email" />
                            <FormTextArea
                                name="message"
                                placeholder="Send career opportunities, feedback about the site, or just say hi!"
                                className="resize-none"
                                rows={4}
                                autoComplete="message"
                                containerClassName="sm:col-span-2"
                            />

                            <Button
                                className="sm:col-span-2 bg-black disabled:bg-black dark:bg-white disabled:dark:bg-white dark:hover:bg-slate-200 hover:bg-gray-800 text-white dark:text-black px-4 py-2 rounded-md transition-colors"
                                type="submit"
                                isLoading={isSubmitting}
                                loadingText="Sending"
                            >
                                <div className="flex justify-center items-center gap-2">
                                    <p>Send Message</p>
                                    <RxPaperPlane />
                                </div>
                            </Button>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    )
}