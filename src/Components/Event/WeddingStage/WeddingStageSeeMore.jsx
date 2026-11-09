import React from 'react';
import Button from '../../Shared/Button';

export default function WeddingStageSeeMore() {
    return (
        <section className="">
            <div className=" flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="">
                    <h2 className="text-xl sm:text-[28px] font-bold text-gray-900 mb-2">
                        See More Wedding Stage Designs in the Utshob App
                    </h2>
                    <p className="text-[15px] max-w-3xl leading-[145%] text-gray-600 ">
                        The website shows only a selected collection. Explore more wedding stage designs and provider portfolios in the Utshob app, or upload your own design if you cannot find the setup you want.
                    </p>
                </div>

                <div className="flex-shrink-0">
                    <Button
                        type="button"
                        className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold py-3 px-6 rounded-lg shadow-sm"
                    >
                        See More Designs in App
                    </Button>
                </div>
            </div>
        </section>
    );
}