
import React from 'react';

const DEFAULT_EVENTS_DATA = {
  title: 'Events Powered by Utshob',

  stats: [
    {
      value: '800+',
      label: 'Programs',
    },
    {
      value: '1,500+',
      label: 'Services',
    },
    {
      value: '2,000+',
      label: 'Verified Providers',
    },
  ],

  sourceNote:
    'Approved source lock · 11 Sep 2026. Do not substitute older trust figures.',
};

const EventsPoweredByUtshob = ({
  data = {},
  className = '',
}) => {
  const {
    title = DEFAULT_EVENTS_DATA.title,
    stats = DEFAULT_EVENTS_DATA.stats,
    sourceNote = DEFAULT_EVENTS_DATA.sourceNote,
  } = data;

  return (
    <section className={`w-full bg-white ${className}`}>
      <div className="w-full">

        {/* Section Title */}
        {title && (
          <h2 className="mb-[10px] text-[22px] font-bold leading-[27px] tracking-normal text-[#111318]">
            {title}
          </h2>
        )}

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex min-h-[72px] flex-col justify-center rounded-lg border border-[#D1D5DB] px-3.5 py-2.5"
            >
              <h3 className="mb-1 text-[24px] font-bold leading-7 tracking-normal text-[#111318]">
                {stat.value}
              </h3>

              <p className="text-[12px] font-semibold leading-[18px] text-[#111318]">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

        {/* Source Note */}
        {sourceNote && (
          <p className="mt-1 text-[10px] leading-[14px] text-[#737373]">
            {sourceNote}
          </p>
        )}

      </div>
    </section>
  );
};

export default EventsPoweredByUtshob;
