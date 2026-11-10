export const APP_DOWNLOAD_URL = 'https://play.google.com/store/apps/details?id=xyz.Utshob';
export const PARTNER_APP_URL = 'https://play.google.com/store/apps/details?id=xyz.utshob.partner';
export const PARTNER_SIGNUP = 'https://www.utshob.xyz/';
export const CUSTOMER_CARE = 'tel:+8801575336382';
export const REQUEST_HOME = 'https://www.utshob.xyz/';
export const DESIGN_GALLERY = 'https://www.utshob.xyz/';

export const CATEGORY_ROUTE = (categoryKey) => {
  const routes = {
    'event-decoration': '/event-decoration',
    'photography-videography': '/',
    'car-rental': '/car-rental',
    'rides-band-party': '/',
    'cake': '/',
    'event-rental-support': '/',
  };

  return routes[categoryKey] || '/';
};

export const PLANNER_ROUTE = (plannerKey) => {
  const routes = {
    'event-planner': '/',
    'wedding-planner': '/',
    'birthday-planner': '/',
    'corporate-event-management': '/',
  };

  return routes[plannerKey] || '/';
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.utshob.xyz/#organization',
  name: 'Utshob.xyz',
  legalName: 'Utsab Platform Limited',
  url: 'https://www.utshob.xyz/',
  logo: 'https://www.utshob.xyz/utshob-event-services-bangladesh.png',
  sameAs: [
    "https://www.facebook.com/utshob.xyz.official",
    "https://www.linkedin.com/company/utshob-xyz/",
    "https://www.instagram.com/utshob.xyz/",
    'https://www.youtube.com/@utshob.xyz.official'
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
      '@id': 'https://www.utshob.xyz/#website',
      name: 'Utshob.xyz',
      url: 'https://www.utshob.xyz/',
      inLanguage: ['en', 'bn'],
      publisher: {
        '@id': 'https://www.utshob.xyz/#organization',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.utshob.xyz/#webpage',
      url: 'https://www.utshob.xyz/',
      name: 'Utshob.xyz | Event Services in Bangladesh | Compare Quotations',
      description:
        'Find event services across Bangladesh with Utshob.xyz. Submit one request, receive quotations, compare providers and book through the Utshob app.',
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
