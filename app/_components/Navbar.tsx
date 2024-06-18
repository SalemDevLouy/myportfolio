import React from 'react'

export default function () {
  return (
    <div className='flex py-6 px-8 justify-between items-center bg-gray-400'>
        <p className='font-bold text-2xl'>Salem 
            <span className='text-blue-700'>.Dev</span>
        </p>
        <ul className='flex gap-4'>
            <li className='hover:font-semibold hover:text-blue-700 hover:scale-110 duration-500'><a href="">Home</a></li>
            <li className='hover:font-semibold hover:text-blue-700 hover:scale-110 duration-500'><a href="">About me</a></li>
            <li className='hover:font-semibold hover:text-blue-700 hover:scale-110 duration-500'><a href="">Portfolio</a></li>
            <li className='hover:font-semibold hover:text-blue-700 hover:scale-110 duration-500'><a href="">Contact me</a></li>
        </ul>
    </div>
  )
}
