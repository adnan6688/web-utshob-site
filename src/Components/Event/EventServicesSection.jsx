import React from 'react';
import EventDecorServiceCard from './EventDecorServiceCard';



const servicesData = [
  {
    id: 1,
    tag: 'REAL WORK',
    title: 'Wedding Stage Decoration',
    description: 'Find simple, floral, modern, premium or customized wedding stage setups based on your venue, preferred style and budget.',
    bgType: 'pink',
  },
  {
    id: 2,
    tag: 'REAL WORK',
    title: 'Holud Stage Decoration',
    description: 'Explore colourful, traditional, floral, rooftop, home-based and customized setups for gaye holud.',
    bgType: 'blue',
  },
  {
    id: 3,
    tag: 'REAL WORK',
    title: 'Birthday Decoration',
    description: 'Find balloon decoration, themed setups and home or venue-based birthday decoration for children and adults.',
    bgType: 'pink',
  },
  {
    id: 4,
    tag: 'REAL WORK',
    title: 'Basor Ghor Decoration',
    description: 'Explore simple, floral, romantic and customized basor ghor and wedding room decoration.',
    bgType: 'blue',
  },
  {
    id: 5,
    tag: 'REAL WORK',
    title: 'Wedding Car Decoration',
    description: 'Compare simple floral, premium floral and customized decoration options for different types of wedding cars.',
    bgType: 'pink',
  },
  {
    id: 6,
    tag: 'REAL WORK',
    title: 'Wedding Gate Decoration',
    description: 'Find simple, floral, traditional, modern or customized entrance decoration for your wedding venue.',
    bgType: 'blue',
  },
  {
    id: 7,
    tag: 'REAL WORK',
    title: 'Wedding Walkway Decoration',
    description: 'Explore bridal walkway and wedding aisle decoration for indoor and outdoor venues.',
    bgType: 'pink',
  },
  {
    id: 8,
    tag: 'REAL WORK',
    title: 'Head Table Decoration',
    description: 'Find simple, floral, premium and customized head table setups for weddings and receptions.',
    bgType: 'blue',
  },
  {
    id: 9,
    tag: 'REAL WORK',
    title: 'Mehendi Stage Decoration',
    description: 'Explore colourful, floral, simple, rooftop and home-based mehendi stage setups.',
    bgType: 'pink',
  },
  {
    id: 10,
    tag: 'REAL WORK',
    title: 'Kunjo Decoration',
    description: 'Find floral, traditional and customized kunjo decoration for Bengali wedding ceremonies.',
    bgType: 'blue',
  },
  {
    id: 11,
    tag: 'REAL WORK',
    title: 'Photo Booth Rental',
    description: 'Compare photo booth options for weddings, birthdays, parties and other events.',
    bgType: 'pink',
  },
  {
    id: 12,
    tag: 'REAL WORK',
    title: '360 Photo Booth Rental',
    description: 'Find 360 photo booth options with different setup styles, durations and available features.',
    bgType: 'blue',
  },
];

const EventServicesSection = () => {
  return (
    <section className="bg-[#F8F9FA]">
      <div className="">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold leading-[42px] tracking-normal text-[#111318] mb-2">
            Explore Event Decoration Services
          </h2>
          <p className="text-[16px] text-[#59606C]">
            Choose the decoration service you need and send your requirement through Utshob.
          </p>
        </div>

        {/* Cards Grid Grid (4 Columns on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <EventDecorServiceCard
              key={service.id}
              tag={service.tag}
              title={service.title}
              description={service.description}
              bgType={service.bgType}
              linkText={`View ${service.title}`}
              onClick={() => console.log(`Clicked on ${service.title}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventServicesSection;