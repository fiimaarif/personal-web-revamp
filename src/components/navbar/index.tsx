import Link from "next/link";
import React from "react";
import { Briefcase, FileMinus, Mail, User } from "react-feather";

function Navbar() {
    return (
        <nav className="bg-slate-50 mb-4 mt-5 md:mt-0 p-5 rounded-3xl flex justify-around">
            <Link href={"#"} className="flex items-start gap-1">
                <User size={19} />
               <p className="hidden md:block">about</p>
            </Link>
            <Link href={"#"} className="flex items-start gap-1">
                <FileMinus size={19}/>
                <p className="hidden md:block">resume</p>
            </Link>
            <Link href={"#"} className="flex items-start gap-1">
                <Briefcase size={19} />
                <p className="hidden md:block">work</p>
            </Link>
            <Link href={"#"} className="flex items-start gap-1">
                <Mail size={19} />
                <p className="hidden md:block">contact</p>
            </Link>
        </nav>
    );
}

export default Navbar;
