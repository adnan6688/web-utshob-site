export const APP_DOWNLOAD_URL = 'https://play.google.com/store/apps/details?id=xyz.Utshob';
export const PARTNER_APP_URL = 'https://play.google.com/store/apps/details?id=xyz.utshob.partner';
export const PARTNER_SIGNUP = 'https://www.utshob.xyz/';
export const CUSTOMER_CARE = 'tel:01575336382';
export const REQUEST_HOME = '/';
export const DESIGN_GALLERY = '/';

export const CATEGORY_ROUTE = (categoryKey) => {
  const routes = {
    'event-decoration': '/#event-services',
    'photography-videography': '/#event-services',
    'car-rental': '/#event-services',
    'rides-band-party': '/#event-services',
    'cake': '/#event-services',
    'event-rental-support': '/#event-services',
  };

  return routes[categoryKey] || '/#event-services';
};

export const PLANNER_ROUTE = (plannerKey) => {
  const routes = {
    'event-planner': '/#planning-solutions',
    'wedding-planner': '/#planning-solutions',
    'birthday-planner': '/#planning-solutions',
    'corporate-event-management': '/#planning-solutions',
  };

  return routes[plannerKey] || '/#planning-solutions';
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Utshob.xyz',
  legalName: 'Utsab Platform Limited',
  url: 'https://www.utshob.xyz/',
  logo: 'https://www.utshob.xyz/apple-touch-icon.png',
  sameAs: [
    'https://play.google.com/store/apps/details?id=xyz.Utshob',
    'https://www.utshob.xyz/',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    telephone: '+8801575336382',
    areaServed: 'BD',
    availableLanguage: ['en', 'bn'],
  },
};

export const homepageStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    organizationSchema,
    {
      '@type': 'WebSite',
      name: 'Utshob.xyz',
      url: 'https://www.utshob.xyz/',
      inLanguage: ['en', 'bn'],
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.utshob.xyz/?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      url: 'https://www.utshob.xyz/',
      name: 'Utshob.xyz | Event Services in Bangladesh | Compare Quotations',
      description: 'Find event services across Bangladesh with Utshob.xyz. Submit one request, receive quotations, compare providers and book through the Utshob app.',
      inLanguage: 'en',
      isPartOf: {
        '@id': 'https://www.utshob.xyz/#website',
      },
      about: {
        '@id': 'https://www.utshob.xyz/#organization',
      },
    },
  ],
};
