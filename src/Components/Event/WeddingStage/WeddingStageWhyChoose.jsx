import React from 'react';

const featureCards = [
  {
    number: '01',
    title: 'Choose Your Design',
    description: 'Choose a design or upload your own.',
  },
  {
    number: '02',
    title: 'Requirement-Based Bids',
    description: 'Receive bids based on the requirement.',
  },
  {
    number: '03',
    title: 'Compare Before Deciding',
    description: 'Compare providers before deciding.',
  },
  {
    number: '04',
    title: 'More Choice',
    description: 'You are not limited to one decorator or one fixed stage package.',
  },
];

export default function WeddingStageWhyChoose() {
  return (
    <section className="">
      <div className=" space-y-6">
        {/* Title */}
        <div className='flex flex-col gap-y-1'>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
            Why Choose Utshob for Wedding Stage Decoration?
          </h2>
          <p className="text-[15px] font-semibold text-[#E62E77]">
            Bangladesh's Event App
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featureCards.map((card) => (
            <div
              key={card.number}
              className="bg-white rounded-2xl p-5 border border-[#E1E5EA]  flex flex-col justify-between"
            >
              <div>
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-pink-50 text-[#E62E77] text-xs font-bold mb-3 border border-[#E1E5EA]">
                  {card.number}
                </span>
                <h3 className="text-sm font-bold text-gray-900 mb-1.5">
                  {card.title}
                </h3>
                <p className="text-xs text-[#59606C] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tagline Box */}
        <div className="bg-white rounded-2xl p-5 border border-[#F0C5D6]">
          <h4 className="text-sm font-bold text-gray-900 mb-1">
            Event App মানে Utshob.xyz
          </h4>
          <p className="text-xs text-[#E62E77] font-medium">
            ইভেন্টের আয়োজন, এখন এক অ্যাপে।
          </p>
        </div>
      </div>
    </section>
  );
}