import React from 'react';

export default function CompareWeddingCar() {
  const items = [
    'Proposed vehicle',
    'Model',
    'Exterior condition/photos',
    'Interior photos',
    'Passenger capacity where relevant',
    'Number of vehicles',
    'Route and timing',
    'Stops and extra-trip requirement',
    'Decoration requirement',
    'Partner rating',
    'Reviews',
    'Quotation price',
  ];

  return (
    <section className="w-full  bg-white text-[#111318]">
      {/* Header Section */}
      <div className="mb-8 text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#111318] mb-3 tracking-normal">
          Compare Wedding Car Quotations Properly
        </h2>
        <p className="text-[#5C6370] text-sm sm:text-base leading[145%] mb-2">
          Do not compare only the price.
        </p>
        <p className="text-[#5C6370] text-xs sm:text-sm">
          Check:
        </p>
      </div>

      {/* Grid Items (4 columns on desktop, responsive layout) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#F4F6F8] rounded-2xl p-4 flex items-center gap-3 transition-all hover:bg-slate-100/80"
          >
            {/* Pink Bullet Point */}
            <span className="w-2 h-2 rounded-full bg-pink-600 shrink-0" />

            {/* Requirement Label */}
            <span className="text-xs sm:text-sm font-semibold text-[#111318] leading-snug">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Outline Highlight Box */}
      <div className="border border-pink-300 bg-pink-50/30 rounded-2xl p-5 text-left">
        <p className="text-xs sm:text-sm font-bold text-[#111318]">
          For the stated trip, partner quotations include driver, fuel and toll.
        </p>
      </div>
    </section>
  );
}