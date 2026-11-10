import { index, layout, route } from '@react-router/dev/routes';

const appLayout = './MainLayout/Layout.jsx';

const homeRoutes = [
  index('./pages/Home/Home.jsx', { id: 'home' }),
  route('privacy-policy', './pages/Home/PrivecyPolicy.jsx', { id: 'privacy-policy' }),
  route('refund', './pages/Home/Refund.jsx', { id: 'refund' }),
  route('terms-and-conditions', './pages/Home/TermsAndCondition.jsx', { id: 'terms-and-conditions' }),
  route('about-us', './pages/Home/AboutUs.jsx', { id: 'about-us' }),
];

const accountRoutes = [
  route('delete-account', './Components/DeleteAccount/DeleteAccount.jsx', { id: 'delete-account' }),
  route('customer-delete-account', './Components/DeleteAccount/DeleteAccount.jsx', { id: 'customer-delete-account' }),
];

const categoryRoutes = [
  route('event-decoration', './pages/Category/EventDecor.jsx', { id: 'event-decoration' }),
  route('photography-videography', './pages/Category/ServiceCategoryPage.jsx', { id: 'photography-videography' }),
  route('rides-band-party', './pages/Category/ServiceCategoryPage.jsx', { id: 'rides-band-party' }),
  route('cake', './pages/Category/ServiceCategoryPage.jsx', { id: 'cake' }),
  route('event-rental-support', './pages/Category/ServiceCategoryPage.jsx', { id: 'event-rental-support' }),
  route('event-decoration-wedding-stage', './pages/Category/EventDecorSubCategory/WeddingStageDecoration.jsx', { id: 'wedding_stage' }),
];

const carRentalRoutes = [
  route('car-rental', './pages/Category/CarRental/CarRentalCategory.jsx', { id: 'car_rental' }),
  route('wedding-car-rental', './pages/Category/CarRental/WeddingCarRental/WeddingCarRental.jsx', { id: 'wedding-car-rental' }),
  route('micro-bus-rental', './pages/Category/CarRental/MircobusRental/MicroBusPage.jsx', { id: 'micro-bus' }),
  route('noah-rental', './pages/Category/CarRental/NoahRental/NoahRentalPage.jsx', { id: 'noah-rental' }),
  route('decoratore-car-rental', './pages/Category/CarRental/DecoratorCarRental/DecoratorCarRentalPage.jsx', { id: 'decoratore-car-rental' }),
  route('premium-car-rental', './pages/Category/CarRental/PremiumCarRental/PremiumCarRentalPage.jsx', { id: 'premium-car-rental' }),
];

export default [
  layout(appLayout, [
    ...homeRoutes,
    ...accountRoutes,
    ...categoryRoutes,
    ...carRentalRoutes,
  ]),
];
