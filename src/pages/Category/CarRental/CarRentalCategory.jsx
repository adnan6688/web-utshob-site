import React from 'react'
import CarRentalHero from '../../../Components/CarRental/CarRentalHero'
import CarRentalEventApp from '../../../Components/CarRental/CarRentalEventApp';
import CarRentalServices from '../../../Components/CarRental/CarRentalServices';
import ExploreTripProcess from '../../../Components/CarRental/ExploreTripProcess';
import CarRentalRequirment from '../../../Components/CarRental/CarRentalRequirment';
import CarRentalVehicleTrip from '../../../Components/CarRental/CarRentalVehicleTrip';
import CarRentalPlayCard from '../../../Components/CarRental/CarRentalPlayCard';
import CarRentalCompare from '../../../Components/CarRental/CarRentalCompare';
import CarRentalExploreOptions from '../../../Components/CarRental/CarRentalExploreOptions';
import CarRentalBookingProcessSection from '../../../Components/CarRental/CarRentalBookingProcessSection';
import CarRentalChooseVehicle from '../../../Components/CarRental/CarRentalChooseVehicle';
import WhyFindCarRental from '../../../Components/CarRental/WhyCarRentalFind';
import EventDecorRealExperience from '../../../Components/Event/EventDecorRealExperience';
import QuestionAns from '../../../Components/QuestionAns/QuestionAns';
import CarRentalChoice from '../../../Components/CarRental/CarRentalChoice';
import EventDecorPartnerApp from '../../../Components/Event/EventDecorPartnerApp';
import NeedHelp from '../../../Components/Event/NeedHelp';



const carRentalFAQs = [
    {
        q: "How much does car rental cost in Bangladesh?",
        a: "There is no single fixed price for every car rental requirement. The quotation can vary according to the vehicle, route, timing, One Way or Round Trip, number of vehicles, passenger requirement and other trip details."
    },
    {
        q: "Does car rental include a driver?",
        a: "Driver inclusion depends on the vehicle and partner's quotation. Review the proposed rental details to confirm whether a driver is included before booking."
    },
    {
        q: "What is included in a Car Rental quotation on Utshob?",
        a: "A Car Rental quotation may include the proposed vehicle, model, capacity, rental price, route, timing, driver details and other included or excluded services. Always review the partner's quotation before confirming."
    },
    {
        q: "Which vehicle should I choose for my group size?",
        a: "Choose a Sedan for smaller groups, Noah for family trips and smaller groups, HiAce for larger passenger groups, and a Minibus or Bus for bigger gatherings and event transportation. Consider passenger count and luggage capacity before choosing."
    },
    {
        q: "What is the difference between Noah, HiAce, Minibus and Bus?",
        a: "Noah is suitable for smaller family groups, HiAce generally accommodates larger groups, Minibuses work well for medium-sized groups, and Buses are suitable for larger passenger transportation. Actual capacity depends on the specific vehicle."
    },
    {
        q: "Can I rent a car for a One Way or Round Trip?",
        a: "Yes. You can specify whether you need a One Way or Round Trip service when submitting your Car Rental requirement. Include your pickup location, destination, travel date and timing to receive relevant quotations."
    },
    {
        q: "Can I rent a car outside Dhaka?",
        a: "Yes. You can submit Car Rental requirements for trips outside Dhaka, depending on partner availability and service coverage. Mention your pickup location, destination and travel schedule."
    },
    {
        q: "Can I request multiple vehicles in one booking requirement?",
        a: "Yes. You can define requirements for multiple vehicles and passenger groups in one request. Mention the vehicle types, quantities, routes and schedules so relevant partners can provide quotations."
    },
    {
        q: "Can I choose a specific car model?",
        a: "Yes. You can mention your preferred car brand or model, such as Toyota Axio, Premio, Noah, HiAce, BMW or Mercedes-Benz. Partners can respond with available matching vehicles or alternatives."
    },
    {
        q: "How does Car Rental work on Utshob?",
        a: "Define your vehicle and trip requirements on Utshob, submit your request and receive quotations from relevant partners. Compare proposed vehicles, models, photos, capacity, prices, ratings and reviews before choosing the right option."
    }
];

