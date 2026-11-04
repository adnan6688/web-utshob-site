import React from 'react';
import logo from '../assets/apple-touch-icon.png'

const MobileFooter = () => {
    return (
        <div className='block sm:hidden shadow h-[35px] px-1'>
            <div className="">
                <div className="flex justify-between px-1 py-3 bg-white ">
                    <div className="flex gap-2">

                        <div className="flex justify-center items-center">
                            <img className="w-[36px] rounded-lg" src={logo} alt="" />
                        </div>
                        <div>
                            <p className="text-[16px] font-semibold">Download App</p>
                            <p className="text-[9px] font-semibold">2000+ Event Services provided all over Bangladesh</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <a target="_blank" href="https://play.google.com/store/apps/details?id=xyz.Utshob&pli=1">
                            <button className="txt w-[85px] mt-1 text-[11px] px-1 py-1 border-2 rounded-md ">Download</button></a>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default MobileFooter;