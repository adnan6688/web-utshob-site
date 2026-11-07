import React from 'react';
import EventDecorServiceCard from './EventDecorServiceCard';




const servicesData = [
  {
    id: 1,
    tag: 'REAL WORK',
    title: 'Wedding Stage Decoration',
    description: 'Find simple, floral, modern, premium or customized wedding stage setups based on your venue, preferred style and budget.',
    image: '/images/event/wedding-stage.png',
    imageAlt: 'Wedding stage decoration',
  },
  {
    id: 2,
    tag: 'REAL WORK',
    title: 'Holud Stage Decoration',
    description: 'Explore colourful, traditional, floral, rooftop, home-based and customized setups for gaye holud.',
    image: "/images/event/wedding-stage.png",
    imageAlt: 'Holud stage decoration',
  },
  {
    id: 3,
    tag: 'REAL WORK',
    title: 'Birthday Decoration',
    description: 'Find balloon decoration, themed setups and home or venue-based birthday decoration for children and adults.',
    image: '/images/event/wedding-stage.png',
    imageAlt: 'Birthday decoration',
  },
  {
    id: 4,
    tag: 'REAL WORK',
    title: 'Basor Ghor Decoration',
    description: 'Explore simple, floral, romantic and customized basor ghor and wedding room decoration.',
    image: '/images/event/wedding-stage.png',
    imageAlt: 'Basor ghor decoration',
  },
  {
    id: 5,
    tag: 'REAL WORK',
    title: 'Wedding Car Decoration',
    description: 'Compare simple floral, premium floral and customized decoration options for different types of wedding cars.',
    image: '/images/event/wedding-stage.png',
    imageAlt: 'Wedding car decoration',
  },
  {
    id: 6,
    tag: 'REAL WORK',
    title: 'Wedding Gate Decoration',
    description: 'Find simple, floral, traditional, modern or customized entrance decoration for your wedding venue.',
    image: '/images/event/wedding-stage.png',
    imageAlt: 'Wedding gate decoration',
  },
  {
    id: 7,
    tag: 'REAL WORK',
    title: 'Wedding Walkway Decoration',
    description: 'Explore bridal walkway and wedding aisle decoration for indoor and outdoor venues.',
    image: '/images/event/wedding-stage.png',
    imageAlt: 'Wedding walkway decoration',
  },
  {
    id: 8,
    tag: 'REAL WORK',
    title: 'Head Table Decoration',
    description: 'Find simple, floral, premium and customized head table setups for weddings and receptions.',
    image: '/images/event/wedding-stage.png',
    imageAlt: 'Wedding head table decoration',
  },
  {
    id: 9,
    tag: 'REAL WORK',
    title: 'Mehendi Stage Decoration',
    description: 'Explore colourful, floral, simple, rooftop and home-based mehendi stage setups.',
    image: '/images/event/wedding-stage.png',
    imageAlt: 'Mehendi stage decoration',
  },
  {
    id: 10,
    tag: 'REAL WORK',
    title: 'Kunjo Decoration',
    description: 'Find floral, traditional and customized kunjo decoration for Bengali wedding ceremonies.',
    image: '/images/event/wedding-stage.png',
    imageAlt: 'Kunjo decoration',
  },
  {
    id: 11,
    tag: 'REAL WORK',
    title: 'Photo Booth Rental',
    description: 'Compare photo booth options for weddings, birthdays, parties and other events.',
    image: '/images/event/wedding-stage.png',
    imageAlt: 'Event photo booth',
  },
  {
    id: 12,
    tag: 'REAL WORK',
    title: '360 Photo Booth Rental',
    description: 'Find 360 photo booth options with different setup styles, durations and available features.',
    image: '/images/event/wedding-stage.png',
    imageAlt: '360 photo booth rental',
  },
];



const EventServicesSection = () => {
  return (
    <section className="bg-[#F8F9FA] px-4 lg:px-0">
      <div className="">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold leading-[42px] tracking-normal text-[#111318] mb-2">
            Explore Event Decoration Services
          </h2>
          <p className="text-[16px] text-[#59606C]  ">
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
              image={service.image}
              imageAlt={service.imageAlt}
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