const carRentalFAQsBn = [
    {
        q: "বাংলাদেশে গাড়ি ভাড়া করতে কত খরচ হয়?",
        a: "সব Car Rental requirement-এর জন্য একটি fixed price নেই। গাড়ির ধরন, route, timing, One Way বা Round Trip, গাড়ির সংখ্যা, passenger requirement এবং অন্যান্য trip detail অনুযায়ী quotation পরিবর্তিত হতে পারে।"
    },
    {
        q: "গাড়ি ভাড়া নিলে কি driver থাকে?",
        a: "গাড়ির ধরন এবং partner-এর quotation অনুযায়ী driver অন্তর্ভুক্ত থাকতে পারে। বুকিং নিশ্চিত করার আগে quotation-এ driver included কি না এবং driver সংক্রান্ত শর্তগুলো দেখে নিন।"
    },
    {
        q: "গাড়ি ভাড়ার quotation-এর মধ্যে কী থাকে?",
        a: "Car Rental quotation-এ প্রস্তাবিত গাড়ির ধরন, model, capacity, ভাড়ার পরিমাণ, route, timing এবং অন্যান্য included বা excluded service-এর তথ্য থাকতে পারে। বুকিংয়ের আগে quotation-এর সব details যাচাই করুন।"
    },
    {
        q: "আমার যাত্রী সংখ্যার জন্য কোন গাড়ি নেওয়া ভালো?",
        a: "কম যাত্রীর জন্য Sedan, ছোট পরিবার বা গ্রুপের জন্য Noah, তুলনামূলক বড় গ্রুপের জন্য HiAce এবং বেশি যাত্রীর জন্য Minibus বা Bus বেছে নিতে পারেন। গাড়ি নির্বাচনের সময় passenger count এবং luggage capacity বিবেচনা করুন।"
    },
    {
        q: "Noah না HiAce—কোনটা নেব?",
        a: "ছোট পরিবার বা গ্রুপের জন্য Noah ভালো বিকল্প হতে পারে। তুলনামূলক বেশি যাত্রী বা luggage থাকলে HiAce বিবেচনা করতে পারেন। নির্দিষ্ট গাড়ির actual seating capacity এবং luggage space quotation থেকে যাচাই করুন।"
    },
    {
        q: "One Way এবং Round Trip—দুইভাবেই কি গাড়ি নেওয়া যায়?",
        a: "হ্যাঁ, আপনার প্রয়োজন অনুযায়ী One Way অথবা Round Trip গাড়ির requirement দিতে পারবেন। সঠিক quotation পেতে pickup location, destination, travel date এবং timing উল্লেখ করুন।"
    },
    {
        q: "ঢাকার বাইরে গাড়ি পাওয়া যায়?",
        a: "হ্যাঁ, ঢাকার বাইরের trip-এর জন্যও Car Rental requirement জমা দিতে পারবেন। তবে নির্দিষ্ট route এবং travel date অনুযায়ী partner availability ও service coverage-এর ওপর গাড়ি পাওয়া নির্ভর করবে।"
    },
    {
        q: "একটি requirement-এ একাধিক গাড়ি নেওয়া যাবে?",
        a: "হ্যাঁ, একটি requirement-এ একাধিক গাড়ি এবং বিভিন্ন passenger group-এর জন্য চাহিদা জানাতে পারবেন। গাড়ির ধরন, সংখ্যা, route এবং schedule উল্লেখ করলে relevant partners quotation দিতে পারবেন।"
    },
    {
        q: "নির্দিষ্ট model-এর গাড়ি চাইতে পারি?",
        a: "হ্যাঁ, Toyota Axio, Premio, Noah, HiAce, BMW, Mercedes-Benz অথবা আপনার পছন্দের নির্দিষ্ট গাড়ির brand বা model উল্লেখ করতে পারবেন। Partner availability অনুযায়ী matching vehicle অথবা বিকল্প প্রস্তাব দিতে পারেন।"
    },
    {
        q: "উৎসবের মাধ্যমে গাড়ি ভাড়া কীভাবে কাজ করে?",
        a: "Utshob-এ আপনার গাড়ি এবং trip-এর requirement জমা দিন। Relevant partners আপনার requirement অনুযায়ী quotation দেবেন। এরপর গাড়ির model, photos, capacity, price, ratings এবং reviews তুলনা করে পছন্দের গাড়ি বুক করতে পারবেন।"
    }
];



