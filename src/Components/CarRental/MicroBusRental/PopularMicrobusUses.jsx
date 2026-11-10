
import React from 'react';

const DEFAULT_USES_DATA = {
  title: 'Popular Microbus Uses',
  subtitle: '',
  uses: [
    'Wedding guests',
    'Family trips',
    'Tours',
    'Corporate/team transportation',
    'Event transport',
    'Picnics and group outings',
  ],
  footerText: '',
  bgColor: 'bg-slate-50/90',
};

export default function PopularMicrobusUses({
  data = DEFAULT_USES_DATA,
}) {
  const {
    title,
    subtitle,
    uses = [],
    footerText,
    bgColor = 'bg-slate-50/90',
  } = data;

  return (
    <section
      className={`w-full ${bgColor} px-6 py-14 text-[#111318] sm:px-12`}
    >
      <div className="mx-auto max-w-[1180px] text-left">

        {/* Section Heading */}
        <h2 className="mb-4 text-2xl font-bold tracking-normal text-[#111318] sm:text-3xl">
          {title}
        </h2>

        {/* Optional Subtitle */}
        {subtitle && (
          <p className="mb-6 text-sm leading[145%] text-[#5C6370] sm:text-base">
            {subtitle}
          </p>
        )}

        {/* Dynamic Bullet Points */}
        {uses.length > 0 && (
          <ul className="space-y-3">
            {uses.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2.5"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900" />

                <span className="text-xs font-medium text-[#5C6370] sm:text-sm">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Optional Footer */}
        {footerText && (
          <p className="mt-6 text-sm leading[145%] text-[#5C6370]">
            {footerText}
          </p>
        )}

      </div>
    </section>
  );
}
