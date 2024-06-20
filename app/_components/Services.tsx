import Image from 'next/image'
import Sectiontitle from './Sectiontitle'
import designicon from '@/public/assets/design.svg'
import codingicon from '@/public/assets/coding.svg'
export default function 
() {
  return (
    <div>
        <Sectiontitle title='services' subtitle='services'/>
                {/* services cards */}
                <div className="flex items-center justify-center flex-col sm:flex-row mt-6 gap-14">
                  {/* cards */}
                    <div className="flex flex-col gap-4 items-center justify-center text-center w-[300px] h-[300px] border-2 border-blue-500 p-6">
                        <div className="icon">
                          <Image src={designicon} alt='design service' priority width={45} height={45}/>
                        </div>
                        <h3 className='font-semibold text-2xl'>Graphic design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-center text-center w-[300px] h-[300px] border-2 border-blue-500 p-6">
                        <div className="icon">
                          <Image src={codingicon} alt='design service' priority width={45} height={45}/>
                        </div>
                        <h3 className='font-semibold text-2xl'>web Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-center text-center w-[300px] h-[300px] border-2 border-blue-500 p-6">
                        <div className="icon">
                          <Image src={codingicon} alt='design service' priority width={45} height={45}/>
                        </div>
                        <h3 className='font-semibold text-2xl'>web Development</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
                    </div>
                    
                </div>
    </div>
  )
}
