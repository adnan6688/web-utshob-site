import React, { useState } from 'react';
import Path from '../../Components/Shared/Path';
import ServiceHero from '../../Components/Shared/ServiceHero';
import { serviceHeroData } from '../../Components/Shared/serviceHeroData';
import EventDecorBD from '../../Components/Event/EventDecorBD';
import EventServicesSection from '../../Components/Event/EventServicesSection';
import EventDecorChooseDesign from '../../Components/Event/EventDecorChooseDesign';
import EventDecorDifferentTypes from '../../Components/Event/EventDecorDifferentTypes';
import EventDecorPackage from '../../Components/Event/EventDecorPackage';
import EventCompare from '../../Components/Event/EventCompare';
import EventDecorWork from '../../Components/Event/EventDecorWork';
import EventDecorationHowWork from '../../Components/Event/EventDecorationHowWork';
import EventDecoratorConsider from '../../Components/Event/EventDecoratorConsider';
import EventDecorWhyChoose from '../../Components/Event/EventDecorWhyChoose';
import EventDecorRealExperience from '../../Components/Event/EventDecorRealExperience';
import EventDecorCompleteEvent from '../../Components/Event/EventDecorCompleteEvent';
import EventDecorAskQuestionEn from '../../Components/Event/EventDecorAskQuestionEn';
import EventDecorAskQuestionBn from '../../Components/Event/EventDecorQuestionBn';
import EventDecorYourChoice from '../../Components/Event/EventDecorYourChoice';
import EventDecorPartnerApp from '../../Components/Event/EventDecorPartnerApp';
import NeedHelp from '../../Components/Event/NeedHelp';

export default function EventDecor() {
  const [selectedCategory] = useState('Event Decoration');
  const selectedData = serviceHeroData[selectedCategory];
  const sectionClass = 'mx-auto w-full max-w-[1180px] px-4 lg:px-0';
  const spacedSectionClass = `${sectionClass} my-6`;

  return (
    <div id='event-decoration' className=''>

      <div className={`${sectionClass} flex justify-start`}>
        <Path from={'Home'} to={'Event Decoration'} />
      </div>

      <div className='flex flex-col gap-y-8 mt-4'>
        <div className={sectionClass}>
          <ServiceHero data={selectedData} />
        </div>

        <div className='w-full'>
          <EventDecorBD />
        </div>

        <div className={sectionClass}>
          <EventServicesSection></EventServicesSection>
        </div>

        <div className='bg-[#FFF1F6] py-16'>
          <div className={sectionClass}>
            <EventDecorChooseDesign></EventDecorChooseDesign>
          </div>
        </div>

        <div className={sectionClass}>
          <EventDecorDifferentTypes></EventDecorDifferentTypes>
        </div>

        <div className={spacedSectionClass}>
          <EventDecorPackage></EventDecorPackage>
        </div>

        <div className={spacedSectionClass}>
          <EventCompare></EventCompare>
        </div>
      </div>

      <div className={`${sectionClass} my-10`}>
        <EventDecorWork></EventDecorWork>
      </div>

      <div className='bg-[#EDF8FF] py-5'>
        <div className={`${sectionClass} my-2 sm:my-10`}>
          <EventDecorationHowWork></EventDecorationHowWork>
        </div>
      </div>

      <div className={`${sectionClass} my-10`}>
        <EventDecoratorConsider></EventDecoratorConsider>
      </div>

      <div className='bg-[#FFF1F6] py-10 my-10 '>
        <div className={`${sectionClass} `}>
          <EventDecorWhyChoose></EventDecorWhyChoose>
        </div>
      </div>

      <div className={`${sectionClass} sm:my-16 my-10 `}>
        <EventDecorRealExperience></EventDecorRealExperience>
      </div>

      <div className={`${sectionClass}  my-20 `}>
        <EventDecorCompleteEvent></EventDecorCompleteEvent>
      </div>


      <div className={`${sectionClass}  my-20 `}>
        <EventDecorAskQuestionEn></EventDecorAskQuestionEn>
      </div>


      <div className={`${sectionClass}   `}>
        <EventDecorAskQuestionBn></EventDecorAskQuestionBn>
      </div>



      <div className="bg-[#FFF1F6] py-5 mt-10">
        <div className={`${sectionClass}   `}>
          <EventDecorYourChoice></EventDecorYourChoice>
        </div>
      </div>


      <div className="bg-[#EDF8FF]">
        <div className={`${sectionClass} py-10  `}>
          <EventDecorPartnerApp></EventDecorPartnerApp>
        </div>
      </div>

      <div  className={`${sectionClass} py-20  `}>
        <NeedHelp></NeedHelp>
      </div>

    </div>
  );
}
