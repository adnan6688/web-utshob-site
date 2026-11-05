import React from 'react';
import {Phone} from 'lucide-react';

import Button from '../Shared/Button';
const CustomerCare = () => {
    return (
        <div id="customer-care" className='space-y-4'>
            <h2 className='text-[20px] sm:text-3xl md:text-4xl lg:text-4xl font-semibold'>Need Help Using Utshob?</h2>
            <p className='text-[15px] text-[#626773]'>Contact Utshob.xyz support for help with requests, quotations or confirmed bookings.</p>
            <div>
                <div className='flex gap-3 items-center'>
                    <a
                        href="tel:01575336382"
                        className='border border-[#DF266F] text-[#DF266F] bg-white sm:px-6 px-3 py-2 text-[15px] rounded-xl flex items-center justify-center gap-2 font-medium hover:bg-pink-50 transition-colors'
                    >
                        <Phone className='w-4 h-4' />
                        <span>01575 336382</span>
                    </a>

                    <Button className='bg-[#DF266F] hover:bg-[#c41e5e] text-white sm:px-6 px-3 py-2 text-[15px] rounded-xl flex items-center justify-center font-medium transition-colors'>
                        Request Service
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CustomerCare;