import CustomForm from "@/components/form";
import React from "react";
import { Send } from "react-feather";

function Contact() {
    return (
        <main className="p-8 bg-slate-50 rounded-3xl">
            <h1 className="text-2xl font-semibold text-gray-800 mb-5">
                Contact
            </h1>
            <article className="py-5 w-full md:w-8/12 text-justify">
                <p className="text-lg text-neutral-600">I appreciate your interest in reaching out to me.</p>
                <p className="text-lg text-neutral-600 py-2">
                    If you'd like to get in touch or have any questions, please
                    feel free to send me a message through the contact form
                    below.
                </p>
                <p className="text-lg text-neutral-600">
                    I'll do my best to respond promptly. Thank you for your
                    attention.
                </p>
            </article>
            <div className="bg-slate-100 p-10 rounded-3xl">
                <CustomForm type="text" label="name" />
                <CustomForm type="email" label="email" />
                <CustomForm type="textarea" label="message" />
                <button className="mt-4 flex bg-indigo-500 text-white py-3 px-6 rounded-xl hover:bg-indigo-600 transition duration-300">
                    <Send size={19} className="mr-1" />
                    Submit
                </button>
            </div>
        </main>
    );
}

export default Contact;
