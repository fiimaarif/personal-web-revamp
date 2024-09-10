import CustomForm from "@/components/form";
import React from "react";
import { Send } from "react-feather";

function Contact() {
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    return (
        <main className="p-8 bg-slate-50 dark:bg-slate-800 rounded-3xl">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-50 mb-5">
                Contact
            </h1>
            <article className="py-5 w-full md:w-full xl:w-8/12">
                <p className="text-base md:text-lg text-neutral-600 dark:text-gray-50">I appreciate your interest in reaching out to me.</p>
                <p className="text-base md:text-lg text-neutral-600 dark:text-gray-50">I'll do my best to respond promptly.</p>
                <p className="text-base md:text-lg text-neutral-600 dark:text-gray-50">Thank you for your attention.</p>
            </article>
            <div className="bg-slate-100 dark:bg-slate-700 p-10 rounded-3xl">
                <form action={`https://formspree.io/f/${formspreeId}`} method="POST">
                    <CustomForm type="text" label="name" name="name" />
                    <CustomForm type="email" label="email" name="email" />
                    <CustomForm type="textarea" label="message" name="message" />
                    <button type="submit" className="mt-4 flex bg-indigo-500 text-white py-3 px-6 rounded-xl hover:bg-indigo-600 transition duration-300">
                        <Send size={19} className="mr-1" />
                        Submit
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Contact;
