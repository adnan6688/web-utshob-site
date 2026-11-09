import React from 'react';
import Button from '../Shared/Button';

const requirementsData = [
    {
        number: '01',
        title: 'Vehicle Type & Quantity',
        description: 'Choose the type and number of vehicles you need. You may request one vehicle or several vehicles together.',
        bgCard: 'bg-[#FFF1F6] border-pink-100',
    },
    {
        number: '02',
        title: 'Preferred Model or Flexible Vehicle Choice',
        description: 'Specify Axio, Premio, Noah, HiAce, Prado, Mercedes-Benz or BMW if the model matters—or keep the choice flexible for a suitable available option.',
        bgCard: 'bg-[#EDF8FF] border-sky-100',
    },
    {
        number: '03',
        title: 'Passenger Requirement',
        description: 'Specify how many people need transportation. For group vehicles, review the actual capacity of the proposed vehicle before selecting it.',
        bgCard: 'bg-[#FFF1F6] border-pink-100',
    },
    {
        number: '04',
        title: 'Pickup & Destination',
        description: 'Provide the exact pickup location and destination. For a Round Trip, include the return requirement as well.',
        bgCard: 'bg-[#EDF8FF] border-sky-100',
    },
    {
        number: '05',
        title: 'One Way or Round Trip',
        description: 'Select the journey type that matches your trip.',
        bgCard: 'bg-[#FFF1F6] border-pink-100',
    },
    {
        number: '06',
        title: 'Start, End & Return Time',
        description: 'Provide the actual timing required. Utshob is not based on one universal hourly pricing structure; partners quote the complete route, timing and vehicle requirement.',
        bgCard: 'bg-[#EDF8FF] border-sky-100',
    },
    {
        number: '07',
        title: 'Multiple Stops',
        description: 'If the vehicle needs to stop at several locations, include those stops in the requirement.',
        bgCard: 'bg-[#FFF1F6] border-pink-100',
    },
    {
        number: '08',
        title: 'Extra Trip',
        description: 'If the same vehicle needs to make an additional trip, specify it before partners quote.',
        bgCard: 'bg-[#EDF8FF] border-sky-100',
    },
    {
        number: '09',
        title: 'Multiple Programs',
        description: 'Holud, Wedding, Reception or other programs can each have their own vehicle, quantity, route and timing.',
        bgCard: 'bg-[#FFF1F6] border-pink-100',
    },
    {
        number: '10',
        title: 'Car Decoration',
        description: "For a wedding or groom's car, specify whether decoration is required and include any additional preparation time.",
        bgCard: 'bg-[#EDF8FF] border-sky-100',
    },
    {
        number: '11',
        title: 'What Is Included in the Quotation?',
        description: 'For the stated trip, the partner quotation includes Driver + Fuel + Toll. Self-drive rental is not currently offered through Utshob.',
        bgCard: 'bg-[#FFF1F6] border-pink-100',
    },
];

export default function CarRentalRequirment() {
    return (
        <section className="">
            <div className="space-y-8 bg-white rounded-2xl border border-[#DDE1E7] p-2 sm:p-5 sm:pb-10">

                {/* Header Section */}
                <div className="space-y-2">
                    <span className="text-[10px] font-bold tracking-normalr text-[#D61F68] uppercase">
                        TELL PARTNERS EXACTLY WHAT YOU NEED
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Define Your Car Rental Requirement
                    </h2>
                    <p className="text-xs sm:text-sm text-[#5E6878] max-w-4xl leading-relaxed">
                        A Sedan for a corporate meeting, a Noah for a family trip, several HiAce vehicles for wedding guests and a Bus for a picnic should not fit the same generic rental package. Define your actual transportation requirement so relevant partners can quote against a clearer and more comparable scope.
                    </p>
                </div>

                {/* 11 Requirement Cards Grid (3 Columns on Large Screens) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {requirementsData.map((item) => (
                        <div
                            key={item.number}
                            className={`rounded-2xl p-6 border  flex flex-col justify-between ${item.bgCard}`}
                        >
                            <div className='flex flex-col gap-y-2'>
                                {/* Number Badge */}

                                <div className='flex gap-x-2 items-center'>
                                    <div className="w-8 h-8 rounded-full bg-[#D61F68] text-white font-bold text-xs flex items-center justify-center ">
                                        {item.number}
                                    </div>
                                    <h3 className="text-sm font-bold text-gray-900 ">
                                        {item.title}
                                    </h3>
                                </div>



                                <p className="text-xs text-[#5E6878] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Footer Note */}
                <div className="pt-4">
                    <p className="text-xs sm:text-sm font-bold text-gray-900">
                        The clearer your requirement, the easier it becomes to compare different quotations against the same transportation need.
                    </p>
                </div>

            </div>
            <div className='mt-5 sm:mt-7'>
                <Button
                    type="button"
                    className="rounded-xl bg-[#D61F68] px-5 py-3 text-xs font-semibold text-white shadow-sm transition-all duration-300 sm:text-sm"
                >
                    Get Car Rental Quotations in the App
                </Button>
            </div>
        </section>
    );
}