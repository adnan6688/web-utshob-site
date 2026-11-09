import React from 'react';

// Dynamic default data matching the screenshot
const DEFAULT_USES_DATA = {
  title: 'Popular Microbus Uses',
  uses: [
    'Wedding guests',
    'Family trips',
    'Tours',
    'Corporate/team transportation',
    'Event transport',
    'Picnics and group outings',
  ],
  bgColor: 'bg-slate-50/90',
};

export default function PopularMicrobusUses({ data = DEFAULT_USES_DATA }) {
  const { title, uses, bgColor } = data;

  return (
    <section className={`w-full ${bgColor} py-14 px-6 sm:px-12  text-gray-800`}>
      <div className="max-w-6xl mx-auto text-left">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-normal mb-6">
          {title}
        </h2>

        {/* Dynamic Bullet Points List */}
        <ul className="space-y-3">
          {uses.map((item, index) => (
            <li key={index} className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}