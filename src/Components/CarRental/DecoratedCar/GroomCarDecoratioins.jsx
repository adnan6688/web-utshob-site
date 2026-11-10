import React from 'react';

const GroomCarDecoratioins = () => {
  const items = [
    "The vehicle you selected",
    "Required program time",
    "Decoration requirement",
    "Preparation time",
    "Route and trip requirement"
  ];

  return (
    <section className="">
      {/* Header Title */}
      <h2 className="text-xl sm:text-2xl md:text-[42px] font-bold text-slate-800 mb-2">
        Groom Car Decoration
      </h2>

      {/* Subtitle */}
      <p className="text-slate-500 text-sm md:text-base mb-8">
        For a Groom's Car, make sure the quotation corresponds to:
      </p>

      {/* Cards Grid / Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
  {items.map((item, index) => (
    <div
      key={index}
      className="bg-white px-5 py-4 rounded-xl border border-slate-100 text-center flex items-center justify-center min-h-[70px]"
    >
      <span className="text-xs md:text-sm font-semibold text-slate-700 leading-snug">
        {item}
      </span>
    </div>
  ))}
</div>
    </section>
  );
};

export default GroomCarDecoratioins;