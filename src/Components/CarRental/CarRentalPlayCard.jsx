import React from 'react';
import { Car, Truck, Bus, ArrowRight } from 'lucide-react';
import { FaPlus } from "react-icons/fa6";

export default function CarRentalPlayCard() {
  const options = [
    {
      badge: 'SINGLE REQUIREMENT',
      title: 'Request One Vehicle',
      description: 'Request one Sedan, Noah or another suitable vehicle for one trip, family requirement or corporate movement.',
      icon: Car,
      bgColor: 'bg-pink-50',
      iconBg: 'bg-[#D61F68]',
    },
    {
      badge: 'MULTI-VEHICLE REQUIREMENT',
      title: 'Request Several Vehicles',
      description: 'Define the complete number and type of vehicles needed for a wedding, event or group transport plan.',
      icon: Truck,
      bgColor: 'bg-sky-50',
      iconBg: 'bg-[#D61F68]',
    },
    {
      badge: 'MIXED REQUIREMENT',
      title: 'Build a Mixed Transport Plan',
      description: 'Combine different vehicle types for the groom, family, guests or separate event programs.',
      icon: Bus,
      bgColor: 'bg-pink-50',
      iconBg: 'bg-[#D61F68]',
    },
  ];

  const exampleSteps = [
    'Groom\'s Car',
    'Noah / HiAce for family',
    'Bus / Minibus for guests'
  ];

  return (
    <section className=" bg-white text-[#111318]">
      {/* Header Section */}
      <div className="mb-10 text-left">
        <span className="text-xs tracking-normalr uppercase font-semibold text-pink-600 block mb-2">
          BOOK ONE VEHICLE OR MULTIPLE VEHICLES
        </span>
        <h2 className="text-xl sm:text-[32px] font-bold text-[#111318] mb-4 tracking-normal">
          Build the Transport Plan Your Event Actually Needs
        </h2>
        <p className="text-[#59606C] max-w-4xl text-sm sm:text-[15px] leading-[145%] tracking-normal">
          Need only one Sedan? Request one Sedan. Need one Noah for a family trip? Request one Noah. Need several vehicles for a wedding? Define the complete requirement.
        </p>
      </div>

      {/* Option Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {options.map((option, index) => {
          const Icon = option.icon;
          return (
            <div
              key={index}
              className={`${option.bgColor} rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:shadow-md`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${option.iconBg} p-2.5 rounded-full text-white flex items-center justify-center shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-normalr text-pink-600 uppercase block">
                      {option.badge}
                    </span>
                    <h3 className="text-lg font-bold text-[#111318] leading-snug">
                      {option.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#5E6878] leading-relaxed mt-4">
                  {option.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Example Box */}
      <div className="border border-[#D61F68] rounded-xl bg-[#EDF8FF] ounded-2xl p-6 sm:p-8 mb-10">
        <span className="text-[11px] font-bold tracking-normalr text-pink-600 uppercase block mb-1">
          MIXED TRANSPORT PLAN EXAMPLE
        </span>
        <p className="text-xs sm:text-sm text-[#59606C] mb-6">
          One event requirement can combine the transport needed for each passenger group.
        </p>

        {/* Step pills line */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {exampleSteps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="w-full md:w-auto flex-1 bg-white rounded-full px-6 py-3 text-xs sm:text-sm font-semibold text-[#111318] text-center shadow-xs">
                {step}
              </div>
              {idx < exampleSteps.length - 1 && (
                <div className="flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-[#D61F68] text-black flex items-center justify-center shrink-0">
                    <FaPlus className="w-4 h-4 rotate-90 md:rotate-0" />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Footer Details */}
      <div className="mb-8">
        <p className="text-xs sm:text-sm text-[#111318] font-bold mb-2">
          Different programs can have separate:{' '}
          <span className="font-semibold text-[#5E6878]">
            Dates • Vehicle types • Vehicle quantities • Routes • Pickup points • Timings
          </span>
        </p>
        <p className="text-xs sm:text-sm text-[#59606C] leading-relaxed">
          You do not have to force the whole event into one generic transport package. You can also arrange other event services through Utshob when your event requires them.
        </p>
      </div>

      {/* CTA Button */}
      <div>
        <button
          type="button"
          className="bg-[#D61F68] hover:bg-pink-700 text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-colors duration-200"
        >
          Build Your Car Rental Requirement
        </button>
      </div>
    </section>
  );
}