import React from 'react';

export const meta = () => [
    { title: 'Terms of use | Utshob.xyz: Event Planning Platform Bangladesh' },
    { name: 'description', content: 'Read the official Terms and Conditions for using the Utshob Event Management platform. Details on service agreements, vendor responsibilities, and user rights.' },
    { name: 'robots', content: 'index, follow' },
    { tagName: 'link', rel: 'canonical', href: 'https://www.utshob.xyz/terms-and-conditions' },
];

const TermsAndCondition = () => {
    return (
        <div className='max-w-[1180px] mx-auto' >

            <div className="p-2 py-20 sm:py-20 text-[#5E6878]">
                <h1 className="text-3xl font-bold mb-4">Utshob.xyz – Terms & Conditions</h1>
                <p className="mb-2">Last Updated: 26 September 2025</p>
                <p className="mb-6">
                    Welcome to <strong>utshob.xyz</strong> (the “Platform”), operated by Utsab Platform Limited
                    (“Utshob”, “utsab”, “we”, “our”, or “us”). User means customer and partners who use
                    any platform of Utshob. These Terms & Conditions (“Terms”) govern your use of our
                    services (“Services”), including the Customer App, Partner App, and website.
                    By accessing or using the Platform, you agree to comply with these Terms.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">1. Account Registration and Security</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>Users must provide accurate and complete information during registration.</li>
                    <li>Must be at least 18 years old to use Services.</li>
                    <li>Responsible for maintaining account credentials and notifying Utshob of unauthorized access.</li>
                </ul>

                <div>
                    <h3 className="text-[16px] sm:text-xl font-semibold text-[#59606C]  ">2. Service Use and Booking</h3>
                    <ul className="mt-2 text-[14px] text-[#59606C]   leading-relaxed list-disc list-inside space-y-1">
                        <li>Customers can browse, request, and book services through the Platform.</li>
                        <li>Partners can submit bids to provide services requested by Customers.</li>
                        <li>Bookings are subject to Partner availability and confirmation via the Platform.</li>
                        <li>Users must comply with all applicable laws and regulations while using the Platform.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-[16px] sm:text-xl font-semibold text-[#59606C]  ">3. Bidding Model</h3>
                    <ul className="mt-2 text-[14px] text-[#59606C]   leading-relaxed list-disc list-inside space-y-1">
                        <li>Partners submit bids for service requests posted by Customers.</li>
                        <li>The winning bid is determined based on the criteria provided by the Customer and/or Platform.</li>
                        <li>Utshob may apply a service commission to the Partner’s bid, as displayed on the Platform.</li>
                        <li>Once confirmed, bids and bookings are final unless canceled according to our policies.</li>
                    </ul>
                </div>




                <h2 className="text-2xl font-bold mt-6 mb-4">4. Payments</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Payments are processed through supported methods on the Platform, including credit/debit cards or mobile financial services (MFS) or cash via validating OTP verification.</li>
                    <li>Users must provide accurate payment information. Utshob may verify, store, or process payment details to prevent fraud and ensure secure transactions.</li>
                    <li>In case of discrepancies, disputes, or unauthorized transactions, Users agree to cooperate with Utshob to resolve the issue. Utshob may withhold payments or suspend accounts temporarily until resolution.</li>
                    <li>Refunds are handled according to the Platform’s refund policies.</li>
                </ul>




                <h2 className="text-2xl font-bold mt-6 mb-4">5. Pricing and Additional Charges</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Service pricing is displayed on the Platform and may vary due to the bidding model or operational factors.</li>
                    <li>Additional charges may apply for:
                        <ul className="list-disc list-inside ml-6 space-y-1">
                            <li>Extra travel distance (per km rates displayed on the Platform for vehicles)</li>
                            <li>Waiting time beyond scheduled service</li>
                            <li>Special requests or changes to bookings</li>
                            <li>Last moment bookings and changes of the delivery location or places or rework.</li>
                        </ul>
                    </li>
                    <li>Customers will be informed of applicable charges at the time of booking or confirmation, or on-demand changing while working by partners.</li>
                </ul>


                <h2 className="text-2xl font-bold mt-6 mb-4">6. Cancellations</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Customers can cancel bookings via the Platform before confirmation, and calling to customer care after booking confirmed. Cancellation charges, if any, will be displayed based on the timing of cancellation.</li>
                    <li>Utshob reserves the right to cancel any booking for operational reasons, unforeseen circumstances, or emergencies.</li>
                    <li>Partners may also have their service offer canceled by Utshob if necessary with pre-communication with Utshob according to cancellation policy.</li>
                </ul>



                <section className="terms-section  bg-white rounded-xl ">
                    <h2 className="text-2xl font-bold mt-6 mb-4">7. Utshob Operational Authority</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Utshob may replace or change a Partner if operational or service requirements demand.</li>
                        <li>In the event of natural events, government regulations, emergencies, or other unforeseen circumstances, Utshob may take necessary actions including canceling, rescheduling, or modifying bookings.</li>
                        <li>Utshob exercises these rights to ensure service quality, user safety, and legal compliance.</li>
                    </ul>


                    <h2 className="text-2xl font-bold mt-6 mb-4">8. User Conduct</h2>
                    <h3 className="text-xl font-semibold mt-4 mb-2">Customers:</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Must behave respectfully and lawfully while using the Platform.</li>
                        <li>Are responsible for being ready at the scheduled pick-up / service delivery location and following any service guidelines.</li>
                    </ul>


                    <h3 className="text-xl font-semibold mt-4 mb-2">Partners:</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Must provide services as described in their bids.</li>
                        <li>Must maintain professional conduct and comply with applicable laws.</li>
                        <li>Utshob may audit Partner performance and take action if necessary.</li>
                    </ul>
                </section>



                <section className="terms-section  bg-white rounded-xl ">
                    <h2 className="text-2xl font-bold mt-6 mb-4">9. Limitation of Liability</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Utshob acts as a platform facilitator connecting Customers and Partners and does not directly provide the services.</li>
                        <li>While Utshob takes reasonable steps to ensure Partners meet basic quality standards, we cannot guarantee the quality, safety, or outcomes of services.</li>
                        <li>Utshob is not responsible for disputes or disagreements between Customers and Partners.</li>
                        <li>Utshob’s liability for any claim arising from the use of the Platform is limited to the amount paid through the Platform for the relevant service.</li>
                        <li>Users are encouraged to resolve disputes with each other in good faith, with Utshob providing reasonable support as needed.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-6 mb-4">10. Partner Locations and Liability</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Partners may perform services at their own location, at a Customer’s premises, or other designated locations.</li>
                        <li>Utshob acts solely as a platform connecting Customers and Partners and does not take possession of, supervise, or control personal property of Customers or Partners.</li>
                        <li>Utshob shall not be liable for any theft, loss, or damage to property, personal belongings, or valuables that occur during or in connection with the service provided by a Partner.</li>
                        <li>Customers and Partners are responsible for securing their property and valuables. Utshob recommends taking appropriate safety measures during service delivery.</li>
                        <li>Nothing in this clause limits Utshob’s obligations under applicable Bangladeshi law in cases where liability cannot be excluded by law.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-6 mb-4">11. Partner Equipment and Rented Items</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Partners may bring or rent their own equipment, instruments, or materials (e.g., chairs, tables, sound systems, decoration materials, and so on) to perform services at a Customer’s premises or other locations.</li>
                        <li>Utshob shall not be responsible or liable for any damage, loss, theft, or malfunction of such equipment or rented items during or in connection with the service provided.</li>
                        <li>Partners are solely responsible for securing, transporting, and maintaining their equipment and ensuring that it is used safely and appropriately.</li>
                        <li>Customers are responsible for providing a safe environment for Partners to perform services, but Utshob does not assume any liability for damage to the Partner’s equipment caused by the location or environment.</li>
                        <li>Nothing in this clause limits Utshob’s obligations under applicable Bangladeshi law where liability cannot be excluded.</li>
                    </ul>
                </section>


                <section className="terms-section  bg-white rounded-xl ">
                    <h2 className="text-2xl font-bold mt-6 mb-4">12. Safety and Security</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Users should follow all safety guidelines provided by the Platform and Partners.</li>
                        <li>Avoid sharing sensitive personal information with Partners outside the Platform.</li>
                        <li>In case of emergencies, contact local authorities immediately and notify Utshob as soon as possible.</li>
                        <li>Partners are responsible for providing safe and professional services.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-6 mb-4">13. Right to Refuse Service</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Utshob reserves the right to refuse service or blacklist any user for violating these Terms or engaging in inappropriate behavior.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-6 mb-4">14. Electronic Messaging</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>By using the Platform, Users agree to receive electronic communications, including notifications, updates, or marketing messages, emails.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-6 mb-4">15. Promotional Codes</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Any promotional offers are subject to specific terms. Misuse may result in account suspension or revocation of benefits.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-6 mb-4">16. Special Instructions</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Users should verify Partner and service details before use.</li>
                        <li>Follow Platform guidance for safety, and operational instructions.</li>
                        <li>Users should not enter into contracts with Partners outside the Platform.</li>
                        <li>Keep valuables safe; Utshob is not responsible for personal item loss.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-6 mb-4">17. Changes to Terms</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Utshob may update these Terms at any time. Changes take effect immediately upon posting on the Platform. Continued use of Services constitutes acceptance of the new Terms.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-6 mb-4">18. Governing Law</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>These Terms are governed by the laws of Bangladesh.</li>
                        <li>Any disputes will be subject to the jurisdiction of Bangladeshi courts.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-6 mb-4">19. Contact Information</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>For questions, concerns, or notices:</li>
                        <li>Utsab Platform Limited (Utshob)</li>
                        <li>Email: utshobplatform@utshob.xyz</li>
                        <li>Website: utshob.xyz</li>
                    </ul>
                </section>
            </div>



        </div >
    )
}

export default TermsAndCondition