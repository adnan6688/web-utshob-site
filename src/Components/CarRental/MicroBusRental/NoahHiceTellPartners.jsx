import React from 'react';

// Default mock data, dynamic props না পাঠালেও এগুলো শো করবে
const DEFAULT_NOAH_VS_HIACE_DATA = {
  section1: {
    title: 'Noah or HiAce — Which Should You Choose?',
    subtitle: 'There is no universal answer based only on the name of the vehicle.',
    listHeader: 'Compare:',
    items: [
      'Actual passenger requirement',
      'Luggage',
      'Available vehicle capacity',
      'Number of vehicles',
      'Route',
      'Trip duration/timing',
      'Wedding, family, tour or corporate use',
    ],
    footerText:
      'Actual seating can vary by vehicle configuration, so confirm the capacity of the proposed vehicle.',
  },
  section2: {
    title: 'Tell Partners What You Need',
    listHeader: 'Specify:',
    items: [
      'Passenger count',
      'Luggage requirement',
      'Noah / HiAce preference, if any',
      'Number of vehicles',
      'Pickup/destination',
      'Start/end/return time',
      'One Way/Round Trip',
      'Stops',
      'Extra trips',
    ],
  },
};

export default function NoahHiceTellPartners({ data = DEFAULT_NOAH_VS_HIACE_DATA }) {
  const { section1, section2 } = data;

  return (
    <section className="w-full ">
      {/* Top Section (Grey Background) */}
      <div className="bg-[#F3F4F6] py-12 px-3 sm:px-12">
        <div className="max-w-[1180px] mx-auto text-left">
          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-normal mb-3">
            {section1?.title}
          </h2>

          {/* Subtitle */}
          {section1?.subtitle && (
            <p className="text-xs sm:text-sm text-gray-600 mb-4">
              {section1.subtitle}
            </p>
          )}

          {/* List Header */}
          {section1?.listHeader && (
            <p className="text-xs sm:text-sm text-gray-500 mb-3 font-medium">
              {section1.listHeader}
            </p>
          )}

          {/* Dynamic Bullets List */}
          <ul className="space-y-2 mb-6">
            {section1?.items?.map((item, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-1.5 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-700 font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Footer Warning / Note */}
          {section1?.footerText && (
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed pt-2">
              {section1.footerText}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Section (Pink Background) */}
      <div className="bg-[#FFF1F6] py-12 px-3 sm:px-12">
        <div className="max-w-[1180px] mx-auto text-left">
          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-normal mb-3">
            {section2?.title}
          </h2>

          {/* List Header */}
          {section2?.listHeader && (
            <p className="text-xs sm:text-sm text-gray-500 mb-4 font-medium">
              {section2.listHeader}
            </p>
          )}

          {/* Dynamic Bullets List */}
          <ul className="space-y-2.5">
            {section2?.items?.map((item, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-1.5 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-700 font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}