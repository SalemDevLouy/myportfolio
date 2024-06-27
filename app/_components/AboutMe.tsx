import React from 'react'
import Sectiontitle from './Sectiontitle'

export default function AboutMe() {
  return (
    <div>
      <Sectiontitle 
      title="About Me" 
      subtitle="Learn more about who I am, my background, and what drives my passion for web development." 
      />
  

<section className="overflow-hidden bg-gray-200 sm:grid sm:grid-cols-2 sm:items-center">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <div className='flex items-center gap-4'>
        <span className='h-1 w-24 bg-gradient-primary '></span>
        <h2 className="text-2xl font-bold text-gray-900 md:text-5xl capitalize text-left">
        who am i ?
      </h2>
      </div>
      

      <p className=" text-gray-500 text-left mt-4">
      Hello! I'm Louafi Salem, a passionate web developer specializing in React and Next.js.
           With a strong foundation in front-end development, I create dynamic, responsive, and 
           user-friendly web applications. My focus is on leveraging the latest technologies and
            best practices to deliver high-quality code and exceptional user experiences. Explore 
            my portfolio to see the projects I've worked on and how I can bring value to your next
             web development project
      </p>
    </div>
  </div>
  
  <div className='p-8 w-full h-[400px]  sm:h-[600px] relative bg-gradient-primary rounded-ss-[50px] rounded-ee-[50px] mb-8'>
    <img
    alt=""
    src="/assets/salem.png"
    className="h-full w-full object-cover absolute top-10 left-[-20px]   rounded-ss-[60px] rounded-ee-[60px]"
  />
  </div>
  
</section>
    </div>
  )
}
