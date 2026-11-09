import React from 'react';

const stepsData = [
  {
    step: '1',
    title: 'Choose or Upload a Design',
    description: 'Select an existing design or upload your reference.',
  },
  {
    step: '2',
    title: 'Add Your Specifications',
    description: 'Provide date, location and important stage requirements.',
  },
  {
    step: '3',
    title: 'Receive Provider Bids',
    description: 'Relevant providers can submit quotations based on the requirement.',
  },
  {
    step: '4',
    title: 'Compare',
    description: 'Compare price, scope, ratings, reviews and portfolio.',
  },
  {
    step: '5',
    title: 'Choose & Confirm',
    description: 'Select a provider and pay the required token money.',
  },
  {
    step: '6',
    title: 'Coordinate Directly',
    description: 'After confirmation, communicate directly with the selected provider.',
  },
  {
    step: '7',
    title: 'Complete the Service',
    description: 'The provider completes the confirmed stage setup.',
  },
  {
    step: '8',
    title: 'Rate & Review',
    description: 'Review the provider after service completion.',
  },
];

export default function WeddingStageBooking() {
  return (
    <section className="">
      <div className="">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            How Wedding Stage Booking Works on Utshob
          </h2>
          <span className="self-start sm:self-auto bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1.5 rounded-full">
            8 clear booking steps
          </span>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stepsData.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-5 border border-[#DCE4EA]  flex flex-col justify-start"
            >
              <div className='flex gap-x-2 items-center'>
                <div className="w-8 h-8 rounded-full bg-pink-50 text-pink-600 text-xs font-bold flex items-center justify-center mb-3">
                {item.step}
              </div>
              <h3 className="text-[15px] font-bold text-gray-900 mb-1.5">
                {item.title}
              </h3>
              </div>
              <p className="text-[13px] leading-[19px] text-[#667085] tracking-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}