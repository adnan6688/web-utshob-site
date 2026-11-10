import React from 'react';

const EventDecorWork = () => {
    const projects = [
        { title: 'Wedding Stage projects', bgColor: 'bg-[#FFF0F5]' }, // Light pink
        { title: 'Holud & Mehendi projects', bgColor: 'bg-[#F0F8FF]' }, // Light blue
        { title: 'Birthday Decoration projects', bgColor: 'bg-[#FFF0F5]' }, // Light pink
        { title: 'Basor Ghor projects', bgColor: 'bg-[#F0F8FF]' }, // Light blue
        { title: 'Wedding Car projects', bgColor: 'bg-[#FFF0F5]' }, // Light pink
        { title: 'Gate & Walkway projects', bgColor: 'bg-[#F0F8FF]' }, // Light blue
        { title: 'Photo Booth projects', bgColor: 'bg-[#FFF0F5]' }, // Light pink
    ];

    return (
        <section className="">
            <div className="">
                {/* Header */}
                <div className="mb-10">
                    <h2 className="text-2xl sm:text-3xl  leading-[42px] font-bold text-[#111318] mb-2">
                        See Real Event Decoration Work
                    </h2>
                    <p className="text-[#E62E77] font-medium text-[18px] leading-[25px] mb-4">
                        See the Work Before You Choose
                    </p>
                    <p className="text-[#59606C] text-base max-w-3xl leading-6">
                        Decoration is highly visual. A provider's previous work can help you understand their style, execution and experience before making a decision. Explore real event decoration work and use previous setups as inspiration when creating your own requirement.
                    </p>
                </div>

                {/* Portfolio Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`${project.bgColor} rounded-2xl  px-6 py-15 flex items-center justify-center text-center cursor-pointer
                                shadow-[0_2px_10px_rgba(0,0,0,0.02)]
                                hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)]
                                hover:-translate-y-1
                                transition-all duration-500 ease-in-out`}
                        >
                            <span className="text-[#5E6878] font-semibold text-sm">
                                {project.title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Outlined Action Button */}
                <div>
                    <button className="border-2 border-[#E62E77] text-[#E62E77] hover:bg-[#FFF0F5] font-semibold py-3 px-6 rounded-lg transition-colors">
                        Request a Similar Setup
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EventDecorWork;