
import React from 'react';

const DEFAULT_NEED_HELP_DATA = {
  title: 'Need Help Using Utshob?',

  description:
    'Our customer care team can help you create a request, compare quotations or manage a confirmed booking.',

  buttonText: 'Get Price Now',

  onClick: null,

  layout: 'row',
};

const NeedHelp = ({
  data = {},
  className = '',
}) => {
  const {
    title = DEFAULT_NEED_HELP_DATA.title,
    description = DEFAULT_NEED_HELP_DATA.description,
    buttonText = DEFAULT_NEED_HELP_DATA.buttonText,
    onClick = DEFAULT_NEED_HELP_DATA.onClick,
    layout = DEFAULT_NEED_HELP_DATA.layout,
  } = data;

  const isColumn = layout === 'column';

  return (
    <section className={`w-full ${className}`}>
      <div
        className={`flex ${isColumn
            ? 'flex-col items-start'
            : 'flex-col items-start md:flex-row md:items-center'
          } justify-between gap-6`}
      >
        {/* Content */}
        <div className="max-w-2xl">
          {title && (
            <h2
              className={`mb-2 text-2xl font-bold tracking-normal sm:text-3xl ${title === 'Need a Decorated Wedding Car?'
                  ? 'text-white'
                  : 'text-[#1F1F1F]'
                }`}
            >
              {title}
            </h2>
          )}

          {description && (
            <p
              className={`text-sm font-normal leading-5 sm:text-base ${title === 'Need a Decorated Wedding Car?'
                  ? 'text-white/80'
                  : 'text-[#59606C]'
                }`}
            >
              {description}
            </p>
          )}
        </div>

        {/* CTA Button */}
        {buttonText && (
          <div
            className={`flex w-full ${isColumn
                ? 'justify-start'
                : 'justify-start md:w-auto md:justify-end'
              }`}
          >
            <button
              type="button"
              onClick={onClick}
              className="w-full cursor-pointer whitespace-nowrap rounded-lg border border-[#E62E77] bg-white px-7 py-3 text-[14px] font-semibold text-[#E62E77] shadow-sm transition-all duration-200 hover:bg-[#E62E77] hover:text-white sm:w-auto"
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NeedHelp;
