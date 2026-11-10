import React from 'react'
import StageHeroSection from '../../../Components/Event/WeddingStage/StageHeroSection'
import WeddingDecoration from '../../../Components/Event/WeddingStage/WeddingDecoration';
import EventDecorChooseDesign from '../../../Components/Event/WeddingStage/EventDecorChooseDesign';
import WeddingStageOptions from '../../../Components/Event/WeddingStage/WeddingStageOptions';
import WeddingStageExploreDesing from '../../../Components/Event/WeddingStage/WeddingStageExploreDesing';
import WeddingStageSeeMore from '../../../Components/Event/WeddingStage/WeddingStageSeeMore';
import WeddingBiddingProcess from '../../../Components/Event/WeddingStage/WeddingBiddingProcess';
import WeddingStageCompare from '../../../Components/Event/WeddingStage/WeddingStageCompare';
import WeddingStageBooking from '../../../Components/Event/WeddingStage/WeddingStageBooking';
import WeddingStageConsider from '../../../Components/Event/WeddingStage/WeddingStageConsider';
import WeddingStageAddMoreService from '../../../Components/Event/WeddingStage/WeddingStageAddMoreService';
import WeddingStageWhyChoose from '../../../Components/Event/WeddingStage/WeddingStageWhyChoose';
import Count from '../../../Components/Counter/Count';
import WeddingStageRelativeService from '../../../Components/Event/WeddingStage/WeddingStageRelativeService';
import QuestionAns from '../../../Components/QuestionAns/QuestionAns';
import Path from '../../../Components/Shared/Path';

const weddingStageFAQs = [
    {
        q: "How much does wedding stage decoration cost in Dhaka?",
        a: "The cost depends on stage size, design, flowers, materials, lighting, venue and customization. Through Utshob, relevant providers can bid against the same design and specifications so you can compare available quotations."
    },
    {
        q: "Can I upload my own wedding stage design?",
        a: "Yes, you can upload your own reference design or specifications, and providers can submit bids based on your exact requirement."
    },
    {
        q: "Can I request a simple or low-budget wedding stage?",
        a: "Yes, you can request simple setups tailored for smaller venues or budget-focused requirements."
    },
    {
        q: "What can I compare before choosing a wedding stage decorator?",
        a: "You can compare prices, what's included and excluded in the offer, setup timing, provider portfolios, and ratings & reviews from previous customers."
    }
];

const weddingStageFAQsBn = [
    {
        q: "নিজের পছন্দের বিয়ের স্টেজের ছবি আপলোড করে কোটেশন নেওয়া যাবে?",
        a: "হ্যাঁ। নিজের reference image আপলোড করে স্টেজের প্রয়োজনীয় specification দেওয়া যায়। সংশ্লিষ্ট প্রোভাইডাররা একই design ও requirement দেখে bid দিতে পারে।"
    },
    {
        q: "বিয়ের স্টেজ সাজাতে কত খরচ হয়?",
        a: "স্টেজের আকার, ডিজাইন, ফুল, উপকরণ, লাইটিং, ভেন্যু এবং কাস্টমাইজেশনের ওপর ভিত্তি করে খরচ নির্ভর করে। উৎসব (Utshob)-এর মাধ্যমে একই ডিজাইন ও স্পেসিফিকেশনের বিপরীতে সংশ্লিষ্ট প্রোভাইডাররা বিড করতে পারে, যাতে আপনি কোটেশনগুলো তুলনা করতে পারেন।"
    },
    {
        q: "কম বাজেটে সুন্দর বিয়ের স্টেজ করা যায়?",
        a: "হ্যাঁ, ছোট ভেন্যু বা বাজেট-কেন্দ্রিক প্রয়োজনের জন্য সাধারণ ও সুন্দর কাস্টমাইজড স্টেজ সেটআপ বেছে নেওয়ার সুযোগ রয়েছে।"
    },
    {
        q: "একাধিক wedding stage decorator-এর কোটেশন কীভাবে তুলনা করবো?",
        a: "বুক করার আগে আপনি মূল্য (Price), অফারে কী কী অন্তর্ভুক্ত এবং বাদ রয়েছে তা, সেটআপের সময়, প্রোভাইডারের পোর্টফোলিও এবং পূর্ববর্তী গ্রাহকদের রেটিং ও রিভিউ তুলনা করতে পারেন।"
    }
];

export default function WeddingStageDecoration() {
    const sectionClass = 'mx-auto w-full max-w-[1180px] px-4 lg:px-0';
    return (
        <div id='wedding_stage'>



            <div id="" className={`${sectionClass} my-2 sm:my-10`}>
                <StageHeroSection></StageHeroSection>
            </div>

            <div className="bg-[#EDF8FF]  sm:my-10">

                <div className={`${sectionClass} py-10 sm:py-20 `}>
                    <WeddingDecoration></WeddingDecoration>
                </div>
            </div>

            <div className={`${sectionClass} py-2 sm:py-10 `}>
                <EventDecorChooseDesign></EventDecorChooseDesign>
            </div>
            <div className={`${sectionClass}  sm:py-10 `}>
                <WeddingStageOptions></WeddingStageOptions>
            </div>

            <div className="bg-[#FFF1F6] my-3 sm:my-5">
                <div className={`${sectionClass} py-5 sm:py-10 `}>
                    <WeddingStageSeeMore></WeddingStageSeeMore>
                </div>
            </div>


            <div className={`${sectionClass} py-4 sm:py-15 `}>
                <WeddingBiddingProcess></WeddingBiddingProcess>
            </div>

            <div className="bg-[#F4F6F8]">

                <div className={`${sectionClass} py-5 sm:py-10 `}>
                    <WeddingStageCompare></WeddingStageCompare>
                </div>
            </div>

            <div className="bg-[#EDF8FF]">
                <div className={`${sectionClass} py-10 `}>

                    <WeddingStageBooking></WeddingStageBooking>
                </div>
                <div className={`${sectionClass} py-10 `}>
                    <WeddingStageConsider></WeddingStageConsider>
                </div>
            </div>



            <div className={`${sectionClass} py-10 `}>
                <WeddingStageAddMoreService></WeddingStageAddMoreService>
            </div>

            <div className="bg-[#FFF1F6]">
                <div className={`${sectionClass} py-10 `}>
                    <WeddingStageWhyChoose></WeddingStageWhyChoose>
                </div>
            </div>

            <div className={`${sectionClass} py-10 `}>
                <Count></Count>
            </div>

            <div className="bg-[#F4F6F8]">
                <div className={`${sectionClass} py-10 `}>
                    <WeddingStageRelativeService></WeddingStageRelativeService>
                </div>
            </div>

            <div className={`${sectionClass} py-10 `}>
                <QuestionAns faqs={weddingStageFAQs} en_Or_bn={'en'} limit={5} title={'Wedding Stage Decoration FAQ'} ></QuestionAns>
            </div>


            <div className="bg-[#EDF8FF]">
                <div className={`${sectionClass} py-10 `}>
                    <QuestionAns faqs={weddingStageFAQsBn} en_Or_bn={'en'} limit={5} title={'বাংলা AEO — Wedding Stage Decoration'} ></QuestionAns>
                </div>
            </div>
        </div>
    )
}
