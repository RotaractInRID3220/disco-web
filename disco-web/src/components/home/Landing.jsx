'use client'
import React from 'react'
import CountUp from '../ui/CountUp'
import { ChevronsDown } from 'lucide-react'
import ClickSpark from '../ui/clickSpark'


const Landing = () => {
  return (
    <div>
      <ClickSpark
          sparkColor='#D81B5D'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
      <div className='flex flex-col text-center items-center justify-center lg:mt-[11%] mt-[25%]'>
        <h1 className='font-poppins text-cranberry text-lg'>#RedefineService</h1>
        <h1 className='font-bebas text-cranberry lg:text-[110px] text-7xl leading-none tracking-wide mt-1'>ROTARACT IN RID 3220</h1>
        <p className='text-gray-700 text-center lg:w-4/6 lg:px-20 leading-5 lg:text-[16px] lg:mt-0 mt-5 text-sm'>Rotaract in RID 3220, covering Sri Lanka and the Maldives, is part of a global movement dedicated to empowering young leaders to serve their communities, grow professionally and drive sustainable change. With over 80 clubs and more than 3,500 members, it is a vibrant network of purpose-driven changemakers.</p>
        <a href="" onClick={e => {e.preventDefault();window.scrollBy({ top: window.innerHeight * 0.9, left: 0, behavior: 'smooth' });}} className='flex gap-2 border border-cranberry py-2 px-5 rounded-full lg:mt-8 mt-4 items-center text-cranberry cursor-pointer z-40 hover:bg-cranberry hover:text-white transition-all'><ChevronsDown size={19}/> Explore More <ChevronsDown size={19}/></a>
        
        <div className='lg:grid hidden grid-cols-6 gap-5 items-end -translate-y-28 mb-0'>
          <div className='flex flex-col gap-5'>
              <img src="/l1.svg" alt="" loading="lazy"/>
              <div className='py-4 border-2 border-blackD rounded-2xl max-h-32'>
                  <CountUp to={85} from={20} direction="up" delay={0} duration={2} className="text-7xl font-bebas text-blackD" />
                  <h1 className='text-blackD text-3xl -mt-3'>clubs</h1>
              </div>
          </div>
          <img src="/l4.svg" alt="" loading="lazy"/>
          <img src="/l3.svg" className='col-span-2' alt="" loading="lazy"/>
          <img src="/l5.svg" alt="" loading="lazy"/>
          <div className='flex flex-col gap-5'>
              <img src="/l2.svg" alt="" loading="lazy"/>
              <div className='py-4 border-2 border-blackD rounded-2xl max-h-32'>
                  <CountUp to={2850} from={2000} direction="up" delay={0} duration={2} className="text-7xl font-bebas text-blackD" />
                  <h1 className='text-blackD text-2xl -mt-3'>rotaractors</h1>
              </div>
          </div>
        </div>

        <div className='flex lg:hidden mt-5 flex-col gap-5 items-end mb-0'>
          <div className="grid grid-cols-2 gap-5">
            <img src="/l3.svg" className='col-span-2' alt="" />

            <div className='flex flex-col gap-5'>
              <div className='py-4 border-2 border-blackD rounded-2xl max-h-24'>
                  <CountUp to={85} from={20} direction="up" delay={0} duration={2} className="text-5xl font-bebas text-blackD" />
                  <h1 className='text-blackD text-2xl -mt-3'>clubs</h1>
              </div>
              <img src="/l1.svg" alt="" />
            </div>
            <div className='flex flex-col gap-5'>
              <div className='py-4 border-2 border-blackD rounded-2xl max-h-24'>
                  <CountUp to={2850} from={2000} direction="up" delay={0} duration={2} className="text-5xl font-bebas text-blackD" />
                  <h1 className='text-blackD text-2xl -mt-3'>rotaractors</h1>
              </div>
              <img src="/l2.svg" alt="" />
            </div>
          </div>
        </div>

      </div>
      </ClickSpark>
    </div>
  )
}

export default Landing
