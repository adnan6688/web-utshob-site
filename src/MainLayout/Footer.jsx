import logo from '../assets/logo-utsab (1).png'
import customerBarCode from '../assets/web Images/Barcode/customerQr.webp'
import partnerbarCode from '../assets/web Images/Barcode/partnerQr.webp'

import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';



const Footer = () => {
    return (
        <footer className="bg-[#EEF3F2] text-[#4a5568]">
            <div className="max-w-[1180px] mx-auto space-y-5 px-4 md:px-6 xl:px-0 pt-5 sm:pt-10 pb-4 sm:py-16">
                {/* Top Section: Logo & Links */}
                <div>
                    <div className="col-span-1">
                        <img
                            src={logo}
                            alt="Utshob Logo"
                            className="h-12 w-auto object-contain mb-4"
                            width="507"
                            height="255"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo Brand */}


                    {/* Event Services */}
                    <div>
                        <h3 className="font-bold text-[#111318] mb-4 text-base">Event Services</h3>
                        <ul className="space-y-2.5 text-sm text-[#59606C]">
                            <li>Event Decoration</li>
                            <li>Photography & Videography</li>
                            <li>Car Rental</li>
                            <li>Rides & Band Party</li>
                            <li>Cake</li>
                            <li>Event Rental & Support</li>
                        </ul>
                    </div>

                    {/* Planning Solutions */}
                    <div>
                        <h3 className="font-bold text-[#111318] mb-4 text-base">Planning Solutions</h3>
                        <ul className="space-y-2.5 text-sm text-[#59606C]">
                            <li>Event Planner</li>
                            <li>Wedding Planner</li>
                            <li>Birthday Party Planner</li>
                            <li>Corporate Event Management</li>
                        </ul>
                    </div>

                    {/* Company & Support */}
                    <div>
                        <h3 className="font-bold text-[#111318] mb-4 text-base">Company & Support</h3>
                        <ul className="space-y-2.5 text-sm text-[#59606C]  ">
                            <li><a href="/about-us" className="hover:text-[#E62E77] transition-colors">About Utshob</a></li>
                            <li><a href="/#how-utshob-works" className="hover:text-[#E62E77] transition-colors">How Utshob Works</a></li>
                            <li><a href="/refund" className="hover:text-[#E62E77] transition-colors">Cancellation & Refund</a></li>
                            <li><a href="/#customer-care" className="hover:text-[#E62E77] transition-colors">Customer Care</a></li>
                            <li><a href="/privacy-policy" className="hover:text-[#E62E77] transition-colors">Privacy Policy</a></li>
                            <li><a href="/terms-and-conditions" className="hover:text-[#E62E77] transition-colors">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>

                {/* Middle Section: Download Apps & Contact Box */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#FFFFFF] p-6 md:p-8 rounded-3xl border border-[#E2E6EB] shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                    {/* App Download Area */}
                    <div className="lg:col-span-8 space-y-6">
                        <div>
                            <h2 className="text-2xl font-semibold text-[#111318]">Download the Utshob apps</h2>
                            <p className="text-[#626773] text-sm mt-1">
                                Scan the right QR code. Android is available now; iOS links will be added after launch.
                            </p>
                        </div>

                        <div className="hidden sm:block ">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Customer App Card */}
                                <div className="border border-[#DF266F] bg-[#FFF1F6] rounded-2xl p-[14px] flex items-center gap-4">
                                    <img
                                        src={customerBarCode}
                                        alt="Utshob customer app QR code"
                                        width="80"
                                        height="80"
                                        loading="lazy"
                                        decoding="async"
                                        className="w-20 h-20 rounded-lg object-cover"
                                    />
                                    <div className='bg-white flex-1 px-1'>
                                        <h4 className="font-bold text-[#111318] text-base">Customer App</h4>
                                        <p className="text-[#E62E77] font-semibold text-sm">Android available</p>
                                        <p className="text-[#626773] text-xs mt-1">iOS — Coming soon</p>
                                        <p className="text-[#626773] text-xs">Scan to download</p>
                                    </div>
                                </div>

                                {/* Partner App Card */}
                                <div className="border border-[#367A70] bg-[#F1F7F6] rounded-2xl p-4 flex items-center gap-4">
                                    <img
                                        src={partnerbarCode}
                                        alt="Utshob partner app QR code"
                                        width="80"
                                        height="80"
                                        loading="lazy"
                                        decoding="async"
                                        className="w-20 h-20 rounded-lg object-cover"
                                    />
                                    <div className='bg-white flex-1 p-2'>
                                        <h4 className="font-bold text-[#111318] text-base">Partner App</h4>
                                        <p className="text-[#2ca58d] font-semibold text-sm">Android available</p>
                                        <p className="text-[#626773] text-xs mt-1">iOS — Coming soon</p>
                                        <p className="text-[#626773] text-xs">Scan to download</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Contact & Follow Box */}
                    <div className="lg:col-span-4 bg-[#F1F7F6] border border-[#367A70] rounded-2xl p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="font-semibold text-[#111318] text-[20px] mb-3">Contact & Follow</h3>

                            <div className="space-y-2 mb-4">
                                <p className="flex items-center gap-2 text-[#367A70] font-bold text-base">
                                    +88 01575 336382
                                </p>

                                <p className="flex items-center gap-2 text-[#59606C] text-sm">
                                    <FaEnvelope className="text-xs" />
                                    admin@utshob.xyz
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className="text-xs font-semibold text-[#5E6878] mb-3">Follow Utshob</p>
                            <div className="flex gap-2">
                                <a
                                    target='_blank'
                                    href="https://www.facebook.com/utshob.xyz.official"
                                    aria-label="Facebook"
                                    className="w-9 h-9 bg-white text-[#1877f2] rounded-full flex items-center justify-center border  border-[#D6E5E2]  hover:shadow-md transition-all text-sm"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    target='_blank'
                                    href="https://www.linkedin.com/company/utshob-xyz/"
                                    aria-label="LinkedIn"
                                    className="w-9 h-9 bg-white text-[#0a66c2] rounded-full flex items-center justify-center border  border-[#D6E5E2]  hover:shadow-md transition-all text-sm"
                                >
                                    <FaLinkedinIn />
                                </a>
                                <a
                                    target='_blank'
                                    href="https://www.instagram.com/utshob.xyz/"
                                    aria-label="Instagram"
                                    className="w-9 h-9 bg-white text-[#e4405f] rounded-full flex items-center justify-center border  border-[#D6E5E2]  hover:shadow-md transition-all text-sm"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    href="https://www.youtube.com/@utshob.xyz.official"
                                    aria-label="YouTube"
                                    className="w-9 h-9 bg-white text-[#ff0000] rounded-full flex items-center justify-center border border-[#D6E5E2] hover:shadow-md transition-all text-sm"
                                >
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="sm:pt-4 text-xs text-[#59606C] flex flex-row gap-2  items-center">
                    <p>© 2026 Utsab Platform Limited</p>
                    <p className="text-[#5E6878]">•</p>
                    <a href="https://www.utshob.xyz" target="_blank" rel="noreferrer" className="hover:underline">
                        www.utshob.xyz
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;