export default function CarRentalCategory() {
    const sectionClass = 'mx-auto w-full max-w-[1180px] px-4 lg:px-0';
    return (
        <div id='car_rental'>

            <div className={`${sectionClass} mb-2 sm:mb-10`}>
                <CarRentalHero></CarRentalHero>
            </div>

            <div className="bg-[#EDF8FF] py-5 sm:py-10">
                <div className={`${sectionClass}`}>
                    <CarRentalEventApp></CarRentalEventApp>
                </div>
            </div>

            <div className={`${sectionClass} my-10`}>
                <CarRentalServices></CarRentalServices>
            </div>



            <div className="bg-[#F5F6F8] py-5">
                <div className={`${sectionClass} sm:my-10`}>
                    <ExploreTripProcess></ExploreTripProcess>
                </div>

                <div className={`${sectionClass} my-10`}>
                    <CarRentalRequirment></CarRentalRequirment>
                </div>
            </div>


            <div className={`${sectionClass} my-10`}>
                <CarRentalVehicleTrip></CarRentalVehicleTrip>
            </div>

            <div className={`${sectionClass} my-20`}>
                <CarRentalPlayCard></CarRentalPlayCard>
            </div>

            <div className={`${sectionClass} my-20`}>
                <CarRentalCompare></CarRentalCompare>
            </div>

            <div className={`${sectionClass} my-10 sm:my-20`}>
                <CarRentalExploreOptions></CarRentalExploreOptions>
            </div>

            <div className="bg-[#EDF8FF] py-10  my-10 ">
                <div className={`${sectionClass}`}>
                    <CarRentalBookingProcessSection></CarRentalBookingProcessSection>
                </div>
            </div>
            <div className={`${sectionClass} my-10`}>
                <CarRentalChooseVehicle></CarRentalChooseVehicle>
            </div>
            <div className="bg-[#FFF1F6] my-10 py-10">
                <div className={`${sectionClass} `}>
                    <WhyFindCarRental></WhyFindCarRental>
                </div>

            </div>

            <div className={`${sectionClass} sm:my-16 my-10 `}>
                <EventDecorRealExperience></EventDecorRealExperience>
            </div>

            <div className={`${sectionClass} sm:my-16 my-10 `}>
                <QuestionAns faqs={carRentalFAQs} limit={8} title={'Frequently Asked Questions About Car Rental'} en_Or_bn={'en'} ></QuestionAns>
            </div>


            <div className={`${sectionClass} sm:my-16 my-10 `}>
                <QuestionAns faqs={carRentalFAQsBn} limit={8} title={'গাড়ি ভাড়া নিয়ে সাধারণ প্রশ্ন'} en_Or_bn={'en'} ></QuestionAns>
            </div>

            <div className="bg-[#FFF1F6] sm:mt-16 mt-10 py-10 ">
                <div className={`${sectionClass}  `} >
                    <CarRentalChoice></CarRentalChoice>
                </div>
            </div>


            <div className="bg-[#EDF8FF] ">
                <div className={`${sectionClass} py-10  `}>
                    <EventDecorPartnerApp></EventDecorPartnerApp>
                </div>
            </div>


            <div className={`${sectionClass} py-20  `}>
                <NeedHelp></NeedHelp>
            </div>

        </div>
    )
}
