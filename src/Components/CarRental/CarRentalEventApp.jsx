
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const DEFAULT_DATA = {
    title: "Bangladesh’s Event App for Car Rental",

    descriptions: [
        "Finding the right rental vehicle should not mean calling operators one by one or comparing unrelated rate cards.",

        "With Utshob.xyz, define the vehicle and transportation requirement you need and let relevant partners quote against the same requirement.",

        "Then compare the actual proposed vehicle, model, photos, price, ratings and reviews before choosing.",
    ],

    tagline: "Event App মানে Utshob.xyz",
    taglineDescription: "ইভেন্টের আয়োজন, এখন এক অ্যাপে।",

    requestFlowTitle: "YOUR REQUEST FLOW",

    steps: [
        {
            number: "1",
            title: "Define Your",
            subtitle: "Requirement",
        },
        {
            number: "2",
            title: "Relevant",
            subtitle: "Partners Bid",
        },
        {
            number: "3",
            title: "Compare",
            subtitle: "Book",
            highlight: true,
        },
    ],

    compareTitle: "COMPARE",

    compareDescription:
        "Actual Vehicle · Model · Photos · Capacity · Route & Timing · Included and Excluded Items · Ratings · Reviews · Price",
};

export default function CarRentalEventApp({ data = {} }) {
    const content = {
        ...DEFAULT_DATA,
        ...data,
    };

    const {
        title,
        descriptions,
        tagline,
        taglineDescription,
        requestFlowTitle,
        steps,
        compareTitle,
        compareDescription,
    } = content;

    return (
        <section className="">
            <div className="">

                <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-10">

                    {/* Left Content */}
                    <div className="w-full md:max-w-[620px] flex flex-col gap-y-3">

                        <h2 className="text-[24px] sm:text-[30px] font-bold text-[#171B20] leading-[42px]">
                            {title}
                        </h2>

                        {descriptions.map((description, index) => (
                            <p
                                key={index}
                                className={`text-[14px] sm:text-[16px] text-[#59606C] leading-[24px] ${index === 1 ? "mt-6" : ""
                                    }`}
                            >
                                {description}
                            </p>
                        ))}

                        <p className="text-[13px] font-bold text-[#F02678]">
                            {tagline}
                        </p>

                        <p className="text-[14px] font-bold text-[#171B20]">
                            {taglineDescription}
                        </p>

                    </div>

                    {/* Right Content */}
                    <div className="w-full md:w-[390px] shrink-0 flex flex-col gap-4">

                        {/* Request Flow Card */}
                        <div className="w-full min-h-[198px] rounded-[15px] border border-[#E2E5E9] bg-white px-5 sm:px-[21px] py-5 shadow-[0_4px_20px_rgba(17,19,24,0.04)]">

                            <p className="text-[10px] font-bold text-[#F02678] mb-6">
                                {requestFlowTitle}
                            </p>

                            <div className="flex items-start justify-between gap-2">

                                {steps.map((step, index) => (
                                    <React.Fragment key={`${step.number}-${index}`}>

                                        <div className="flex flex-col items-start flex-1">

                                            <div
                                                className={`w-[30px] h-[30px] rounded-full flex items-center justify-center text-[11px] font-semibold mb-3 ${step.highlight
                                                        ? "bg-[#E92D79] text-white"
                                                        : "bg-[#FFF0F5] text-[#F02678]"
                                                    }`}
                                            >
                                                {step.number}
                                            </div>

                                            {step.highlight ? (
                                                <p className="flex flex-wrap items-center gap-x-1 text-[12px] font-semibold leading-[1.4] text-[#171B20]">
                                                    {step.title}
                                                    <FaArrowRight className="text-[10px]" />
                                                    <span className="w-full">
                                                        {step.subtitle}
                                                    </span>
                                                </p>
                                            ) : (
                                                <p className="text-[12px] font-semibold leading-[1.4] text-[#171B20]">
                                                    {step.title}
                                                    <br />
                                                    {step.subtitle}
                                                </p>
                                            )}

                                        </div>

                                        {index !== steps.length - 1 && (
                                            <FaArrowRight className="mt-[9px] shrink-0 text-[#B5C0CE] text-[14px]" />
                                        )}

                                    </React.Fragment>
                                ))}

                            </div>
                        </div>

                        {/* Compare Card */}
                        <div className="w-full rounded-[15px] border border-[#E2E5E9] bg-white px-5 sm:px-[21px] py-5 shadow-[0_4px_20px_rgba(17,19,24,0.04)]">

                            <p className="text-[10px] font-bold text-[#F02678] mb-3">
                                {compareTitle}
                            </p>

                            <p className="text-[12px] text-[#59606C] leading-[22px]">
                                {compareDescription}
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
