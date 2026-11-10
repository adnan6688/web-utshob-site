import React from 'react';
import { Car, Sparkles, Heart, Bus, ShieldCheck, Image as ImageIcon } from 'lucide-react';

export default function CarRentalExploreOptions() {
  const vehicleCategories = [
    { name: 'Sedan', icon: Car, bg: 'bg-[#FFF1F6]' },
    { name: 'Wedding / Groom\'s Car', icon: Heart, bg: 'bg-[#FFF1F6]' },
    { name: 'Decorated Wedding Car', icon: Sparkles, bg: 'bg-[#FFF1F6]' },
    { name: 'Noah', icon: Car, bg: 'bg-[#EDF8FF]' },
    { name: 'HiAce', icon: Car, bg: 'bg-[#EDF8FF]' },
    { name: 'Minibus', icon: Bus, bg: 'bg-[#EDF8FF]' },
    { name: 'Coaster', icon: Bus, bg: 'bg-[#FFF1F6]' },
    { name: 'Bus', icon: Bus, bg: 'bg-[#FFF1F6]' },
    { name: 'Luxury Car', icon: Car, bg: 'bg-[#FFF1F6]' },
  ];

  return (
    <section className="w-full   bg-white text-[#111318]">
      {/* Header Section */}
      <div className="mb-8 text-left">
        <span className="text-xs tracking-normalr uppercase font-semibold text-pink-600 block mb-2">
          VEHICLE OPTIONS & PROOF
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111318] mb-3 tracking-normal">
          Explore Car Rental Options Before You Submit Your Requirement
        </h2>
        <p className="text-[#5E6878] max-w-4xl text-sm sm:text-base leading[145%]">
          Selected real or representative category-level images help you understand the types of vehicles you may request. Exact vehicle availability for a date or trip depends on the partner.
        </p>
      </div>

      {/* Vehicle Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {vehicleCategories.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`${item.bg} rounded-2xl p-5 flex items-center gap-4 transition-all hover:shadow-xs`}
            >
              <div className="bg-pink-600 text-white rounded-full p-2.5 flex items-center justify-center shrink-0 shadow-xs">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-[#111318]">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Info Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Card 1: Representative on the Website */}
        <div className="bg-[#FFF1F6] rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-pink-600 text-white rounded-full p-2 flex items-center justify-center shrink-0 mt-0.5">
                <ImageIcon className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-normalr text-pink-600 uppercase block">
                  WEBSITE IMAGE RULE
                </span>
                <h3 className="text-base font-bold text-[#111318] leading-tight">
                  Representative on the Website
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#5E6878] leading[145%] mb-6">
              A category image must not be presented as "this exact car is available" unless it is the actual vehicle proposed for that requirement.
            </p>
          </div>
          <p className="text-xs font-bold text-[#111318]">
            Shows vehicle type · Does not promise exact availability
          </p>
        </div>

        {/* Card 2: Review the Actual Proposed Vehicle */}
        <div className="bg-[#EDF8FF] rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-pink-600 text-white rounded-full p-2 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-normalr text-pink-600 uppercase block">
                  PARTNER BID PROOF
                </span>
                <h3 className="text-base font-bold text-[#111318] leading-tight">
                  Review the Actual Proposed Vehicle
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#5E6878] leading[145%] mb-6">
              Before confirming, review the actual vehicle proposed by the partner in the Utshob app.
            </p>
          </div>
          <p className="text-xs font-bold text-[#111318]">
            Actual vehicle · Model · Exterior/interior photos · Capacity · Quotation
          </p>
        </div>
      </div>

      {/* Subtext Notice */}
      <p className="text-xs sm:text-sm font-semibold text-[#111318] mb-8">
        Images explain the category. The partner's actual proposal is the decision proof.
      </p>

      {/* CTA Button */}
      <div>
        <button
          type="button"
          className="bg-pink-600 hover:bg-pink-700 text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-colors duration-200"
        >
          Find Available Car Options in the App
        </button>
      </div>
    </section>
  );
}