import Image from 'next/image'

export default function Hero() {
  return (
    <div className='relative top-[-80px] '>
      <div className='h-[800px] '>
        <Image
        src="/banner.png"
        alt="banner image"
        fill
      />
      </div>
      <div className='absolute top-0 left-0 flex flex-col gap-3 justify-center items-center w-full h-full'>
        <div className=' md:w-[650px] flex flex-col items-center justify-center'>
          <h1 className='text-gray-100 p-2  md:text-[60px] text-4xl font-bold text-center animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white'>
          Hello I'm Salem ;)
        </h1>
        <div className='text-gray-100 flex flex-col md:flex-row items-center gap-2 capitalize'>
          <span className='h-[3px] w-24 bg-white'></span>
          <p className='text-2xl'>web developer</p>
          <span></span>
        </div>
        </div>
        
      </div>
      
    </div>
  )
}
