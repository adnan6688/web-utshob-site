

const Count = () => {
    const stats = [
        {
            value: '800+',
            label: 'Programs',
        },
        {
            value: '1,500+',
            label: 'Services Delivered',
        },
        {
            value: '2,000+',
            label: 'Verified Service Providers',
        },
    ];

    return (
        <section className="">
            <div className="flex flex-col gap-y-4">
                {/* Section Header */}
                <div className="flex flex-col gap-y-4">
                    {/* Exact H2 Heading matching SEO & AEO Hand-off specs */}
                    <h2 className="text-2xl text-wrap sm:text-[38px] font-bold text-[#111318] tracking-normal leading-[145%]">
                        Growing Across Bangladesh
                    </h2>
                    <p className="text-base sm:text-[15px] text-[#626773] leading-[145%]">
                        Built from real event-service experience and a growing network of service providers.
                    </p>
                </div>

                {/* 3-Column Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-[#F9FAFB] rounded-2xl sm:rounded-[20px] p-8 sm:p-5 text-center flex flex-col items-center gap-y-2.5 justify-center border border-gray-100 shadow-[0_4px_18px_rgba(0,0,0,0.06)] transition-shadow duration-300 ease-in-out "
                        >
                            {/* Stat Number */}
                            <span className="text-4xl sm:text-[38px] font-bold text-[#E62E77]  leading-[145%] tracking-normal">
                                {stat.value}
                            </span>

                            {/* Stat Label */}
                            <span className="text-sm sm:text-[14px] font-semibold text-[#626773] leading-[145%] tracking-normal">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};



export default Count;