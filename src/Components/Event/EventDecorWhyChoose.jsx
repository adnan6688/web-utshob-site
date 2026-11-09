import React from 'react';

const EventDecorWhyChoose = ({
  title = "Why Choose Utshob for Event Decoration?",
  cards = [
    {
      id: 1,
      title: "Start with a Design, Not Just a Description",
      description: "Choose from available decoration designs or upload your own reference so providers can better understand what you want.",
    },
    {
      id: 2,
      title: "Quotations Based on Your Requirement",
      description: "Providers review the design and specifications before submitting their quotation, helping you compare offers against a clearer requirement.",
    },
    {
      id: 3,
      title: "Compare More Than Price",
      description: "Compare price, ratings, reviews, portfolio and included/excluded service details.",
    },
    {
      id: 4,
      title: "Plan Services Together or Separately",
      description: "Book one decoration service, combine several services or create requirements for different programs on different dates.",
    },
    {
      id: 5,
      title: "Flexible Event Planning",
      description: "Book one service, combine several services or plan multiple programs on different dates.",
    },
    {
      id: 6,
      title: "Direct Coordination After Confirmation",
      description: "Once the order is confirmed, you can communicate directly with your selected provider for event coordination.",
    },
  ],
  featuredCard = {
    title: "One App for Your Event",
    description: "Decoration is only one part of an event. Utshob also brings photography, car rental, cakes, rides, band parties, lighting, sound and other event services into the same ecosystem.",
  }
}) => {
  return (
    <section className="">
      <div className="">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#111318] mb-10">
          {title}
        </h2>

        {/* Top 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-[10px] px-5 py-6 border   border-t-3 border-t-[#E62E77] border-x-[#E2E6EB] border-b-[#E2E6EB]  flex flex-col justify-start min-h-[190px]"
            >
              <h3 className="text-[15px] font-bold text-[#111318] mb-3 leading-[22px] tracking-normal">
                {card.title}
              </h3>
              <p className="text-[#59606C] text-[12px] leading-[18px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Full-Width Featured Card */}
        {featuredCard && (
          <div className="bg-white rounded-[10px] px-5 py-6  border  border-t-3 border-t-[#E62E77] border-x-[#E2E6EB] border-b-[#E2E6EB] ">
            <h3 className="text-[15px] font-bold text-[#111318] mb-3 leading-[22px] tracking-normal">
              {featuredCard.title}
            </h3>
            <p className="text-[#59606C] text-[12px] leading-[18px]">
              {featuredCard.description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventDecorWhyChoose;