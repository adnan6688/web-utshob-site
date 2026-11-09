import React from 'react';
import WeddingCarRentalHeroSection from '../../../../Components/CarRental/WeddingCarRental/WeddingCarRentalHeroSection';
import WeddingCarRentalEventsapp from '../../../../Components/CarRental/WeddingCarRental/WeddingCarRentalEventsapp';
import WeddingCarRentalTellPartners from '../../../../Components/CarRental/WeddingCarRental/WeddingCarRentalTellPartners';

export default function WeddingCarRental() {
    const sectionClass = 'mx-auto w-full max-w-[1180px] px-4 lg:px-0';

    return (
        <div id='wedding-car-rental'>
            <div className={`${sectionClass} my-10`}>
                <WeddingCarRentalHeroSection />
            </div>


            <div className="bg-[#EDF8FF]  my-10 py-10 sm:py-15 ">
                <div className={`${sectionClass}`}>
                    <WeddingCarRentalEventsapp></WeddingCarRentalEventsapp>
                </div>
            </div>

            <div className={`${sectionClass} my-10`}>
                <WeddingCarRentalTellPartners></WeddingCarRentalTellPartners>
            </div>

        </div>
    );
}
