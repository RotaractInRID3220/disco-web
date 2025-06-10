'use client'
import { CircleArrowOutUpRight } from 'lucide-react'
import React from 'react'
import GlareHover from '../ui/Glare'

const HomeFourth = () => {
  return (
    <div className='mt-40 rounded-2xl bg-cranberry flex flex-col items-center py-10 px-10 relative'>
      <div className='text-center flex gap-5 items-center'>
        <h1 className='font-bebas text-white text-4xl'>Upcoming District Events</h1>
        <a href="" className='flex absolute top-5 right-5 items-center w-8 h-8 border-2 border-white text-white rounded-full text-center justify-center hover:bg-white hover:text-cranberry'><CircleArrowOutUpRight size={18} /></a>
      </div>
      <div className=' mt-5 flex gap-5 justify-center'>
        <div className='h-[500px] w-[400px] bg-blackD rounded-xl hover:scale-101 cursor-pointer relative'>
            <img src="/Assembly.jpg" className='absolute top-0 left-0 object-cover w-[400px] h-[500px] rounded-xl' alt="" />
            <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
            ></GlareHover>
        </div>
        <div className='h-[500px] w-[400px] bg-blackD rounded-xl hover:scale-101 cursor-pointer'></div>
        <div className='h-[500px] w-[400px] bg-blackD rounded-xl hover:scale-101 cursor-pointer'></div>
      </div>
    </div>
  )
}

export default HomeFourth
