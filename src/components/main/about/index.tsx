import React from "react";
import tech from "../../utils/tech.json";
import { Codesandbox, Layout, Smartphone } from "react-feather";

function About() {
    return (
        <main className="p-8 bg-slate-50 rounded-3xl">
            <h1 className="text-2xl xl:text-3xl font-semibold text-gray-800 mb-5">
                About
            </h1>
            <article>
                <p className="text-lg xl:text-xl text-justify text-neutral-600">
                    Hi there, I'm fii maarif. I am a Frontend Developer. I have
                    experience in creating and developing responsive and
                    intuitive user interfaces for web applications. I possess
                    skills in HTML, CSS, and JavaScript, as well as experience
                    using frameworks such as ReactJS, Angular and React Native
                    for Mobile.
                </p>
                <p className="mt-5 text-lg xl:text-xl text-justify text-neutral-600">
                    I am also able to work closely with the backend team to
                    ensure seamless integration between the user interface and
                    systems. I am passionate about learning and experimenting
                    with new technologies to create better applications.
                </p>
            </article>
            <div>
                <h1 className="text-2xl xl:text-3xl font-semibold text-gray-800 my-5">
                    What I Do!
                </h1>
                <div className="grid grid-cols-12 gap-5">
                    <div className="bg-red-50 p-3 col-span-12 md:col-span-6 rounded-xl">
                        <div className="flex">
                            <Layout
                                size={50}
                                color="#d946ef"
                                className="w-1/3 md:w-1/4 mr-3"
                            />
                            <div>
                                <p className="text-xl text-neutral-800 font-semibold">
                                    Web Development
                                </p>
                                <p className="text-neutral-600 text-left">
                                    I develop modern, responsive websites using
                                    the latest technologies to ensure optimal
                                    performance and an outstanding user
                                    experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-emerald-50 p-3 col-span-12 md:col-span-6 rounded-xl">
                        <div className="flex">
                            <Codesandbox
                                size={50}
                                color="#fb7185"
                                className="w-1/3 md:w-1/4 mr-3"
                            />
                            <div>
                                <p className="text-xl text-neutral-800 font-semibold">
                                    Mobile Development
                                </p>
                                <p className="text-neutral-600 text-left">
                                    I create high-performance mobile
                                    applications tailored to your needs,
                                    ensuring seamless functionality and an
                                    engaging user experience across all devices.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-2xl xl:text-3xl font-semibold text-gray-800 my-5">
                    Languages and Tools
                </h1>
                <div>
                    <div className="flex flex-wrap justify-center gap-5 mt-10 bg-gray-100 p-7 rounded-2xl">
                        {tech.map((item, index) => (
                            <img
                                title={item.alt}
                                width={30}
                                height={30}
                                src={item.image}
                                alt={item.alt}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;
