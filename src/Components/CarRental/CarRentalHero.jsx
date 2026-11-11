
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import gari from '../../assets/web Images/CarRental/marcedezBand.jpg';
import Button from '../Shared/Button';

const DEFAULT_DATA = {
    title: 'Car Rental in Bangladesh',

    description: `Find car rental services in Dhaka and across Bangladesh based on
    the trip or event you actually need. Define the vehicle, passenger,
    route and timing, receive partner quotations and compare actual
    proposed vehicles before choosing.`,

    steps: [
        'Define Your Requirement',
        'Relevant Partners Bid',
        'Compare',
        'Book',
    ],

    buttons: [
        {
            label: 'Get Car Rental Quotations in the App',
            variant: 'primary',
        },
        {
            label: 'Explore Car Rental Options',
            variant: 'secondary',
        },
    ],

    image: gari,
    imageAlt:
        'Car rental vehicles in Bangladesh for events, weddings and transportation',
    imageTitle: 'Car Rental Services in Bangladesh - Utshob.xyz',
};

export default function CarRentalHero({ data = {} }) {
    const heroData = {
        ...DEFAULT_DATA,
        ...data,
    };

    const {
        title,
        description,
        steps,
        buttons,
        image,
        imageAlt,
        imageTitle,
    } = heroData;

    return (
        <section className="w-full py-6 sm:py-8 lg:py-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">

                {/* Left Content */}
                <div className="flex w-full flex-col gap-5 lg:w-[52%]">

                    <div>
                        <h1 className="mb-3 text-3xl font-bold text-[#111318] sm:text-[38px] lg:leading-[52px]">
                            {title}
                        </h1>

                        <p className="text-sm leading-[145%] text-[#5E6878] sm:text-base">
                            {description}
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[11px] font-semibold text-[#111318] sm:mt-9 sm:text-xs">
                        {steps.map((step, index) => (
                            <React.Fragment key={`${step}-${index}`}>
                                <span>{step}</span>

                                {index !== steps.length - 1 && (
                                    <FaArrowRight className="shrink-0 text-[#E62E77]" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        {buttons.map((button, index) => (
                            <Button
                                key={`${button.label}-${index}`}
                                type="button"
                                onClick={button.onClick}
                                className={`rounded-xl px-5 py-3 text-xs font-semibold transition-all duration-300 sm:text-sm ${button.variant === 'primary'
                                        ? 'bg-[#E62E77] text-white shadow-sm'
                                        : 'border border-rose-300 bg-white text-[#E62E77]'
                                    }`}
                            >
                                {button.label}
                            </Button>
                        ))}
                    </div>

                </div>

                {/* Right Image */}
                <div className="w-full overflow-hidden rounded-[28px] border border-[#F1DCE5] bg-[#FFF5F9] lg:min-h-[400px] lg:w-[48%]">
                    <img
                        src={image}
                        alt={imageAlt}
                        title={imageTitle}
                        loading="lazy"
                        decoding="async"
                        className="h-[240px] w-full object-cover sm:h-[300px] lg:h-full"
                    />
                </div>

            </div>
        </section>
    );
}
