
import React from 'react';
import mobileImage from '../../assets/web Images/Hero image/heroimage.webp';
import Button from '../Shared/Button';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BsApple } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";


const EventDecorYourChoice = () => {
    return (
        <section className="w-full overflow-hidden">
            <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-6">

                {/* Left Column - 70% */}
                <div className="w-full lg:w-[70%] lg:flex-[7] min-w-0 flex flex-col  space-y-4 ">

                    <span className="text-[11px] font-bold tracking-normal leading-5 text-[#E62E77] uppercase">
                        CUSTOMER APP
                    </span>

                    <h1 className="text-3xl  font-bold text-[#1F1F1F] leading-[42px] tracking-normal">
                        Your Event. Your Requirement. Your Choice.
                    </h1>

                    <p className="text-[16px] text-[#59606C] font-medium">
                        Tell Utshob what you need once.
                    </p>

                    <p className="text-[16px] text-[#59606C] leading-6 tracking-normal max-w-2xl">
                        Receive available quotations from relevant providers, compare price, ratings, reviews,
                        portfolio and service details, and choose the option that fits your event.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 w-full">
                        <Button
                            className="w-full text-[14px] sm:w-auto px-6 py-3.5 bg-[#E62E77] hover:bg-[#d42c5f] text-white rounded-lg"
                        >
                            Get Multiple Quotations
                        </Button>

                        <Button
                            className="w-full text-[14px] sm:w-auto px-6 py-3.5 bg-white border-2 border-[#E62E77] text-[#E62E77] hover:bg-pink-50 rounded-lg"
                        >
                            Open Utshob App
                        </Button>

                    </div>

                    {/* Process Flow */}
                    <div className="text-[14px] leading-5 font-semibold text-[#333333] flex flex-wrap items-center gap-2">
                        <span>One Request</span>
                        <FaArrowRightLong></FaArrowRightLong>
                        <span>Multiple Quotations</span>
                        <FaArrowRightLong></FaArrowRightLong>
                        <span>Compare</span>
                        <FaArrowRightLong></FaArrowRightLong>
                        <span>Book</span>
                    </div>

                    {/* Localized Tagline */}
                    <div>
                        <h3 className="text-[14px] font-semibold text-[#1F1F1F]">
                            Event App মানে Utshob.xyz
                        </h3>

                        <p className="text-[14px] leading-5 text-[#5C6370] mt-0.5">
                            ইভেন্টের আয়োজন, এখন এক অ্যাপে।
                        </p>
                    </div>

                    {/* App Store / Play Store */}
                    <div className="flex  flex-row items-stretch gap-3 mt-3 w-full">

                        {/* Google Play */}
                        <a
                            href="#google-play"
                            aria-label="Get Utshob on Google Play"
                            className="flex items-center justify-center sm:justify-start gap-2.5 bg-[#151719] text-white px-4 py-3 rounded-lg w-full sm:w-auto sm:min-w-[145px] hover:bg-black transition-colors"
                        >
                            <IoLogoGooglePlaystore className="text-2xl text-[#34A853] shrink-0" />

                            <div className="flex flex-col text-left leading-none">
                                <span className="text-[9px] text-[#5C6370] uppercase">
                                    GET IT ON
                                </span>
                                <span className="text-sm font-semibold mt-1">
                                    Google Play
                                </span>
                            </div>
                        </a>

                        {/* App Store */}
                        <a
                            href="#app-store"
                            aria-label="Download Utshob on the App Store"
                            className="flex items-center justify-center sm:justify-start gap-2.5 bg-[#151719] text-white px-4 py-3 rounded-lg w-full sm:w-auto sm:min-w-[145px] hover:bg-black transition-colors"
                        >
                            <BsApple className="text-2xl text-white shrink-0" />

                            <div className="flex flex-col text-left leading-none">
                                <span className="text-[9px] text-[#5C6370]">
                                    Download on the
                                </span>
                                <span className="text-sm font-semibold mt-1">
                                    App Store
                                </span>
                            </div>
                        </a>

                    </div>
                </div>

                {/* Right Column - 30% */}
                <div className="w-full lg:w-[30%] lg:flex-[3] min-w-0 flex justify-center items-center">

                    <div className="relative w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[260px]">
                        <img
                            src={mobileImage}
                            alt="Utshob customer app for event service booking, multiple quotations and comparing event service providers"
                            title="Utshob Customer App"
                            width={340}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default EventDecorYourChoice;
