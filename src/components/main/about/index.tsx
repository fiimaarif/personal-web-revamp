import React from "react";

function About() {
    return (
        <main className="p-8 bg-slate-50 rounded-3xl">
            <h1 className="text-2xl font-semibold text-gray-800 mb-5">About</h1>
            <article>
                <p className="text-lg text-neutral-600">
                    Hi there, I'm fii maarif. I am a Frontend Developer. I have
                    experience in creating and developing responsive and
                    intuitive user interfaces for web applications. I possess
                    skills in HTML, CSS, and JavaScript, as well as experience
                    using frameworks such as ReactJS, Angular and React Native
                    for Mobile.
                </p>
                <p className="mt-5 text-lg text-neutral-600">
                    I am also able to work closely with the backend team to
                    ensure seamless integration between the user interface and
                    systems. I am passionate about learning and experimenting
                    with new technologies to create better applications.
                </p>
            </article>
            <div>
                <h1 className="text-2xl font-semibold text-gray-800 my-5">Languages and Tools</h1>
                <div>
                    <div className="flex flex-wrap justify-center gap-5 mt-10 bg-gray-100 p-7 rounded-2xl">
                        <img className="grayscale hover:grayscale-0" width={40} height={40} src="https://profilinator.rishav.dev/skills-assets/codeigniter.svg" alt="tools" />
                        <img className="grayscale hover:grayscale-0" width={40} height={40} src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" alt="tools" />
                        <img className="grayscale hover:grayscale-0" width={40} height={40} src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="tools" />
                        <img className="grayscale hover:grayscale-0" width={40} height={40} src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="tools" />
                        <img className="grayscale hover:grayscale-0" width={40} height={40} src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="tools" />
                        <img className="grayscale hover:grayscale-0" width={40} height={40} src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="tools" />
                        <img className="grayscale hover:grayscale-0" width={40} height={40} src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="tools" />
                        <img className="grayscale hover:grayscale-0" width={40} height={40} src="https://profilinator.rishav.dev/skills-assets/angularjs-original.svg" alt="tools" />
                        <img className="grayscale hover:grayscale-0" width={40} height={40} src="https://profilinator.rishav.dev/skills-assets/php-original.svg" alt="tools" />
                        <img className="grayscale hover:grayscale-0" width={40} height={40} src="https://profilinator.rishav.dev/skills-assets/redux-original.svg" alt="tools" />
                        <img className="grayscale hover:grayscale-0" width={40} height={40} src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="tools" />
                        <img className="grayscale hover:grayscale-0" width={40} height={40} src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="tools" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;
