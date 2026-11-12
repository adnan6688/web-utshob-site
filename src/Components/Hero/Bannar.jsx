
import { FaArrowRight } from "react-icons/fa";

import bannar from "../../assets/web Images/Hero image/heroimage.png";
import logoIcon from "../../assets/apple-touch-icon.png";
import Button from "../Shared/Button";
import { APP_DOWNLOAD_URL, REQUEST_HOME } from '../../constants/seoHome';

const Bannar = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative  flex flex-col items-center justify-between gap-y-4 sm:gap-29 overflow-hidden  md:flex-row"
    >
      <div
        data-aos="fade-right"
        className="w-full space-y-[14px] text-start sm:px-0 sm:text-left md:w-[65%]"
      >
        <p className="text-[12px] bg-[#FFF1F6] rounded-l-full rounded-r-full w-fit p-2 font-semibold leading-[145%] tracking-normal">
          Event App মানেই Utshob.xyz
        </p>

        <h1
          id="hero-heading"
          className="font-inter text-3xl sm:text-[40px] font-bold leading-snug tracking-normal text-[#111318] md:text-2xl lg:text-[56px] lg:leading-[115%]"
        >
          Find Event Services Across Bangladesh
        </h1>

        <p className="w-[90%] font-noto text-[18px] font-normal leading-normal tracking-normal text-[#626773] md:w-[75%] lg:leading-[150%]">
          From decoration and photography to car rental, cake, sound, lighting
          and rentals—submit one requirement, receive quotations and compare
          before you book.
        </p>

        <div className="flex flex-wrap items-center gap-2 font-inter text-[16px] font-semibold tracking-normal text-[#111318]">
          <span>One Request</span>
          <FaArrowRight className="shrink-0" aria-hidden="true" />

          <span>Multiple Quotations</span>
          <FaArrowRight className="shrink-0" aria-hidden="true" />

          <span>Compare</span>
          <FaArrowRight className="shrink-0" aria-hidden="true" />

          <span>Book</span>
        </div>

        <p className="font-noto text-[20px] font-semibold leading-[145%] tracking-normal">
          সারাদেশে ইভেন্ট সার্ভিস খুঁজুন, তুলনা করুন ও বুক করুন।
        </p>

        <div className="flex flex-col gap-y-3 sm:flex-row sm:gap-x-3">
          <Button
            img={logoIcon}
            onClick={() => window.open(APP_DOWNLOAD_URL, '_blank', 'noopener,noreferrer')}
            className="flex gap-x-2 rounded-[10px] bg-[#E62E77] py-2 text-[14px] font-semibold leading-[145%] tracking-normal text-white sm:px-4"
          >
            Get Quotations in App
          </Button>

          <a
            href="/#event-services"
            className="inline-flex items-center justify-center rounded-[10px] border border-[#E62E77] bg-white px-4 py-3 text-[14px] font-semibold leading-[145%] tracking-normal text-[#111318] transition-colors hover:bg-[#FFF1F6] sm:px-4"
          >
            Explore Event Services
          </a>
        </div>
      </div>

      <div data-aos="fade-left" className="sm:block md:w-[35%]">
        <div className="mx-auto flex w-[80%] justify-center sm:w-[70%] md:mx-0 md:w-full">
            <img
              src={bannar}
              alt="Utshob app showing event service quotations and provider comparison across Bangladesh"
              width="548"
              height="1080"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-full sm:w-[80%] md:w-full lg:h-2/3 lg:w-[250px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Bannar;
