import React from "react";
import tech from "../../utils/tech.json";
import { Codesandbox, Layout } from "react-feather";

function About() {
    return (
        <main className="p-8 bg-slate-50 dark:bg-slate-800 rounded-3xl mt-2 md:mt-0 mb-10 md:mb-0">
            <h1 className="text-2xl xl:text-3xl font-semibold text-gray-800 dark:text-gray-50 mb-2">
                About
            </h1>
            <hr className="border-dashed border-2 border-gray-300 dark:border-gray-600 mb-5" />
            <article>
                <p className="text-base xl:text-xl text-justify text-neutral-600 dark:text-gray-50">
                    Hi there, I'm fii maarif. I am a Frontend Developer. I have
                    experience in creating and developing responsive and
                    intuitive user interfaces for web applications. I possess
                    skills in HTML, CSS, and JavaScript, as well as experience
                    using frameworks such as ReactJS, Angular and React Native
                    for Mobile.
                </p>
                <p className="mt-5 text-base xl:text-xl text-justify text-neutral-600 dark:text-gray-50">
                    I am also able to work closely with the backend team to
                    ensure seamless integration between the user interface and
                    systems. I am passionate about learning and experimenting
                    with new technologies to create better applications.
                </p>
            </article>
            <div>
                <h1 className="text-2xl xl:text-3xl font-semibold text-gray-800 dark:text-gray-50 my-5">
                    What I Do!
                </h1>
                <div className="grid lg:grid-cols-12 gap-5">
                    <div className="bg-red-50 dark:bg-slate-700 p-3 col-span-12 md:col-span-6 rounded-xl">
                        <div className="bg-emerald-100 dark:bg-slate-500 w-min p-2 rounded-xl mb-2">
                            <Layout size={30} color="#d946ef" />
                        </div>
                        <div>
                            <p className="text-xl text-neutral-800 dark:text-gray-50 font-semibold">
                                Web Development
                            </p>
                            <hr className="my-1" />
                            <p className="text-neutral-600 dark:text-gray-50 text-left">
                                I develop modern, responsive websites using the
                                latest technologies to ensure optimal
                                performance and an outstanding user experience.
                            </p>
                        </div>
                    </div>
                    <div className="bg-emerald-50 dark:bg-slate-700 p-3 col-span-12 md:col-span-6 rounded-xl">
                        <div className="bg-red-100 dark:bg-slate-500 w-min p-2 rounded-xl mb-2">
                            <Codesandbox size={30} color="#fb7185" />
                        </div>
                        <div>
                            <p className="text-xl text-neutral-800 dark:text-gray-50 font-semibold">
                                Mobile Development
                            </p>
                            <hr className="my-1" />
                            <p className="text-neutral-600 dark:text-gray-50 text-left">
                                I create high-performance mobile applications
                                tailored to your needs, ensuring seamless
                                functionality and an engaging user experience
                                across all devices.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-2xl xl:text-3xl font-semibold text-gray-800 dark:text-gray-50 my-5">
                    Languages and Tools
                </h1>
                <div>
                    <div className="flex justify-center gap-5 mt-10 bg-gray-100 dark:bg-slate-700 rounded-2xl overflow-x-auto scrollbar-hide">
                        <div className="relative overflow-hidden px-0 py-7">
                            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none" />
                            <div className="animate-slide flex gap-4 w-max">
                                {tech.map((item, index) => (
                                    <div className="flex items-center bg-white dark:bg-slate-600 shadow-md rounded-full py-1 px-5 gap-1 min-w-max">
                                        <img
                                            key={index}
                                            title={item.alt}
                                            width={22}
                                            height={22}
                                            src={item.image}
                                            alt={item.alt}
                                        />
                                        <p className="text-black dark:text-white">
                                            {item.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;
