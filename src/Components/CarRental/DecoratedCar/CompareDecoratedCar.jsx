import React from 'react';

const CompareDecoratedCar = () => {
  const comparisonCards = [
    {
      id: 1,
      items: [
        'Actual proposed vehicle',
        'Vehicle model',
        'Exterior photos',
        'Interior photos',
      ],
    },
    {
      id: 2,
      items: [
        'Decoration requirement',
        'Required preparation timing',
      ],
    },
    {
      id: 3,
      items: [
        'Quotation',
        'Partner rating',
        'Reviews',
      ],
    },
  ];

  return (
    <section className="w-full ">
      <div className="space-y-8">
        
        {/* Header Section */}
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl  md:text-[42px] font-bold text-slate-900 tracking-normal max-w-2xl">
            What to Compare for a Decorated Wedding Car
          </h2>
          <div className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
            <p>Visual condition matters more here than in a normal transport requirement.</p>
            <p>Compare:</p>
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {comparisonCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-6  border border-[#DCE3EA] flex flex-col justify-start"
            >
              <ul className="space-y-4">
                {card.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {/* Pink Bullet Dot */}
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E9337D] shrink-0" />
                    
                    {/* Text */}
                    <span className="font-semibold text-slate-800 text-sm md:text-[15px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Pink Outline Warning Box */}
        <div className="bg-white rounded-2xl p-6 border border-[#E9337D] ">
          <p className="text-slate-900 font-semibold text-sm md:text-base">
            Do not assume a representative website image is the exact car being offered for your wedding.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CompareDecoratedCar;