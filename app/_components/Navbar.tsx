import React from 'react'

export default function Navbar() {
  return (
    <div className='relative flex py-6 px-6 md:px-16 justify-between items-center bg-transparent z-50 text-gray-100'>
        <p className='font-bold text-2xl '>Salem 
            <span className='text-blue-200'>.Dev</span>
        </p>
        <ul className='hidden gap-8 md:flex'>
            <li className='hover:font-semibold hover:text-blue-300 hover:scale-110 duration-500'><a href="">Home</a></li>
            <li className='hover:font-semibold hover:text-blue-300 hover:scale-110 duration-500'><a href="">About me</a></li>
            <li className='hover:font-semibold hover:text-blue-300 hover:scale-110 duration-500'><a href="">Portfolio</a></li>
            <li className='hover:font-semibold hover:text-blue-300 hover:scale-110 duration-500'><a href="">Contact me</a></li>
        </ul>
    </div>
  )
}
