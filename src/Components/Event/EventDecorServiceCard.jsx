
import React from 'react';

const EventDecorServiceCard = ({
  tag,
  title,
  description,
  image,
  imageAlt,
  linkText,
  onClick
}) => {
  return (
    <div className="bg-white rounded-xl border border-[#E2E6EB] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col overflow-hidden">

      {/* Image Area */}
      <div className="h-36 w-full relative overflow-hidden">
        <img
          src={image}
          alt={imageAlt || title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />

        {tag && (
          <span className="absolute top-3 left-3 text-[9px] tracking-wider uppercase font-semibold text-[#59606C]   bg-white/90 px-2.5 py-1 rounded-full">
            {tag}
          </span>
        )}
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col justify-between flex-grow">

        <div>
          <h3 className="text-[15px] font-semibold text-[#111318] mb-2 leading-snug">
            {title}
          </h3>

          <p className="text-xs text-[#59606C]   leading-[17px] mb-6">
            {description}
          </p>
        </div>

        {/* Action Link */}
        <button
          onClick={onClick}
          className="text-left text-[11px] font-semibold text-[#E62E77] hover:underline inline-block mt-auto cursor-pointer leading-[16px]"
        >
          {linkText || `View ${title}`}
        </button>

      </div>
    </div>
  );
};

export default EventDecorServiceCard;
