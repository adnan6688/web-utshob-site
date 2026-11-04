import React from 'react'
import EventServiceCard from './EventServiceCard'
import decorImage from '../../assets/web Images/EventDecor/EventDecor.webp'
import memories from '../../assets/web Images/Memories/memories.webp'
import car from '../../assets/web Images/CarRental/car.webp'
import cake from '../../assets/web Images/Cake/cake.webp'
import bandparty from '../../assets/web Images/BandParty/bandParty.webp'
import eventRantal from '../../assets/web Images/EventRental/evenRental.webp'

const eventServices = [
    {
        id: 1,
        title: "Event Decoration",
        img : decorImage,
        bgColour: "#FFF1F6",
        description:
            "Wedding stages, holud stages, birthday decoration, wedding gates, walkways, photo booths, wedding cars and more.",
        bottomText: "Explore Event Decoration",
    },
    {
        id: 2,
        title: "Photography & Videography",
        img : memories,
        bgColour: "#EDF8FF",
        description:
            "Photography and video services for weddings, birthdays, corporate events, products and other occasions.",
        bottomText: "Explore Photography & Videography",
    },
    {
        id: 3,
        title: "Car Rental",
        img : car,
        bgColour: "#FFF1F6",
        description:
            "Sedan, Hiace, Noah, bus, minibus and luxury vehicle rental for events and transportation.",
        bottomText: "Explore Car Rental",
    },
    {
        id: 4,
        title: "Rides & Band Party",
        img : bandparty,
        bgColour: "#FFF1F6",
        description:
            "Horse carriage, band party, palki, horse rental, dhuli and traditional event services.",
        bottomText: "Explore Rides & Band Party",
    },
    {
        id: 5,
        title: "Cake",
        img: cake,
        bgColour: "#FFF1F6",
        description:
            "Cakes for birthdays, holud, parties and other celebrations.",
        bottomText: "Explore Cake",
    },
    {
        id: 6,
        title: "Event Rental",
        img : eventRantal,
        bgColour: "#FFF1F6",
        description:
            "Lighting, speakers, projectors, pandal, furniture, chefs, waiters, crockeries, cookware and other event support services.",
        bottomText: "Explore Event Rental",
    },
];

export default function EventService() {
    return (
        <div className='flex flex-col gap-y-5'>


            <div className='flex flex-col gap-y-[22px] '>
                <h2 className='font-bold  text-[#111318] leading-[145%] text-[30px] tracking-normal'>Event Services You Can Find on Utshob</h2>
                <p className='text-[#626773] text-[16px]'>From decoration and photography to transport, cake and event support, choose the service you need and request quotations through the Utshob app.</p>

            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {eventServices?.map((service) => (
                    <EventServiceCard
                        key={service.id}
                        title={service.title}
                        img={service.img}
                        bgColour={service.bgColour}
                        description={service.description}
                        bottomText={service.bottomText}
                    />
                ))}
            </div>

        </div>
    )
}
