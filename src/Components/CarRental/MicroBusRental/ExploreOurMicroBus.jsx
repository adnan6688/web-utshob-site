import React from 'react';

// Default mock data (Dynamic Props না পাঠালেও এগুলো কাজ করবে)
const DEFAULT_EXPLORE_CARDS = [
  {
    id: 'noah',
    title: 'Explore Noah Rental',
    description: 'Noah may suit smaller family or group requirements.',
    buttonText: 'Explore Noah Car Rental',
    buttonAction: () => console.log('Noah clicked'),
    bgColor: 'bg-[#EDF8FF]',
  },
  {
    id: 'hiace',
    title: 'Explore HiAce Rental',
    description: 'HiAce may be more relevant where the group or capacity requirement is larger.',
    buttonText: 'Explore HiAce Car Rental',
    buttonAction: () => console.log('HiAce clicked'),
    bgColor: 'bg-white',
  },
];

export default function ExploreOurMicroBus({ cards = DEFAULT_EXPLORE_CARDS }) {
  return (
    <section className="w-full ">
      {cards.map((card) => (
        <div key={card.id} className={`${card.bgColor} py-12 px-6 sm:px-12 transition-colors duration-200`}>
          <div className="max-w-6xl mx-auto text-left">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111318] tracking-normal mb-3">
              {card.title}
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 max-w-3xl">
              {card.description}
            </p>

            {/* Action Button */}
            <div>
              <button
                type="button"
                onClick={card.buttonAction}
                className="bg-pink-600 hover:bg-pink-700 text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-200"
              >
                {card.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}