
const StepCard = ({
  stepNumber,
  title,
  description,
  variant,
}) => {

  // Badge pill styling based on variant[cite: 3]
  const badgeClasses = {
    white: 'bg-[#E62E6B] text-white',
    pink: 'bg-[#E62E6B] text-white',
    blue: 'bg-white text-[#111318]  ',
  };

  return (
    <div
      className={`p-5 border border-[#D6E5E2] rounded-2xl sm:rounded-[18px] flex flex-col justify-between
    transition-[box-shadow,transform] duration-300 ease-out
    shadow-[0_4px_18px_rgba(0,0,0,0.08)]
      ${stepNumber == 3 ? 'bg-[#F1F7F6]' : ''}
    `}
    >
      <div className='flex flex-col gap-y-3'>
        {/* Step Number Badge */}
        <div
          className={`w-8 h-5 sm:w-8 sm:h-5 rounded-full   sm:text-sm font-semibold flex items-center justify-center  ${badgeClasses[variant]}`}
        >
          {stepNumber}
        </div>

        {/* Step Title */}
        <h3 className="text-lg sm:text-[18px] font-semibold text-[#111318] tracking-normal leading-[145%]">
          {title}
        </h3>

        {/* Step Description */}
        <p className="  sm:text-[13px] text-[#626773] leading-[145%] font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export const HowUtshobWorksSection = () => {
  const steps = [
    {
      stepNumber: '01',
      title: 'Choose an Event Service',
      description: 'Select the event service you need for any type of occasion.',
      variant: 'white',
    },
    {
      stepNumber: '02',
      title: 'Add Your Requirement',
      description:
        'Provide the event date, location and service specifications. For supported design-based services, choose a design or upload your own reference image.',
      variant: 'pink',
    },
    {
      stepNumber: '03',
      title: 'Receive Quotations',
      description:
        'Relevant service providers can submit quotations based on your requirement.',
      variant: 'blue',
    },
    {
      stepNumber: '04',
      title: 'Compare, Choose & Confirm',
      description:
        'Compare price, included and excluded items, ratings, reviews and portfolios—then choose and confirm the best-fit provider.',
      variant: 'white',
    }

  ];

  return (
    <section id="how-utshob-works" className="">
      <div className="flex flex-col gap-y-[22px]">
        {/* Exact H2 Heading matching SEO & AEO Hand-off specs */}
        <h2 className="text-[30px] sm:text-[38px] font-bold sm:font-semibold text-[#111318] tracking-normal leading-[145%] text-left">
          How Utshob Works
        </h2>

        {/* 4-Column Grid Desktop (1440px), 2-Column Tablet (768px), 1-Column Mobile (390px) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-[22px]">
          {steps.map((step) => (
            <StepCard
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              variant={step.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowUtshobWorksSection;