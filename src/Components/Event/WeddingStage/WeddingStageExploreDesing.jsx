import React from 'react';

const designsData = [
  {
    id: 1,
    title: 'Simple wedding stage',
    bgColor: 'bg-rose-50', // Light pink background placeholder
  },
  {
    id: 2,
    title: 'Floral wedding stage',
    bgColor: 'bg-sky-50', // Light sky blue background placeholder
  },
  {
    id: 3,
    title: 'Premium wedding stage',
    bgColor: 'bg-purple-50', // Light purple background placeholder
  },
  {
    id: 4,
    title: 'Indoor wedding stage',
    bgColor: 'bg-amber-50', // Light amber background placeholder
  },
  {
    id: 5,
    title: 'Custom wedding stage',
    bgColor: 'bg-emerald-50', // Light green background placeholder
  },
  {
    id: 6,
    title: 'Selected real wedding stage',
    bgColor: 'bg-indigo-50', // Light indigo background placeholder
  },
];

export default function WeddingStageExploreDesing() {
  return (
    <section className="">
      <div className="">
        <h2 className="text-2xl sm:text-3xl leading-[38px] tracking-normal font-bold text-[#111318] mb-2">
          Explore Selected Wedding Stage Designs
        </h2>
        <p className="text-[13px] text-[#667085] leading-[13px] tracking-normal mb-8">
          Selected real Utshob work. Each image keeps a visible caption below the photo and can open in a larger preview.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {designsData.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden  flex flex-col transition "
            >
              {/* Image Container / Placeholder */}
              <div className={`h-48 ${card.bgColor} flex items-center justify-center relative`}>
                {/* Center Star/Plus Action Icon */}
                <button
                  type="button"
                  aria-label="Expand image"
                  className="w-10 h-10 rounded-full bg-[#E62E77] text-white flex items-center justify-center hover:bg-rose-600 transition shadow"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l2.4 6.6L21 11l-5 4.6 1.5 6.8L12 19l-5.5 3.4L8 15.6 3 11l6.6-2.4L12 2z" />
                  </svg>
                </button>
              </div>

              {/* Card Footer Content */}
              <div className="p-4 bg-white flex flex-col justify-between flex-grow">
                <h3 className="text-sm font-semibold text-[#111318] mb-1">
                  {card.title}
                </h3>
                <a
                  href="#view-larger"
                  className="text-xs text-[#E62E77] font-medium hover:underline self-start"
                >
                  View larger
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}