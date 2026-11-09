import React from 'react';

const addOnServices = [
  'Wedding Gate Decoration',
  'Walkway Decoration',
  'Head Table Decoration',
  'Wedding Car Decoration',
  'Photography',
];

const programs = ['Holud', 'Wedding', 'Reception'];

export default function WeddingStageAddMoreService() {
  return (
    <section className="">
      <div className="">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Book Only the Stage or Add More Services
        </h2>

        {/* Top Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Card 1: Stage Only */}
          <div className="bg-[#FFF1F6] rounded-2xl p-6 border border-[#E1E5EA] flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E62E77] text-white text-xs font-bold mb-4">
                01
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Wedding Stage Only
              </h3>
              <p className="text-sm text-gray-500">
                Book only Wedding Stage Decoration.
              </p>
            </div>
          </div>

          {/* Card 2: Add More Services */}
          <div className="bg-[#EDF8FF] rounded-2xl p-6 border border-[#E1E5EA] flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#E62E77] border border-rose-200 text-xs font-bold mb-4">
                02
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Add More Services
              </h3>
              <p className="text-xs text-gray-500 mb-5 leading-relaxed">
                Add services such as Wedding Gate Decoration, Walkway Decoration, Head Table Decoration, Wedding Car Decoration and Photography.
              </p>

              {/* Service Badges */}
              <div className="flex flex-wrap gap-2">
                {addOnServices.map((service, idx) => (
                  <span
                    key={idx}
                    className="bg-white text-gray-800 text-xs font-medium px-3.5 py-1.5 rounded-full border border-[#D7DEE7]"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner: Separate Programs */}
        <div className="bg-[#F4F6F8] rounded-2xl p-6 border border-gray-200/60">
          <h4 className="text-xs font-bold text-gray-900 mb-1">
            Separate programs on different dates
          </h4>
          <p className="text-xs text-gray-500 mb-4">
            For separate Holud, Wedding and Reception dates, create requirements for each program.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {programs.map((program, idx) => (
              <div
                key={idx}
                className="bg-white rounded-full py-2 px-4 text-center text-xs font-medium text-gray-800  border border-[#D7DEE7]"
              >
                {program}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}