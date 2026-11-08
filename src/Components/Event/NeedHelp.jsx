import React from 'react';

const NeedHelp = () => {
  return (
    <section className="">
      <div className=" flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Left Column: Heading & Description */}
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F] mb-2 tracking-tight">
            Need Help Using Utshob?
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal">
            Our customer care team can help you create a request, compare quotations or manage a confirmed booking.
          </p>
        </div>

        {/* Right Column: CTA Button */}
        <div className="w-full md:w-auto flex justify-start md:justify-end">
          <button className="w-full sm:w-auto px-7 py-3 bg-white border cursor-pointer border-[#E62E77] text-[#E62E77] hover:bg-[#E62E77] hover:text-white font-semibold text-[14px] rounded-lg transition-all duration-200 shadow-sm whitespace-nowrap">
            Get Price Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default NeedHelp;