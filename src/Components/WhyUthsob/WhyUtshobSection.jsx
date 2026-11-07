import React from 'react';

import { IoMdCheckmark } from "react-icons/io";


const FeatureCard = ({
  title,
  description,
  variant = 'pink',
  value
}) => {
  const isPink = variant === 'pink';

  return (
    <div
      className={`flex flex-col gap-y-3 justify-between p-5 rounded-2xl sm:rounded-[18px]
    transition-[box-shadow,transform] duration-300 ease-out
    ${value !== 5
          ? 'bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
          : 'bg-[#F0F7FF] border border-[#E0EEFF] shadow-[0_8px_24px_rgba(37,99,235,0.09)]'
        }`}
    >
      <div className='flex flex-col gap-y-3'>
        {/* Checkmark Icon Badge */}
        <div
          className={`w-8 h-5 sm:w-8 sm:h-5 rounded-full flex items-center justify-center  ${isPink
            ? 'bg-[#E62E6B] text-white'
            : 'bg-[#E3F0FC] text-[#2563EB]'
            }`}
          aria-hidden="true"
        >

          <IoMdCheckmark></IoMdCheckmark>
        </div>

        {/* Card Title */}
        <h3 className="text-lg sm:text-[18px] font-semibold text-[#111318] tracking-normal">
          {title}
        </h3>

        {/* Card Description */}
        <p className="text-sm sm:text-[13px] text-[#626773] leading-[145%] tracking-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export const WhyUseUtshobSection = () => {
  const features = [
    {
      title: 'One Request, Multiple Quotations',
      description:
        'Submit your requirement once and receive quotations from relevant service providers.',
      variant: 'pink',
    },
    {
      title: 'Choose a Design or Upload Your Own',
      description:
        'For supported design-based services, start with an available design or your own reference image.',
      variant: 'pink',
    },
    {
      title: 'Compare Service Scope, Not Just Price',
      description:
        'See what providers include and exclude so you can understand what each quotation actually covers.',
      variant: 'blue',
    },
    {
      title: 'Check Provider Information',
      description:
        'Compare ratings, reviews and portfolios where available before making your decision.',
      variant: 'pink',
    },
    {
      title: 'Book One Service or Combine Several',
      description:
        'Request only the service you need or arrange multiple services for the same event.',
      variant: 'pink',
    },
    {
      title: 'Plan Different Programs Separately',
      description:
        'Create separate requirements for programs on different dates, such as Holud, Wedding and Reception.',
      variant: 'blue',
    },
  ];

  return (
    <section className="py-[30px] sm:py-[64px]">
      <div className="flex flex-col gap-y-[22px]">
        {/* Exact H2 Heading matching SEO & AEO Hand-off specs */}
        <h2 className="text-2xl sm:text-[38px] font-bold text-[#111318]  tracking-normal">
          Why Use Utshob for Event Services?
        </h2>

        {/* Responsive Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              value={index}
              title={feature.title}
              description={feature.description}
              variant={feature.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUseUtshobSection;