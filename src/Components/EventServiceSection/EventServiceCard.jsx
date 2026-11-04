
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function EventServiceCard({
    title,
    bgColour,
    img,
    description,
    bottomText,
}) {
    return (
        <div className=" p-5 shadow flex flex-col space-y-[10px] rounded-2xl border border-[#D6E5E2]">
            <h1 className=" font-semibold leading-[26px] text-[18px] tracking-normal text-[#111318]">{title}</h1>


            <div
                style={{ backgroundColor: bgColour }}
                className="group flex justify-center items-center overflow-hidden rounded-2xl"
            >
                <img
                    className="w-full hover:cursor-pointer rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                    src={img}
                    alt=""
                />
            </div>


            <h1 className="text-[#626773] text-[14px] leading-[145%] tracking-normal">{description}</h1>


            <div className="group flex items-center gap-2 text-[#111318] hover:text-[#DF266F] cursor-pointer transition-colors duration-300 ease-in-out">
                <h1 className="font-semibold text-[14px] leading-[20px] tracking-normal">
                    {bottomText}
                </h1>
                <FaArrowRight className="shrink-0 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </div>

        </div>
    );
}
