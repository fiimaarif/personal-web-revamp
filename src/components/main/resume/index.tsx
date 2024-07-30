import React from "react";
import { Briefcase, Grid } from "react-feather";
import education from "../../utils/education.json";
import experience from "../../utils/experience.json";

function Resume() {
    return (
        <main className="p-8 bg-slate-50 rounded-3xl">
            <h1 className="text-2xl font-semibold text-gray-800 mb-5">Resume</h1>
            <div className="md:flex block gap-5">
                <div className="w-full md:w-1/2">
                    <div className="flex items-start mb-7">
                        <Grid size={30} color="#0891b2" />
                        <p className="ml-1 mt-1 text-xl">Education</p>
                    </div>
                    {education.map((item) => (
                        <div className="bg-red-50 p-5 rounded-2xl mb-5">
                        <div className="flex justify-between mb-2">
                            <p className="text-sm text-gray-600">{item.year}</p>
                            <p className="text-sm text-gray-600">{item.degree}</p>
                        </div>
                        <p className="text-xl mb-1">{item.university}</p>
                        <p className="text-base text-gray-600">
                            {item.major}
                        </p>
                    </div>
                    ))}
                </div>
                <div className="w-full md:w-1/2">
                    <div className="flex items-start mb-7 mt-7 md:mt-0">
                        <Briefcase size={30} color="#0891b2" />
                        <p className="ml-1 mt-1 text-xl">Experience</p>
                    </div>
                    {experience.map((item) => (
                        <div className="bg-emerald-50 p-5 rounded-2xl mb-5">
                            <div className="flex justify-between mb-2">
                                <p className="text-sm text-gray-600">
                                    {item.year}
                                </p>
                            </div>
                            <p className="text-xl mb-1">{item.role}</p>
                            <p className="text-base text-gray-600">
                                {item.office}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Resume;
