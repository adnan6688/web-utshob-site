
import { FaArrowRight } from "react-icons/fa";
import Button from "../Shared/Button";
import logoIcon from '../../assets/apple-touch-icon.png'
import { HiOutlinePhotograph } from "react-icons/hi";
import { FiUpload } from "react-icons/fi";


const featureSteps = [
  {
    number: "01",
    title: "Choose an Existing Design",
    description:
      "For supported design-based services, explore designs available in the Utshob app and select the one that fits your event.",
    background: "bg-white",
  },
  {
    number: "02",
    title: "Upload Your Own Reference",
    description:
      "Already have an idea from Facebook, Pinterest, Instagram or somewhere else? Upload your reference image and add your requirements.",
    background: "bg-[#EDF8FF]",
  },
  {
    number: "03",
    title: "Get Quotations for the Same Requirement",
    description:
      "Relevant providers can review your selected design or reference along with your specifications and submit their quotations.",
    background: "bg-white",
  },
];

const quotations = [
  { id: "01", background: "bg-[#F4F5F7]" },
  { id: "02", background: "bg-[#EDF8FF]" },
  { id: "03", background: "bg-[#F4F5F7]" },
];

function NumberBadge({ number, variant = "pink" }) {
  return (
    <span
      className={`inline-flex px-2.5 py-[6px] tracking-normal leading-[100%] shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${variant === "pink"
        ? "bg-[#E62E77] text-white"
        : "bg-transparent text-[#111318]"
        }`}
    >
      {number}
    </span>
  );
}

function FeatureCard({ step }) {
  return (
    <article
      className={`flex flex-col gap-y-3 border border-[#D6E5E2] rounded-[18px] shadow-[0_6px_22px_rgba(17,24,39,0.10)] p-[17px] sm:p-5 transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(17,24,39,0.14)] ${step.background}`}
    >
      <div className="">
        <NumberBadge
          number={step.number}
          variant={step.number === "02" ? "plain" : "pink"}
        />
      </div>

      <h3 className="text-[18px] font-semibold leading-[145%] tracking-normal text-[#111318]">
        {step.title}
      </h3>

      <p className="text-[13px] font-normal leading-[145%] tracking-normal text-[#626773]">
        {step.description}
      </p>
    </article>
  );
}

function WorkflowCard({ number, title, description, children, pink = false }) {
  return (
    <article
      className={`flex  flex-col gap-y-2.5 rounded-[18px] border border-[#C7CAD1]  shadow-[0_8px_18px_rgba(31,41,55,0.08)] p-[18px] ${pink ? "bg-[#F7F8FA]" : "bg-white"
        }`}
    >
      <div className="mb-[10px]">
        <NumberBadge number={number} />
      </div>

      <h3 className=" text-[18px] font-semibold leading-[140%] tracking-normal text-[#111318]">
        {title}
      </h3>

      <p className=" text-[12px] tracking-normal  leading-[140%] text-[#626773]">
        {description}
      </p>

      <div className="w-full">{children}</div>
    </article>
  );
}

function BrowseDesigns() {
  return (
    <WorkflowCard
      number="01"
      title="Browse Designs"
      description="Explore designs available in the Utshob app."
    >
      <div className="grid grid-cols-3 gap-[14px]">
        {["Design 01", "Design 02", "Design 03"].map(
          (design, index) => (
            <div
              key={design}
              className={`flex min-h-[48px] items-center justify-center rounded-[9px] px-1 text-center text-[9px] font-medium text-[#111318] ${index === 1 ? "bg-[#FFF1F6]" : "bg-[#F1F7F6]"
                }`}
            >
              {design}
            </div>
          )
        )}
      </div>
    </WorkflowCard>
  );
}

function SelectDesign() {
  return (
    <WorkflowCard
      number="02"
      title="Select or Upload"
      description="Choose an existing design or upload your own reference."
      pink
    >
      <div className="flex flex-col gap-y-2 sm:flex-row sm:gap-y-0 justify-between rounded-[9px] border border-[#C7CAD1] bg-white p-2">
        <div className="flex gap-x-2 p-2.5 justify-center sm:justify-start items-center bg-[#FFF1F6] rounded-[10px]">
          <HiOutlinePhotograph size={19} className="text-[#DF266F]"></HiOutlinePhotograph>
          <span className="text-[11px] font-semibold leading-[135%] tracking-normal">Select design</span>
        </div>
        <div className="flex gap-x-2 items-center justify-center sm:justify-start  p-2.5 text-[#DF266F] border border-[#DF266F] rounded-[10px]">
          <FiUpload size={19} className="text-[#DF266F]"></FiUpload>
          <span className="text-[11px] font-semibold leading-[135%] tracking-normal">Upload reference</span>
        </div>
      </div>
    </WorkflowCard>
  );
}

function CompareQuotations() {
  return (
    <WorkflowCard
      number="03"
      title="Compare Quotations"
      description="Review offers submitted for the same requirement."
    >
      <div className="flex flex-col gap-[8px]">
        {quotations?.map((quotation) => (
          <div
            key={quotation.id}
            className={`flex min-h-[28px]  items-center justify-between gap-2 rounded-[7px] px-[10px] py-[7px] ${quotation.background}`}
          >
            <span className="text-[10px] font-medium text-[#111318]">
              Quotation {quotation.id}
            </span>

            <span className="inline-flex shrink-0 items-center gap-2 leading-[140%] text-[10px] font-medium text-[#E62E77]">
              Compare scope
              <FaArrowRight size={10} aria-hidden="true" />
            </span>
          </div>
        ))}
      </div>
    </WorkflowCard>
  );
}

function WorkflowArrow() {
  return (
    <div
      aria-hidden="true"
      className="flex shrink-0 items-center justify-center py-1 text-[#E62E77] lg:py-0"
    >
      <FaArrowRight className="rotate-90 text-[18px] lg:rotate-0" />
    </div>
  );
}

export default function DesignLedFeature() {
  return (
    <section
      id="design-led-feature"
      aria-labelledby="design-led-heading"
      className="w-full"
    >
      <div className="flex flex-col gap-y-[22px]">

        {/* Section Heading */}
        <h2
          id="design-led-heading"
          className="text-[30px] font-bold leading-[145%] tracking-normal text-[#111318] sm:text-[38px] "
        >
          Choose a Design or Bring Your Own Idea
        </h2>

        {/* Top Feature Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureSteps?.map((step) => (
            <FeatureCard key={step.number} step={step} />
          ))}
        </div>


        {/* CTA */}
        <div className="flex justify-center items-center">
          <Button
            type="button"
            img={logoIcon}
            onClick={() => {
              // TODO: Connect the approved DESIGN_GALLERY route
            }}
            className="w-[80%] sm:w-auto rounded-[9px] bg-[#E62E77] px-3.5 flex gap-x-2 py-3 text-center text-[13px] font-semibold text-white hover:bg-[#CC0166] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CC0166] "
          >
            Explore Designs in the Utshob App
          </Button>

        </div>


        {/* Bottom Workflow */}
        <div className="grid grid-cols-1 items-stretch gap-[14px] bg-[#FFFFFF] rounded-[22px] border border-[#D6E5E2]  lg:grid-cols-[minmax(0,1fr)_18px_minmax(0,1fr)_18px_minmax(0,1fr)] p-6">

          <BrowseDesigns />

          <WorkflowArrow />

          <SelectDesign />

          <WorkflowArrow />

          <CompareQuotations />
        </div>
      </div>
    </section>
  );
}
