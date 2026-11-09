
import React from 'react';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { BsApple } from 'react-icons/bs';
import mobileImage from '../../assets/uthosob-partner.webp';

const EventDecorPartnerApp = () => {
    return (
        <section className="w-full">

            <div className="">

                <div className="flex flex-col gap-y-5 md:flex-row items-center justify-between ">

                    {/* Left Content */}
                    <div className="w-full md:w-[70%] flex flex-col items-start justify-center gap-4 lg:gap-5">

                        {/* Tag */}
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-normal text-[#E62E77]">
                            FOR SERVICE PROVIDERS
                        </span>

                        {/* Heading */}
                        <h1 className="text-2xl sm:text-3xl font-bold text-[#202020] leading-[43px] sm:max-w-[550px]">
                            Grow Your Event Service Business with Utshob
                        </h1>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-[#59606C] leading-6 tracking-normal sm:max-w-[520px]">
                            Receive relevant customer requests, submit your quotation
                            and get the opportunity to be selected based on your
                            offer and service profile.
                        </p>

                        {/* Store Buttons */}
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

                    {/* Right Image Area */}
                    <div className="w-full md:w-[30%] flex justify-center items-center">

                        <div className="relative w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[260px]">
                            <img
                                src={mobileImage}
                                alt="Utshob service provider mobile app interface"
                                title="Utshob Service Provider App"
                                width={340}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-auto object-contain"
                            />
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default EventDecorPartnerApp;
