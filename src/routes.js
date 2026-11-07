import { index, layout, route } from '@react-router/dev/routes';

export default [
  layout('./MainLayout/Layout.jsx', [
    index('./pages/Home/Home.jsx', { id: 'home' }),
    route('privacy-policy', './pages/Home/PrivecyPolicy.jsx', { id: 'privacy-policy' }),
    route('refund', './pages/Home/Refund.jsx', { id: 'refund' }),
    route('terms-and-conditions', './pages/Home/TermsAndCondition.jsx', { id: 'terms-and-conditions' }),
    route('about-us', './pages/Home/AboutUs.jsx', { id: 'about-us' }),
    route('delete-account', './Components/DeleteAccount/DeleteAccount.jsx', { id: 'delete-account' }),
    route('customer-delete-account', './Components/DeleteAccount/DeleteAccount.jsx', { id: 'customer-delete-account' }),
    route('event-decoration', './pages/Category/EventDecor.jsx', { id: 'event-decoration' }),
    route('photography-videography', './pages/Category/ServiceCategoryPage.jsx', { id: 'photography-videography' }),
    route('car-rental', './pages/Category/ServiceCategoryPage.jsx', { id: 'car-rental' }),
    route('rides-band-party', './pages/Category/ServiceCategoryPage.jsx', { id: 'rides-band-party' }),
    route('cake', './pages/Category/ServiceCategoryPage.jsx', { id: 'cake' }),
    route('event-rental-support', './pages/Category/ServiceCategoryPage.jsx', { id: 'event-rental-support' })
  ]),
];
