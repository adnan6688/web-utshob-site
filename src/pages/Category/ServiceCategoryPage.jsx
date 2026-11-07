import React from 'react';
import { useLocation } from 'react-router';
import Path from '../../Components/Shared/Path';
import ServiceHero from '../../Components/Shared/ServiceHero';
import { serviceHeroData } from '../../Components/Shared/serviceHeroData';
import EventDecorBD from '../../Components/Event/EventDecorBD';

const routeToCategoryMap = {
  '/event-decoration': 'Event Decoration',
  '/photography-videography': 'Photography & Videography',
  '/car-rental': 'Car Rental',
  '/rides-band-party': 'Rides & Band Party',
  '/cake': 'Cake',
  '/event-rental-support': 'Event Rental & Support',
};

export default function ServiceCategoryPage() {
  const location = useLocation();
  const category = routeToCategoryMap[location.pathname] || 'Event Decoration';
  const selectedData = serviceHeroData[category] || serviceHeroData['Event Decoration'];

  return (
    <div id={location.pathname.replace('/', '') || 'event-decoration'} className='mx-auto max-w-[1180px] px-3 sm:px-0'>
      <Path from={'Home'} to={category} />
      <div className='mt-2'>
        <ServiceHero data={selectedData} />
      </div>

      {category === 'Event Decoration' && (
        <div className='mt-0'>
          <EventDecorBD />
        </div>
      )}
    </div>
  );
}
