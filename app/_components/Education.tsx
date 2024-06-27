import React from 'react'
import Sectiontitle from './Sectiontitle'

export default function Education() {
  return (
    <div>
 <Sectiontitle title='Education & Experience' subtitle='A comprehensive journey of my academic background and learning experiences.' />
<section>
      <div className="bg-white transition-colors duration-500">
        <div className="w-full mx-auto 2xl:max-w-7xl items-center flex flex-col  justify-start py-4 lg:py-8 relative p-8">
          
          <div className="mt-6 border-t pt-12">
            <div className="bg-white rounded-2xl p-8 border">
              <div className="mx-auto grid grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:grid-cols-4">
                
                <div>
                  <time
                    dateTime="June 2021"
                    className="flex items-center text-sm font-semibold leading-6 text-blue-500"
                  >
                    <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                      <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                    </svg>
                    June 2021
                    <div
                      className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                      aria-hidden="true"
                    ></div>
                  </time>
                  <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    Achieved $65 Million Funding
                  </p>
                  <p className="mt-1 text-sm leading-7 text-gray-500">
                    In an affirmation of our potential and promise, we secured a substantial funding of $65 million.
                  </p>
                </div>
                <div>
                  <time
                    dateTime="June 2021"
                    className="flex items-center text-sm font-semibold leading-6 text-blue-500"
                  >
                    <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                      <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                    </svg>
                    May 2024
                    <div
                      className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                      aria-hidden="true"
                    ></div>
                  </time>
                  <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    Achieved $65 Million Funding
                  </p>
                  <p className="mt-1 text-sm leading-7 text-gray-500">
                    In an affirmation of our potential and promise, we secured a substantial funding of $65 million.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
