import React, { useState } from "react";
import { Briefcase, FileMinus, Mail, User } from "react-feather";
import About from "../main/about";
import Resume from "../main/resume";
import Work from "../main/work";
import Contact from "../main/contact";

function Navbar() {
    const [activeTab, setActiveTab] = useState('about');

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return <About/>;
            case 'resume':
                return <Resume/>;
            case 'work':
                return <Work/>;
            case 'contact':
                return <Contact/>;
            default:
                return null;
        }
    };

    return (
        <div>
            <nav className="bg-slate-50 dark:bg-slate-800 mb-4 mt-5 md:mt-0 p-5 rounded-3xl flex justify-around text-slate-950 dark:text-gray-50">
                <button onClick={() => setActiveTab('about')} className={`flex items-start gap-1 ${activeTab === 'about' ? 'text-blue-500' : ''}`}>
                    <User size={19} />
                    <p className="hidden md:block">about</p>
                </button>
                <button onClick={() => setActiveTab('resume')} className={`flex items-start gap-1 ${activeTab === 'resume' ? 'text-blue-500' : ''}`}>
                    <FileMinus size={19} />
                    <p className="hidden md:block">resume</p>
                </button>
                <button onClick={() => setActiveTab('work')} className={`flex items-start gap-1 ${activeTab === 'work' ? 'text-blue-500' : ''}`}>
                    <Briefcase size={19} />
                    <p className="hidden md:block">works</p>
                </button>
                <button onClick={() => setActiveTab('contact')} className={`flex items-start gap-1 ${activeTab === 'contact' ? 'text-blue-500' : ''}`}>
                    <Mail size={19} />
                    <p className="hidden md:block">contact</p>
                </button>
            </nav>
            <div>
                {renderContent()}
            </div>
        </div>
    );
}
export default Navbar;
