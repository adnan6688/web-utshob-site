import React from 'react';

const DecoratedHeroCar = () => {
  return (
    <section className="">
      <div className="grid  grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content Side */}
        <div className="space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-normal">
            Decorated Wedding Car & <br className="hidden sm:inline" />
            Groom Car Decoration
          </h1>

          <h2 className="text-xl md:text-[19px] font-semibold text-slate-900">
            Need a decorated wedding car or বরএর সাজানো গাড়ি?
          </h2>

          <div className="space-y-4 text-[#5E6878] text-base leading-normal">
            <p>
              With Utshob, the vehicle and decoration requirement can be defined as part of the same wedding transport need.
            </p>
            <p>
              Specify the car you want, when it must be ready and how much additional preparation time is required for decoration. Relevant partners can then quote against the complete requirement.
            </p>
          </div>

          <div className="pt-2 flex justify-center sm:justify-start">
            <button className="bg-[#E9337D] hover:bg-[#d6256c] text-white font-medium py-3.5 px-4 sm:px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base">
              Get Decorated Wedding Car Quotations
            </button>
          </div>
        </div>

        {/* Right Graphic / Image Side */}
        <div className="relative bg-[#FFF0F5] rounded-3xl p-8 sm:p-12 overflow-hidden flex flex-col justify-between min-h-[380px]">
          {/* Background Decorative Pink Circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDDCE7] rounded-full translate-x-12 -translate-y-12 pointer-events-none" />

          {/* Top Badge */}
          <div className="relative z-10 self-start">
            <span className="inline-block bg-white text-[#E9337D] font-bold text-xs uppercase tracking-normal py-1.5 px-4 rounded-full ">
              VERIFIED PROVIDER PHOTO
            </span>
          </div>


          {/* Simple Car Illustration Graphic */}
          <div className="relative z-10 w-full max-w-[320px] mx-auto mt-4">
            <div className="relative flex flex-col items-center">
              {/* Top Cabin */}
              <div className="w-48 h-16 border-2 border-[#F992BC] bg-white rounded-t-2xl z-0 relative flex justify-center items-center">
                {/* Center Circle Decor */}
                <div className="w-12 h-12 bg-[#E9337D] rounded-full translate-y-4 z-20" />
              </div>
              
              {/* Car Body */}
              <div className="w-full h-16 border-2 border-[#F992BC] bg-white rounded-2xl -mt-4 z-10 relative" />

              {/* Wheels */}
              <div className="w-full flex justify-between px-6 -mt-5 z-20">
                <div className="w-8 h-8 bg-slate-900 rounded-full" />
                <div className="w-8 h-8 bg-slate-900 rounded-full" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DecoratedHeroCar;