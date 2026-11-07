import React from 'react';

const EventDecorServiceCard = ({ tag, title, description, bgType, linkText, onClick }) => {
  // Alternate background colors (Light Pink & Light Blue)
  const topBgClass = bgType === 'pink' ? 'bg-[#FFF0F4]' : 'bg-[#EBF7FF]';

  return (
    <div className="bg-white rounded-xl border border-[#E2E6EB] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between">
      {/* Top Image / Placeholder Banner */}
      <div className={`h-36 ${topBgClass} p-4 relative`}>
        {tag && (
          <span className="text-[9px] tracking-wider uppercase font-semibold text-[#59606C]  ">
            {tag}
          </span>
        )}
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-[15px] font-semibold text-gray-900 mb-2 leading-snug">
            {title}
          </h3>
          <p className="text-xs text-[#59606C] leading-[17px] mb-6">
            {description}
          </p>
        </div>

        {/* Action Link */}
        <button
          onClick={onClick}
          className="text-left text-[11px] font-semibold text-[#E62E77] hover:underline inline-block mt-auto hover:cursor-pointer leading-[16px]"
        >
          {linkText || `View ${title}`}
        </button>
      </div>
    </div>
  );
};

export default EventDecorServiceCard;