import React from 'react';

const optionsData = [
    {
        title: 'Simple Wedding Stage',
        description: 'Clean setups for smaller venues or budget-focused requirements.',
    },
    {
        title: 'Floral Wedding Stage',
        description: 'Flower-focused stage and backdrop designs.',
    },
    {
        title: 'Premium Wedding Stage',
        description: 'More detailed stage structures, backdrops and decorative elements.',
    },
    {
        title: 'Indoor or Outdoor Stage',
        description: 'Designs suited to the available venue and environment.',
    },
    {
        title: 'Custom Wedding Stage',
        description: 'Use your own reference and specifications.',
    },
];

export default function WeddingStageOptions() {
    return (
        <section className="">
            <div className="">
                <h2 className="text-2xl sm:text-[28px] leading-[145%] tracking-normal font-bold text-gray-900 mb-8">
                    Wedding Stage Options You Can Request
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {optionsData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl  border border-[#E5E7EB] p-6 relative overflow-hidden flex flex-col justify-between"
                        >
                            {/* Straight Pink Accent Line */}
                            <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#E62E77]" />

                            <div className="pl-2">
                                <h3 className="text-[17px] leading-[145%] tracking-normal font-bold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-[13px] text-[#626773] leading-[145%] tracking-normal ">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}