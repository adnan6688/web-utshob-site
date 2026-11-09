
import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";

const EventDecorCompleteEvent = ({
    title = "Complete Your Event in One App",
    buttonText = "Explore All Event Services",
    services = [
        {
            id: 1,
            title: "Photography & Videography",
            description: "Find photography and videography services for weddings, birthdays, corporate events and other occasions.",
            image: "/images/event/wedding-stage.png",
            imageAlt: "Photography and videography services",
            placeholderBg: "bg-[#FFF0F5]",
        },
        {
            id: 2,
            title: "Car Rental",
            description: "Find vehicles for wedding and event transportation.",
            image: "/images/event/wedding-stage.png",
            imageAlt: "Wedding and event car rental",
            placeholderBg: "bg-[#F0F8FF]",
        },
        {
            id: 3,
            title: "Cake",
            description: "Explore cakes for birthdays, holud and other celebrations.",
            image: "/images/event/wedding-stage.png",
            imageAlt: "Event and birthday cakes",
            placeholderBg: "bg-[#FFF0F5]",
        },
        {
            id: 4,
            title: "Rides & Band Party",
            description: "Find horse carriage, palki, band party and other traditional event services.",
            image: "/images/event/wedding-stage.png",
            imageAlt: "Rides and band party services",
            placeholderBg: "bg-[#F0F8FF]",
        },
        {
            id: 5,
            title: "Event Rental & Support",
            description: "Find lighting, sound systems, projectors, furniture, pandal and other event support services.",
            image: "/images/event/wedding-stage.png",
            imageAlt: "Event rental and support services",
            placeholderBg: "bg-[#FFF0F5]",
        },
        {
            id: 6,
            title: "Catering & Food",
            description: "Professional catering services, buffet arrangements, and traditional menu packages for your guests.",
            image: "/images/event/wedding-stage.png",
            imageAlt: "Event catering and food services",
            placeholderBg: "bg-[#F0F8FF]",
        },
        {
            id: 7,
            title: "Sound & DJ System",
            description: "High-end audio setups, live DJ gear, microphones, and stage speakers for ultimate entertainment.",
            image: "/images/event/wedding-stage.png",
            imageAlt: "Sound and DJ system for events",
            placeholderBg: "bg-[#FFF0F5]",
        },
        {
            id: 8,
            title: "Fireworks & Lighting",
            description: "Cold pyro, fairy lights, colorful spotlights, and stunning entrance fireworks to glow up your event.",
            image: "/images/event/wedding-stage.png",
            imageAlt: "Event fireworks and lighting",
            placeholderBg: "bg-[#F0F8FF]",
        },
        {
            id: 9,
            title: "Makeup & Styling",
            description: "Expert bridal makeup artists, party styling, and grooming services for your special day.",
            image: "/images/event/wedding-stage.png",
            imageAlt: "Bridal makeup and styling services",
            placeholderBg: "bg-[#FFF0F5]",
        },
        {
            id: 10,
            title: "Invitation & Printing",
            description: "Custom digital invitations, physical card printing, banners, and personalized welcome boards.",
            image: "/images/event/wedding-stage.png",
            imageAlt: "Event invitation and printing services",
            placeholderBg: "bg-[#F0F8FF]",
        },
    ],
}) => {

    const initialDisplayCount = 5;

    const [showAll, setShowAll] = useState(false);

    const displayedServices = showAll
        ? services
        : services.slice(0, initialDisplayCount);

    return (
        <section className="w-full">

            {/* Section Header */}
            <h2 className="text-3xl font-bold text-[#111318] mb-6">
                {title}
            </h2>

            {/* Services Grid */}
            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-10">

                {displayedServices.map((service) => (
                    <div
                        key={service.id}
                        className="
                bg-white rounded-2xl p-4
                border border-[#E2E6EB]
                flex flex-col justify-between
                transition-all duration-500 ease-in-out
                hover:-translate-y-1
                hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                animate-[serviceSlideUp_0.5s_ease-out_both]
            "
                    >
                        <div>
                            {/* Service Image */}
                            <div
                                className={`w-full h-36 ${service.placeholderBg} rounded-xl mb-4 overflow-hidden`}
                            >
                                <img
                                    src={service.image}
                                    alt={service.imageAlt || service.title}
                                    width="800"
                                    height="600"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </div>

                            {/* Card Title */}
                            <h3 className="text-[14px] font-semibold text-[#111318] mb-2 leading-5">
                                {service.title}
                            </h3>

                            {/* Card Description */}
                            <p className="text-[#59606C] text-[11px] leading-[17px] mb-4">
                                {service.description}
                            </p>
                        </div>

                        {/* Explore Link */}
                        <div className="pt-2">
                            <a
                                href={`#${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                aria-label={`Explore ${service.title}`}
                                className="inline-flex items-center gap-1.5 text-[#E62E77] font-semibold text-xs group transition-colors duration-300 hover:text-[#CC0166]"
                            >
                                Explore
                                <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                ))}

            </div>

            {/* Show More / Less Button */}
            {services.length > initialDisplayCount && (
                <div>
                    <button
                        type="button"
                        onClick={() => setShowAll(prev => !prev)}
                        aria-expanded={showAll}
                        className="border-2 border-[#E62E77] text-[#E62E77] hover:bg-[#FFF0F5] font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-sm shadow-sm cursor-pointer"
                    >
                        {showAll
                            ? "Show Less Services"
                            : buttonText}
                    </button>
                </div>
            )}

        </section>
    );
};

export default EventDecorCompleteEvent;
