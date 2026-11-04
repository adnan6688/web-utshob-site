import { FaArrowRight } from "react-icons/fa6";
import Button from "../Shared/Button";


const planningSolutions = [
  {
    id: "01",
    title: "Event Planner",
    description:
      "Plan the services and requirements needed for an event and arrange them through Utshob.",
    cta: "Explore Event Planning",
    background: "bg-white",
    badge: "pink",
    route: "EVENT_PLANNER",
  },
  {
    id: "02",
    title: "Wedding Planner",
    description:
      "Organize requirements for Holud, Wedding, Reception and other wedding programs.",
    cta: "Explore Wedding Planning",
    background: "bg-white",
    badge: "pink",
    route: "WEDDING_PLANNER",
  },
  {
    id: "03",
    title: "Birthday Party Planner",
    description:
      "Bring together decoration, cake, photography and other birthday requirements.",
    cta: "Explore Birthday Planning",
    background: "bg-[#F1F7F6]",
    badge: "plain",
    route: "BIRTHDAY_PLANNER",
  },
  {
    id: "04",
    title: "Corporate Event Management",
    description:
      "Explore services for meetings, launches, celebrations, conferences and other corporate events.",
    cta: "Explore Corporate Events",
    background: "bg-white",
    badge: "pink",
    route: "CORPORATE_PLANNER",
  },
];

function PlanningCard({ item }) {
  return (
   <article
  className={`flex flex-col gap-y-3 rounded-[18px] border border-[#D6E5E2] shadow-[0_6px_20px_rgba(17,24,39,0.08)] transition-shadow duration-300 ease-in-out hover:shadow-[0_10px_28px_rgba(17,24,39,0.12)] p-5 ${item.background}`}
>
      {/* Number */}
      <span
        className={` inline-flex w-8 h-5 sm:w-8 sm:h-5 items-center justify-center rounded-full  font-semibold ${
          item.badge === "pink"
            ? "bg-[#E62E77] text-white"
            : "text-[#111318]"
        }`}
      >
        {item.id}
      </span>

      {/* Card title */}
      <h3 className="font-semibold leading-[18px] tracking-normal text-[#18181B] text-[18px] sm:leading-[145%]">
        {item.title}
      </h3>

      {/* Description */}
      <p className="  tracking-normal leading-[15px] text-[#626773] text-[13px] sm:leading-[145%]">
        {item.description}
      </p>

    </article>
  );
}

export default function PlanningSolutions() {
  return (
    <section
      id="planning-solutions"
      aria-labelledby="planning-solutions-heading"
      className="w-full bg-white px-2 sm:px-0"
    >
      <div className="flex flex-col gap-y-[22px]">
        {/* Heading */}
        <h2
          id="planning-solutions-heading"
          className=" text-[30px]  sm:text-[37px] font-bold leading-[145%]  [word-spacing:9px] tracking-normal sm:[word-spacing:0px] text-[#111318]"
        >
          Planning an Entire Event?
        </h2>

        {/* Description */}
        <p className=" font-normal leading-[145%] tracking-normal text-[#626773] text-[16px] ">
         Explore planning solutions for weddings, birthdays, corporate events and other occasions, and understand which services you may need for each part of your event.
        </p>

        {/* Planner cards */}
        <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[14px]">
          {planningSolutions.map((item) => (
            <PlanningCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
