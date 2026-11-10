import React from 'react';
import DecoratedHeroCar from '../../../../Components/CarRental/DecoratedCar/DecoratedHeroCar';
import DefineTheCardecoration from '../../../../Components/CarRental/DecoratedCar/DefineTheCardecoration';
import DecoratedWeddingCompare from '../../../../Components/CarRental/DecoratedCar/DecoratedWeddingCompare';
import CompareDecoratedCar from '../../../../Components/CarRental/DecoratedCar/CompareDecoratedCar';
import GroomCarDecoratioins from '../../../../Components/CarRental/DecoratedCar/GroomCarDecoratioins';
import CarDecorationMultipleProggrams from '../../../../Components/CarRental/DecoratedCar/CarDecorationMultipleProggrams';
import HowitWorks from '../../../../Components/CarRental/DecoratedCar/HowitWorks';
import RelatedCarRentalServices from '../../../../Components/CarRental/DecoratedCar/RelatedCarRentalServices';
import QuestionAns from '../../../../Components/QuestionAns/QuestionAns';
import NeedHelp from '../../../../Components/Event/NeedHelp';
import EventsPoweredByUtshob from '../../../../Components/CarRental/MicroBusRental/EventsPoweredByUtshob';


const DEFAULT_DECORATED_WEDDING_CAR_FAQ_DATA = {
  title: 'Decorated Wedding Car FAQ',

  faqs: [
    {
      q: 'How much does a decorated wedding car cost?',
      a: 'There is no single fixed price. The quotation can depend on the vehicle, route, timing, decoration requirement and additional preparation time.',
    },
    {
      q: 'Can I request a decorated Groom’s Car?',
      a: 'Yes. Specify the preferred car or model, decoration requirement and when the car must be ready.',
    },
    {
      q: 'Can I specify extra time for wedding car decoration?',
      a: 'Yes. Additional preparation time for decoration can be included in the requirement so the partner can quote accordingly.',
    },
    {
      q: 'Can I choose the exact car model for decoration?',
      a: 'You can specify a preferred model. Availability depends on partner proposals for the required date and trip.',
    },
    {
      q: 'Can I see the actual car before confirming?',
      a: 'You can compare the proposed model and exterior/interior vehicle photos before choosing the bid.',
    },
    {
      q: 'Can I book other wedding vehicles with the decorated car?',
      a: 'Yes. The wedding transport plan can also include Noah, HiAce, Sedan, Bus / Minibus or other required vehicles.',
    },
  ],
};
const DEFAULT_DECORATED_WEDDING_CAR_BANGLA_FAQ_DATA = {
  title: 'বাংলা AEO',

  faqs: [
    {
      q: 'বরের সাজানো গাড়ি কীভাবে বুক করবো?',
      a: 'Preferred car বা model, decoration requirement, program timing, route এবং decoration-এর preparation time দিয়ে requirement submit করতে হবে।',
    },
    {
      q: 'বিয়ের গাড়ি সাজাতে অতিরিক্ত সময় দেওয়া যাবে?',
      a: 'হ্যাঁ। Decoration-এর জন্য additional preparation time আলাদাভাবে requirement-এ উল্লেখ করা যায়।',
    },
    {
      q: 'সাজানো বিয়ের গাড়ির ভাড়া কত?',
      a: 'একটি fixed rate নেই। গাড়ি, trip, timing, decoration requirement ও preparation time অনুযায়ী partner quotation দেয়।',
    },
    {
      q: 'Axio, Premio বা Luxury Car সাজানোর জন্য চাইতে পারি?',
      a: 'Preferred model দেওয়া যায়। Actual availability সংশ্লিষ্ট partner-এর proposal-এর ওপর নির্ভর করবে।',
    },
    {
      q: 'বুক করার আগে actual গাড়ির ছবি দেখা যাবে?',
      a: 'হ্যাঁ। Proposed vehicle-এর model, exterior এবং interior photos compare করা যাবে।',
    },
    {
      q: 'সাজানো বরের গাড়ির সাথে অতিথিদের গাড়িও নেওয়া যাবে?',
      a: 'হ্যাঁ। Wedding transport requirement-এ অন্য vehicle-ও যোগ করা যায়।',
    },
  ],
};
const DEFAULT_EVENTS_DATA = {
  title: 'Built on Real Event Experience',

  stats: [
    {
      value: '800+',
      label: 'Programs',
    },
    {
      value: '1,500+',
      label: 'Services',
    },
    {
      value: '2,000+',
      label: 'Verified Providers',
    },
  ],
  sourceNote : ''
};

const DEFAULT_DECORATED_WEDDING_CAR_NEED_HELP_DATA = {
  title: 'Need a Decorated Wedding Car?',
  description:
    'Define the vehicle, decoration and preparation-time requirement together and compare the actual vehicle proposals before choosing.',
  buttonText: 'Get Decorated Wedding Car Quotations',
  onClick: null,
  layout: 'column',
};
export default function DecoratorCarRentalPage() {

  const sectionClass = "mx-auto max-w-[1180px] px-4 py-8";
  return (
    <div id="decoratore-car-rental" >


      <div className={`${sectionClass}`}>
        <DecoratedHeroCar></DecoratedHeroCar>
      </div>

      <div className="bg-[#F4F6F8] my-10">
        <div className={`${sectionClass} sm:py-15`}>
          <DefineTheCardecoration></DefineTheCardecoration>
        </div>
      </div>

      <div className={`${sectionClass}`}>
        <DecoratedWeddingCompare></DecoratedWeddingCompare>
      </div>

      <div className="bg-[#EDF8FF]">
        <div className={`${sectionClass}`}>
          <CompareDecoratedCar></CompareDecoratedCar>
        </div>
      </div>

      <div className="bg-[#FFF1F6]">
        <div className={`${sectionClass}`}>
          <GroomCarDecoratioins></GroomCarDecoratioins>
        </div>
      </div>

      <div className={`${sectionClass}`}>
        <CarDecorationMultipleProggrams></CarDecorationMultipleProggrams>
      </div>

      <div className="bg-[#F4F6F8]">
        <div className={`${sectionClass}`}>
          <HowitWorks></HowitWorks>
        </div>
      </div>

      <div className="bg-[#EDF8FF] py-10">
        <div className={`${sectionClass}`}>
          <RelatedCarRentalServices></RelatedCarRentalServices>
        </div>
      </div>



      <div className={`${sectionClass} `}>
        <QuestionAns bg='white' faqs={DEFAULT_DECORATED_WEDDING_CAR_FAQ_DATA.faqs} en_Or_bn={'en'} title={DEFAULT_DECORATED_WEDDING_CAR_FAQ_DATA.title} limit={10}></QuestionAns>
      </div>


      <div className="bg-[#FFF1F6] py-5">

        <div className={`${sectionClass} `}>
          <QuestionAns bg='white' faqs={DEFAULT_DECORATED_WEDDING_CAR_BANGLA_FAQ_DATA.faqs} en_Or_bn={'en'} title={DEFAULT_DECORATED_WEDDING_CAR_BANGLA_FAQ_DATA.title} limit={10}></QuestionAns>
        </div>

      </div>


      <div className="bg-[#E62E77] py-10">
        <div className={`${sectionClass}`}>
          <NeedHelp data={DEFAULT_DECORATED_WEDDING_CAR_NEED_HELP_DATA}></NeedHelp>
        </div>


      </div>

      <div className={`${sectionClass}  sm:py-15`}>
        <EventsPoweredByUtshob data={DEFAULT_EVENTS_DATA}></EventsPoweredByUtshob>
      </div>

    </div>
  );
}
