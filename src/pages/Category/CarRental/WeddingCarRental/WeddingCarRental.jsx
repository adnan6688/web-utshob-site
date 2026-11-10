import React from 'react';
import WeddingCarRentalHeroSection from '../../../../Components/CarRental/WeddingCarRental/WeddingCarRentalHeroSection';
import WeddingCarRentalEventsapp from '../../../../Components/CarRental/WeddingCarRental/WeddingCarRentalEventsapp';
import WeddingCarRentalTellPartners from '../../../../Components/CarRental/WeddingCarRental/WeddingCarRentalTellPartners';
import ChooseWeddingVehicle from '../../../../Components/CarRental/WeddingCarRental/ChooseWeddingVehicle';
import MultiplePrograms from '../../../../Components/CarRental/WeddingCarRental/MultiplePrograms';
import CompareWeddingCar from '../../../../Components/CarRental/WeddingCarRental/CompareWeddingCar';
import HowWeddingCarBook from '../../../../Components/CarRental/WeddingCarRental/HowWeddingCarBook';
import BookOneCar from '../../../../Components/CarRental/WeddingCarRental/BookOneCar';
import EventDecorRealExperience from '../../../../Components/Event/EventDecorRealExperience';
import QuestionAns from '../../../../Components/QuestionAns/QuestionAns';
import EventDecorYourChoice from '../../../../Components/Event/EventDecorYourChoice';
import EventDecorPartnerApp from '../../../../Components/Event/EventDecorPartnerApp';
import NeedHelp from '../../../../Components/Event/NeedHelp';
import Path from '../../../../Components/Shared/Path';



const weddingCarRentalFAQs = [
    {
        q: "How much does wedding car rental cost in Dhaka?",
        a: "There is no single fixed rate for every wedding car requirement. The quotation can vary according to the vehicle or model, route, timing, number of vehicles, programs, trip type and decoration requirements."
    },
    {
        q: "What is the best car rental option for a wedding?",
        a: "The best option depends on the role of the vehicle and your requirement. A Sedan or Luxury Car may suit a groom’s car, while Noah, HiAce or Bus / Minibus may be more relevant for family and guest transportation."
    },
    {
        q: "What is the cheapest car rental for a wedding?",
        a: "There is no universal cheapest option. Compare quotations against the same vehicle, route, timing and service requirement. A lower quotation may not represent the same vehicle or scope."
    },
    {
        q: "Can I book a Groom’s Car through Utshob?",
        a: "Yes. You can specify a preferred Sedan, Luxury Car or model for the Groom’s Car, or allow partners to propose suitable available options."
    },
    {
        q: "Can I request different cars for Holud, Wedding and Reception?",
        a: "Yes. Different programs can have separate vehicle, quantity, route and timing requirements. You can include all your program details in your wedding transportation plan."
    },
    {
        q: "Can I arrange guest transportation with the Groom’s Car requirement?",
        a: "Yes. Multiple vehicles and vehicle types can be included in the overall wedding transportation plan. You can request a Groom’s Car along with Sedan, Noah, HiAce, Bus or Minibus for family and wedding guests."
    }
];

