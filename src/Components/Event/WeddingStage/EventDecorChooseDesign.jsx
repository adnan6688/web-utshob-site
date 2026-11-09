import React from 'react';
import { Upload } from 'lucide-react';

const EventDecorChooseDesign = () => {
  return (
    <section className="w-full ">
      
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#111318] tracking-normal leading-[38px]">
          Choose a Design or Upload Your Own
        </h2>
        <div className="flex items-center gap-2 mt-2">
          <span className="bg-[#FFF1F6] text-[#E91E63] text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-normal">
            IN THE UTSHOB APP
          </span>
          <span className="text-xs sm:text-[13px] text-[#667085] leading-[19px]">
            These are two ways to define the design before providers bid.
          </span>
        </div>
      </div>

      {/* Two Column Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        
        {/* Card 1: Choose an Existing Design */}
        <div className="bg-white rounded-2xl border border-[#E1E5EA] p-6  flex flex-col justify-between transition-all duration-300 ease-out  shadow-[0_8px_28px_rgba(0,0,0,0.08)] hover:border-gray-200">
          <div>
            {/* Visual Design Grid Mockup */}
            <div className="bg-pink-50/60 rounded-xl p-4 border border-[#F7B7CF] relative mb-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-pink-100/70 h-24 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80"
                    alt="Utshob App Wedding Stage Design Template"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-blue-50/70 h-24 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=400&q=80"
                    alt="Floral Stage Setup Design Collection"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#F3E8FF] h-24 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=400&q=80"
                    alt="Traditional Bangladesh Wedding Decoration"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-amber-50 h-24 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=400&q=80"
                    alt="Premium Customized Stage Setup"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Tag overlay */}
              <div className="mt-3">
                <span className="inline-block bg-white border border-pink-200 text-[#E91E63] text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  Design collection in app
                </span>
              </div>
            </div>

            {/* Card Content */}
            <h3 className="text-lg font-bold text-[#111318] mb-2">
              Choose an Existing Design
            </h3>
            <p className="text-sm text-[#59606C] leading-relaxed">
              Browse wedding stage designs available in the Utshob app and select one that matches your event.
            </p>
          </div>
        </div>

        {/* Card 2: Upload Your Own Design */}
        <div className="bg-white rounded-2xl border border-[#E1E5EA] p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            {/* Visual Upload Area */}
            <div className="bg-[#EDF8FF] rounded-xl h-60 border border-blue-100 flex flex-col items-center justify-center p-6 text-center mb-6">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-pink-100 flex items-center justify-center mb-3">
                <Upload className="w-5 h-5 text-[#E91E63]" />
              </div>
              <p className="text-sm font-semibold text-gray-800 mb-2">
                Your reference image
              </p>
              <span className="inline-block bg-white border border-pink-200 text-[#E91E63] text-xs  px-3 py-1 rounded-full  uppercase tracking-normal">
                UPLOAD IN UTSHOB APP
              </span>
            </div>

            {/* Card Content */}
            <h3 className="text-lg font-bold text-[#111318] mb-2">
              Upload Your Own Wedding Stage Design
            </h3>
            <p className="text-sm text-[#59606C] leading-relaxed mb-2">
              Already have a stage idea from Pinterest, Facebook, another event or your own reference?
            </p>
            <p className="text-sm text-[#59606C] leading-relaxed">
              Upload the image and add the specifications you need.
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Footer Note */}
      <div className="mt-6 bg-slate-100/70 rounded-xl p-4 text-center">
        <p className="text-xs sm:text-sm  leading-[21px] text-[#111318]">
          Relevant providers can review the same design and requirement before submitting their bids.
        </p>
      </div>

    </section>
  );
};

export default EventDecorChooseDesign;