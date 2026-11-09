import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function WeddingCarRentalHeroSection() {
    const proofItems = [
        { label: 'Proposed vehicle' },
        { label: 'Model' },
        { label: 'Exterior photos' },
        { label: 'Interior photos' },
        { label: 'Quotation price' },
        { label: 'Rating & reviews' },
    ];

    return (
        <section className=" text-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column - Content */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                    {/* Top Badge */}
                    <div className="mb-3">
                        <span className="inline-block bg-pink-50 text-pink-600 text-[10px] sm:text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full border border-pink-100">
                            WEDDING TRANSPORT PARENT HUB
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-3xl sm:text-[4xl] md:text-[52px] font-bold text-gray-900 tracking-normal leading-[57px] mb-4">
                        Wedding Car Rental in <br className="hidden sm:inline" />
                        Dhaka & Bangladesh
                    </h1>

                    {/* Subtitle / Key Hook */}
                    <h2 className="text-lg sm:text-[19px] font-semibold text-gray-800 mb-4">
                        Arrange the vehicle or complete transportation plan your wedding actually needs.
                    </h2>

                    {/* Descriptive Paragraphs */}
                    <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                        <p>
                            Request a Groom’s Car, Sedan, Luxury Car, Noah, HiAce, Bus / Minibus or multiple vehicles together for the groom, bride, family members and guests.
                        </p>
                        <p>
                            For weddings with several programs, you can define separate vehicle, route and timing requirements for Holud, Wedding and Reception.
                        </p>
                        <p>
                            Relevant partners can bid against the requirement and propose vehicles they can actually provide. Compare the vehicle, model, exterior and interior photos, quotation price, partner rating and reviews before choosing.
                        </p>
                    </div>

                    {/* Workflow Link / Breadcrumb string */}
                    <p className="text-xs sm:text-sm font-semibold text-[#D61F68] mb-6">
                        Define Your Wedding Transport Requirement → Relevant Partners Bid → Compare → Book
                    </p>

                    {/* CTA Button */}
                    <div>
                        <button
                            type="button"
                            className="bg-[#D61F68] hover:bg-pink-700 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors duration-200"
                        >
                            Get Wedding Car Quotations in the App
                        </button>
                    </div>
                </div>

                {/* Right Column - Card Component */}
                <div className="lg:col-span-5 bg-[#F4F6F8] border border-slate-100 rounded-3xl p-6 sm:p-8">
                    {/* Card Badge */}
                    <span className="inline-flex w-fit items-center rounded-full bg-[#FFFFFF] px-2.5 py-1 text-[10px] font-bold tracking-wider text-pink-600 uppercase mb-3">
                        ACTUAL PROPOSAL PROOF
                    </span>
                    {/* Card Title */}
                    <h3 className="text-lg sm:text-[24px] font-bold text-gray-900 leading-tight mb-6">
                        Compare the Vehicle Partners Can Actually Provide
                    </h3>

                    {/* Real Car Image Container */}
                    <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-6 group border border-sky-100 shadow-sm">
                        <img
                            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
                            alt="Wedding car rental in Bangladesh showing a vehicle for wedding and event transportation"
                            title="Wedding Car Rental and Event Transportation in Bangladesh - Utshob.xyz"
                            loading="lazy"
                            decoding="async"
                            width="800"
                            height="600"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"

                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                            <div className="flex items-center gap-2 mb-1">
                                <ImageIcon className="w-4 h-4 text-sky-300" />
                                <span className="text-xs font-bold tracking-wide">Proposed vehicle photo</span>
                            </div>
                            <p className="text-[11px] text-gray-200">Provided with each partner quotation</p>
                        </div>
                    </div>

                    {/* 6 Proof Grid Items */}
                    <div className="grid grid-cols-2 gap-3">
                        {proofItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl p-3 border border-[#DCE3EA]  flex flex-col justify-center"
                            >
                                <span className="inline-flex w-fit rounded-full bg-[#FFF1F6] px-3 py-1 text-[9px] font-bold text-pink-600 tracking-wider uppercase mb-0.5">
                                    PROOF
                                </span>
                                <span className="text-xs font-bold text-gray-800">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}