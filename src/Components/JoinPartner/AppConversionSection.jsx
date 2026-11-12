import { APP_DOWNLOAD_URL, REQUEST_HOME } from '../../constants/seoHome';
import mobile from '../../assets/web Images/Hero image/heroimage.png';
import partnerMobile from '../../assets/uthosob-partner.png'
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



          <div className="mt-2 w-full sm:w-[75%]">

            <div className="flex flex-col sm:flex-row gap-y-3 gap-x-3">

              {/* Button 1 */}
              <Button
                img={app === 'partner' ? appicon : icon}
                onClick={() =>
                  window.open(button1Url || appDownloadUrl, '_blank', 'noopener,noreferrer')
                }
                className={`flex  min-w-0 items-center justify-center  rounded-[10px] px-2 py-2 text-sm font-semibold text-white shadow-sm  sm:text-xs md:px-4 md:text-base ${app === 'partner'
                  ? 'bg-[#367A70] w-full gap-x-1 hover:bg-[#2D685F]'
                  : 'bg-[#E62E77] gap-x-3 w-full sm:w-auto hover:bg-[#D0235B]'
                  }`}
              >
                {button1}
              </Button>

              {/* Button 2 */}
              {button2 && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={button2Url || requestHomeUrl}
                  className="flex w-full min-w-0 items-center justify-center gap-1 rounded-[10px] border border-[#367A70] bg-white px-2 py-2 text-center text-sm sm:text-xs font-semibold text-[#367A70] shadow-sm md:px-4 md:text-base"
                >
                  {app === 'partner' && (
                    <img
                      src={appicon}
                      alt="Partner"
                      className="h-8 w-8 shrink-0 rounded-full object-cover md:h-8 md:w-8"
                    />
                  )}
                  {button2}
                </a>
              )}
            </div>

            {/* QR Card */}
            <div className="mt-3 hidden w-full sm:block">
              <QRCard
                label={app === 'partner' ? 'Partner APP' : 'Customer APP'}
                title="Scan to download"
                androidText="Android available now"
                iosText="iOS coming soon"
                contentWidth="100%"
                colors={{
                  background: app === 'partner' ? '#E8F7F5' : '#FFF1F6',
                  border: app === 'partner' ? '#367A70' : '#E8D1DB',
                  accent: app === 'partner' ? '#1C4F4A' : '#CC0166',
                  title: '#171717',
                  description: '#6B7280',
                }}
              />
            </div>

          </div>


        </div>

        {/* Image */}
        <div className="flex w-full flex-1 justify-center lg:justify-end">
          <div className="flex w-full flex-1 justify-center lg:justify-end">
            <img
              src={app == 'partner' ? partnerMobile : mobile}
              alt={imageAlt}
              loading="lazy"
              decoding="async"
              width="548"
              height="1080"
              className="max-h-[500px] w-full max-w-[320px] object-contain sm:max-w-[380px] lg:max-w-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppConversionSection;