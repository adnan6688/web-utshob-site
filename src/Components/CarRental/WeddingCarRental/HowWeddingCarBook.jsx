import React from 'react';

export default function HowWeddingCarBook() {
  const steps = [
    {
      number: '1',
      title: 'Define Your Wedding Transport',
      description: 'Submit the programs, vehicles, routes and timings you need.',
    },
    {
      number: '2',
      title: 'Relevant Partners Bid',
      description: 'Partners propose vehicles they can provide and quote against your requirement.',
    },
    {
      number: '3',
      title: 'Compare',
      description: 'Review the vehicles, photos, rates, ratings and reviews.',
    },
    {
      number: '4',
      title: 'Choose & Confirm',
      description: 'Select your preferred proposal and continue the booking process in the Utshob app.',
    },
  ];

  return (
    <section className="w-full text-[#111318]">
      <div className="">
        {/* Main Title */}
        <div className="mb-8 text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111318] tracking-normal">
            How Wedding Car Booking Works
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-3xl p-6 sm:p-7  border border-slate-100/60 flex flex-col justify-start transition-all duration-200 "
            >
              {/* Step Number Circle */}
              <div className="mb-4">
                <span className="w-6 h-6 rounded-full bg-pink-100/70 text-pink-600 font-bold text-xs flex items-center justify-center">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[#111318] mb-2 leading-[145%] tracking-normal">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#5C6370] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}