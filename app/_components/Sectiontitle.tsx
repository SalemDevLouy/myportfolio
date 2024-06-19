import React from 'react'

export default function Sectiontitle({title,subtitle}: {title: string, subtitle: string}) {
  return (
    <div className='flex flex-col gap-2 items-center'>
      <span className='h-16 w-[2px] bg-gradient-primary'></span>
      <p className='uppercase'>{title}</p>
      <h2 className='text-3xl md:text-4xl font-semibold'>{subtitle}</h2>
    </div>
  )
}
