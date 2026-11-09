import React from 'react';
import { Check } from 'lucide-react';

export default function CarRentalChooseVehicle() {
  const categories = [
    {
      title: 'Vehicle & Capacity',
      bg: 'bg-[#FAFBFC]',
      borderColor: 'border-[#E2E6EB]',
      items: [
        {
          title: 'Match the Vehicle to the Passenger Requirement',
          description:
            'A Sedan, Noah, HiAce, Minibus and Bus serve different passenger needs. Check the capacity of the actual proposed vehicle.',
        },
        {
          title: 'Check the Proposed Model',
          description:
            'If you requested a particular model, confirm that the proposal matches that preference.',
        },
      ],
    },
    {
      title: 'Vehicle, Route & Trip Details',
      bg: 'bg-[#FFF1F6]',
      borderColor: 'border-[#E2E6EB]',
      items: [
        {
          title: 'Review the Actual Vehicle Photos',
          description:
            'Check both exterior and interior photos before confirming.',
        },
        {
          title: 'Confirm the Route',
          description:
            'Make sure pickup, destination and return locations are correct.',
        },
        {
          title: 'Confirm Timing & Journey Type',
          description:
            'Check start time, end time, return time and whether the quotation matches One Way or Round Trip.',
        },
        {
          title: 'Confirm Stops, Extra Trips & Decoration',
          description:
            'Confirm required stops or extra trips. For a decorated car, confirm decoration, vehicle required time and additional preparation time.',
        },
      ],
    },
    {
      title: 'Trust & Decision',
      bg: 'bg-[#FAFBFC]',
      borderColor: 'border-[#E2E6EB]',
      items: [
        {
          title: 'Compare Ratings & Reviews',
          description:
            'Use customer feedback together with the vehicle, requirement match and quotation price.',
        },
      ],
    },
  ];

  return (
    <section className="w-full  bg-white text-[#111318]">
      {/* Header Section */}
      <div className="mb-10 text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111318] mb-3 tracking-normal">
          How to Choose the Right Rental Vehicle
        </h2>
        <p className="text-[#5E6878] text-sm sm:text-base leading-relaxed mb-1">
          Do not choose only by vehicle name or quotation price.
        </p>
        <p className="text-[#5E6878] text-sm sm:text-base leading-relaxed">
          The right quotation should match the complete transportation requirement—not just offer the lowest rate.
        </p>
      </div>

      {/* Categories Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`${cat.bg} border ${cat.borderColor} rounded-2xl p-6 sm:p-7 flex flex-col justify-start transition-all duration-200 hover:shadow-xs`}
          >
            {/* Category Title & Underline */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-pink-600 mb-2 tracking-normal">
                {cat.title}
              </h3>
              <div className="w-8 h-1 bg-pink-600 rounded-full" />
            </div>

            {/* Items List */}
            <div className="space-y-6">
              {cat.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex items-start gap-3.5">
                  <div className="bg-pink-600 text-white rounded-full p-1.5 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#111318] leading-snug mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#5E6878] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}