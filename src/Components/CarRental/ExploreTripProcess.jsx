import React from 'react';

const stepsData = [
  {
    step: '01',
    title: 'Explore the Vehicle',
    description: 'Choose the vehicle or transport category that fits the trip or event.',
    footerText: 'Wedding · Sedan · Microbus · Bus/Minibus · Luxury',
    bgCard: 'bg-[#FFF1F6] border-[#DDE1E7]',
    iconBg: 'bg-[#D61F68] text-white',
  },
  {
    step: '02',
    title: 'Define Your Requirement',
    description: 'Add passenger count, route, date, timing, trip type and number of vehicles.',
    footerText: 'Vehicle · Passenger · Route · Timing · One Way / Round Trip',
    bgCard: 'bg-[#EDF8FF] border-[#DDE1E7]',
    iconBg: 'bg-[#D61F68] text-white',
  },
  {
    step: '03',
    title: 'Relevant Partners Bid',
    description: 'Relevant partners review the same trip requirement and propose available vehicles.',
    footerText: 'One requirement → vehicle proposals → meaningful comparison',
    bgCard: 'bg-[#FFF1F6] border-[#DDE1E7]',
    iconBg: 'bg-[#D61F68] text-white',
  },
];
import { FaArrowRight } from "react-icons/fa6";

export default function ExploreTripProcess() {
  return (
    <section className="">
      <div className=" space-y-8">

        {/* Header Title & Subtitle */}
        <div className="space-y-2">
          <h2 className="text-xl sm:text-[32px] font-bold text-[#111318] flex flex-wrap items-center gap-2">
            <span>Explore the Vehicle</span>
            <FaArrowRight className="text-base sm:text-lg " />

            <span>Define Your Trip</span>
            <FaArrowRight className="text-base sm:text-lg " />

            <span>Relevant Partners Bid</span>
          </h2>
          <p className="text-xs sm:text-[16px] text-[#5E6878]">
            Start with the transport need, define passenger, route and timing, then let relevant partners quote.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stepsData.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 border  flex flex-col justify-between ${item.bgCard}`}
            >
              <div>
                {/* Step Icon / Number Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${item.iconBg}`}>
                    {item.step}
                  </div>

                  <h3 className="text-[18px] font-bold text-[#111318] ">
                    {item.title}
                  </h3>
                </div>



                <p className="text-[13px] text-[#5E6878] leading-relaxed ">
                  {item.description}
                </p>
              </div>

              {/* Footer Tags / Links */}
              <div className="pt-4 border-t border-gray-200/60">
                <span className="text-[11px]  leading-3 font-semibold text-[#D61F68] block">
                  {item.footerText}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}