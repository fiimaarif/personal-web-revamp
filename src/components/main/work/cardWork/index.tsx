import React, { useEffect, useState } from "react";
import CardSkeleton from "./cardSkeleton";

const labelColors: { [key: string]: string } = {
    website: "#fee2e2",
    mobile: "#dcfce7",
    design: "#fde68a",
};

type CardWorkProps = {
    img: string;
    label: string;
    title: string;
};

function CardWork({ img, label, title }: CardWorkProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const bgColor = labelColors[label] || "#FFFFFF";

    if (loading) {
        return <CardSkeleton/>
    }

    return (
        <div className="bg-gray-100 dark:bg-slate-700 p-5 rounded-xl">
            <div className="p-5 rounded-xl" style={{ backgroundColor: bgColor }}>
                <img src={img} width={200} />
            </div>
            <div>
                <p className="text-sm text-slate-400 pt-3">{label}</p>
                <p className="font-semibold text-slate-900 dark:text-gray-50">{title}</p>
            </div>
        </div>
    );
}

export default CardWork;
