import { APP_DOWNLOAD_URL, REQUEST_HOME } from '../../constants/seoHome';
import mobile from '../../assets/web Images/Hero image/heroimage.webp';
import icon from '../../assets/icon.webp'
import Button from '../Shared/Button';
import QRCard from '../QRCard/QRCard';
import appicon from '../../assets/partner.webp'

export const AppConversionSection = ({
  appDownloadUrl = APP_DOWNLOAD_URL,
  requestHomeUrl = REQUEST_HOME,
  title,
  des,
  button1,
  button2,
  button1Url,
  app = '',
  button2Url,
  imageAlt = 'Utshob app for event service requests and quotations',
}) => {
  return (
    <section
      className="overflow-hidden"
      aria-label={title}
    >
      <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-16">
        {/* Content */}
        <div className="flex w-full flex-col gap-y-[14px] lg:flex-2 ">
          <h2 className="text-2xl font-bold leading-[145%] tracking-normal text-[#111318] sm:text-[38px]">
            {title}
          </h2>

          <p className="text-base font-normal leading-[145%] text-[#626773] sm:text-lg">
            {des}
          </p>

          <div className="mt-2 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start sm:gap-5">
            <Button
              img={app == 'partner' ? appicon : icon}
              onClick={() => window.open(button1Url || appDownloadUrl, '_blank', 'noopener,noreferrer')}
              className={`rounded-[10px] px-4 py-2 flex gap-x-2 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md ${app === "partner"
                ? "bg-[#367A70] hover:bg-[#2D685F]"
                : "bg-[#E62E77] hover:bg-[#D0235B]"
                }`}
            >
              {button1}
            </Button>

            {button2 && (
              <a
                href={button2Url || requestHomeUrl}
                className="inline-flex w-full items-center justify-center gap-3 rounded-[10px] border border-[#367A70] bg-white px-4 py-2.5 text-base font-semibold text-[#367A70] shadow-sm transition-all hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto"
              >
                {app === 'partner' && (
                  <img
                    src={appicon}
                    alt="Partner"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                )}

                <span>{button2}</span>
              </a>
            )}
          </div>

          <div className=' hidden sm:block'>
            <QRCard

              label="Customer APP"
              title="Scan to download"
              androidText="Android available now"
              iosText="iOS coming soon"
              actionText=""
              contentWidth="60%"
              colors={{
                background: app == 'partner' ? '#E8F7F5' : "#FFF1F6",
                border: app == 'partner' ? '#367A70' : "#E8D1DB",
                accent: app == "partner" ? '#1C4F4A' : "#CC0166",
                title: "#171717",
                description: "#6B7280",
              }}
            />
          </div>
        </div>

        {/* Image */}
        <div className="flex w-full flex-1 justify-center lg:justify-end">
          <div className="flex w-full flex-1 justify-center lg:justify-end">
            <img
              src={mobile}
              alt={imageAlt}
              loading="lazy"
              decoding="async"
              className="max-h-[500px] w-full max-w-[320px] object-contain sm:max-w-[380px] lg:max-w-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppConversionSection;