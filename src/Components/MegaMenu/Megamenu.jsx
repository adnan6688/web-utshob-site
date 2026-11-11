
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

const CATEGORY_TO_ROUTE = {
    "Event Decoration": "/event-decoration",
    "Photography & Videography": "/photography-videography",
    "Car Rental": "/wedding-car-rental",
    "Rides & Band Party": "/rides-band-party",
    "Cake": "/cake",
    "Event Rental & Support": "/event-rental-support",
};

const SERVICE_TO_ROUTE = {
    "Wedding Stage Decoration": "/event-decoration-wedding-stage",
    "Holud Stage Decoration": "/event-decoration-holud-stage",
    "Birthday Decoration": "/event-decoration-birthday",
    "Basor Ghor Decoration": "/event-decoration-basor-ghor",
    "Wedding Car Decoration": "/event-decoration-wedding-car",
    "Photo Booth Rental": "/event-decoration-photo-booth",
    "360 Photo Booth Rental": "/event-decoration-360-photo-booth",
    "Wedding Gate Decoration": "/event-decoration-wedding-gate",
    "Wedding Walkway Decoration": "/event-decoration-wedding-walkway",
    "Head Table Decoration": "/event-decoration-head-table",
    "Mehendi Stage Decoration": "/event-decoration-mehendi-stage",
    "Kunjo Decoration": "/event-decoration-kunjo",
    "Wedding Car Rental": "/wedding-car-rental",
    "Micro Bus Rental": "/micro-bus-rental",
    "Noah Rental": "/noah-rental",
    "Decorated Wedding Car": "/decoratore-car-rental",
};

export default function Megamenu({
    setMegaMenuOpen,
    eventServicesRef,
    scroll,
    mobile = false,
    onCloseMenu,
    selectedCategory,
    setSelectedCategory,
}) {
    const navigate = useNavigate();
    const [mobileStep, setMobileStep] = useState("categories");

    const initialCategory = "Event Decoration";
    const activeCategory = selectedCategory || initialCategory;

    useEffect(() => {
        if (mobile) {
            setMobileStep("categories");
            if (setSelectedCategory) setSelectedCategory(initialCategory);
        }
    }, [mobile, setSelectedCategory]);

    const services = {
        "Event Decoration": [
            "Wedding Stage Decoration",
            // "Holud Stage Decoration",
            // "Birthday Decoration",
            // "Basor Ghor Decoration",
            // "Wedding Car Decoration",
            // "Photo Booth Rental",
            // "360 Photo Booth Rental",
            // "Wedding Gate Decoration",
            // "Wedding Walkway Decoration",
            // "Head Table Decoration",
            // "Mehendi Stage Decoration",
            // "Kunjo Decoration",
        ],

        "Photography & Videography": [
            "Wedding Photography",
            "Wedding Videography",
            "Pre-Wedding Photography",
            "Cinematic Wedding Film",
            "Birthday Photography",
            "Event Photography",
        ],

        "Car Rental": [
            "Wedding Car Rental",
            "Micro Bus Rental",
            "Noah Rental",
            "Decorated Wedding Car",
        ],

        // "Rides & Band Party": [
        //     "DJ Party",
        //     "Live Band",
        //     "Sound System",
        //     "Stage Performance",
        // ],

        // "Cake": [
        //     "Wedding Cake",
        //     "Birthday Cake",
        //     "Custom Theme Cake",
        //     "Anniversary Cake",
        // ],

        // "Event Rental & Support": [
        //     "Chair Rental",
        //     "Table Rental",
        //     "Lighting Rental",
        //     "Sound System Rental",
        //     "Event Equipment",
        //     "Stage Setup",
        // ],
    };

    const categories = Object.keys(services);

    const handleCategoryHover = (category) => {
        if (setSelectedCategory) setSelectedCategory(category);
    };

    const handleServiceClick = (service, category) => {
        if (setMegaMenuOpen) setMegaMenuOpen(false);
        if (onCloseMenu) onCloseMenu();

        const serviceRoute = service ? SERVICE_TO_ROUTE[service] : null;
        if (serviceRoute) {
            navigate(serviceRoute);
            return;
        }

        const categoryRoute = category ? CATEGORY_TO_ROUTE[category] : null;
        if (categoryRoute) {
            navigate(categoryRoute);
            return;
        }

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
                <div className="flex items-center justify-between border-b border-[#E2E6EB] px-4 py-3">
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
                            {mobileStep === "services" ? activeCategory : "Event Service"}
                        </h3>
                    </div>

                    <button
                        type="button"
                        onClick={closeMobilePanel}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[#59606C] transition hover:border-[#E62E77] hover:text-[#E62E77]"
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
                                        setSelectedCategory?.(category);
                                        setMobileStep("services");
                                        const route = CATEGORY_TO_ROUTE[category];
                                        if (route) navigate(route);
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
                            {services[activeCategory].map((service) => (
                                <button
                                    key={service}
                                    type="button"
                                    onClick={() => handleServiceClick(service, activeCategory)}
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
            <div className="w-[25%] p-5 flex flex-col gap-y-2 shrink-0 border-r border-[#E2E6EB] bg-[#F3F4F6] ">

                <h3 className="text-xs font-semibold uppercase leading-[100%] tracking-normal text-[#E62E77]">
                    Event Service
                </h3>

                <div className="flex flex-col gap-y-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onMouseEnter={() => handleCategoryHover(category)}
                            onFocus={() => handleCategoryHover(category)}
                            onClick={() => setSelectedCategory?.(category)}
                            className={`flex cursor-pointer items-center border justify-between gap-2 rounded-lg text-left text-[13px] p-[14px] font-medium transition-all duration-300 ease-in-out hover:translate-x-1 hover:shadow-sm ${activeCategory === category
                                    ? "text-[#FFF1F6] bg-[#E62E77] border-[#E62E77] shadow-sm"
                                    : "text-[#111318] border-[#C7CAD1] bg-white hover:border-[#E62E77] hover:bg-[#FFF1F6] hover:text-[#E62E77]"
                                }`}
                        >
                            <span>{category}</span>

                            <FiChevronRight
                                className={`shrink-0 ${activeCategory === category
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
                        {activeCategory}
                    </h3>

                    <p className="mt-1 text-sm text-[#59606C]">
                        Explore our {activeCategory.toLowerCase()} services.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-2.5">

                    {services[activeCategory].map((service) => (
                        <button
                            key={service}
                            type="button"
                            onClick={() => handleServiceClick(service, activeCategory)}
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
