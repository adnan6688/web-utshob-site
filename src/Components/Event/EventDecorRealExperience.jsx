import React, { useState, useEffect, useRef } from 'react';

// Custom Hook for Number Counting Animation
const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const increment = end / (duration / 16); // ~60fps
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, end, duration]);

    return { count, ref };
};

const StatItem = ({ end, suffix = "+", title, description }) => {
    const { count, ref } = useCounter(end);

    return (
        <div ref={ref} className="flex flex-col gap-y-2 items-start">
            {/* Animated Number */}
            <h3 className="text-2xl font-bold text-[#E62E77] mb-2 tracking-tight">
                {count.toLocaleString()}{suffix}
            </h3>
            {/* Title */}
            <h4 className="text-gray-900 font-semibold leading-[18px] text-[12px] mb-1">
                {title}
            </h4>
            {/* Description */}
            <p className="text-gray-600 text-[11px] leading-[16px]">
                {description}
            </p>
        </div>
    );
};

const EventDecorRealExperience = () => {
    const stats = [
        {
            end: 800,
            suffix: "+",
            title: "Programs",
            description: "Experience across weddings, birthdays and other events.",
        },
        {
            end: 1500,
            suffix: "+",
            title: "Services Delivered",
            description: "Event services delivered across multiple categories.",
        },
        {
            end: 2000,
            suffix: "+",
            title: "Verified Service Providers",
            description: "A growing network of verified event service providers.",
        },
    ];

    return (
        <section className="">
            <div className=" grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Side: Heading and Subtitle (5 columns) */}
                <div className="lg:col-span-5">
                    <h2 className="text-3xl  font-bold text-gray-900 mb-4 leading-tight">
                        Built on Real Event Experience
                    </h2>
                    <p className="text-gray-600 text-[15px] leading-[23px]">
                        Built from real event-service experience and a growing network of service providers.
                    </p>
                </div>

                {/* Right Side: Animated Statistics Counters (7 columns) */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <StatItem
                            key={index}
                            end={stat.end}
                            suffix={stat.suffix}
                            title={stat.title}
                            description={stat.description}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default EventDecorRealExperience;