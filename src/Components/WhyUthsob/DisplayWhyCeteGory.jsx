import React from 'react';

const DisplayWhyCeteGory = ({item}) => {
    return (
        <div className=' max-h-[250px]'>
            <div className="rounded-xl overflow-hidden border border-gray-200 py-2 sm:h-[18vh] max-w-[320px] md:h-[250px] flex flex-col justify-center items-center transition duration-500">
                <div className="flex justify-center items-center">
                    <img
                        className="transform block  w-[80px] sm:hidden hover:scale-105 hover:brightness-105 transition duration-500 ease-in-out object-contain"
                        src={item?.image2}
                        alt={item?.title || "image"}
                        width="80"
                        height="80"
                        loading="lazy"
                        decoding="async"
                    />
                    <img
                        className="transform w-[100px] hidden sm:block hover:scale-105 hover:brightness-105 transition duration-500 ease-in-out object-contain"
                        src={item?.img}
                        alt={item?.title || "image"}
                        width="100"
                        height="100"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <div className="flex justify-center mt-2">
                    <p className="text-[11px] sm:text-[11px] text-center font-medium md:text-[15px]">{item?.title}</p>
                </div>
            </div>
        </div>
    );
};

export default DisplayWhyCeteGory;