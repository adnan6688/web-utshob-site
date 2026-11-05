import { FaArrowRight } from "react-icons/fa6";
import { PLANNER_ROUTE } from '../../constants/seoHome';

const planningSolutions = [
  {
    id: "01",
    title: "Event Planner",
    description:
      "Plan the services and requirements needed for an event and arrange them through Utshob.",
    cta: "Explore Event Planning",
    background: "bg-white",
    badge: "pink",
    route: "event-planner",
  },
  {
    id: "02",
    title: "Wedding Planner",
    description:
      "Organize requirements for Holud, Wedding, Reception and other wedding programs.",
    cta: "Explore Wedding Planning",
    background: "bg-white",
    badge: "pink",
    route: "wedding-planner",
  },
  {
    id: "03",
    title: "Birthday Party Planner",
    description:
      "Bring together decoration, cake, photography and other birthday requirements.",
    cta: "Explore Birthday Planning",
    background: "bg-[#F1F7F6]",
    badge: "plain",
    route: "birthday-planner",
  },
  {
    id: "04",
    title: "Corporate Event Management",
    description:
      "Explore services for meetings, launches, celebrations, conferences and other corporate events.",
    cta: "Explore Corporate Events",
    background: "bg-white",
    badge: "pink",
    route: "corporate-event-management",
  },
];

function PlanningCard({ item }) {
  return (
    <article
      className={`flex flex-col gap-y-3 rounded-[18px] border border-[#D6E5E2] shadow-[0_6px_20px_rgba(17,24,39,0.08)] transition-shadow duration-300 ease-in-out hover:shadow-[0_10px_28px_rgba(17,24,39,0.12)] p-5 ${item.background}`}
    >
      <span
        className={`inline-flex w-8 h-5 sm:w-8 sm:h-5 items-center justify-center rounded-full font-semibold ${
          item.badge === "pink"
            ? "bg-[#E62E77] text-white"
            : "text-[#111318]"
        }`}
      >
        {item.id}
      </span>

      <h3 className="font-semibold leading-[18px] tracking-normal text-[#18181B] text-[18px] sm:leading-[145%]">
        {item.title}
      </h3>

      <p className="tracking-normal leading-[15px] text-[#626773] text-[13px] sm:leading-[145%]">
        {item.description}
      </p>

      <a
        href={PLANNER_ROUTE(item.route)}
        className="mt-auto inline-flex items-center gap-2 text-[13px] font-semibold text-[#111318] hover:text-[#DF266F]"
      >
        <span>{item.cta}</span>
        <FaArrowRight className="shrink-0" aria-hidden="true" />
      </a>
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
        <h2
          id="planning-solutions-heading"
          className="text-2xl sm:text-[37px] font-bold leading-[145%] tracking-normal text-[#111318]"
        >
          Planning an Entire Event?
        </h2>

        <p className="font-normal leading-[145%] tracking-normal text-[#626773] text-[16px]">
          Explore planning solutions for weddings, birthdays, corporate events and other occasions, and understand which services you may need for each part of your event.
        </p>

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
