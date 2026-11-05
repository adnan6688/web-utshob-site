import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import ServiceComparison from './ServiceComparison'

export default function Quotations() {
    return (
        <div className='sm:py-[52px] flex flex-col gap-y-6'>

            <div className='flex flex-col gap-y-4 md:flex-row justify-between'>


                <div className='w-full md:w-[40%] flex flex-col gap-y-3'>

                    <span className="inline-flex w-fit max-w-full flex-wrap items-center gap-x-1 sm:gap-x-2 rounded-md bg-[#FFF1F6] p-2.5 sm:pr-10 rounded-l-full rounded-r-full font-inter text-[11px] font-semibold leading-[16px] tracking-normal text-[#E62E77]">
                        <span className="mr-1 flex items-center gap-2">
                            <span className="h-2 w-2 shrink-0 rounded-full bg-[#E62E77]" />
                            Same Requirement
                        </span>

                        <FaArrowRight className="shrink-0" />

                        <span>Different Quotations</span>

                        <FaArrowRight className="shrink-0" />

                        <span>Better Comparison</span>
                    </span>

                    <h2
                        id="service-comparison-heading"
                        className="font-bold text-[#111318] leading-[38px] text-2xl  sm:leading-[38px] lg:text-[36px] lg:leading-[46px] lg:[word-spacing:normal]"
                    >
                        From One Requirement to Comparable Quotations
                    </h2>

                </div>

                <div className='md:w-[40%] flex justify-center '>
                    <p className='text-[#626773] leading-6 tracking-normal text-[14px] sm:text-[16px]'>Utshob.xyz is an event services marketplace and event planning platform built around the Utshob app. Instead of contacting service providers one by one, you can submit your requirement and let relevant providers quote for the service you need.</p>
                </div>
            </div>

            <div>
                <ServiceComparison></ServiceComparison>
            </div>

        </div>
    )
}
