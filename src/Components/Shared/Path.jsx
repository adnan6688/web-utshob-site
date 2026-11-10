import React from 'react'


export default function Path({ from, to }) {
    return (
        <div id='path' className='pt-6 px-4 lg:px-0'>
            <p className='text-[#59606C]   font-inter font-medium text-[13px] leading-[18px] tracking-normal'> <span>{from}</span> /<span>{to} </span></p>
        </div>
    )
}
