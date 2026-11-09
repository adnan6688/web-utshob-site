import React from 'react';

export default function BookOneCar() {
  const options = [
    'One Groom’s Car',
    'Several Sedans',
    'Multiple Noahs or HiAces',
    'Bus / Minibus for guests',
    'Luxury Cars',
    'Different vehicles for different wedding programs',
  ];

  return (
    <section className="w-full  text-gray-800">
      <div className="">
        {/* Main Title */}
        <div className="mb-8 text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-normal mb-3">
            Book One Car or the Complete Wedding Transport Plan
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            You can request:
          </p>
        </div>

        {/* 6 Cards Grid (3 Columns x 2 Rows on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {options.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-2xs flex items-center gap-3 transition-all duration-200 hover:shadow-xs min-h-[64px]"
            >
              {/* Pink Bullet Point */}
              <span className="w-2 h-2 rounded-full bg-pink-600 shrink-0" />

              {/* Text Label */}
              <span className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">
                {option}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}