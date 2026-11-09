import React from 'react';

export default function CarRentalBookingProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Rental Need',
      description: 'Select the relevant vehicle or rental requirement.',
    },
    {
      number: '02',
      title: 'Define Your Exact Requirement',
      description: 'Add vehicle, passenger, date, route, timing and other relevant details.',
    },
    {
      number: '03',
      title: 'Relevant Partners Bid',
      description: 'Partners can review the requirement and submit quotations with vehicles they can provide.',
    },
    {
      number: '04',
      title: 'Compare Quotations',
      description: 'Vehicle + Model + Photos + Capacity + Price + Rating + Reviews',
    },
    {
      number: '05',
      title: 'Choose Your Preferred Proposal',
      description: 'Select the vehicle and quotation that best match your requirement.',
    },
    {
      number: '06',
      title: 'Confirm Your Booking',
      description: 'Confirm the selected service through the standard Utshob booking process.',
    },
    {
      number: '07',
      title: 'Coordinate Directly',
      description: 'After confirmation, coordinate with the selected partner regarding the vehicle and trip.',
    },
    {
      number: '08',
      title: 'Complete & Review',
      description: 'Complete the transportation service and rate or review your experience.',
    },
  ];

  return (
    <section className="w-full  bg-sky-50/50 rounded-3xl text-gray-800">
      {/* Header Section */}
      <div className="mb-10 text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2 tracking-normal">
          How Car Rental Booking Works on Utshob
        </h2>
        <p className="text-sm sm:text-base font-medium text-pink-600">
          Define Requirement → Relevant Partners Bid → Compare → Book
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-white border border-[#E2E6EB] rounded-2xl p-6 flex items-start gap-4 transition-all "
          >
            {/* Number Circle Badge */}
            <div className="w-9 h-9 rounded-full bg-pink-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
              {step.number}
            </div>

            {/* Step Details */}
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5E6878] leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call To Action Button */}
      <div>
        <button
          type="button"
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl  transition-colors duration-200"
        >
          Get Car Rental Quotations in the App
        </button>
      </div>
    </section>
  );
}