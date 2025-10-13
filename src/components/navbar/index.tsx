import React, { useEffect, useRef, useState } from "react";
import { Briefcase, FileMinus, Mail, User } from "react-feather";
import About from "../main/about";
import Resume from "../main/resume";
import Work from "../main/work";
import Contact from "../main/contact";

const TABS = [
    { key: "about", label: "about", icon: <User size={19} /> },
    { key: "resume", label: "resume", icon: <FileMinus size={19} /> },
    { key: "portfolio", label: "portfolio", icon: <Briefcase size={19} /> },
    { key: "contact", label: "contact", icon: <Mail size={19} /> },
];

function Navbar() {
    const [activeTab, setActiveTab] = useState("about");
    const contentRef = useRef<HTMLDivElement | null>(null);

    const updateTabFromHash = () => {
        const hash = window.location.hash.replace("#", "");
        if (TABS.some((tab) => tab.key === hash)) {
            setActiveTab(hash);
        }
    };

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        window.location.hash = tab;
        if (window.innerWidth < 768 && contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        updateTabFromHash();

        const onHashChange = () => {
            updateTabFromHash();
        };

        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case "about":
                return <About />;
            case "resume":
                return <Resume />;
            case "portfolio":
                return <Work />;
            case "contact":
                return <Contact />;
            default:
                return null;
        }
    };

    return (
        <div>
            <nav className="bg-slate-50 dark:bg-slate-800 md:mb-4 mt-5 md:mt-0 p-5 md:rounded-3xl flex justify-around text-slate-950 dark:text-gray-50 md:relative fixed bottom-0 left-0 right-0 z-10 md:border-none border-t-2 border-slate-200 dark:border-slate-700">
                {TABS.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => handleTabClick(tab.key)}
                        className={`flex items-start gap-1 ${activeTab === tab.key ? "text-blue-500" : ""}`}
                    >
                        {tab.icon}
                        <p className="hidden md:block">{tab.label}</p>
                    </button>
                ))}
            </nav>
            <div ref={contentRef}>{renderContent()}</div>
        </div>
    );
}

export default Navbar;
