import React from 'react';

const features = [
  {
    title: 'Price',
    description: 'The bid submitted for your requirement.',
  },
  {
    title: "What's Included",
    description: 'Materials, setup and services included in the offer.',
  },
  {
    title: "What's Excluded",
    description: 'Items outside the quoted scope.',
  },
  {
    title: 'Ratings & Reviews',
    description: 'Feedback from previous customers.',
  },
  {
    title: 'Portfolio',
    description: 'Previous work from the provider.',
  },
];

const checkList = ['Price', 'Included / Excluded', 'Ratings & Reviews', 'Portfolio'];

export default function WeddingStageCompare() {
  return (
    <section className="">
      <div className=" space-y-8">
        <h2 className="text-2xl sm:text-3xl leading-[38px] font-bold text-gray-900">
          Compare Before You Book
        </h2>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 border border-[#E1E5EA] flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-[16px] leading-[22px] font-bold text-gray-900">{feature.title}</h3>
                <p className="text-[13px] text-[#667085] mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quotation Comparison Container */}
        <div className="bg-white rounded-2xl border border-[#F0C5D6] p-6 ">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[18px] font-bold text-gray-900">
              Customer Quotation Comparison
            </h3>
            <span className="text-[13px] text-pink-500 bg-pink-50 px-3 py-1 rounded-full font-medium">
              Same requirement
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Quotation A */}
            <div className="bg-[#F4F6F8] rounded-xl p-4 ">
              <h4 className="text-[13px] font-bold text-gray-900 mb-3">Quotation A</h4>
              <ul className="space-y-[7px]">
                {checkList.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[13px] text-[#667085]">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quotation B (Highlighted Pink Border) */}
            <div className="bg-pink-50/30 rounded-xl p-4 border border-[#F0C5D6]">
              <h4 className="text-[13px] font-bold text-gray-900 mb-3">Quotation B</h4>
              <ul className="space-y-[7px]">
                {checkList.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[13px] text-pink-600 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quotation C */}
            <div className="bg-[#F4F6F8] rounded-xl p-4">
              <h4 className="text-[13px] font-bold text-gray-900 mb-3">Quotation C</h4>
              <ul className="space-y-[7px]">
                {checkList.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[13px] text-[#667085]">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}