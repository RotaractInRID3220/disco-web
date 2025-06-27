import { CircleArrowOutUpRight } from 'lucide-react'
import React from 'react'

const HomeSixth = () => {
  return (
    <div className='lg:grid grid-cols-2 lg:mt-30 mt-20'>
      <a href="https://blog.rotaract3220.org/">
        <div className='bg-cranberry  transition-all border-2 border-cranberry  lg:py-16 py-10 items-center justify-center flex group relative'>
            <h1 className='font-bebas text-white text-4xl group-hover:underline underline-offset-8 tracking-widest  transition-all'>CHECKOUT OUR BLOG</h1>
            <h1 className='text-white w-8 h-8 group-hover:bg-white group-hover:text-cranberry  border-white border rounded-full flex justify-center items-center absolute top-3 right-3 bg-cranberry transition-all'><CircleArrowOutUpRight size={18}/></h1>
        </div>
      </a>
      <a href="https://www.youtube.com/@Rotaract3220/videos">
        <div className='bg-white  transition-all border-2 border-cranberry  lg:py-16 py-10 items-center justify-center flex group relative'>
            <h1 className='font-bebas text-cranberry text-4xl tracking-widest group-hover:underline underline-offset-8 transition-all'>CHECKOUT OUR PODCAST</h1>
            <h1 className='text-cranberry w-8 h-8 border-cranberry group-hover:bg-cranberry group-hover:text-white transition-all border rounded-full flex justify-center items-center absolute top-3 right-3 bg-white'><CircleArrowOutUpRight size={18}/></h1>
        </div>
      </a>
    </div>
  )
}

export default HomeSixth
