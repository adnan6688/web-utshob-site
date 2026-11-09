import React from 'react'
import StageHeroSection from '../../../Components/Event/WeddingStage/StageHeroSection'
import WeddingDecoration from '../../../Components/Event/WeddingStage/WeddingDecoration';
import EventDecorChooseDesign from '../../../Components/Event/WeddingStage/EventDecorChooseDesign';


export default function WeddingStageDecoration() {
    const sectionClass = 'mx-auto w-full max-w-[1180px] px-4 lg:px-0';
    return (
        <div id='wedding_stage'>
            <div id="" className={`${sectionClass} my-10`}>
                <StageHeroSection></StageHeroSection>
            </div>

            <div className="bg-[#EDF8FF] my-10">

                <div className={`${sectionClass} py-10 sm:py-20 `}>
                    <WeddingDecoration></WeddingDecoration>
                </div>
            </div>

            <div className={`${sectionClass} py-10 `}>
                <EventDecorChooseDesign></EventDecorChooseDesign>
            </div>
        </div>
    )
}
