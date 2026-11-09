import React from 'react';
import { Check } from 'lucide-react';

export default function CarRentalCompare() {
  const comparisonItems = [
    {
      title: 'Actual Vehicle',
      description: 'Check which vehicle the partner is proposing for your requirement.',
    },
    {
      title: 'Vehicle Model',
      description: 'Confirm the proposed model if it matters to you.',
    },
    {
      title: 'Passenger Capacity',
      description: 'For group vehicles, make sure the proposed capacity fits the number of passengers.',
    },
    {
      title: 'Exterior & Interior Photos',
      description: 'Review the outside condition and inside of the actual proposed vehicle before choosing.',
    },
    {
      title: 'Route & Timing Match',
      description: 'Confirm pickup, destination, start/end timing and return requirement.',
    },
    {
      title: 'Stops, Extra Trips & Decoration',
      description: 'Confirm required stops, additional trips and any wedding decoration requirement are included.',
    },
    {
      title: 'Partner Rating & Reviews',
      description: 'Use previous customer feedback as another comparison signal.',
    },
    {
      title: 'Price',
      description: 'Compare the quotation after understanding the vehicle and complete requirement it covers.',
    },
  ];

  return (
    <section className=" bg-white text-[#111318]">
      {/* Header Section */}
      <div className="mb-10 text-left">
        <h2 className="text-3xl  font-bold text-[#111318] mb-2 tracking-normal">
          Compare More Than Car Rental Prices
        </h2>
        <h3 className="text-[16px] font-semibold text-[#E62E77] mb-4">
          Compare the Complete Transport Offer
        </h3>
        <p className="text-[#5E6878] max-w-3xl text-sm sm:text-base leading-relaxed">
          The lowest quotation is not automatically the right quotation. Partners may propose different vehicles or fulfil the requirement differently.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {comparisonItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#F5F6F8] rounded-2xl p-6 flex items-start gap-4 transition-all "
          >
            {/* Checkmark Icon */}
            <div className="bg-[#E62E77] text-white rounded-full p-1.5 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>

            {/* Card Content */}
            <div>
              <h4 className="text-base font-bold text-[#111318] mb-1">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#5E6878] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Subtext Footer */}
      <div>
        <p className="text-[16px] font-semibold text-[#E62E77]">
          Compare the actual transport offer—not only the quotation price.
        </p>
      </div>
    </section>
  );
}