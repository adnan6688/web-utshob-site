
import React from "react";
import { FaCarSide, FaBusSimple } from "react-icons/fa6";

const rentalServices = [
    {
        serviceGroup: "Wedding · Family · Guests",
        title: "Wedding Car Rental",
        description:
            "Arrange a Groom's Car, bride and family transportation or complete wedding guest transport.",
        exploreItems: [
            "Groom's Car",
            "Decorated Wedding Car",
            "Sedan",
            "Luxury Car",
            "Noah / HiAce",
            "Bus / Minibus",
        ],
        footerText:
            "Define each Wedding, Holud or Reception transport requirement and compare partner quotations.",
        links: [
            "Explore Wedding Car Rental",
            "Explore Decorated Wedding Car",
        ],
        icon: FaCarSide,
        headerColor: "bg-[#FFF0F5]",
    },
    {
        serviceGroup: "Driver Included",
        title: "Sedan Car Rental",
        description:
            "Request an Axio, Premio or flexible Sedan requirement for weddings, family or corporate trips.",
        exploreItems: [
            "Axio Car Rental",
            "Premio Car Rental",
            "Flexible Sedan Requirement",
        ],
        links: ["Explore Sedan Car Rental"],
        icon: FaCarSide,
        headerColor: "bg-[#EAF7FF]",
    },
    {
        serviceGroup: "Group Transport",
        title: "Microbus Rental",
        description:
            "Compare Noah and HiAce based on passenger count, luggage, route and actual vehicle capacity.",
        exploreItems: [
            "Noah Car Rental",
            "HiAce Car Rental",
            "Wedding guests",
            "Family trips",
            "Tours",
            "Corporate transport",
        ],
        links: ["Explore Microbus Rental"],
        icon: FaBusSimple,
        headerColor: "bg-[#FFF0F5]",
    },
    {
        serviceGroup: "Group Transport",
        title: "Noah & HiAce Rental",
        description:
            "Choose Noah for smaller groups or HiAce where group or capacity requirements are larger.",
        exploreItems: [],
        links: [
            "Explore Noah Car Rental",
            "Explore HiAce Car Rental",
        ],
        icon: FaBusSimple,
        headerColor: "bg-[#EAF7FF]",
    },
    {
        serviceGroup: "Group Transport",
        title: "Bus & Minibus Rental",
        description: "",
        suitableFor: "Suitable for:",
        exploreItems: [
            "Wedding guest transportation",
            "Tours and picnics",
            "Corporate transport",
            "Multiple pickup points",
            "Outstation requirements",
            "Larger groups",
        ],
        links: ["Explore Bus & Minibus Rental"],
        icon: FaBusSimple,
        headerColor: "bg-[#FFF0F5]",
    },
    {
        serviceGroup: "Driver Included",
        title: "Luxury Car Rental",
        description:
            "Request BMW, Mercedes-Benz, Prado or a flexible Luxury Car requirement.",
        exploreItems: [],
        links: ["Explore Luxury Car Rental"],
        icon: FaCarSide,
        headerColor: "bg-[#EAF7FF]",
    },
];

export default function CarRentalServices() {
    return (
        <section className="w-full ">

            <div className="">

                {/* Section Header */}
                <div className="mb-5 sm:mb-6">
                    <h2 className="mb-2 text-[20px] font-bold leading-tight text-[#171B20] sm:text-[24px]">
                        Car Rental Services for Different Travel and Event Needs
                    </h2>

                    <p className="text-[11px] leading-[18px] text-[#59606C] sm:text-[13px]">
                        From one Sedan to multiple wedding or event vehicles,
                        explore car rental options based on the trip you actually need.
                    </p>
                </div>

                {/* Services Grid */}

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-3.5">
                    {rentalServices.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.title}
                                className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#E2E6EB] bg-white"
                            >
                                {/* Card Header */}
                                <div
                                    className={`flex min-h-[48px] items-center gap-2.5 px-3 py-2 ${service.headerColor}`}
                                >
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E92D79] text-white">
                                        <Icon className="text-base" />
                                    </div>

                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[10px] font-bold uppercase leading-4 tracking-normal text-[#D61F68]">
                                            SERVICE GROUP
                                        </span>

                                        <span className="text-xs leading-4 text-[#586070]">
                                            {service.serviceGroup}
                                        </span>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="flex flex-1 flex-col p-3 sm:p-4">

                                    <h3 className="mb-2 text-base font-bold leading-6 text-[#171B20] sm:text-lg">
                                        {service.title}
                                    </h3>

                                    {service.description && (
                                        <p className="mb-3 text-[13px] leading-5 text-[#59606C] sm:text-sm">
                                            {service.description}
                                        </p>
                                    )}

                                    {service.suitableFor && (
                                        <p className="mb-2 text-[13px] leading-5 text-[#59606C] sm:text-sm">
                                            {service.suitableFor}
                                        </p>
                                    )}

                                    {/* Explore Items */}
                                    {service.exploreItems.length > 0 && (
                                        <div className="mb-3">
                                            <p className="mb-2 text-sm font-bold leading-5 text-[#171B20]">
                                                Explore:
                                            </p>

                                            <ul className="space-y-2">
                                                {service.exploreItems.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="text-[13px] leading-5 text-[#59606C] sm:text-sm"
                                                    >
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {service.footerText && (
                                        <p className="mb-3 text-xs leading-5 text-[#59606C] sm:text-[13px]">
                                            {service.footerText}
                                        </p>
                                    )}

                                    {/* Action Links */}
                                    <div className="mt-auto flex flex-wrap gap-x-1.5 gap-y-1 pt-2">

                                        {service.links.map((link, index) => (
                                            <a
                                                key={link}
                                                href="#explore"
                                                className="text-xs font-semibold leading-5 text-[#D61F68] hover:underline sm:text-[13px]"
                                            >
                                                {link}
                                                {index !== service.links.length - 1 && " ·"}
                                            </a>
                                        ))}

                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
