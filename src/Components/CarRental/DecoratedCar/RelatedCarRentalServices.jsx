import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const RelatedCarRentalServices = () => {
    const services = [
        { title: "Wedding Car Rental", link: "wedding-car-rental" },
        { title: "Noah Car Rental", link: "noah-rental" },
        { title: "Micro Bus Rental", link: "micro-bus-rental" },
    ];

    return (
        <section className="">
            {/* Title */}
            <h2 className="text-xl sm:text-2xl md:text-[42px] font-bold text-slate-900 mb-2">
                Related Car Rental Services
            </h2>

            {/* Subtitle / Inline Links */}
            <p className="text-slate-500 text-xs md:text-sm mb-8 leading-relaxed">
                Wedding Car Rental · Noah Car Rental · Micro Bus Rental
            </p>

            {/* Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-2xl  border border-slate-100 flex flex-col justify-between min-h-[96px] group cursor-pointer "
                    >
                        <h3 className="text-sm font-bold text-slate-800 mb-2">
                            {service.title}
                        </h3>
                        <a
                            href={service.link}
                            className="text-xs font-semibold text-pink-500 flex items-center gap-1 group-hover:gap-1.5 transition-all"
                        >
                            Explore
                            <BsArrowRight size={14} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RelatedCarRentalServices;