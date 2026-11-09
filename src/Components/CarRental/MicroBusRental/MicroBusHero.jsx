import React from 'react';

export default function MicroBusHero() {
  return (
    <section className="w-full  bg-white text-[#111318]">
      {/* Top Header Section */}
      <div className="mb-8 text-left">
        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#111318] tracking-normal leading-tight mb-4">
          Microbus Rental in Dhaka & Bangladesh
        </h1>

        {/* Body Paragraphs */}
        <div className="space-y-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-4xl mb-8">
          <p>
            Need a Microbus but not sure whether Noah or HiAce is the better fit?
          </p>
          <p>
            Start with your passenger count, luggage, route and trip requirement instead of choosing only by vehicle name.
          </p>
          <p>
            Then explore the relevant Noah or HiAce option and submit the actual requirement in the Utshob app.
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <button
            type="button"
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors duration-200"
          >
            Find Microbus Options
          </button>
        </div>
      </div>

      {/* Verified Asset Required Container */}
      <div className="w-full bg-[#F3F4F6] border border-slate-100 rounded-3xl p-6 sm:p-8 min-h-[220px] flex flex-col justify-start">
        {/* Pink Badge */}
        <div className="mb-3">
          <span className="inline-block bg-pink-50 text-pink-600 text-[10px] sm:text-xs font-bold tracking-normal uppercase px-3 py-1 rounded-full border border-pink-100">
            VERIFIED ASSET REQUIRED
          </span>
        </div>

        {/* Highlight Title */}
        <h3 className="text-base sm:text-lg font-bold text-[#111318] leading-snug mb-2">
          Verified Noah and HiAce examples; representative until partner bid identifies actual capacity, model and vehicle photos.
        </h3>

        {/* Disclaimer Subtext */}
        <p className="text-xs text-[#5C6370] leading-relaxed">
          Representative discovery image only. It must not imply exact model, availability, condition, decoration or owned-fleet status.
        </p>
      </div>
    </section>
  );
}