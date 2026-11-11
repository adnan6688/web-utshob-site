import React from 'react'
import CarRentalHero from '../../../Components/CarRental/CarRentalHero'
import photogrpay from '../../../assets/web Images/Memories/memories.webp'
import CarRentalEventApp from '../../../Components/CarRental/CarRentalEventApp';

const PHOTOGRAPHY_HERO_DATA = {
    title: 'Photography & Videography',

    description: 'Find photography and videography services in Dhaka based on what you actually need. Define your exact requirements, receive quotations from relevant service providers, and compare price, service scope, deliverables, portfolios, ratings and reviews before you choose.',

    steps: [
        'Define Your Requirement',
        'Relevant Providers Bid',
        'Compare',
        'Book',
    ],

    buttons: [
        {
            label: 'Get Quotations in the App',
            variant: 'primary',
        },
        {
            label: 'Explore Photography Services',
            variant: 'secondary',
        },
    ],
    image: photogrpay,
    imageAlt: 'Real Utshob photography & videography work',
    imageTitle: 'Photography & Videography Services - Utshob.xyz',
};

const PHOTOGRAPHY_EVENT_DATA = {
    title: "Bangladesh’s Event App for Photography & Videography",

    descriptions: [
        "Finding the right photographer and videographer should not mean contacting providers one by one or choosing a fixed package that does not match your actual requirement.",

        "With Utshob.xyz, define the photography, videography or combined service you need and let relevant providers submit quotations based on the same requirement.",

        "Then choose the provider and quotation that best match your event, shoot and expected output.",
    ],

    tagline: "Event App মানে Utshob.xyz",
    taglineDescription: "ইভেন্টের আয়োজন, এখন এক অ্যাপে।",

    requestFlowTitle: "YOUR REQUEST FLOW",

    steps: [
        {
            number: "1",
            title: "Define Your",
            subtitle: "Requirement",
        },
        {
            number: "2",
            title: "Relevant",
            subtitle: "Providers Bid",
        },
        {
            number: "3",
            title: "Compare",
            subtitle: "Book",
            highlight: true,
        },
    ],

    compareTitle: "COMPARE",

    compareDescription:
        "Quotation price · Coverage and service scope · Included and excluded items · Photo and video deliverables · Provider portfolios · Ratings · Reviews",
};
export default function PhotograpyPage() {

    const sectionClass = 'mx-auto w-full max-w-[1180px] px-4 lg:px-0';
    return (
        <div id='photography-videography'>

            <div className={`${sectionClass}`}>
                <CarRentalHero data={PHOTOGRAPHY_HERO_DATA}></CarRentalHero>
            </div>

            <div className="bg-[#EDF8FF] py-5 sm:py-10">
                <div className={`${sectionClass}`}>
                    <CarRentalEventApp data={PHOTOGRAPHY_EVENT_DATA}></CarRentalEventApp>
                </div>
            </div>
        </div>
    )
}
