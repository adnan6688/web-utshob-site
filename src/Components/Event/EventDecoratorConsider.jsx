import React from 'react';
import { MdCheck } from "react-icons/md";

const EventDecoratorConsider = ({
    title = "What to Consider Before Choosing an Event Decorator",
    subtitle = "Before selecting an event decorator, compare more than the quotation amount.",
    label = "Look at:",
    footerNote = "The right provider is the one that best matches your requirement, not necessarily the one offering the lowest price.",
    categories = [
        {
            id: 1,
            categoryTitle: "Style & quality",
            bgColor: "bg-[#F8F9FA]", // Light gray background
            items: [
                "Previous work and portfolio",
                "Proposed decoration style",
                "Flowers and other materials",
                "Lighting requirements",
            ],
        },
        {
            id: 2,
            categoryTitle: "Scope & setup",
            bgColor: "bg-[#FFF0F5]", // Light pink highlight background
            items: [
                "What is included in the quotation",
                "What is excluded",
                "Venue and available setup space",
            ],
        },
        {
            id: 3,
            categoryTitle: "Trust & timing",
            bgColor: "bg-[#F8F9FA]", // Light gray background
            items: [
                "Customer ratings and reviews",
                "Setup and installation responsibility",
                "Event date and provider availability",
            ],
        },
    ],
}) => {
    return (
        <section className="">
            <div className="">
                {/* Header Section */}
                <div className="mb-8">
                    <h2 className="text-3xl  leading-[42px] font-bold text-[#111318] mb-3">
                        {title}
                    </h2>
                    <p className="text-[#59606C] text-[16px]  text-base mb-6">
                        {subtitle}
                    </p>

                </div>
                <p className="text-[#59606C] text-[16px] mb-3">
                    {label}
                </p>
                {/* Dynamic Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-stretch">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className={`${cat.bgColor} rounded-2xl p-6 sm:p-8 border border-[#E2E6EB]  flex flex-col justify-start`}
                        >
                            {/* Category Title with Top Border/Line accent */}
                            <div className="mb-6">
                                <span className="text-[#E62E77] font-bold text-sm tracking-wide block mb-1">
                                    {cat.categoryTitle}
                                </span>
                                <div className="w-10 h-[3px] bg-[#E62E77] rounded-full"></div>
                            </div>

                            {/* List of Considerations */}
                            <ul className="space-y-4">
                                {cat.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        {/* Pink Checkmark Icon */}
                                        <span className="flex-shrink-0 w-6 h-6 bg-[#E62E77] text-white rounded-full flex items-center justify-center mt-0.5">
                                           <MdCheck></MdCheck>
                                        </span>

                                        {/* Text */}
                                        <span className="text-[#111318] font-medium text-sm leading-5">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                {footerNote && (
                    <p className="text-[#59606C] text-xs sm:text-sm">
                        {footerNote}
                    </p>
                )}
            </div>
        </section>
    );
};

export default EventDecoratorConsider;