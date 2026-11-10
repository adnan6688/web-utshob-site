import React from 'react';

export default function MultiplePrograms() {
  const programs = [
    {
      number: '01',
      title: 'Holud',
      subtitle: 'Noah / HiAce for family',
      bg: 'bg-white',
      badgeBg: 'bg-gray-100',
      badgeText: 'text-[#5E6878]',
    },
    {
      number: '02',
      title: 'Wedding',
      subtitle: "Groom's Sedan or Luxury Car + guest vehicles",
      bg: 'bg-[#FFF1F6]',
      badgeBg: 'bg-white',
      badgeText: 'text-pink-600',
    },
    {
      number: '03',
      title: 'Reception',
      subtitle: 'Separate vehicles, route and timing',
      bg: 'bg-white',
      badgeBg: 'bg-gray-100',
      badgeText: 'text-[#5E6878]',
    },
  ];

  return (
    <section className="w-full">
      <div className="">
        {/* Header Section */}
        <div className="mb-8 text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111318] tracking-normal mb-3">
            One Wedding, Multiple Programs
          </h2>
          <p className="text-sm sm:text-base text-[#5E6878] mb-2">
            Your Holud, Wedding and Reception do not have to use the same transportation plan.
          </p>
          <p className="text-xs sm:text-base text-[#5E6878]">
            For example:
          </p>
        </div>

        {/* 3 Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {programs.map((program) => (
            <div
              key={program.number}
              className={`${program.bg} rounded-3xl p-6 sm:p-8 flex flex-col justify-between  transition-all duration-200  min-h-[160px]`}
            >
              <div>
                {/* Number Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-block ${program.badgeBg} ${program.badgeText} text-[10px] font-bold tracking-normal px-2.5 py-1 rounded-full`}
                  >
                    {program.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[21px] font-bold text-[#111318] mb-2">
                  {program.title}
                </h3>

                {/* Subtitle / Details */}
                <p className="text-xs sm:text-sm text-[#5E6878] leading[145%]">
                  {program.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div>
          <p className="text-xs sm:text-base font-semibold text-[#111318]">
            Each requirement can be structured according to the actual program.
          </p>
        </div>
      </div>
    </section>
  );
}