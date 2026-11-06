import React from 'react'


export default function Path({ from, to }) {
    return (
        <div className='path'>
            <p className='text-[#59606C] font-inter font-medium text-[12px] leading-[17px] tracking-normal'> <span>{from}</span> /<span>{to} </span></p>
        </div>
    )
}
