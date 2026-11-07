import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
const EventDecorationHowWork = () => {
    const steps = [
        {
            number: '01',
            title: 'Choose a Design or Upload Your Own',
            description: 'Select a design available in the Utshob app or upload your own reference image. Add the specifications providers need to understand your requirement.',
        },
        {
            number: '02',
            title: 'Submit Your Requirement',
            description: 'Add your event date, location, preferred style, reference images and other important details.',
        },
        {
            number: '03',
            title: 'Receive Quotations',
            description: 'Relevant service providers can review your request and submit quotations.',
        },
        {
            number: '04',
            title: 'Compare Your Options',
            description: 'Compare available providers based on:',
            tags: ['Price', 'Included & Excluded items', 'Rating', 'Reviews', 'Portfolio'],
        },
        {
            number: '05',
            title: 'Choose Your Provider',
            description: 'Select the provider and quotation that best fit your requirement.',
        },
        {
            number: '06',
            title: 'Confirm Your Order',
            description: 'Confirm the selected service by paying the required token money.',
        },
        {
            number: '07',
            title: 'Coordinate with Your Provider',
            description: 'After the order is confirmed, you and the selected service provider can communicate directly about the event location, timing, design and setup requirements.',
        },
        {
            number: '08',
            title: 'Complete the Service',
            description: 'The provider completes the agreed service based on your confirmed requirement.',
        },
        {
            number: '09',
            title: 'Rate & Review',
            description: 'After the service is completed, you can rate and review the provider based on your experience.',
        },
    ];

    return (
        <section className="">
            <div className="">
                {/* Header */}
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        How Event Decoration Works on Utshob
                    </h2>
                    <p className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[#E62E77] font-medium text-sm md:text-base">
                        <span>One Request</span>
                        <FaArrowRight className="text-xs shrink-0" />

                        <span>Multiple Quotations</span>
                        <FaArrowRight className="text-xs shrink-0" />

                        <span>Compare</span>
                        <FaArrowRight className="text-xs shrink-0" />

                        <span>Book</span>
                    </p>
                </div>

                {/* Steps Grid (3 columns, 3 rows) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 border border-[#E2E6EB]  flex flex-col justify-between"
                        >
                            <div>
                                {/* Badge Number & Title */}
                                <div className="flex items-start gap-4 mb-4">
                                    <span className="flex-shrink-0 w-10 h-10 bg-[#E62E77] text-white rounded-full flex items-center justify-center font-bold text-sm">
                                        {step.number}
                                    </span>
                                    <h3 className="text-lg font-bold text-gray-900 leading-snug">
                                        {step.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Optional Tags for Step 04 */}
                                {step.tags && (
                                    <div className="mt-3 flex flex-wrap gap-1 text-xs text-gray-600 font-medium">
                                        {step.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="inline-flex items-center">
                                                {tag} {tIdx < step.tags.length - 1 && <span className="mx-1 text-[#E62E77]">→</span>}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Action Button */}
                <div>
                    <button className="bg-[#E62E77] hover:bg-[#d02b5e] text-white font-medium py-3.5 px-6 rounded-lg transition-colors shadow-sm">
                        Start Your Decoration Request
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EventDecorationHowWork;