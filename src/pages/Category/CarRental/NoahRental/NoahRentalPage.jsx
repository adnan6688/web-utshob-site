import React from 'react';
import MicroBusHero from '../../../../Components/CarRental/MicroBusRental/MicroBusHero';
import NoahHiceTellPartners from '../../../../Components/CarRental/MicroBusRental/NoahHiceTellPartners';
import PopularMicrobusUses from '../../../../Components/CarRental/MicroBusRental/PopularMicrobusUses';
import QuestionAns from '../../../../Components/QuestionAns/QuestionAns';
import NeedHelp from '../../../../Components/Event/NeedHelp';
import EventDecorRealExperience from '../../../../Components/Event/EventDecorRealExperience';
import EventsPoweredByUtshob from '../../../../Components/CarRental/MicroBusRental/EventsPoweredByUtshob';
import Path from '../../../../Components/Shared/Path';


const NOAH_HELP_DATA = {
  title: 'Need a Noah?',

  description:
    'Submit the passenger, route and timing requirement and compare the actual Noah proposals.',

  buttonText: 'Get Noah Quotations',

  onClick: null,

  layout: 'column',
};
const noahHeroContent = {
  title: 'Noah Car Rental in Dhaka & Bangladesh',

  descriptions: [
    'Request a Toyota Noah for family travel, wedding guests, tours, events',
    'or smaller group transportation.',
    'Provide the passenger count, route and timing and let relevant partners',
    'propose available Noah vehicles.',
  ],
  cta: {
    text: 'Get Noah Rental Quotations',
    onClick: null,
  },

  asset: {
    badge: 'VERIFIED ASSET REQUIRED',

    title:
      'Verified Toyota Noah example; representative only until partner bid supplies actual vehicle, model, capacity, interior and exterior photos.',

    disclaimer:
      'Representative discovery image only. It must not imply exact model, availability, condition, decoration or owned-fleet status.',
  },
};
const DEFAULT_NOAH_CAPACITY_DATA = {
  section1: {
    title: 'Check the Actual Passenger Capacity',

    items: [
      'Noah-related searches often include 7-seater car rental intent.',
      'However, do not assume every Noah has exactly the same seating',
      'configuration.',
      'Before choosing, review the capacity of the actual vehicle being',
      'proposed.',
    ],

    listHeader: 'Specify:',
  },

  section2: {
    title: 'Tell Partners What You Need',

    listHeader: 'Specify:',

    items: [
      'Passenger count',
      'Number of Noahs',
      'Pickup/destination',
      'Start/end/return time',
      'One Way/Round Trip',
      'Stops',
      'Extra trips',
      'Wedding/event program if relevant',
    ],
  },
};


const DEFAULT_USES_DATA = {
  title: 'When Noah May Be Suitable',

  uses: [
    'Family trips',
    'Wedding guest transportation',
    'Tours',
    'Event transportation',
    'Smaller group travel',
  ],

  footerText: 'If a larger capacity is required, compare HiAce Rental.',

  bgColor: '',
};

const DEFAULT_NOAH_FAQ_DATA = {
  title: 'English FAQ',

  faqs: [
    {
      q: 'How many passengers can a Noah carry?',
      a: 'Capacity can vary by actual vehicle configuration. Confirm the capacity of the vehicle proposed for your requirement.',
    },
    {
      q: 'Is Noah a 7-seater rental option?',
      a: 'Noah can be relevant to 7-seater intent, but do not assume every proposed Noah has the same seating capacity.',
    },
    {
      q: 'How much does Noah rental cost in Dhaka?',
      a: 'There is no one fixed rate. Route, timing, trip type, number of vehicles and other requirements affect quotations.',
    },
    {
      q: 'Can I rent Noah for wedding guests?',
      a: 'Yes.',
    },
    {
      q: 'Can I request multiple Noahs?',
      a: 'Yes.',
    },
    {
      q: 'Can I see the actual Noah before choosing?',
      a: 'Yes. Compare the proposed model, capacity, exterior/interior photos, rate, rating and reviews.',
    },
  ],
};

