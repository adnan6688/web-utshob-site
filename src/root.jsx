
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import { Toaster } from 'react-hot-toast';
import './index.css';
import Authprovider from './Context/Authprovider.jsx';
import { homepageStructuredData } from './constants/seoHome';

const gtagScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-80CSQ257TF');
`;

export default function Root() {
  return (
    <html lang="en" data-theme="light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFF5F7" />

        <title>Utshob.xyz | Event Services in Bangladesh | Compare Quotations</title>

        <meta
          name="description"
          content="Find event services across Bangladesh with Utshob.xyz. Submit one request, receive quotations, compare providers and book through the Utshob app."
        />

        <link rel="canonical" href="https://www.utshob.xyz/" />

        <meta
          name="robots"
          content="index, follow"
        />

        <meta property="og:title" content="Utshob.xyz | Event Services in Bangladesh | Compare Quotations" />
        <meta property="og:description" content="Find event services across Bangladesh with Utshob.xyz. Submit one request, receive quotations, compare providers and book through the Utshob app." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.utshob.xyz/" />
        <meta property="og:image" content="https://www.utshob.xyz/utshob-event-services-bangladesh.webp" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:alt" content="Utshob.xyz - Event Services in Bangladesh" />


      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Utshob.xyz | Event Services in Bangladesh | Compare Quotations" />
      <meta name="twitter:description" content="Find event services across Bangladesh with Utshob.xyz. Submit one request, receive quotations, compare providers and book through the Utshob app." />
      <meta name="twitter:image" content="https://www.utshob.xyz/utshob-event-services-bangladesh.webp" />
      <meta name="twitter:image:alt" content="Utshob.xyz - Event Services in Bangladesh" />

        <link rel="icon" type="image/png" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/apple-touch-icon.png" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageStructuredData) }} />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-80CSQ257TF"
        />
        <script dangerouslySetInnerHTML={{ __html: gtagScript }} />

        <Meta />
        <Links />
      </head>

      <body>
        <Authprovider>
          <Outlet />
          <Toaster />
        </Authprovider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
