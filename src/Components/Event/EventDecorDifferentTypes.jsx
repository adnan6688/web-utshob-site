import React from 'react';

const EventDecorDifferentTypes = () => {

    const eventTypes = [
        {
            title: 'Wedding & Reception',
            bgColor: 'bg-[#FFF0F5]',
            image: '/images/event/wedding-stage.png',
            imageAlt: 'Wedding and reception decoration',
            paragraphs: [
                'Wedding event decoration',
                'A complete wedding decoration setup may include the stage, entrance gate, walkway, head table, wedding car, basor ghor and other venue areas.'
            ],
        },
        {
            title: 'Gaye Holud & Mehendi',
            bgColor: 'bg-[#F0F8FF]',
            image: '/images/event/wedding-stage.png',
            imageAlt: 'Gaye holud and mehendi decoration',
            paragraphs: [
                'Choose colourful, floral, traditional or customized decoration for halls, rooftops or home events.'
            ],
        },
        {
            title: 'Birthday',
            bgColor: 'bg-[#FFF0F5]',
            image: '/images/event/wedding-stage.png',
            imageAlt: 'Birthday event decoration',
            paragraphs: [
                'Request balloon decoration, themed backdrops, photo areas and customized birthday setups based on age, venue and theme.'
            ],
        },
        {
            title: 'Home & Rooftop Events',
            bgColor: 'bg-[#F0F8FF]',
            image: '/images/event/wedding-stage.png',
            imageAlt: 'Home and rooftop event decoration',
            paragraphs: [
                'Smaller venues can also be decorated with customized layouts based on the available space.'
            ],
        }
    ];


    return (
        <section className="">
            <div className="">
                {/* Section Title */}
                <h2 className="text-3xl  font-bold text-[#111318] mb-10 leading-[42px]">
                    Decoration for Different Types of Events
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {eventTypes.map((event, index) => (
                        <div
                            key={index}
                            className={`${event.bgColor} rounded-2xl p-5 flex flex-col items-start min-h-[420px] shadow-sm`}
                        >
                            {/* Image Container / Visual Placeholder */}
                            <div className="w-full h-44 bg-white rounded-xl mb-6 overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.imageAlt || event.title}
                                    width="800"
                                    height="600"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-[16px] leading-[23px] tracking-normal font-bold text-[#111318] mb-3">
                                {event.title}
                            </h3>

                            {/* Description Content */}
                            <div className="space-y-3 text-[#59606C]   text-xs sm:text-sm leading[145%]">
                                {event.paragraphs.map((paragraph, pIdx) => (
                                    <p key={pIdx}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventDecorDifferentTypes;