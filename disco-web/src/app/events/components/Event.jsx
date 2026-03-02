import { Calendar, Clock, LocateIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Countdown from './Countdown'
import { Button } from '@/components/ui/button'

const Event = () => {
  return (
      <div className="grid lg:grid-cols-3 items-center justify-center w-full bg-gradient-to-r from-cranberry via-cranberry/80 text-white to-cranberry  animate-gradient rounded-xl lg:py-10 py-5 lg:px-10 px-5 lg:gap-10 gap-4 relative">
        <Image src="/RDC.jpeg" width={400} height={500} className="rounded-lg lg:scale-100 scale-90" alt=''/>
        <div className='lg:col-span-2 flex lg:block flex-col items-center justify-center'>
          <div className='lg:absolute top-4 right-4 scale-90 lg:scale-100'>
              <Countdown targetDateTime="2026-04-01T08:00:00"/>
          </div>
          <h1 className="font-bebas lg:text-7xl text-6xl lg:text-left text-center tracking-wide lg:mt-16 mt-8">ROTARACT DISTRICT CONFERENCE</h1>
          <hr className="border-white/30 w-full"/>
          <div className="flex lg:flex-row flex-col gap-3 mt-6 px-5 lg:px-0 ">
              <h2 className="flex gap-2 bg-white/20 border border-white px-4 py-2 rounded-full lg:w-1/3 w-full justify-center"><Calendar/> 1st April 2026</h2>
              {/* <h2 className="flex gap-2 bg-white/20 border border-white px-4 py-2 rounded-full lg:w-2/5 w-full justify-center"><LocateIcon/>Sri Lanka Exhibition and Convention Center</h2> */}
              {/* <h2 className="flex gap-2 bg-white/20 border border-white px-4 py-2 rounded-full lg:w-1/3 w-full justify-center"><Clock/> 8.00am Onwards</h2> */}
                            <h2 className="flex gap-2 bg-white/20 border border-white px-4 py-2 rounded-full lg:w-3/6 w-full justify-center items-center text-center"><LocateIcon/>Marino Beach Hotel</h2>
          </div>
          <div className="flex lg:flex-row flex-col gap-3 mt-5 px-5 lg:px-0">
              {/* <h2 className="flex gap-2 bg-white/20 border border-white px-4 py-2 rounded-full lg:w-3/6 w-full justify-center items-center text-center"><LocateIcon/>Marino Beach Hotel</h2> */}
          </div>
      
        </div>
      </div>
  )
}

export default Event
