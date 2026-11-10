import { MdCheck } from "react-icons/md";

const EventCompare = () => {
  const compareItems = [
    {
      title: 'Price',
      description: 'See the price offered for your requirement.',
    },
    {
      title: "What's Included",
      description: 'Check which items, materials, setup and services are included.',
    },
    {
      title: "What's Excluded",
      description: 'Know what is outside the quotation before booking.',
    },
    {
      title: 'Ratings',
      description: 'See how previous customers rated the service provider.',
    },
    {
      title: 'Reviews',
      description: 'Read feedback from customers after completed services.',
    },
    {
      title: 'Portfolio',
      description: "Review previous work and see whether the provider's style matches your event.",
    },
  ];

  return (
    <section className="">
      <div className="">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl  font-bold text-[#111318] mb-2">
            Compare Before You Choose
          </h2>
          <p className="text-[#E62E77] font-medium text-lg mb-4 leading-[25px]">
            Make Your Decision with More Information
          </p>
          <p className="text-[#59606C]   text-base max-w-3xl leading[145%]">
            Choosing an event decorator should not depend on price alone. With Utshob, you can review important service information before confirming your order.
          </p>
        </div>

        {/* Cards Grid (3 columns, 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {compareItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8F9FA] rounded-2xl p-6 border border-[#E2E6EB] flex items-start gap-4"
            >
              {/* Pink check icon badge */}
              <div className="flex-shrink-0 w-9 h-9 bg-[#E62E77] text-white rounded-full flex items-center justify-center mt-1">
                <MdCheck></MdCheck>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[16px] font-bold leading-[23px] text-[#111318] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#59606C]   text-[12px] leading-[18px] tracking-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div>
          <button className="bg-[#E62E77] hover:bg-[#d02b5e] text-white font-medium py-3.5 px-6 rounded-lg transition-colors shadow-sm">
            Compare Decoration Quotations
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventCompare;