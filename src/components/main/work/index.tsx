import React, { useEffect, useState } from "react";
import CardWork from "./cardWork";
import portfolioData from '../../utils/portfolio.json'

function Work() {
    const [activeTab, setActiveTab] = useState('all');
    const [data, setData] = useState(portfolioData);

    useEffect(() => {
        const filteredData = activeTab === 'all'
            ? portfolioData
            : portfolioData.filter(item => item.label === activeTab);
        setData(filteredData);
    }, [activeTab]);

    const tabItem = ['all', 'website', 'mobile', 'design']

    return (
        <main className="p-8 bg-slate-50 dark:bg-slate-800 rounded-3xl">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-50 mb-5">
                Portfolio
            </h1>
            <div className="flex justify-end gap-5">
                {tabItem.map(tab => (
                    <p
                        key={tab}
                        className={`cursor-pointer ${activeTab === tab ? 'font-bold text-indigo-500' : 'text-gray-700'}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </p>
                ))}
            </div>
            <div className="grid grid-cols-12 gap-5 mt-10">
                {data.map((item, index) => (
                    <div key={index} className="col-span-6 md:col-span-6 xl:col-span-4">
                        <CardWork
                            img={item.image}
                            label={item.label}
                            title={item.title}
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Work;
