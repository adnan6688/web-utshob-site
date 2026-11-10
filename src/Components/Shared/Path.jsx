import React from 'react'


export default function Path({ from, to }) {
    return (
        <div id='path' className='mx-auto w-full max-w-[1180px] px-4 pt-6 sm:px-0'>
            <p className='font-inter text-[13px] font-medium leading-[18px] tracking-normal text-[#59606C]'>
                <span>{from}</span> / <span>{to}</span>
            </p>
        </div>
    )
}
