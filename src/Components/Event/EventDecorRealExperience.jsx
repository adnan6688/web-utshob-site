
import React, { useState, useEffect, useRef } from 'react';

// Default Data
const DEFAULT_EXPERIENCE_DATA = {
    title: 'Built on Real Event Experience',

    subtitle:
        'Built from real event-service experience and a growing network of service providers.',

    duration: 2000,

    stats: [
        {
            end: 800,
            suffix: '+',
            title: 'Programs',
            description:
                'Experience across weddings, birthdays and other events.',
        },
        {
            end: 1500,
            suffix: '+',
            title: 'Services Delivered',
            description:
                'Event services delivered across multiple categories.',
        },
        {
            end: 2000,
            suffix: '+',
            title: 'Verified Service Providers',
            description:
                'A growing network of verified event service providers.',
        },
    ],
};

// Custom Hook for Number Counting Animation
const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;

        const increment = end / (duration / 16);

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

// Statistics Item
const StatItem = ({
    end,
    suffix = '+',
    title,
    description,
    duration,
}) => {
    const { count, ref } = useCounter(end, duration);

    return (
        <div ref={ref} className="flex flex-col items-start gap-y-2">

            {/* Animated Number */}
            <h3 className="mb-2 text-2xl font-bold tracking-normal text-[#E62E77]">
                {count.toLocaleString()}{suffix}
            </h3>

            {/* Title */}
            <h4 className="mb-1 text-[12px] font-semibold leading-[18px] text-[#111318]">
                {title}
            </h4>

            {/* Description */}
            {description && (
                <p className="text-[11px] leading-[16px] text-[#5E6878]">
                    {description}
                </p>
            )}
        </div>
    );
};

// Main Component
const EventDecorRealExperience = ({
    data = {},
    className = '',
}) => {
    const {
        title = DEFAULT_EXPERIENCE_DATA.title,
        subtitle = DEFAULT_EXPERIENCE_DATA.subtitle,
        duration = DEFAULT_EXPERIENCE_DATA.duration,
        stats = DEFAULT_EXPERIENCE_DATA.stats,
    } = data;

    return (
        <section className={`w-full ${className}`}>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

                {/* Left Side */}
                <div className="lg:col-span-5">
                    {title && (
                        <h2 className="mb-4 text-3xl font-bold leading-tight text-[#111318]">
                            {title}
                        </h2>
                    )}

                    {subtitle && (
                        <p className="text-[15px] leading-[23px] text-[#5E6878]">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Right Side: Statistics */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-7">
                    {stats.map((stat, index) => (
                        <StatItem
                            key={index}
                            end={stat.end}
                            suffix={stat.suffix}
                            title={stat.title}
                            description={stat.description}
                            duration={duration}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default EventDecorRealExperience;
