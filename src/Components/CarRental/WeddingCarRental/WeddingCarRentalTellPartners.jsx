import React from 'react';

export default function WeddingCarRentalTellPartners() {
  const requirements = [
    'Program — Holud, Wedding, Reception or another event',
    "Groom's Car requirement",
    'Preferred vehicle or model',
    'Number of vehicles',
    'Passenger requirement',
    'Pickup and destination',
    'Start, end and return time',
    'One Way or Round Trip',
    'Multiple stops',
    'Extra trip with the same vehicle',
    'Decoration Yes / No',
    'Additional decoration preparation time where required',
  ];

  return (
    <section className=" bg-white text-[#111318]">
      {/* Header Section */}
      <div className="mb-8 text-left">
        <h2 className="text-xl sm:text-2xl md:text-[42px] font-bold text-[#111318] mb-3 tracking-normal">
          Tell Partners Exactly What Your Wedding Needs
        </h2>
        <p className="text-[#5E6878] text-sm sm:text-base leading-[145%] mb-2">
          Wedding transportation is rarely just one car.
        </p>
        <p className="text-[#5E6878] text-xs sm:text-base">
          Depending on your plan, specify:
        </p>
      </div>

      {/* Grid Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {requirements.map((item, index) => (
          <div
            key={index}
            className="bg-[#F4F6F8] rounded-2xl p-4 flex items-center gap-3 transition-all hover:bg-gray-100/80"
          >
            {/* Bullet Point */}
            <span className="w-2 h-2 rounded-full bg-pink-600 shrink-0" />
            
            {/* Requirement Text */}
            <span className="text-xs sm:text-sm font-semibold text-[#111318] leading-snug">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Highlight Box */}
      <div className="bg-[#FFF1F6] rounded-2xl p-5 text-left">
        <p className="text-xs sm:text-[18px] font-semibold text-[#111318]">
          Each program can have a different vehicle, date, route and timing.
        </p>
      </div>
    </section>
  );
}