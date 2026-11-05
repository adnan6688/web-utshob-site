import React from 'react';

import bannar from '../../assets/web Images/Utshob unique service/Web/WebP/Why Utshob unique web 3x.webp'
import DisplayService from '../AllServices/DisplayService';
import DisplayWhyCeteGory from './DisplayWhyCeteGory';


//web icon 
import saveExtaIcon from '../../assets/web Images/Utshob unique service/icon/Web/Save cost and time Utshob.svg'
import VerifiedIcon from '../../assets/web Images/Utshob unique service/icon/Web/Verified service providers Utshob.svg'
import chooseBestIcon from '../../assets/web Images/Utshob unique service/icon/Web/Best price utshob service.svg'
import customerSuuport from '../../assets/web Images/Utshob unique service/icon/Web/24 7 Customer support.svg'

//mobile icon 
import saveExtaMobileIcon from '../../assets/web Images/Utshob unique service/icon/Mobile/Save cost and time with Utshob.svg'
import verifaiedMobileIcon from '../../assets/web Images/Utshob unique service/icon/Mobile/Verified service provider Utshob.svg'
import chooseVerifiedMobileIcon from '../../assets/web Images/Utshob unique service/icon/Mobile/Best price Utshob.svg'
import customerIconMobile from '../../assets/web Images/Utshob unique service/icon/Mobile/24 7 Customer Support.svg'


const WhyUthsob = () => {



    return (
        <div className="my-5 sm:my-12 px-3 pb-2 sm:px-6 lg:px-0">
            <div className="text-left mb-4">
                <h1 className="text-[23px] sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                    Why Utshob.xyz is unique
                </h1>
                <p className="text-[11px] sm:text-[15px] md:text-base text-gray-600 mt-1">
                    Cost effective quality services at doorstep with utmost convenience.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">

                <div data-aos="fade-right" className="hidden sm:flex w-full sm:w-[600px] justify-center items-center">
                    <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[530px]">
                        <img
                            src={bannar}
                            alt="Utshob event services banner"
                            className="w-full h-full object-cover rounded-xl shadow-md"
                            width="611"
                            height="1310"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>


                <div data-aos="fade-left" className="w-full sm:w-[580px]  flex justify-center items-center">
                    <div className="grid grid-cols-2 gap-6 sm:gap-4 w-full h-[450px] sm:h-[500px]  lg:h-[530px]">
                        {[
                            { desktop: saveExtaIcon, mobile: saveExtaMobileIcon, text: "Save Extra Cost & Time" },
                            { desktop: VerifiedIcon, mobile: verifaiedMobileIcon, text: "100% Verified Designs" },
                            { desktop: chooseBestIcon, mobile: chooseVerifiedMobileIcon, text: "Choose The Best Option" },
                            { desktop: customerSuuport, mobile: customerIconMobile, text: "24/7 Customer Support" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="rounded-xl overflow-hidden border border-gray-200  sm:h-[200px] md:h-[240px] lg:h-[250px] flex flex-col justify-center items-center transition duration-500 hover:shadow-md hover:scale-[1.02] ease-in-out"
                            >
                                <div className="flex justify-center items-center">

                                    <div className="block sm:hidden">
                                        <img
                                            src={item.mobile}
                                            alt={item.text}
                                            className="w-[70px] sm:w-[80px] hover:scale-105 hover:brightness-105 transition duration-500 ease-in-out"
                                            width="70"
                                            height="70"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>


                                    <div className="hidden sm:flex justify-center items-center">
                                        <img
                                            src={item.desktop}
                                            alt={item.text}
                                            className="w-[90px] md:w-[100px] hover:scale-105 hover:brightness-105 transition duration-500 ease-in-out"
                                            width="90"
                                            height="90"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                </div>

                                <p className="mt-2 text-[11px] sm:text-[13px] md:text-[15px] text-center font-medium text-gray-700">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WhyUthsob;
