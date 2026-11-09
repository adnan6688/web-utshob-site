import React from 'react';

const checklistItems = [
  'Venue & stage dimensions',
  'Backdrop style',
  'Flowers & materials',
  'Lighting',
  'Setup timing',
  'Included & excluded items',
  'Provider portfolio',
  'Ratings & reviews',
];

export default function WeddingStageConsider() {
  return (
    <section className="">
      <div className="">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-[28px] font-bold text-gray-900 mb-2">
          What to Consider Before Choosing a Wedding Stage Decorator
        </h2>
        <p className="text-[15px] text-gray-600  mb-8 leading-relaxed">
          Check the venue and stage dimensions, backdrop style, flowers and materials, lighting, setup timing, included and excluded items, provider portfolio, ratings and reviews.
        </p>

        {/* Checklist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {checklistItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl px-4 py-3 border border-gray-100  flex items-center gap-3"
            >
              <div className="w-5 h-5 rounded-full bg-[#E62E77] text-white flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-800">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}