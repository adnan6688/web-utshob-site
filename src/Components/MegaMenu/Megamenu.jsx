
import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

export default function Megamenu({ setMegaMenuOpen, eventServicesRef, scroll, mobile = false, onCloseMenu }) {

    const [selectedCategory, setSelectedCategory] = useState("Event Decoration");
    const [mobileStep, setMobileStep] = useState("categories");

    useEffect(() => {
        if (mobile) {
            setMobileStep("categories");
            setSelectedCategory("Event Decoration");
        }
    }, [mobile]);

    const services = {
        "Event Decoration": [
            "Wedding Stage Decoration",
            "Holud Stage Decoration",
            "Birthday Decoration",
            "Basor Ghor Decoration",
            "Wedding Car Decoration",
            "Photo Booth Rental",
            "360 Photo Booth Rental",
            "Wedding Gate Decoration",
            "Wedding Walkway Decoration",
            "Head Table Decoration",
            "Mehendi Stage Decoration",
            "Kunjo Decoration",
        ],

        "Photography & Videography": [
            "Wedding Photography",
            "Wedding Videography",
            "Pre Wedding Photography",
            "Cinematic Wedding Film",
            "Birthday Photography",
            "Event Photography",
        ],

        "Car Rental": [
            "Wedding Car Rental",
            "Luxury Car Rental",
            "Airport Transfer",
            "Premium Car Rental",
        ],

        "Rides & Band Party": [
            "DJ Party",
            "Live Band",
            "Sound System",
            "Stage Performance",
        ],

        "Cake": [
            "Wedding Cake",
            "Birthday Cake",
            "Custom Theme Cake",
            "Anniversary Cake",
        ],

        "Event Rental & Support": [
            "Chair Rental",
            "Table Rental",
            "Lighting Rental",
            "Sound System Rental",
            "Event Equipment",
        ],
    };

    const categories = Object.keys(services);

    const handleServiceClick = () => {
        if (setMegaMenuOpen) setMegaMenuOpen(false);
        if (onCloseMenu) onCloseMenu();

        if (scroll && eventServicesRef) {
            scroll(eventServicesRef);
        }
    };

    const closeMobilePanel = () => {
        if (setMegaMenuOpen) setMegaMenuOpen(false);
        if (onCloseMenu) onCloseMenu();
    };

    if (mobile) {
        return (
            <div className="w-full rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_12px_24px_rgba(17,19,24,0.08)]">
                <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
                    <div className="flex items-center gap-2">
                        {mobileStep === "services" && (
                            <button
                                type="button"
                                onClick={() => setMobileStep("categories")}
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF1F6] text-[#E62E77]"
                                aria-label="Go back to categories"
                            >
                                <FiChevronLeft size={18} />
                            </button>
                        )}

                        <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-[#E62E77]">
                            {mobileStep === "services" ? selectedCategory : "Event Service"}
                        </h3>
                    </div>

                    <button
                        type="button"
                        onClick={closeMobilePanel}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-[#E62E77] hover:text-[#E62E77]"
                        aria-label="Close menu"
                    >
                        <FiX size={18} />
                    </button>
                </div>

                {mobileStep === "categories" ? (
                    <div className="p-3">
                        <div className="flex flex-col gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setMobileStep("services");
                                    }}
                                    className="flex items-center justify-between gap-3 rounded-xl border border-[#E5E7EB] bg-white px-3 py-3 text-left text-sm font-medium text-[#111318] transition hover:border-[#E62E77] hover:bg-[#FFF1F6] hover:text-[#E62E77]"
                                >
                                    <span>{category}</span>
                                    <FiChevronRight size={16} className="text-[#E62E77]" />
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="p-3">
                        <div className="mb-3 grid grid-cols-1 gap-2">
                            {services[selectedCategory].map((service) => (
                                <button
                                    key={service}
                                    type="button"
                                    onClick={handleServiceClick}
                                    className="group flex items-center justify-between gap-2 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-3 text-left text-sm font-semibold text-[#111318] transition hover:border-[#E62E77] hover:bg-[#FFF1F6] hover:text-[#E62E77]"
                                >
                                    <span>{service}</span>
                                    <FiChevronRight
                                        size={15}
                                        className="shrink-0 text-[#E62E77] transition-transform duration-200 group-hover:translate-x-1"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="flex min-h-[320px] w-full overflow-hidden rounded-2xl">

            {/* Left Sidebar - 30% */}
            <div className="w-[25%] p-5 flex flex-col gap-y-2 shrink-0 border-r border-gray-100 bg-[#F3F4F6] ">

                <h3 className="text-xs font-semibold uppercase leading-[100%] tracking-normal text-[#E62E77]">
                    Event Service
                </h3>

                <div className="flex flex-col gap-y-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setSelectedCategory(category)}
                            className={`flex cursor-pointer items-center border justify-between gap-2 rounded-lg text-left text-[13px] p-[14px] font-medium transition-all duration-300 ease-in-out hover:translate-x-1 hover:shadow-sm ${selectedCategory === category
                                    ? "text-[#FFF1F6] bg-[#E62E77] border-[#E62E77] shadow-sm"
                                    : "text-[#111318] border-[#C7CAD1] bg-white hover:border-[#E62E77] hover:bg-[#FFF1F6] hover:text-[#E62E77]"
                                }`}
                        >
                            <span>{category}</span>

                            <FiChevronRight
                                className={`shrink-0 ${selectedCategory === category
                                        ? "text-[#FFF1F6]"
                                        : "text-[#111318]"
                                    }`}
                                size={16}
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Content - 70% */}
            <div className="w-[75%] py-6 px-7 bg-white ">

                <div className="mb-5">
                    <h3 className="text-2xl font-bold text-[#111318]">
                        {selectedCategory}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                        Explore our {selectedCategory.toLowerCase()} services.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-2.5">

                    {services[selectedCategory].map((service) => (
                        <button
                            key={service}
                            type="button"
                            onClick={handleServiceClick}
                            className="group flex items-center justify-between gap-2 rounded-lg px-3 py-3 hover:cursor-pointer text-left text-[13px] font-semibold text-[#111318] border border-[#C7CAD1] transition-all duration-200 hover:bg-[#FFF1F6] hover:text-[#E62E77]"
                        >
                            <span>{service}</span>

                            <FiChevronRight
                                size={15}
                                className="shrink-0 text-[#E62E77] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#E62E77]"
                            />
                        </button>
                    ))}

                </div>
            </div>
        </div>
    );
}
