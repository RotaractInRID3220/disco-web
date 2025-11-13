import { Calendar, Clock, LocateIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Countdown from './Countdown'
import { Button } from '@/components/ui/button'

const Event = () => {
  return (
    <a href="https://srilankafitnessexpo.lk/events/community-run" target="_blank" rel="noopener noreferrer">
      <div className="grid lg:grid-cols-3 items-center justify-center w-full bg-gradient-to-r from-cranberry via-cranberry/80 text-white to-cranberry  animate-gradient rounded-xl lg:py-10 py-5 lg:px-10 px-5 lg:gap-10 gap-4 relative">
        <Image src="/Run.jpg" width={400} height={500} className="rounded-lg lg:scale-100 scale-90" alt=''/>
        <div className='lg:col-span-2 flex lg:block flex-col items-center justify-center'>
          <div className='lg:absolute top-4 right-4 scale-90 lg:scale-100'>
              <Countdown targetDateTime="2025-11-22T08:00:00"/>
          </div>
          <h1 className="font-bebas lg:text-7xl text-6xl lg:text-left text-center tracking-wide lg:mt-16 mt-8">RUN FOR CHANGE</h1>
          <Button className="mb-6 mt-2 text-lg p-5 bg-transparent border border-white cursor-pointer hover:bg-white hover:text-cranberry mx-auto">REGISTER NOW</Button>
          <hr className="border-white/30 w-full"/>
          <div className="flex lg:flex-row flex-col gap-3 mt-6 px-5 lg:px-0 ">
              <h2 className="flex gap-2 bg-white/20 border border-white px-4 py-2 rounded-full lg:w-1/3 w-full justify-center"><Calendar/> 22nd Novermber 2025</h2>
              {/* <h2 className="flex gap-2 bg-white/20 border border-white px-4 py-2 rounded-full lg:w-2/5 w-full justify-center"><LocateIcon/>Sri Lanka Exhibition and Convention Center</h2> */}
              <h2 className="flex gap-2 bg-white/20 border border-white px-4 py-2 rounded-full lg:w-1/3 w-full justify-center"><Clock/> 8.00am Onwards</h2>
          </div>
          <div className="flex lg:flex-row flex-col gap-3 mt-5 px-5 lg:px-0">
              <h2 className="flex gap-2 bg-white/20 border border-white px-4 py-2 rounded-full lg:w-3/6 w-full justify-center items-center text-center"><LocateIcon/>Sri Lanka Exhibition and Convention Center</h2>
          </div>
      
        </div>
      </div>
    </a>
  )
}

export default Event
