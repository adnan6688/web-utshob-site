import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import { Toaster } from 'react-hot-toast';
import './index.css';
import Authprovider from './Context/Authprovider.jsx';

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
        <meta name="robots" content="index, follow" />
        <title>Utshob.xyz | Event App in Bangladesh | Compare Quotations</title>
        <link rel="icon" type="image/png" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" type="image/png" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" type="image/png" href="/apple-touch-icon.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-80CSQ257TF" />
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
