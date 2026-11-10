import React from 'react';

const CarDecorationMultipleProggrams = () => {
  const programs = [
    {
      title: "Holud",
      description: "normal family transport",
      bgColor: "bg-[#F4F6F8]",
    },
    {
      title: "Wedding",
      description: "decorated Groom's Car",
      bgColor: "bg-[#FFF1F6]",
    },
    {
      title: "Reception",
      description: "separate Sedan/Luxury requirement",
      bgColor: "bg-[#F4F6F8]",
    },
  ];

  return (
    <section className="">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl  md:text-[42px] font-bold text-slate-900 mb-3 max-w-3xl leading-[145%] tracking-normal">
        Wedding Car Decoration and Multiple Programs
      </h2>

      {/* Subtitle */}
      <p className="text-slate-500 text-xs md:text-sm mb-6 max-w-2xl leading-relaxed">
        A decorated car may be required for only one program while other programs need normal transport. 
        These can be structured separately.
      </p>

      {/* Program Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {programs.map((program, index) => (
          <div
            key={index}
            className={`${program.bgColor} p-5 rounded-xl flex flex-col justify-between min-h-[90px]`}
          >
            <h3 className="text-sm font-bold text-slate-800 mb-1">
              {program.title}
            </h3>
            <p className="text-xs text-slate-500">
              {program.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarDecorationMultipleProggrams;