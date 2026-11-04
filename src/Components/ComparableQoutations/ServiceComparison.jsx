
import {
  FaClipboardList,
  FaArrowRight,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { HiOutlinePhotograph } from "react-icons/hi";
import { TbNotes } from "react-icons/tb";
import { IoOptionsOutline } from "react-icons/io5";
import { useState } from "react";

const quotations = [
  {
    id: "01",
    title: "Provider quotation",
    details: ["Price", "Included / Excluded", "Ratings, Reviews & Portfolio"],
  },
  {
    id: "02",
    title: "Provider quotation",
    details: ["Price", "Included / Excluded", "Ratings, Reviews & Portfolio"],
  },
  {
    id: "03",
    title: "Provider quotation",
    details: ["Price", "Included / Excluded", "Ratings, Reviews & Portfolio"],
  },
];

function ServiceCard({ icon, title, description, variant }) {
  const Icon = icon;
  const isPink = variant === "pink";

  return (
    <article
      className={`flex min-w-0 border border-[#D6E5E2] flex-col gap-y-3 justify-center rounded-2xl p-[18px] sm:p-5 ${isPink ? "bg-[#FFFFFF]" : "bg-[#F1F7F6]"
        }`}
    >
      <div className="mb-3 flex items-center gap-3">
        <span
          className={`flex p-2.5  shrink-0 items-center justify-center rounded-[10px]  bg-[#FFFFFF] text-[#E62E77]`}
        >
          <Icon size={24} />
        </span>

        <h3 className="text-[17px] leading-[22px] tracking-normal font-semibold  text-[#18181B]">
          {title}
        </h3>
      </div>

      <p className="text-[14px] leading-[21px] tracking-normal text-[#626773]">
        {description}
      </p>
    </article>
  );
}


function StepRow({ icon, title }) {
  const Icon = icon;

  return (
    <div className="step-row flex items-center gap-2.5 rounded-[10px] border-2 border-[#C7CAD1] bg-white p-2.5 text-[12px] leading-4 tracking-normal font-medium text-[#111318]">
      <span className="flex size-5 shrink-0 items-center justify-center rounded-[6px] bg-[#FFF1F6] text-[#E62E77]">
        <Icon size={10} />
      </span>
      <span>{title}</span>
    </div>
  );
}




function QuotationCard({ quotation, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`flex w-full cursor-pointer flex-col gap-y-2.5 rounded-xl border bg-white p-3 text-left transition-all duration-200 sm:p-[14px] ${selected
        ? "border-[#E62E77]"
        : "border-[#C7CAD1] hover:border-[#E62E77]/50"
        }`}
    >
      <div className="mb-2 flex items-center gap-2">
        <span
          className={`flex shrink-0 items-center justify-center rounded-full px-2.5 py-1.5 text-[10px] font-bold transition-colors duration-200 ${selected
            ? "bg-[#E62E77] text-white"
            : "bg-[#EDF8FF] text-[#111318]"
            }`}
        >
          {quotation.id}
        </span>

        <h4 className="text-xs font-semibold leading-[16px] tracking-normal text-[#111318]">
          {quotation.title}
        </h4>
      </div>

      <ul className="space-y-2 pl-1">
        {quotation.details.map((detail) => (
          <li
            key={detail}
            className="flex items-start gap-2 text-[11px] leading-4 text-[#71717A]"
          >
            <span
              className={`mt-1 size-1.5 shrink-0 rounded-full transition-colors ${selected ? "bg-[#E62E77]" : "bg-[#2D58C0]"
                }`}
            />

            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </button>
  );
}



export default function ServiceComparison() {



  const [selectedQuotation, setSelectedQuotation] = useState("02");


  return (
    <section className=" bg-[#EDF8FF]">
      <div className=" rounded-2xl bg-[#FFFFFF] p-4 shadow-[0_8px_24px_rgba(31,65,91,0.10)] sm:p-5 lg:p-6">

        {/* Main layout */}
        <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-[0.78fr_1.22fr] lg:gap-4">

          {/* Left: Service types */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <ServiceCard
              icon={HiOutlinePhotograph}
              title="Design-based services"
              variant="pink"
              description="For design-based services such as event decoration, choose a design from the app or upload your own reference image. Add your specifications, and providers can submit quotations based on the same requirement."
            />

            <ServiceCard
              icon={TbNotes}
              title="Requirement-based services"
              variant="blue"
              description="For requirement-based services such as car rental, simply provide the date, location and service details providers need to prepare their quotations."
            />
          </div>

          {/* Right: Comparison workflow */}
          <div className="rounded-2xl bg-[#F3F4F6] flex flex-col gap-y-4 p-4 sm:p-5">

            {/* Heading */}
            <div className="mb-5 flex items-start gap-3">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-[10px] bg-[#FFFFFF] text-[#367A70]">
                <IoOptionsOutline size={24} />
              </span>

              <div className="flex flex-col gap-y-0.5">
                <p className="mb-1 text-[10px] font-bold uppercase  leading-[14px] tracking-[7%] text-[#367A70]">
                  Compare before you choose
                </p>
                <h3 className="text-[17px] font-semibold leading-[22px] tracking-normal text-[#111318]">
                  One brief. Three comparable responses.
                </h3>
              </div>
            </div>

            {/* Workflow */}
            <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[0.85fr_auto_1.15fr] md:gap-[14px]">

              {/* Requirement steps */}
              <div className="rounded-2xl flex flex-col gap-y-3 bg-[#FFF1F6] p-3 sm:p-7">
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex p-2.5 shrink-0 items-center justify-center rounded-[10px]  bg-white text-[#E62E77]">
                    <TbNotes size={24} />
                  </span>

                  <div className="flex flex-col gap-y-0.5">
                    <p className="text-[10px] font-bold uppercase leading-[14px] tracking-[7%] text-[#E62E77]">
                      One requirement
                    </p>
                    <h3 className="text-[17px] leading-[22px] tracking-normal font-semibold text-[#111318]">
                      Submit your service brief
                    </h3>
                  </div>
                </div>


                <div className="space-y-3">
                  <StepRow
                    icon={FaMapMarkerAlt}
                    title="Date & location"
                  />

                  <StepRow
                    icon={FaClipboardList}
                    title="Service specifications"
                  />

                  <StepRow
                    icon={HiOutlinePhotograph}
                    title="Design / Reference (if relevant)"
                  />

                  <div className="flex items-center gap-2 rounded-lg bg-[#E62E77] px-3 py-2.5 text-[11px] font-semibold text-white">
                    <FaCheckCircle className="shrink-0" />
                    <span>Ready for provider matching</span>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <span className="flex  p-3 rotate-90 items-center justify-center rounded-full bg-white text-[#E62E77]  md:rotate-0">
                  <FaArrowRight size={14} />
                </span>
              </div>

              {/* Quotations */}
              <div className="grid grid-cols-1 gap-2.5">
                {quotations.map((quotation) => (
                  <QuotationCard
                    key={quotation.id}
                    quotation={quotation}
                    selected={selectedQuotation === quotation.id}
                    onSelect={() => setSelectedQuotation(quotation.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom information bar */}
        <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#367A70] p-4 sm:items-center ">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-lg  bg-white text-[#367A70]">
            <IoOptionsOutline size={24} />
          </span>

          <p className="text-xs leading-5 tracking-normal text-white sm:text-[16px]">
            Before choosing, compare the price, what is included, what is
            excluded, provider ratings, reviews and portfolio where relevant.
          </p>
        </div>

      </div>
    </section>
  );
}
