import React from 'react';
import { BsArrowRight } from 'react-icons/bs';


const HowitWorks = () => {
    const steps = [
        "Define Car + Decoration + Timing",
        "Partners Bid",
        "Compare Actual Vehicle & Quotation",
        "Choose",
        "Book"
    ];

    return (
        <section className="">
            {/* Title */}
            <h2 className="text-xl sm:text-2xl md:text-[42px] font-bold text-slate-900 mb-3">
                How It Works
            </h2>

            {/* Subtitle / Flow Text */}
            <p className="text-slate-500 text-xs md:text-sm mb-8 flex flex-wrap items-center gap-1.5 leading-relaxed font-normal">
                <span>Define Car + Decoration + Timing</span>
                <BsArrowRight size={14} className="text-slate-400 shrink-0" />

                <span>Partners Bid</span>
                <BsArrowRight size={14} className="text-slate-400 shrink-0" />

                <span>Compare Actual Vehicle & Quotation</span>
                <BsArrowRight size={14} className="text-slate-400 shrink-0" />

                <span>Choose</span>
                <BsArrowRight size={14} className="text-slate-400 shrink-0" />

                <span>Book</span>
            </p>

            {/* Steps Cards Container */}
            <div className="flex flex-wrap gap-4 items-center">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="bg-white px-5 py-4 rounded-2xl  border border-slate-100 flex-1 min-w-[160px] max-w-[210px] text-left flex items-center min-h-[72px]"
                    >
                        <span className="text-xs md:text-sm font-semibold text-slate-800 leading-tight">
                            {step}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowitWorks;