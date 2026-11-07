
import React from "react";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";

const ServiceHero = ({
    data,
    onPrimaryClick,
    onSecondaryClick,
}) => {
    if (!data) return null;

    const {
        label,
        title,
        descriptions = [],
        workflow = [],
        image,
        imageAlt = "",
        primaryButton,
        secondaryButton,
    } = data;

    return (
        <section className="w-full bg-white">
            <div className="w-full">
                <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-10">

                    {/* Left Content */}
                    <div className="flex h-full min-w-0 flex-col">

                        {label && (
                            <span className="mb-3 block text-[13px] font-semibold text-[#E62E77]">
                                {label}
                            </span>
                        )}

                        {title && (
                            <h1 className="mb-3 text-2xl font-bold leading-[46px] tracking-normal text-[#17191F] sm:text-[38px]">
                                {title}
                            </h1>
                        )}

                        {/* Dynamic Descriptions */}
                        {descriptions.length > 0 && (
                            <div className="space-y-5">
                                {descriptions.map((description, index) => (
                                    <p
                                        key={index}
                                        className="text-sm leading-[24px] tracking-normal text-[#59606C]   sm:text-[16px]"
                                    >
                                        {description}
                                    </p>
                                ))}
                            </div>
                        )}

                        {/* Dynamic Workflow */}
                        {workflow.length > 0 && (
                            <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-[13px] font-semibold text-[#111318]">
                                {workflow.map((step, index) => (
                                    <React.Fragment key={step}>
                                        <span>{step}</span>

                                        {index !== workflow.length - 1 && (
                                            <FaArrowRight />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        )}

                        {/* Dynamic Buttons */}
                        {(primaryButton || secondaryButton) && (
                            <div className="mt-6 flex flex-wrap gap-2 text-[14px]">

                                {primaryButton && (
                                    <Link
                                        to={primaryButton.href}
                                        onClick={onPrimaryClick}
                                        className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#E62E77] px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#CC0166] hover:shadow-md"
                                    >
                                        {primaryButton.text}
                                    </Link>
                                )}

                                {secondaryButton && (
                                    <Link
                                        to={secondaryButton.href}
                                        onClick={onSecondaryClick}
                                        className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#E62E77] bg-white px-4 py-3 font-semibold text-[#E62E77] transition-all duration-300 hover:bg-[#FFF1F6]"
                                    >
                                        {secondaryButton.text}
                                    </Link>
                                )}

                            </div>
                        )}
                    </div>

                    {/* Right Image */}
                    {image && (
                        <div className="flex h-full min-h-[260px] w-full items-center justify-center overflow-hidden rounded-xl border border-[#F1DCE5] bg-[#FFF1F6] sm:min-h-[320px]">
                            <img
                                src={image}
                                alt={imageAlt}
                                loading="lazy"
                                decoding="async"
                                width="550"
                                height="390"
                                className="block h-full min-h-[260px] w-full object-cover sm:min-h-[320px]"
                            />
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