const DEFAULT_NOAH_BANGLA_FAQ_DATA = {
  title: 'বাংলা AEO',

  faqs: [
    {
      q: 'Noah-এ কয়জন যাত্রী নেওয়া যায়?',
      a: 'Actual vehicle configuration অনুযায়ী capacity পরিবর্তিত হতে পারে। Proposed গাড়ির capacity দেখে confirm করা উচিত।',
    },
    {
      q: 'Noah কি ৭ সিটের গাড়ি?',
      a: 'কিছু Noah 7-seater requirement-এর জন্য relevant হতে পারে, কিন্তু সব Noah-এর capacity একই ধরে নেওয়া ঠিক নয়।',
    },
    {
      q: 'Dhaka-তে Noah ভাড়া কত?',
      a: 'Route, timing ও requirement অনুযায়ী quotation পরিবর্তিত হয়।',
    },
    {
      q: 'বিয়ের অতিথিদের জন্য Noah নেওয়া যাবে?',
      a: 'হ্যাঁ।',
    },
    {
      q: 'একাধিক Noah নেওয়া যাবে?',
      a: 'হ্যাঁ।',
    },
    {
      q: 'Actual Noah-এর ছবি আগে দেখা যাবে?',
      a: 'হ্যাঁ।',
    },
  ],
};
const DEFAULT_NOAH_BOOKING_DATA = {
  title: 'Compare Before Booking',

  subtitle: 'Review:',

  uses: [
    'Actual Noah',
    'Model',
    'Capacity',
    'Exterior/interior photos',
    'Route/timing',
    'Quotation',
    'Rating',
    'Reviews',
  ],

  bgColor: 'bg-[#FFFFFF]',
};



export default function NoahRentalPage() {

  const sectionClass = 'mx-auto w-full max-w-[1180px] px-4 lg:px-0';

  return (
    <div id="noah-rental">

      <div className={`mx-auto w-full max-w-[1180px]`}>
        <Path from={'Home'} to={' Car Rental / Noah Car Rental'} />
      </div>


      <div className={`${sectionClass} mb-10`}>
        <MicroBusHero content={noahHeroContent} ></MicroBusHero>
      </div>


      <div>
        <NoahHiceTellPartners data={DEFAULT_NOAH_CAPACITY_DATA}></NoahHiceTellPartners>

      </div>

      <div className="bg-[#EDF8FF] py-5 sm:py-10">
          <div className={`${sectionClass} mb-5 sm:mb-10`}>
          <PopularMicrobusUses data={DEFAULT_USES_DATA}></PopularMicrobusUses>
        </div>
      </div>


     <div className={`${sectionClass} mb-5 sm:mb-10 mt-5`}>
       <PopularMicrobusUses data={DEFAULT_NOAH_BOOKING_DATA}></PopularMicrobusUses>

     </div>


      <div className='bg-[#EDF8FF] py-10'>
        <div className={`${sectionClass} `}>
          <QuestionAns bg='white' faqs={DEFAULT_NOAH_FAQ_DATA.faqs} en_Or_bn={'en'} title={DEFAULT_NOAH_FAQ_DATA.title} limit={10}></QuestionAns>
        </div>

      </div>

      <div className='bg-[#FFF1F6] py-10'>
        <div className={`${sectionClass} `}>
          <QuestionAns bg='white' faqs={DEFAULT_NOAH_BANGLA_FAQ_DATA.faqs} en_Or_bn={'en'} title={DEFAULT_NOAH_BANGLA_FAQ_DATA.title} limit={10}></QuestionAns>
        </div>

      </div>

      <div className="bg-[#EDF8FF] py-10">
        <div className={`${sectionClass} `}>
          <NeedHelp data={NOAH_HELP_DATA}></NeedHelp>
        </div>
      </div>

      <div className={`${sectionClass} py-10 sm:py-15 `}>
        <EventsPoweredByUtshob></EventsPoweredByUtshob>
      </div>

    </div>
  );
}