const weddingCarRentalFAQsBn = [
    {
        q: "বিয়ের গাড়ি ভাড়া কত?",
        a: "বিয়ের গাড়ি ভাড়ার জন্য নির্দিষ্ট কোনো fixed price নেই। গাড়ির মডেল, যাতায়াতের রুট, সময়, গাড়ির সংখ্যা, অনুষ্ঠানের ধরন, One Way বা Round Trip এবং গাড়ি সাজানোর প্রয়োজন অনুযায়ী quotation পরিবর্তিত হতে পারে।"
    },
    {
        q: "বরের জন্য কোন গাড়ি নেওয়া ভালো?",
        a: "এটি আপনার পছন্দ ও প্রয়োজনের ওপর নির্ভর করে। বরের জন্য Sedan বা Luxury Car নিতে পারেন। নির্দিষ্ট কোনো গাড়ির মডেল পছন্দ হলে সেটিও আপনার requirement-এ উল্লেখ করতে পারবেন।"
    },
    {
        q: "বরের গাড়ির সাথে অতিথিদের গাড়িও নেওয়া যাবে?",
        a: "হ্যাঁ। একই বিয়ের পরিবহন পরিকল্পনায় বরের গাড়ির পাশাপাশি অতিথি ও পরিবারের সদস্যদের জন্য Noah, HiAce, Bus, Minibus বা অন্যান্য গাড়ি রাখতে পারবেন।"
    },
    {
        q: "হলুদ, বিয়ে ও রিসেপশনের জন্য আলাদা গাড়ি নেওয়া যাবে?",
        a: "হ্যাঁ। প্রতিটি অনুষ্ঠানের তারিখ, গাড়ির ধরন, সংখ্যা, যাতায়াতের রুট এবং সময় আলাদাভাবে উল্লেখ করতে পারবেন।"
    },
    {
        q: "গাড়ি সাজানো লাগলে কী করতে হবে?",
        a: "গাড়ি সাজানোর প্রয়োজন আছে কি না, তা Decoration Yes/No অপশনের মাধ্যমে উল্লেখ করতে পারবেন। গাড়ি সাজানোর জন্য অতিরিক্ত প্রস্তুতির সময় প্রয়োজন হলে সেটিও আপনার requirement-এ জানিয়ে দিন।"
    },
    {
        q: "কম quotation মানেই কি ভালো wedding car deal?",
        a: "অবশ্যই নয়। শুধু ভাড়ার পরিমাণ নয়, প্রকৃত গাড়ি, মডেল, ছবি, যাতায়াতের রুট, অন্তর্ভুক্ত সুবিধা, পার্টনারের রেটিং এবং রিভিউ যাচাই করে quotation তুলনা করা উচিত।"
    }
];



export default function WeddingCarRental() {
    const sectionClass = 'mx-auto w-full max-w-[1180px] px-4 lg:px-0';

    return (
        <div id='wedding-car-rental'>

            <div className='mx-auto w-full max-w-[1180px]'>
                <Path from={'Home'} to={'  Car Rental / Wedding Car Rental'}></Path>
            </div>

            
            <div className={`${sectionClass}  mt-3 mb-10`}>
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


            <div className='mt-10 bg-[#F4F6F8] py-10 '>
                <div className={`${sectionClass} `}>
                    <ChooseWeddingVehicle></ChooseWeddingVehicle>
                </div>
            </div>

            <div className="bg-[#EDF8FF] mb-10 py-10">
                <div className={`${sectionClass} `}>
                    <MultiplePrograms></MultiplePrograms>
                </div>
            </div>

            <div className={`${sectionClass} my-10`}>
                <CompareWeddingCar></CompareWeddingCar>
            </div>

            <div className="bg-[#EDF8FF]  mt-10 py-10">
                <div className={`${sectionClass}`}>
                    <HowWeddingCarBook></HowWeddingCarBook>
                </div>
            </div>

            <div className="bg-[#FFF1F6]  mb-10 py-10">
                <div className={`${sectionClass}`}>
                    <BookOneCar></BookOneCar>
                </div>
            </div>

            <div className={`${sectionClass} py-5 sm:py-10`}>
                <EventDecorRealExperience></EventDecorRealExperience>
            </div>

            <div className={`${sectionClass} py-5 sm:py-10`}>
                <QuestionAns faqs={weddingCarRentalFAQs} en_Or_bn={'en'} limit={7} title={'Wedding Car Rental FAQ'}></QuestionAns>
            </div>


            <div className="bg-[#EDF8FF]  mt-1 sm:mt-10 py-5 sm:py-10">
                <div className={`${sectionClass}`}>
                    <QuestionAns faqs={weddingCarRentalFAQsBn} en_Or_bn={'en'} limit={7} title={'বাংলা AEO — Wedding Car Rental'}></QuestionAns>

                </div>
            </div>

            <div className="bg-[#FFF1F6] py-5">
                <div className={`${sectionClass}   `}>
                    <EventDecorYourChoice></EventDecorYourChoice>
                </div>
            </div>


            <div className="bg-[#EDF8FF]">
                <div className={`${sectionClass} py-10  `}>
                    <EventDecorPartnerApp></EventDecorPartnerApp>
                </div>
            </div>

            <div className={`${sectionClass} py-10 sm:py-20  `}>
                <NeedHelp></NeedHelp>
            </div>
        </div>
    );
}
