import React from 'react'
import MicroBusHero from '../../../../Components/CarRental/MicroBusRental/MicroBusHero'
import NoahHiceTellPartners from '../../../../Components/CarRental/MicroBusRental/NoahHiceTellPartners';
import ExploreOurMicroBus from '../../../../Components/CarRental/MicroBusRental/ExploreOurMicroBus';
import PopularMicrobusUses from '../../../../Components/CarRental/MicroBusRental/PopularMicrobusUses';
import QuestionAns from '../../../../Components/QuestionAns/QuestionAns';


const microbusRentalFAQs = [
    {
        q: "ঢাকায় মাইক্রোবাস ভাড়া কত?",
        a: "মাইক্রোবাস ভাড়ার নির্দিষ্ট কোনো একক মূল্য নেই। গাড়ির ধরন, যাতায়াতের রুট, সময়, যাত্রীর সংখ্যা এবং One Way বা Round Trip-এর ওপর ভিত্তি করে ভাড়ার quotation পরিবর্তিত হতে পারে।"
    },
    {
        q: "Noah নাকি HiAce—কোনটি নেওয়া ভালো?",
        a: "আপনার যাত্রীর সংখ্যা, লাগেজ এবং গাড়ির প্রকৃত আসনসংখ্যা বিবেচনা করে Noah অথবা HiAce নির্বাচন করুন। শুধু গাড়ির নাম নয়, নির্দিষ্ট গাড়ির seating capacity যাচাই করে সিদ্ধান্ত নেওয়া ভালো।"
    },
    {
        q: "বিয়ের অতিথিদের জন্য কি মাইক্রোবাস ভাড়া করা যাবে?",
        a: "হ্যাঁ। বিয়ের অতিথি ও পরিবারের সদস্যদের যাতায়াতের জন্য প্রয়োজন অনুযায়ী Noah অথবা HiAce ভাড়া করতে পারবেন।"
    },
    {
        q: "মাইক্রোবাস ভাড়ার সঙ্গে কি ড্রাইভার থাকে?",
        a: "হ্যাঁ। Utshob-এর Car Rental সার্ভিসে ড্রাইভারসহ গাড়ি ভাড়ার ব্যবস্থা রয়েছে।"
    },
    {
        q: "একাধিক মাইক্রোবাস ভাড়া করা যাবে?",
        a: "হ্যাঁ। আপনার যাত্রী সংখ্যা ও পরিবহন পরিকল্পনা অনুযায়ী একই requirement-এ একাধিক Noah অথবা HiAce গাড়ির চাহিদা জানাতে পারবেন।"
    },
    {
        q: "Round Trip-এর জন্য কি মাইক্রোবাস ভাড়া করা যাবে?",
        a: "হ্যাঁ। আপনার প্রয়োজন অনুযায়ী One Way অথবা Round Trip—উভয় ধরনের মাইক্রোবাস ভাড়ার requirement জমা দিতে পারবেন।"
    }
];

const faqsEn = [
    {
        q: "How much does Microbus rental cost in Dhaka?",
        a: "There is no one fixed Microbus rate. Vehicle type, route, timing, passenger requirement and One Way/Round Trip can affect quotations.",
    },
    {
        q: "Should I choose Noah or HiAce?",
        a: "Choose based on passenger count, luggage and actual available capacity rather than vehicle name alone.",
    },
    {
        q: "Can I rent a Microbus for wedding guests?",
        a: "Yes. Noah or HiAce can be used according to the guest transportation requirement.",
    },
    {
        q: "Does Microbus rental include a driver?",
        a: "Yes. Utshob Car Rental requirements are driver-included.",
    },
    {
        q: "Can I rent more than one Microbus?",
        a: "Yes. Multiple Noah or HiAce vehicles can be included.",
    },
    {
        q: "Can I use a Microbus for a Round Trip?",
        a: "Yes. One Way and Round Trip requirements are supported.",
    },
];


const microbusRentalBannerData = [{
    id: 'noah-vs-hiace-banner',
    title: 'Not Sure Whether You Need Noah or HiAce?',
    description: 'Define your passenger and trip requirement first, then compare available options.',
    buttonText: 'Find Microbus Options in the App',
    buttonAction: () => console.log('Find Microbus Options clicked'),
    bgColor: 'bg-sky-50/60',
}];
export default function MicroBusPage() {
    const sectionClass = 'mx-auto w-full max-w-[1180px] px-4 lg:px-0';
    return (
        <div id='micro-bus'>

            <div className={`${sectionClass} my-10`}>
                <MicroBusHero></MicroBusHero>
            </div>




            <NoahHiceTellPartners />

            <ExploreOurMicroBus></ExploreOurMicroBus>


            <div className="bg-[#F3F4F6] py-10">
                <div className={`${sectionClass}`}>
                    <PopularMicrobusUses></PopularMicrobusUses>
                </div>
            </div>

            <div className='bg-[#FFF1F6] py-10'>
                <div className={`${sectionClass} `}>
                    <QuestionAns bg='white' faqs={faqsEn} en_Or_bn={'en'} title={'English FAQ'} limit={10}></QuestionAns>
                </div>

            </div>

            <div className='bg-[#EDF8FF] py-10'>
                <div className={`${sectionClass} `}>
                    <QuestionAns bg='white' faqs={microbusRentalFAQs} en_Or_bn={'en'} title={'বাংলা AEO'} limit={10}></QuestionAns>
                </div>

            </div>

            <div>
                <ExploreOurMicroBus cards={microbusRentalBannerData} ></ExploreOurMicroBus>
            </div>

        </div>
    )
}
