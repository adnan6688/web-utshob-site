import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

export default function WeddingCarRentalEventsapp() {
    const flowSteps = [
        { number: '01', title: 'Define Requirement' },
        { number: '02', title: 'Partners Bid' },
        { number: '03', title: 'Compare' },
        { number: '04', title: 'Book' },
    ];

    return (
        <section className="w-full  text-[#111318]">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

                {/* Left Card */}
                <div className="bg-white rounded-3xl p-4 sm:px-5 py-10 shadow-xs flex flex-col justify-between">
                    <div>
                        {/* Top Tag */}
                        <div className="mb-2">
                            <span className="inline-block bg-pink-50 text-pink-600 text-[10px] font-bold tracking-normal uppercase px-3 py-1 rounded-full border border-pink-100">
                                UTSHOB.XYZ
                            </span>
                        </div>

                        {/* Titles */}
                        <h2 className="text-2xl text-[34px] font-bold text-[#111318] tracking-normal mb-1">
                            Bangladesh’s Event App
                        </h2>
                        <h3 className="text-lg sm:text-[18px] font-semibold text-pink-600 mb-6">
                            For Wedding Car Rental
                        </h3>

                        {/* Description Text */}
                        <p className="text-sm sm:text-base  text-[#5E6878] mb-2">
                            Wedding transportation is rarely just one car.
                        </p>
                        <p className="text-xs sm:text-sm text-[#5E6878] leading-relaxed mb-2">
                            Relevant partners can bid against the requirement and propose vehicles they can actually provide.
                        </p>
                    </div>

                    {/* Footer Text / Bengali Slogan */}
                    <div className="pt-4">
                        <p className="text-sm font-bold text-[#111318] mb-1">
                            Event App মানে Utshob.xyz
                        </p>
                        <p className="text-sm font-bold text-pink-600">
                            ইভেন্টের আয়োজন, এখন এক অ্যাপে।
                        </p>
                    </div>
                </div>

                {/* Right Card */}
                <div className="bg-white rounded-3xl p-4 sm:px-5 py-10 shadow-xs flex flex-col justify-between">
                    <div>
                        {/* Main Header */}
                        <h2 className="flex flex-wrap items-center gap-2 text-xl sm:text-[24px] font-bold text-[#111318] tracking-normal leading-snug mb-4">
                            <span>One Request</span>
                            <FaArrowRight className=" text-sm" />

                            <span>Multiple Quotations</span>
                            <FaArrowRight className=" text-sm" />

                            <span>Compare</span>
                            <FaArrowRight className=" text-sm" />

                            <span>Book</span>
                        </h2>

                        {/* Subtext Flow */}
                        <p className="text-xs sm:text-sm text-[#5E6878] leading-relaxed mb-8">
                            Define Your Wedding Transport Requirement → Relevant Partners Bid → Compare → Book
                        </p>
                    </div>

                    {/* 4 Mini Step Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {flowSteps.map((step) => (
                            <div
                                key={step.number}
                                className="bg-[#FFF1F6] rounded-2xl p-4 flex flex-col justify-between min-h-[96px] border border-pink-100/50"
                            >
                                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-[10px] font-semibold text-pink-600 mb-2">
                                    {step.number}
                                </span>
                                <span className="text-xs font-semibold text-[#111318] leading-[145%] ">
                                    {step.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}