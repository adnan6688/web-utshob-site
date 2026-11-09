import React from 'react';
import { Sparkles } from 'lucide-react';
import { FaArrowRight } from "react-icons/fa6";
import Button from '../../Shared/Button';

const StageHeroSection = ({
    title = "Wedding Stage Decoration",
    subtitle = "Find wedding stage decoration in Dhaka for simple, floral, premium and customized wedding setups.",
    description = "Choose a design in the Utshob app or upload your own wedding stage reference. Add your event details and specifications, receive bids from relevant service providers based on the requirement, and compare price, ratings, reviews, portfolio, included items and excluded items before booking.",
    steps = ["Choose a Design or Upload Your Own", "Get Bids", "Compare", "Book"],
    imageUrl = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    imageAlt = "Elegant wedding stage decoration setup with floral arrangements and decorative lighting in Dhaka"
}) => {
    return (
        <section className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* Left Column - Content */}
                <div className="lg:col-span-7 flex flex-col space-y-6">
                    {/* Main Title */}
                    <h1 className="text-4xl  font-bold tracking-normal text-[#111318] leading-12">
                        {title}
                    </h1>

                    {/* Subtitle / Highlight Heading */}
                    <h2 className="text-lg sm:text-[22px] font-semibold text-[#111318] leading-snug">
                        {subtitle}
                    </h2>

                    {/* Description Paragraph */}
                    <p className="text-sm sm:text-[15px] text-gray-500 leading-5 max-w-2xl">
                        {description}
                    </p>

                    {/* Process Flow Badge / Step Indicator */}
                    <div className="w-full bg-slate-100/80 rounded-full py-3 px-5 text-center sm:text-left shadow-inner">
                        <p className="text-xs sm:text-sm font-medium text-gray-700 flex flex-wrap items-center justify-center sm:justify-start gap-1 sm:gap-2">
                            {steps.map((step, index) => (
                                <React.Fragment key={index}>
                                    <span>{step}</span>
                                    {index < steps.length - 1 && (
                                        <FaArrowRight></FaArrowRight>
                                    )}
                                </React.Fragment>
                            ))}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                        <Button
                            type="button"
                            className="bg-[#E62E77] hover:bg-[#D81B60] text-white text-sm sm:text-[15px] py-3.5 px-6 rounded-lg"
                        >
                            Get Wedding Stage Quotations
                        </Button>

                        <Button
                            type="button"
                            className="border border-[#E62E77] text-[#E62E77] hover:bg-pink-50 text-sm sm:text-[15px] py-3.5 px-6 rounded-lg shadow-none"
                        >
                            Explore Wedding Stage in App
                        </Button>
                    </div>
                </div>

                {/* Right Column - SEO Friendly Image Container */}
                <div className="lg:col-span-5 relative w-full h-[340px] sm:h-[420px] lg:h-[480px]">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-pink-200 bg-pink-50/50 shadow-sm group">

                        {/* SEO-Optimized Image Tag */}
                        <img
                            src={imageUrl}
                            alt={imageAlt}
                            title={imageAlt}
                            loading="lazy"
                            decoding="async"
                            width="1200"
                            height="900"
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        />

                        {/* Optional Overlay Matching UI Card Styling */}
                        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-transparent to-transparent opacity-80 flex flex-col justify-end p-6 text-white text-center">
                            <div className="mx-auto bg-[#E62E77] p-3 rounded-full shadow-lg mb-2 inline-flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="font-semibold text-lg text-white shadow-sm">
                                Best real Utshob wedding stage decoration
                            </h3>
                            <p className="text-xs text-pink-100 font-light mt-1">
                                Hero · real verified work
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default StageHeroSection;