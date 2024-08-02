import React from "react";
import tech from "../../utils/tech.json"

function About() {
    return (
        <main className="p-8 bg-slate-50 rounded-3xl">
            <h1 className="text-2xl xl:text-3xl font-semibold text-gray-800 mb-5">About</h1>
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
                <h1 className="text-2xl xl:text-3xl font-semibold text-gray-800 my-5">Languages and Tools</h1>
                <div>
                    <div className="flex flex-wrap justify-center gap-5 mt-10 bg-gray-100 p-7 rounded-2xl">
                        {tech.map((item, index)=> (
                                <img title={item.alt} width={30} height={30} src={item.image} alt={item.alt} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;
