import { FaPlus } from "react-icons/fa6";

const EventDecorPackage = () => {
    return (
        <section className="">
            <div className="">
                {/* Header */}
                <div className="mb-10">
                    <h2 className="text-3xl  leading-[42px] font-bold text-[#111318] mb-2">
                        Book One Service or Build Your Own Event Package
                    </h2>
                    <p className="text-[#E62E77] font-medium text-lg mb-3">
                        Plan the Way You Want
                    </p>
                    <p className="text-[#59606C]  text-base">
                        Every event has different requirements. Utshob gives you the flexibility to choose only what you need.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 items-stretch">

                    {/* Card 01 */}
                    <div className="bg-white rounded-2xl p-8 border border-[#E2E6EB]  flex flex-col justify-between min-h-[360px]">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-9 h-9 bg-[#FFF1F6] text-[#E62E77] rounded-full flex items-center justify-center font-bold text-xs">
                                    01
                                </span>
                                <h3 className="text-xl font-bold text-[#111318]">
                                    Book a Single Service
                                </h3>
                            </div>

                            <div className="space-y-4 text-[#59606C]    text-[13px] leading-5 tracking-normal mb-6">
                                <p>
                                    Need only a wedding stage, birthday decoration, wedding car decoration or photo booth?
                                </p>
                                <p>
                                    You can request that service separately.
                                </p>

                                {/* Gray Tag Box */}
                                <p className="bg-[#F5F6F8] rounded-xl p-4 text-xs text-[#59606C]">
                                    Stage · Birthday · Car decoration
                                </p>
                            </div>
                        </div>


                    </div>

                    {/* Card 02 (Highlighted Pink Card) */}
                    <div className="bg-[#FFF0F5] rounded-2xl p-8 border border-pink-100 flex flex-col justify-between min-h-[360px]">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-9 h-9 bg-[#E62E77] text-white rounded-full flex items-center justify-center font-bold text-xs">
                                    02
                                </span>
                                <h3 className="text-xl font-bold text-[#111318]">
                                    Combine Multiple Services
                                </h3>
                            </div>

                            <div className="space-y-4 text-[#59606C]    text-[13px] leading-5 tracking-normal mb-6">
                                <p>
                                    Need several services for the same event?
                                </p>
                                <p>
                                    Choose multiple services and build your own package.
                                </p>
                                <p className="">
                                    For example:
                                </p>

                                {/* White Formula Box with Pink Text */}
                                <p className="bg-white rounded-xl p-3 text-xs font-semibold text-[#E62E77] leading-relaxed flex flex-wrap items-center gap-x-2 gap-y-2">
                                    <span>Wedding Stage</span>
                                    <FaPlus className="shrink-0 text-[9px]" />

                                    <span>Gate Decoration</span>
                                    <FaPlus className="shrink-0 text-[9px]" />

                                    <span>Walkway</span>
                                    <FaPlus className="shrink-0 text-[9px]" />

                                    <span>Wedding Car</span>
                                    <FaPlus className="shrink-0 text-[9px]" />

                                    <span>Photography</span>
                                </p>
                            </div>
                        </div>


                    </div>

                    {/* Card 03 */}
                    <div className="bg-white rounded-2xl p-8 border border-[#E2E6EB] s flex flex-col justify-between min-h-[360px]">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-9 h-9 bg-[#FFF0F5] text-[#E62E77] rounded-full flex items-center justify-center font-bold text-xs">
                                    03
                                </span>
                                <h3 className="text-xl font-bold text-[#111318] leading-snug">
                                    Plan Multiple Programs on Different Dates
                                </h3>
                            </div>

                            <div className="space-y-4 text-[#59606C]    text-[13px] leading-5 tracking-normal mb-6">
                                <p>
                                    If your event includes several programs, you can create separate requirements for each date.
                                </p>
                                <p className="text-xs text-[#59606C]">
                                    For example:
                                </p>
                                <p>
                                    Your event does not have to fit into one fixed package.
                                </p>
                                {/* Dates Box */}
                                <div className="bg-[#F5F6F8] rounded-xl p-4 text-[11px] text-[#59606C]   space-y-1">
                                    <p>Gaye Holud — Date 1</p>
                                    <p>Wedding — Date 2</p>
                                    <p>Reception — Date 3</p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

                {/* Action Button */}
                <div>
                    <button className="bg-[#E62E77] hover:bg-[#d02b5e] text-white font-medium py-3.5 px-6 rounded-lg hover:cursor-pointer transition-colors shadow-sm">
                        Build Your Event Request
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EventDecorPackage;