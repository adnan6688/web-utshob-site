import React from 'react';
import { IoBagRemoveOutline } from "react-icons/io5";

const vehicleCards = [
    {
        title: 'Weddings',
        description: "Arrange a groom's car, decorated wedding car, family vehicles and guest transportation according to each wedding program.",
        bgCard: 'bg-[#FFF1F6] border-[#D9DEE5]',
    },
    {
        title: 'Wedding Guest Transportation',
        description: 'Use Noah, HiAce, Minibus, Bus or a combination of vehicle types based on guest count and the transport plan.',
        bgCard: 'bg-[#EDF8FF] border-[#D9DEE5]',
    },
    {
        title: 'Family Trips',
        description: 'Choose based on passenger count, luggage, route, stops and return plan. A Sedan or Noah may fit smaller requirements; a larger group may need HiAce or another group vehicle.',
        bgCard: 'bg-[#FFF1F6] border-[#D9DEE5]',
    },
    {
        title: 'Tours',
        description: 'Define the destination, trip timing, stops and return requirement.',
        bgCard: 'bg-[#EDF8FF] border-[#D9DEE5]',
    },
    {
        title: 'Corporate Transportation',
        description: 'Request transport for employees, teams, clients, guests, corporate programs or VIP requirements.',
        bgCard: 'bg-[#FFF1F6] border-[#D9DEE5]',
    },
    {
        title: 'Picnics & Group Outings',
        description: 'Consider HiAce, Minibus, Coaster-type vehicles or Buses according to group size and required seating capacity.',
        bgCard: 'bg-[#EDF8FF] border-[#D9DEE5]',
    },
    {
        title: 'Events',
        description: 'Plan different vehicles for different passenger groups, dates or event programs.',
        bgCard: 'bg-[#FFF1F6] border-[#D9DEE5]',
    },
    {
        title: 'One Way & Round Trip',
        description: 'Both One Way and Round Trip journeys can be submitted with the required route, timing, stops and return details.',
        bgCard: 'bg-[#EDF8FF] border-[#D9DEE5]',
    },
];

export default function CarRentalVehicleTrip() {
    return (
        <section className="">
            <div className=" space-y-8">

                {/* Section Heading */}
                <div>
                    <h2 className="text-xl sm:text-3xl font-bold text-[#111318]">
                        Find the Right Vehicle for Your Trip
                    </h2>
                </div>

                {/* 8 Cards Grid (4 Columns on Large Screens) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {vehicleCards.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-6 border  flex flex-col justify-between ${item.bgCard}`}
                        >
                            <div className='flex flex-col gap-y-3'>
                                {/* Icon Badge */}


                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D61F68] text-white sm:h-12 sm:w-12">
                                        <IoBagRemoveOutline className="text-xl" />
                                    </div>

                                    <h3 className="min-w-0 text-base font-bold leading-6 text-[#111318] sm:text-lg">
                                        {item.title}
                                    </h3>
                                </div>



                                <p className="text-xs text-[#5E6878] leading[145%]">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}