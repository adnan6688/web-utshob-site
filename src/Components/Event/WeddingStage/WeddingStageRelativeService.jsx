import React from 'react';

const services = [
  { id: 1, name: 'Wedding Gate Decoration' },
  { id: 2, name: 'Wedding Walkway Decoration' },
  { id: 3, name: 'Holud Stage Decoration' },
  { id: 4, name: 'Head Table Decoration' },
  { id: 5, name: 'Wedding Car Decoration' },
  { id: 6, name: 'Photography & Videography' },
];

export default function WeddingStageRelativeService() {
  return (
    <section className="">
      <div className="">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#111318] mb-6">
          Related Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.name.toLowerCase().replace(/ /g, '-')}`}
              className="bg-white rounded-2xl p-4 border border-[#E1E5EA] flex items-center gap-3 "
            >
              {/* Pink Circle Arrow Icon */}
              <div className="w-8 h-8 rounded-full bg-pink-50 text-[#E62E77] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E62E77] group-hover:text-white transition">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>

              {/* Service Title */}
              <span className="text-xs sm:text-sm font-semibold text-[#111318]">
                {service.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}