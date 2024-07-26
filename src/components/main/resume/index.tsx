import React from "react";
import { Briefcase, Grid } from "react-feather";

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
                    <div className="bg-red-50 p-5 rounded-2xl mb-5">
                        <div className="flex justify-between mb-2">
                            <p className="text-sm text-gray-600">2024 - 2025</p>
                            <p className="text-sm text-gray-600">Bachelor</p>
                        </div>
                        <p className="text-xl mb-1">Universitas Nusamandiri</p>
                        <p className="text-base text-gray-600">
                            Sistem Informasi
                        </p>
                    </div>
                    <div className="bg-emerald-50 p-5 rounded-2xl">
                        <div className="flex justify-between mb-2">
                            <p className="text-sm text-gray-600">2018 - 2021</p>
                            <p className="text-sm text-gray-600">Diploma</p>
                        </div>
                        <p className="text-xl mb-1">
                            Universitas Bina Sarana Informatika
                        </p>
                        <p className="text-base text-gray-600">
                            Sistem Informasi
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="flex items-start mb-7 mt-7 md:mt-0">
                        <Briefcase size={30} color="#0891b2" />
                        <p className="ml-1 mt-1 text-xl">Experience</p>
                    </div>
                    <div className="bg-emerald-50 p-5 rounded-2xl mb-5">
                        <div className="flex justify-between mb-2">
                            <p className="text-sm text-gray-600">
                                2022 - Present
                            </p>
                        </div>
                        <p className="text-xl mb-1">Frontend Developer</p>
                        <p className="text-base text-gray-600">
                            PT Bussan Auto Finance
                        </p>
                    </div>
                    <div className="bg-red-50 p-5 rounded-2xl mb-5">
                        <div className="flex justify-between mb-2">
                            <p className="text-sm text-gray-600">2022 - 2022</p>
                        </div>
                        <p className="text-xl mb-1">Bank OCBC NISP</p>
                        <p className="text-base text-gray-600">
                            Software Developer
                        </p>
                    </div>
                    <div className="bg-emerald-50 p-5 rounded-2xl">
                        <div className="flex justify-between mb-2">
                            <p className="text-sm text-gray-600">2022 - 2022</p>
                        </div>
                        <p className="text-xl mb-1">Enigma Camp</p>
                        <p className="text-base text-gray-600">
                            Trainee IT Bootcamp
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Resume;
