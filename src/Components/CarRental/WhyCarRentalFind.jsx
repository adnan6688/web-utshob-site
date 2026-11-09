import React from 'react';

export default function WhyFindCarRental() {
    const topFeatures = [
        {
            title: 'Define Your Own Requirement',
            description:
                'Start with the trip you actually need instead of adjusting your requirement around a generic fixed rental package.',
        },
        {
            title: 'Relevant Partners Can Bid',
            description:
                'Partners quote based on the same submitted requirement.',
        },
        {
            title: 'Compare Multiple Quotations',
            description:
                'Review different transport offers before choosing.',
        },
        {
            title: 'See the Proposed Vehicle',
            description:
                'Compare the actual vehicle being offered rather than relying only on a generic vehicle category.',
        },
        {
            title: 'Review Vehicle Photos',
            description:
                'See exterior and interior photos before confirming.',
        },
        {
            title: 'Compare Ratings & Reviews',
            description:
                'Use previous customer feedback as part of the vehicle and partner comparison.',
        },
    ];

    return (
        <section className="w-full bg-pink-50/40">
            <div className="">
                {/* Section Heading */}
                <div className="mb-10 text-left">
                    <h2 className="text-3xl  font-bold text-gray-900 tracking-normal">
                        Why Find Car Rental Through Utshob?
                    </h2>
                </div>

                {/* 6-Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {topFeatures.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E6EB] border-t-4 border-t-[#E62E77] shadow-xs flex flex-col justify-start transition-all duration-200 hover:shadow-md"
                        >
                            <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug">
                                {item.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Wide Bottom Card */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E6EB] border-t-4 border-t-[#E62E77] shadow-xs grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                    <div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                            Compare More Than Price
                        </h3>

                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                            Review vehicle, model, capacity, rating and reviews together with the quotation.
                        </p>
                    </div>

                    <div className="md:border-l md:border-gray-200 md:pl-8">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                            Plan Multiple Vehicles, Programs & Event Services
                        </h3>

                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                            Create one requirement for multiple vehicles and passenger groups, or separate programs, dates and timings. Car Rental can also be part of a wider event requirement in Utshob.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}