
import React from 'react';

const defaultContent = {
  title: 'Microbus Rental in Dhaka & Bangladesh',

  descriptions: [
    'Need a Microbus but not sure whether Noah or HiAce is the better fit?',
    'Start with your passenger count, luggage, route and trip requirement instead of choosing only by vehicle name.',
    'Then explore the relevant Noah or HiAce option and submit the actual requirement in the Utshob app.',
  ],

  cta: {
    text: 'Find Microbus Options',
    onClick: null,
  },

  asset: {
    badge: 'VERIFIED ASSET REQUIRED',
    title:
      'Verified Noah and HiAce examples; representative until partner bid identifies actual capacity, model and vehicle photos.',
    disclaimer:
      'Representative discovery image only. It must not imply exact model, availability, condition, decoration or owned-fleet status.',
  },
};

export default function MicroBusHero({
  content = {},
  className = '',
  styles = {},
}) {
  const data = {
    ...defaultContent,
    ...content,
    cta: {
      ...defaultContent.cta,
      ...content.cta,
    },
    asset: {
      ...defaultContent.asset,
      ...content.asset,
    },
  };

  return (
    <section
      className={`w-full bg-white text-[#111318] ${className}`}
    >
      {/* Hero Content */}
      <div className={`mb-8 text-left ${styles.header || ''}`}>
        <h1
          className={`mb-4 text-2xl font-bold leading-tight tracking-normal text-[#111318] sm:text-3xl ${styles.title || ''}`}
        >
          {data.title}
        </h1>

        <div
          className={`mb-8 max-w-4xl space-y-3 text-sm leading[145%] text-gray-600 sm:text-base ${styles.description || ''}`}
        >
          {data.descriptions.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
        </div>

        {/* CTA */}
        <div>
          <button
            type="button"
            onClick={data.cta.onClick}
            className={`rounded-xl bg-pink-600 px-6 py-3.5 text-xs font-semibold text-white shadow-md transition-colors duration-200 hover:bg-pink-700 sm:text-sm ${styles.button || ''}`}
          >
            {data.cta.text}
          </button>
        </div>
      </div>

      {/* Verified Asset */}
      <div
        className={`flex min-h-[220px] w-full flex-col justify-start rounded-3xl border border-[#DCE3EA] bg-[#F3F4F6] p-6 sm:p-8 ${styles.asset || ''}`}
      >
        <div className="mb-3">
          <span
            className={`inline-block rounded-full border border-pink-100 bg-pink-50 px-3 py-1 text-[10px] font-bold uppercase tracking-normal text-pink-600 sm:text-xs ${styles.badge || ''}`}
          >
            {data.asset.badge}
          </span>
        </div>

        <h3
          className={`mb-2 text-base font-semibold leading-5 text-[#111318] sm:text-lg ${styles.assetTitle || ''}`}
        >
          {data.asset.title}
        </h3>

        <p
          className={`text-xs leading-5 text-[#5C6370] ${styles.disclaimer || ''}`}
        >
          {data.asset.disclaimer}
        </p>
      </div>
    </section>
  );
}
