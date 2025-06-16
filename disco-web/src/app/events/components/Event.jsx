import { Calendar, Clock, LocateIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Countdown from './Countdown'

const Event = () => {
  return (
    <div className="grid lg:grid-cols-3 items-center justify-center w-full bg-gradient-to-r from-cranberry via-cranberry/80 text-white to-cranberry  animate-gradient rounded-xl lg:py-10 py-5 lg:px-10 px-5 lg:gap-10 gap-4 relative">
      <Image src="/Assembly.jpg" width={400} height={500} className="rounded-lg lg:scale-100 scale-90" alt=''/>
      <div className='lg:col-span-2'>
        <div className='lg:absolute top-4 right-4 scale-90 lg:scale-100'>
            <Countdown targetDateTime="2025-06-28T07:00:00"/>
        </div>

        <h1 className="font-bebas lg:text-6xl text-6xl lg:text-left text-center tracking-wide mt-8">35th Rotaract District Assembly</h1>
        <div className="flex lg:flex-row flex-col gap-3 mt-3 px-5 lg:px-0">
            <h2 className="flex gap-2 bg-white/20 border border-white px-4 py-2 rounded-full lg:w-1/3 w-full justify-center"><Calendar/> 28th of June 2025</h2>
            <h2 className="flex gap-2 bg-white/20 border border-white px-4 py-2 rounded-full lg:w-1/3 w-full justify-center"><Clock/> 7am Onwards</h2>
        </div>
        <div className="flex lg:flex-row flex-col gap-3 mt-3 px-5 lg:px-0">
            <h2 className="flex gap-2 bg-white/20 border border-white px-4 py-2 rounded-full lg:w-1/3 w-full justify-center"><LocateIcon/> Monarch Imperial</h2>
        </div>
            

      </div>
    </div>
  )
}

export default Event
