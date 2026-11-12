

const Count = () => {
    const stats = [
        {
            value: '800+',
            label: 'Events Served',
        },
        {
            value: '1,500+',
            label: 'Services Delivered',
        },
        {
            value: '2,000+',
            label: 'Registered Partners-Growing',
        },
    ];

    return (
        <section className="">
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-4">
                    <h2 className="text-2xl text-wrap sm:text-[38px] font-bold text-[#111318] tracking-normal leading-[145%]">
                        Growing Across Bangladesh
                    </h2>
                    <p className="text-base sm:text-[15px] text-[#626773] leading-[145%]">
                        Built from real event-service experience and a growing network of service providers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl sm:rounded-[20px] p-8 sm:p-5 text-center flex flex-col items-center gap-y-2.5 justify-center border border-[#E2E6EB] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out"
                        >
                            <span className="text-3xl sm:text-[32px] font-bold text-[#E62E77] leading-[145%] tracking-normal">
                                {stat.value}
                            </span>
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