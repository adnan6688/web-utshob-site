import React, { useState } from 'react';
import Path from '../../Components/Shared/Path';
import ServiceHero from '../../Components/Shared/ServiceHero';
import { serviceHeroData } from '../../Components/Shared/serviceHeroData';
import EventDecorBD from '../../Components/Event/EventDecorBD';

export default function EventDecor() {
  const [selectedCategory] = useState('Event Decoration');
  const selectedData = serviceHeroData[selectedCategory];

  return (
    <div id='event-decoration' className=''>

      <div className='max-w-[1180px] mx-auto flex justify-start'>
        <Path from={'Home'} to={'Event Decoration'} />
      </div>

      <div className='flex flex-col gap-y-8 mt-4'>
        <div className='mx-auto max-w-[1180px]'>
          <ServiceHero data={selectedData} />
        </div>


        <div className="">
          <EventDecorBD />
        </div>
      </div>

    </div>
  );
}
