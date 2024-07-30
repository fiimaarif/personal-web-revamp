import React from "react";

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
    const bgColor = labelColors[label] || "#FFFFFF";
    return (
        <div className="bg-gray-100 p-5 rounded-xl">
            <div className=" p-5 rounded-xl" style={{ backgroundColor: bgColor }}>
                <img src={img} width={200} />
            </div>
            <div>
                <p className="text-sm text-slate-400 pt-3">{label}</p>
                <p className="font-semibold text-slate-900">{title}</p>
            </div>
        </div>
    );
}

export default CardWork;
