import React from 'react'

export default function Sectiontitle({title,subtitle}: {title: string, subtitle: string}) {
  return (
    <div className='flex flex-col gap-2 items-center my-8 py-8'>
      <span className='h-16 w-[2px] bg-gradient-primary'></span>
      <p className='uppercase  tracking-widest'>{title}</p>
      <h2 className='text-xl text-center md:text-3xl font-semibold w-[300px] md:w-[700px]'>{subtitle}</h2>
    </div>
  )
}
