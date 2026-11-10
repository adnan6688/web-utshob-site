import React from 'react';

const DecoratedWeddingCompare = () => {
  const carOptions = [
    { id: 1, title: 'Sedan' },
    { id: 2, title: 'Luxury Car' },
    { id: 3, title: 'Axio' },
    { id: 4, title: 'Premio' },
    { id: 5, title: 'Prado' },
    { id: 6, title: 'Mercedes-Benz' },
    { id: 7, title: 'BMW' },
    { 
      id: 8, 
      title: 'Or keep the model flexible and let partners propose a suitable available wedding car.' 
    },
  ];

  return (
    <section className="w-full ">
      <div className=" space-y-8">
        
        {/* Header Section */}
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl  md:text-[42px] font-bold text-slate-900 tracking-normal max-w-3xl">
            Choose the Vehicle First—or Keep It Flexible
          </h2>
          <p className="text-slate-500 font-medium text-base">
            You may specify a preferred:
          </p>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {carOptions.map((option) => (
            <div
              key={option.id}
              className="bg-white rounded-2xl p-5  border border-[#DCE3EA] flex flex-col justify-start space-y-3  duration-200"
            >
              {/* Pink Pill Badge */}
              <div className="self-start">
                <span className="bg-[#FFF0F5] text-[#E9337D] font-bold text-[11px] uppercase tracking-normal px-2.5 py-0.5 rounded-full inline-block">
                  CAR
                </span>
              </div>

              {/* Option Title / Text */}
              <p className={`font-semibold text-slate-800 ${option.id === 8 ? 'text-xs md:text-sm font-semibold leading[145%]' : 'text-sm md:text-base'}`}>
                {option.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DecoratedWeddingCompare;