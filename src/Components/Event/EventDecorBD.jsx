import React from "react";

const EventDecorBD = () => {
    return (
        <section className="w-full  overflow-x-hidden bg-[#EDF8FF]">
            <div className="mx-auto w-full max-w-[1180px]  py-10">

                <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-10">

                    {/* Left Content */}
                    <div className="w-full md:max-w-[580px] flex flex-col gap-y-2.5">
                        <h2 className="text-[24px] sm:text-[30px] font-bold text-[#171B20] leading-[42px]">
                            Bangladesh’s Event App
                        </h2>

                        <p className="text-[14px] sm:text-[16px] text-[#59606C] leading-[24px]">
                            Utshob brings event services together in one app, making it easier to plan without
                            searching for different service providers separately.
                        </p>

                        <p className="text-[14px] sm:text-[16px] text-[#59606C] leading-[24px]">
                            You can book a single service, combine multiple services into your own event
                            package, or create separate requests for different programs on different dates.
                        </p>

                        <p className="text-[13px] font-bold text-[#F02678]">
                            Event App মানে Utshob.xyz
                        </p>

                        <p className="text-[14px] font-bold text-[#171B20]">
                            ইভেন্টের আয়োজন, এখন এক অ্যাপে।
                        </p>
                    </div>

                    {/* Right Request Flow Card */}
                    <div className="w-full md:w-[390px] shrink-0 min-h-[198px] rounded-[15px] border border-[#E2E5E9] bg-white px-5 sm:px-[21px] py-5 shadow-[0_4px_20px_rgba(17,19,24,0.04)]">

                        <p className="text-[10px] font-bold text-[#F02678] mb-6">
                            YOUR REQUEST FLOW
                        </p>

                        <div className="flex items-start justify-between gap-2">

                            <div className="flex flex-col items-start flex-1">
                                <div className="w-[30px] h-[30px] rounded-full bg-[#FFF0F5] flex items-center justify-center text-[11px] font-semibold text-[#F02678] mb-3">
                                    1
                                </div>
                                <p className="text-[12px] font-semibold leading-[1.4] text-[#171B20]">
                                    Define Your<br />Requirement
                                </p>
                            </div>

                            <div className="pt-[6px] text-[#B5C0CE] text-[21px] leading-none">→</div>

                            <div className="flex flex-col items-start flex-1">
                                <div className="w-[30px] h-[30px] rounded-full bg-[#FFF0F5] flex items-center justify-center text-[11px] font-semibold text-[#F02678] mb-3">
                                    2
                                </div>
                                <p className="text-[12px] font-semibold leading-[1.4] text-[#171B20]">
                                    Relevant<br />Partners Bid
                                </p>
                            </div>

                            <div className="pt-[6px] text-[#B5C0CE] text-[21px] leading-none">→</div>

                            <div className="flex flex-col items-start flex-1">
                                <div className="w-[30px] h-[30px] rounded-full bg-[#E92D79] flex items-center justify-center text-[11px] font-semibold text-white mb-3">
                                    3
                                </div>
                                <p className="text-[12px] font-semibold leading-[1.4] text-[#171B20]">
                                    Compare →<br />Book
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EventDecorBD;