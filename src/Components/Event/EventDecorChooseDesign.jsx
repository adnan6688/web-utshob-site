import React from 'react';

const EventDecorChooseDesign = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose from Existing Designs',
      description: [
        'Browse selected decoration designs available through Utshob and choose the style that matches your event.'
      ],
    },
    {
      number: '02',
      title: 'Upload Your Own Design',
      description: [
        'Already have a stage, gate, birthday setup or other decoration idea in mind?',
        'Upload your own reference image and describe the specifications you need.'
      ],
    },
    {
      number: '03',
      title: 'Get Bids Based on the Same Requirement',
      description: [
        'Relevant service providers review the selected design or uploaded reference together with your event specifications and submit their quotations based on the current requirement.',
        'This makes comparison more meaningful because providers are responding to a clearer brief.'
      ],
    },
  ];

  return (
    <section className="">
      <div className="">
        {/* Title Header */}
        <div className="mb-5">
          <h2 className="text-3xl  leading-[42px] tracking-normal font-bold text-[#111318] mb-2">
            Choose a Design or Bring Your Own Idea
          </h2>
          <p className="text-[#59606C]   text-[16px] mb-6 leading-6">
            Utshob makes event decoration requests more specific before providers submit their quotations.
          </p>
          <p className="text-[#59606C]   text-[16px] leading-6">
            You can start in two ways:
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-[14px] p-8  border border-[#E2E6EB] flex flex-col items-start min-h-[320px]"
            >
              {/* Header with badge number and title */}
              <div className="flex items-center gap-4 mb-6">
                <span className="flex-shrink-0 w-10 h-10 bg-[#E62E77] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </span>
                <h3 className="text-[17px] font-semibold text-[#111318] leading-6">
                  {step.title}
                </h3>
              </div>

              {/* Description texts */}
              <div className="space-y-4 text-[#59606C]   text-[13px] leading-5">
                {step.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div>
          <button className="bg-[#E62E77] hover:bg-[#d02b5e] text-white font-medium py-3.5 px-6 rounded-lg transition-colors shadow-sm">
            Explore Designs in the Utshob App
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventDecorChooseDesign;