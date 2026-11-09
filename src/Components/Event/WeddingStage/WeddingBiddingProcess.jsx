import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Design / reference',
    description: 'Same requirement context',
  },
  {
    number: '2',
    title: 'Date + location + specifications',
    description: 'Same requirement context',
  },
  {
    number: '3',
    title: 'Relevant provider bid',
    description: 'Same requirement context',
  },
];

export default function WeddingBiddingProcess() {
  return (
    <section className="flex flex-col space-y-3">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          How Providers Bid on Your Wedding Stage Requirement
        </h2>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        {/* Left Content */}
        <div className="space-y-4">

          <p className="text-sm text-[#5E6878] leading-relaxed">
            Your selected design or uploaded reference is combined with details such as event date, location and stage specifications.
          </p>
          <p className="text-sm text-[#5E6878] leading-relaxed">
            Relevant providers can review the same requirement and submit bids based on the requested setup and their current market rate.
          </p>
          <p className="text-sm text-[#5E6878] leading-relaxed">
            This makes it easier to compare quotations against a clearer and more consistent requirement.
          </p>
        </div>

        {/* Right Process Cards */}
        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-[#FFF1F6] text-pink-600 font-bold flex items-center justify-center flex-shrink-0 text-sm">
                {step.number}
              </div>

              <div>
                <h3 className="text-[16px] font-bold leading-[145%] text-gray-900">
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#626773] mt-0.5">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}