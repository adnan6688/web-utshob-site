import React from 'react';

export default function ChooseWeddingVehicle() {
  const vehicleCards = [
    {
      badge: 'GROOM',
      title: "Groom's Car",
      description: 'Request a preferred Sedan or Luxury Car for the groom.',
      extraText: 'If you have a model preference, specify it. If not, partners can propose suitable available vehicles.',
      bg: 'bg-[#FFFFFF]',
      badgeBg: 'bg-pink-50',
      badgeColor: 'text-[#D61F68]',
    },
    {
      badge: 'FAMILY',
      title: 'Bride & Family Transportation',
      description: 'Sedan, Noah or other relevant vehicles can be requested according to the number of passengers and transport plan.',
      extraText: null,
      bg: 'bg-[#EDF8FF]',
      badgeBg: 'bg-white',
      badgeColor: 'text-[#D61F68]',
    },
    {
      badge: 'GUESTS',
      title: 'Wedding Guest Transportation',
      description: 'For larger guest groups, use Noah, HiAce, Bus / Minibus or a combination of vehicles.',
      extraText: null,
      bg: 'bg-[#FFF8E8]',
      badgeBg: 'bg-white',
      badgeColor: 'text-[#D61F68]',
    },
    {
      badge: 'PREMIUM',
      title: 'Luxury Wedding Car',
      description: 'If you specifically want a premium vehicle such as a Prado, Mercedes-Benz or BMW, explore Luxury Car Rental and include the wedding requirement.',
      extraText: null,
      bg: 'bg-white',
      badgeBg: 'bg-pink-50',
      badgeColor: 'text-[#D61F68]',
    },
    {
      badge: 'DECORATION',
      title: 'Decorated Wedding Car',
      description: "If the Groom's Car or another wedding car needs decoration, define the decoration requirement and additional preparation time.",
      extraText: null,
      bg: 'bg-[#FFF1F6]',
      badgeBg: 'bg-white',
      badgeColor: 'text-[#D61F68]',
      hasButton: true,
      buttonText: 'Explore Decorated Wedding Car',
    },
  ];

  return (
    <section className="w-full  bg-slate-50/40 text-[#111318]">
      {/* Header Section */}
      <div className="mb-10 text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111318] tracking-normal">
          Choose the Wedding Vehicles You Need
        </h2>
      </div>

      {/* Grid Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {vehicleCards.map((card, idx) => (
          <div
            key={idx}
            className={`${card.bg} rounded-3xl p-6 sm:p-8 border border-[#DCE3EA]  flex flex-col justify-between transition-all duration-200 `}
          >
            <div>
              {/* Badge */}
              <div className="mb-4">
                <span
                  className={`inline-block ${card.badgeBg} ${card.badgeColor} text-[10px] font-bold tracking-normal uppercase px-2.5 py-1 rounded-full border border-pink-100/50`}
                >
                  {card.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#111318] mb-3 leading-snug">
                {card.title}
              </h3>

              {/* Main Description */}
              <p className="text-xs sm:text-sm text-[#5E6878] leading-relaxed mb-4">
                {card.description}
              </p>

              {/* Optional Extra Paragraph */}
              {card.extraText && (
                <p className="text-xs sm:text-sm text-[#5E6878] leading-relaxed mt-4">
                  {card.extraText}
                </p>
              )}
            </div>

            {/* Optional Action Button */}
            {card.hasButton && (
              <div className="mt-6">
                <button
                  type="button"
                  className="w-full sm:w-auto bg-white border border-pink-500 text-[#D61F68] hover:bg-pink-50 font-semibold text-xs px-4 py-2.5 rounded-xl shadow-2xs transition-colors duration-200"
                >
                  {card.buttonText}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}