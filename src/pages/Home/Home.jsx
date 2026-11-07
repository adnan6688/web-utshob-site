
import Bannar from '../../Components/Hero/Bannar';
import Count from '../../Components/Counter/Count';
import { AppConversionSection } from '../../Components/JoinPartner/AppConversionSection';
import QuestionAns from '../../Components/QuestionAns/QuestionAns';
import CustomerCare from '../../Components/CustomerCare/CustomerCare';
import AuthHooks from '../../Components/Shared/Hook/AuthHooks';
import EventService from '../../Components/EventServiceSection/EventService';
import Quotations from '../../Components/ComparableQoutations/Quotations';
import DesignLedFeature from '../../Components/Designsection/DesignLedFeature';
import PlanningSolutions from '../../Components/PlaningSolutions/PlaningSolutions';
import HowUtshobWorksSection from '../../Components/HowToWork/HowUtshobWorksSection';
import WhyUseUtshobSection from '../../Components/WhyUthsob/WhyUtshobSection';
const faqs = [
    {
        q: "What is Utshob.xyz?",
        a: "Utshob.xyz is an event app that connects customers with event service providers. Customers can submit service requirements, receive quotations, compare providers and choose who they want to book.",
    },
    {
        q: "Is Utshob an event management company or an event marketplace?",
        a: "Utshob is primarily an event app and event services marketplace rather than a single event service provider. It connects customers with relevant service providers and helps them compare quotations before booking.",
    },
    {
        q: "Where is Utshob currently available?",
        a: "Dhaka is the primary service area across the website. Some service categories in this content also support requirements in other locations in Bangladesh; actual availability depends on the service and relevant partner coverage.",
    },
    {
        q: "What event services are available through Utshob?",
        a: "Services include event decoration, photography and videography, car rental, rides and band party, cake, and event rental and support. Individual service categories contain more specific options.",
    },
    {
        q: "How do quotations work on Utshob?",
        a: "Submit your service requirement through the app. Relevant providers can review the requirement and submit quotations based on the service, specifications and event details you provide.",
    },
    {
        q: "What can I compare before booking?",
        a: "Depending on the service, you can compare quotation price, included and excluded items, ratings, reviews, portfolios and other relevant service information.",
    },
    {
        q: "Can I upload my own decoration design?",
        a: "For supported design-based services, yes. You can choose a design available in the app or upload your own reference image and add specifications for providers to quote against.",
    },
    {
        q: "Can different providers quote for the same design?",
        a: "Relevant providers can submit quotations based on the same selected design or reference and specifications, which makes it easier to compare their prices and service scopes.",
    },
    {
        q: "Can I book only one event service?",
        a: "Yes. You can request a single service or arrange multiple services according to your event requirements.",
    },
    {
        q: "Can I create separate requests for Holud, Wedding and Reception?",
        a: "Yes. Different programs and dates can be handled through separate service requirements, allowing you to organize them independently.",
    },
];

const faqsBn = [
    {
        q: "Utshob.xyz কী?",
        a: "Utshob.xyz একটি event app যেখানে ইভেন্টের প্রয়োজন অনুযায়ী service request দেওয়া যায়, relevant service provider-এর quotation পাওয়া যায় এবং booking-এর আগে বিভিন্ন option compare করা যায়।",
    },
    {
        q: "ঢাকায় event service খুঁজতে Utshob কীভাবে কাজ করে?",
        a: "Utshob app-এ আপনার প্রয়োজন, date, location ও specification দিলে relevant providers quotation দিতে পারে। এরপর quotation ও provider information দেখে পছন্দের option বেছে নিতে পারবেন।",
    },
    {
        q: "একবার request দিলে কি একাধিক quotation পাওয়া যায়?",
        a: "হ্যাঁ। একটি service requirement relevant একাধিক provider-এর কাছে যেতে পারে এবং তারা নিজেদের quotation submit করতে পারে।",
    },
    {
        q: "ইভেন্ট সার্ভিসের quotation compare করার সময় কী কী দেখা যায়?",
        a: "Service অনুযায়ী price, included items, excluded items, rating, review, portfolio এবং প্রয়োজনীয় service details compare করা যায়।",
    },
    {
        q: "নিজের পছন্দের decoration design দেওয়া যাবে?",
        a: "Supported design-based service-এ app-এর available design select করতে পারবেন অথবা নিজের reference image upload করে specification দিতে পারবেন।",
    },
    {
        q: "একই decoration design-এর জন্য একাধিক provider-এর দাম compare করা যাবে?",
        a: "হ্যাঁ। একই design বা reference এবং একই requirement দেখে relevant providers quotation দিলে তাদের price এবং service scope পাশাপাশি compare করা সহজ হয়।",
    },
    {
        q: "অ্যাপে থাকা design পছন্দ না হলে কী করবো?",
        a: "Supported service-এ নিজের reference image upload করুন এবং কী ধরনের setup চান তার specification যোগ করুন। Providers সেই requirement অনুযায়ী quotation দিতে পারবে।",
    },
    {
        q: "শুধু একটা service দরকার হলেও কি Utshob ব্যবহার করা যাবে?",
        a: "হ্যাঁ। শুধু wedding stage, photography, car rental বা অন্য একটি service-এর জন্যও আলাদা request করা যায়।",
    },
    {
        q: "Holud, Wedding আর Reception আলাদা দিনে হলে কীভাবে করবো?",
        a: "প্রতিটি program-এর জন্য প্রয়োজন অনুযায়ী আলাদা request তৈরি করা যায়। এতে আলাদা date এবং service requirement manage করা সহজ হয়।",
    },
    {
        q: "Utshob কি নিজেই decorator বা event management company?",
        a: "Utshob কোনো একটি decorator বা একক service provider নয়। এটি একটি event app যেখানে বিভিন্ন event service provider customer requirement-এর ভিত্তিতে quotation দিতে পারে।",
    },
    {
        q: "Booking confirm হওয়ার পর provider-এর সাথে কথা বলা যাবে?",
        a: "হ্যাঁ। Provider select করে booking confirm হওয়ার পর event coordination-এর জন্য selected provider-এর সাথে সরাসরি যোগাযোগ করা যায়।",
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
        },
    })),
};

