import React from "react";
import { Briefcase, Grid } from "react-feather";
import education from "../../utils/education.json";
import experience from "../../utils/experience.json";
import knowledges from "../../utils/knowledges.json";

function Resume() {
    return (
        <main className="p-8 bg-slate-50 dark:bg-slate-800 rounded-3xl">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-50 mb-5">Resume</h1>
            <div className="md:flex block gap-5">
                <div className="w-full md:w-1/2">
                    <div className="flex items-start mb-7">
                        <Grid size={30} color="#0891b2" />
                        <p className="ml-1 mt-1 text-xl dark:text-gray-50">Education</p>
                    </div>
                    {education.map((item) => (
                        <div className="bg-red-50 dark:bg-slate-700 p-5 rounded-2xl mb-5">
                        <div className="flex justify-between mb-2">
                            <p className="text-sm text-gray-600 dark:text-gray-50">{item.year}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-50">{item.degree}</p>
                        </div>
                        <p className="text-xl mb-1 dark:text-gray-50">{item.university}</p>
                        <p className="text-base text-gray-600 dark:text-gray-50">
                            {item.major}
                        </p>
                    </div>
                    ))}
                </div>
                <div className="w-full md:w-1/2">
                    <div className="flex items-start mb-7 mt-7 md:mt-0">
                        <Briefcase size={30} color="#0891b2" />
                        <p className="ml-1 mt-1 text-xl dark:text-gray-50">Experience</p>
                    </div>
                    {experience.map((item) => (
                        <div className="bg-emerald-50 dark:bg-slate-700 p-5 rounded-2xl mb-5">
                            <div className="flex justify-between mb-2">
                                <p className="text-sm text-gray-600 dark:text-gray-50">
                                    {item.year}
                                </p>
                            </div>
                            <p className="text-xl mb-1 dark:text-gray-50">{item.role}</p>
                            <p className="text-base text-gray-600 dark:text-gray-50">
                                {item.office}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-50 my-5">Knowledges</h1>
            <div className="flex gap-1 md:gap-1 lg:gap-x-4 lg:gap-y-3 flex-wrap justify-start">
                {knowledges.map((item, index) => (
                    <div key={index} className="bg-red-400 px-5 py-1 rounded-3xl font-medium text-gray-50">{item.label}</div>
                ))}
            </div>
        </main>
    );
}

export default Resume;
