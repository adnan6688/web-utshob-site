import React from 'react';

const DefineTheCardecoration = () => {
  const cardsData = [
    {
      id: 1,
      items: [
        { title: 'Wedding program' },
        { title: 'Preferred car or model' },
        { title: 'Number of vehicles' },
      ],
    },
    {
      id: 2,
      items: [
        { title: 'Decoration', subtitle: 'Yes / No' },
        { title: 'When the vehicle must be ready' },
        { title: 'Additional preparation time', subtitle: 'For decoration' },
      ],
    },
    {
      id: 3,
      items: [
        { title: 'Pickup and destination' },
        { title: 'Start/end/return time' },
        { title: 'One Way or Round Trip' },
        { title: 'Stops or extra trips' },
      ],
    },
  ];

  return (
    <section className="w-full ">
      <div className=" space-y-8">
        
        {/* Header Section */}
        <div className="space-y-3">
          <h2 className="text-xl max-w-3xl sm:text-2xl md:text-[42px] font-bold text-slate-900 tracking-normal">
            Define the Car and Decoration Requirement Together
          </h2>
          <p className="text-[#5E6878]  text-[17px]">
            Specify:
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-6  border border-[#DCE3EA] flex flex-col justify-start"
            >
              <ul className="space-y-5">
                {card.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {/* Pink Bullet Dot */}
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E9337D] mt-1.5 shrink-0" />
                    
                    {/* Item Content */}
                    <div>
                      <p className="font-semibold text-slate-800 text-sm md:text-[15px] leading-5">
                        {item.title}
                      </p>
                      {item.subtitle && (
                        <p className="text-xs text-[#5E6878] mt-0.5">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Highlighted Info Box */}
        <div className="bg-[#FFF0F5] rounded-2xl p-6 md:p-8 space-y-2 border border-pink-100/50">
          <h3 className="text-slate-900 font-bold text-base md:text-lg leading-5">
            If the Groom’s Car is required at 10:00 AM but the decoration needs two additional hours of preparation, include that preparation time in the requirement.
          </h3>
          <p className="text-[#5E6878] text-sm md:text-base">
            The partner can then consider both the transport and preparation requirement when quoting.
          </p>
        </div>

      </div>
    </section>
  );
};

export default DefineTheCardecoration;