const Home = () => {

    const { whyRef, customerRef, partnerRef, homeRef, eventServicesRef, serviceRef, howRef } = AuthHooks()


    return (
        <div className=' '>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            {/* Hero */}
            <div className="bg-[#F7F8FA] " ref={homeRef}>
                <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-0 py-8">
                    <Bannar />
                </div>
            </div>

            {/* Event Services */}
            <div ref={eventServicesRef} className="scroll-mt-[96px] mx-auto w-full max-w-[1180px] px-4 py-12 sm:px-6 sm:py-16 lg:px-0">
                <EventService />
            </div>

            {/* Quotations */}
            <div ref={whyRef} className="bg-[#EDF6F5]">
                <div className="mx-auto w-full max-w-[1180px] px-4 py-8 sm:px-6 sm:py-12 lg:px-0">
                    <Quotations />
                </div>
            </div>

            {/* Design */}

            <div className='bg-[#F7F8FA]'>
                <div className="mx-auto w-full max-w-[1180px] px-4 py-12 sm:px-6 sm:py-16 lg:px-0">
                    <DesignLedFeature />
                </div>
            </div>


            <div className='bg-[#EDF6F5]'>
                {/* Counter */}
                <div className="mx-auto w-full max-w-[1180px] px-4 py-12 sm:px-6 sm:py-16 lg:px-0">
                    <Count />
                </div>
            </div>

                        {/* How Utshob Works */}
            <div ref={howRef} className="scroll-mt-[96px] mx-auto w-full max-w-[1180px] px-4 py-12 sm:px-6 sm:py-16 lg:px-0">
                <HowUtshobWorksSection />
            </div>

            {/* Planning Solutions */}
            <div ref={serviceRef} className="scroll-mt-[96px] mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-0">
                <PlanningSolutions />
            </div>



            {/* Why Utshob */}
            <div className="mt-12 bg-[#F3F4F6] sm:mt-16">
                <div className="mx-auto w-full max-w-[1180px] px-4 py-0 sm:px-6 sm:py-0 lg:px-0">
                    <WhyUseUtshobSection />
                </div>
            </div>





            {/* Customer App Conversion */}
            <div className="bg-[#EDF8FF] ">
                <div className="mx-auto w-full max-w-[1180px] px-4 py-12 sm:px-6 sm:py-8 lg:px-0">
                    <AppConversionSection
                        title="Your Event Services, in One App"
                        des="Create service requests, receive quotations, compare providers and manage confirmed bookings through the Utshob app."
                        button1="Download Utshob"
                    />
                </div>
            </div>

            {/* English FAQ */}
            <div className="mx-auto w-full max-w-[1180px] px-4 py-10 sm:px-6 sm:py-13 lg:px-0">
                <QuestionAns
                    title="Frequently Asked Questions About Utshob"
                    faqs={faqs}
                    limit={8}
                />
            </div>

            {/* Bangla FAQ */}
            <div className="bg-[#F3F4F6]" lang="bn">
                <div className="mx-auto w-full max-w-[1180px] px-4 py-10 sm:px-6 sm:py-13 lg:px-0">
                    <QuestionAns
                        title="Utshob.xyz নিয়ে বিভিন্ন প্রশ্নোত্তর"
                        faqs={faqsBn}
                        en_Or_bn="bn"
                        limit={5}
                    />
                </div>
            </div>

            {/* Partner App Conversion */}
            <div>
                <div
                    ref={partnerRef}
                    className="scroll-mt-[96px] mx-auto w-full max-w-[1180px] px-4 py-12 sm:px-6 sm:py-16 lg:px-0"
                >
                    <AppConversionSection
                        requestHomeUrl='https://play.google.com/store/apps/details?id=xyz.utshob.partner'
                        appDownloadUrl='https://play.google.com/store/apps/details?id=xyz.utshob.partner'
                        title="Grow Your Event Service Business with Utshob"
                        des="Receive relevant customer requests, submit your quotation and get the opportunity to be selected based on your offer and service profile."
                        button1="Join as a Service Provider"
                        button2="Open Partner App"
                        app='partner'
                    />
                </div>
            </div>

            {/* Customer Care */}
            <div className="bg-[#EDF6F5]">
                <div
                    ref={customerRef}
                    className="mx-auto w-full max-w-[1180px] px-4 py-12 sm:px-6 sm:py-16 lg:px-0"
                >
                    <CustomerCare />
                </div>
            </div>
        </div>
    );
};

export default Home;