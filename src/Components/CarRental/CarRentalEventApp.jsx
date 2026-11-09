
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function CarRentalEventApp() {
    return (
        <section className="">
            <div className="">

                <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-10">

                    {/* Left Content */}
                    <div className="w-full md:max-w-[620px] flex flex-col gap-y-3">

                        <h2 className="text-[24px] sm:text-[30px] font-bold text-[#171B20] leading-[42px]">
                            Bangladesh’s Event App for Car Rental
                        </h2>

                        <p className="text-[14px] sm:text-[16px] text-[#59606C] leading-[24px]">
                            Finding the right rental vehicle should not mean calling
                            operators one by one or comparing unrelated rate cards.
                        </p>

                        <p className="text-[14px] mt-6 sm:text-[16px] text-[#59606C] leading-[24px]">
                            With Utshob.xyz, define the vehicle and transportation
                            requirement you need and let relevant partners quote
                            against the same requirement.
                        </p>

                        <p className="text-[14px] sm:text-[16px] text-[#59606C] leading-[24px]">
                            Then compare the actual proposed vehicle, model, photos,
                            price, ratings and reviews before choosing.
                        </p>

                        <p className="text-[13px] font-bold text-[#F02678]">
                            Event App মানে Utshob.xyz
                        </p>

                        <p className="text-[14px] font-bold text-[#171B20]">
                            ইভেন্টের আয়োজন, এখন এক অ্যাপে।
                        </p>

                    </div>

                    {/* Right Content */}
                    <div className="w-full md:w-[390px] shrink-0 flex flex-col gap-4">

                        {/* Request Flow Card */}
                        <div className="w-full min-h-[198px] rounded-[15px] border border-[#E2E5E9] bg-white px-5 sm:px-[21px] py-5 shadow-[0_4px_20px_rgba(17,19,24,0.04)]">

                            <p className="text-[10px] font-bold text-[#F02678] mb-6">
                                YOUR REQUEST FLOW
                            </p>

                            <div className="flex items-start justify-between gap-2">

                                {/* Step 1 */}
                                <div className="flex flex-col items-start flex-1">
                                    <div className="w-[30px] h-[30px] rounded-full bg-[#FFF0F5] flex items-center justify-center text-[11px] font-semibold text-[#F02678] mb-3">
                                        1
                                    </div>

                                    <p className="text-[12px] font-semibold leading-[1.4] text-[#171B20]">
                                        Define Your<br />Requirement
                                    </p>
                                </div>

                                <FaArrowRight className="mt-[9px] shrink-0 text-[#B5C0CE] text-[14px]" />

                                {/* Step 2 */}
                                <div className="flex flex-col items-start flex-1">
                                    <div className="w-[30px] h-[30px] rounded-full bg-[#FFF0F5] flex items-center justify-center text-[11px] font-semibold text-[#F02678] mb-3">
                                        2
                                    </div>

                                    <p className="text-[12px] font-semibold leading-[1.4] text-[#171B20]">
                                        Relevant<br />Partners Bid
                                    </p>
                                </div>

                                <FaArrowRight className="mt-[9px] shrink-0 text-[#B5C0CE] text-[14px]" />

                                {/* Step 3 */}
                                <div className="flex flex-col items-start flex-1">
                                    <div className="w-[30px] h-[30px] rounded-full bg-[#E92D79] flex items-center justify-center text-[11px] font-semibold text-white mb-3">
                                        3
                                    </div>

                                    <p className="flex flex-wrap items-center gap-x-1 text-[12px] font-semibold leading-[1.4] text-[#171B20]">
                                        Compare <FaArrowRight className="text-[10px]" />
                                        <span className="w-full">Book</span>
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Compare Card */}
                        <div className="w-full rounded-[15px] border border-[#E2E5E9] bg-white px-5 sm:px-[21px] py-5 shadow-[0_4px_20px_rgba(17,19,24,0.04)]">

                            <p className="text-[10px] font-bold text-[#F02678] mb-3">
                                COMPARE
                            </p>

                            <p className="text-[12px] text-[#59606C] leading-[22px]">
                                Actual Vehicle · Model · Photos · Capacity · Route & Timing · Included and Excluded Items · Ratings · Reviews · Price
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
