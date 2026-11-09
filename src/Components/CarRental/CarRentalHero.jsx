import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import gari from '../../assets/web Images/CarRental/marcedezBand.jpg';
import Button from '../Shared/Button';

export default function CarRentalHero() {
    return (
        <section className="w-full py-6 sm:py-8 lg:py-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">

                {/* Left Content */}
                <div className="flex w-full flex-col gap-5 lg:w-[52%]">

                    <div>
                        <h1 className="mb-3 text-3xl font-bold text-[#111318] sm:text-[38px] lg:leading-[52px]">
                            Car Rental in Bangladesh
                        </h1>

                        <p className="text-sm leading-relaxed text-[#5E6878] sm:text-base">
                            Find car rental services in Dhaka and across Bangladesh based on
                            the trip or event you actually need. Define the vehicle, passenger,
                            route and timing, receive partner quotations and compare actual
                            proposed vehicles before choosing.
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="flex flex-wrap sm:mt-9 items-center gap-x-2 gap-y-2 text-[11px] font-semibold text-[#111318] sm:text-xs">
                        <span>Define Your Requirement</span>
                        <FaArrowRight className="shrink-0 text-[#E62E77]" />

                        <span>Relevant Partners Bid</span>
                        <FaArrowRight className="shrink-0 text-[#E62E77]" />

                        <span>Compare</span>
                        <FaArrowRight className="shrink-0 text-[#E62E77]" />

                        <span>Book</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <Button
                            type="button"
                            className="rounded-xl bg-[#E62E77] px-5 py-3 text-xs font-semibold text-white shadow-sm transition-all duration-300  sm:text-sm"
                        >
                            Get Car Rental Quotations in the App
                        </Button>

                        <Button
                            type="button"
                            className="rounded-xl border border-rose-300 bg-white px-5 py-3 text-xs font-semibold text-[#E62E77] transition-all duration-300 0 sm:text-sm"
                        >
                            Explore Car Rental Options
                        </Button>
                    </div>

                </div>

                {/* Right Image */}
                <div className="w-full overflow-hidden rounded-[28px] border border-[#F1DCE5] bg-[#FFF5F9] lg:w-[48%] lg:min-h-[400px]">
                    <img
                        src={gari}
                        alt="Car rental vehicles in Bangladesh for events, weddings and transportation"
                        title="Car Rental Services in Bangladesh - Utshob.xyz"
                        loading="lazy"
                        decoding="async"
                        className="h-[240px] w-full object-cover sm:h-[300px] lg:h-full"
                    />
                </div>

            </div>
        </section>
    );
}