import React from 'react'
import QuestionAns from '../QuestionAns/QuestionAns';
const faqs = [
    {
        q: "How much does event decoration cost in Dhaka?",
        a: "There is no single fixed price for every event. The cost depends on the venue size, design complexity, flowers and materials, lighting, number of areas being decorated and setup requirements. Through Utshob, customers can submit one requirement and compare available quotations from relevant service providers.",
    },
    {
        q: "What is usually included in an event decoration service?",
        a: "It depends on the specific service and provider quotation. Decoration may include stages, backdrops, flowers, entrances, walkways, tables, lighting or other requested elements. Before booking, customers can review what is included and what is excluded.",
    },
    {
        q: "How do I choose an event decorator?",
        a: "Compare the provider’s price, ratings, reviews, portfolio, proposed setup and service inclusions. Previous work is especially important when choosing a decoration provider.",
    },
    {
        q: "Can I request a customized decoration design?",
        a: "Yes. You can provide your preferred style, theme, colours or reference images when submitting your requirement. Providers can respond based on your venue, requirement and available setup options.",
    },
    {
        q: "Can I book only one decoration service?",
        a: "Yes. You can book a single service without purchasing a full event package.",
    },
    {
        q: "Can I combine several services for the same event?",
        a: "Yes. You can select multiple services and build your own event package based on your requirements.",
    },
    {
        q: "Can I create separate requests for different wedding programs?",
        a: "Yes. Programs such as gaye holud, wedding and reception can be planned for separate dates and requirements.",
    },
    {
        q: "Can I see ratings, reviews and portfolios before choosing a provider?",
        a: "Yes. These details help customers compare providers before confirming a service.",
    },
    {
        q: "When can I communicate directly with the service provider?",
        a: "After the order is confirmed, the customer and selected provider can communicate directly to coordinate the event details.",
    },
    {
        q: "Can I rate and review the provider after the service?",
        a: "Yes. After the service is completed, customers can submit a rating and review based on their experience.",
    },
];

export default function EventDecorAskQuestionEn() {
    return (
        <div>
            <QuestionAns
                title="Frequently Asked Questions"
                faqs={faqs}
                en_Or_bn="en"
                limit={5}
            />
        </div>
    )
}
