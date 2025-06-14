import { CircleArrowOutUpRight } from 'lucide-react'
import React from 'react'

const HomeSixth = () => {
  return (
    <div className='lg:grid grid-cols-2 lg:mt-30 mt-20'>
      <a href="">
        <div className='bg-cranberry hover:bg-white transition-all border-2 border-cranberry  lg:py-16 py-10 items-center justify-center flex group relative'>
            <h1 className='font-bebas text-white text-4xl tracking-widest group-hover:text-cranberry transition-all'>CHECKOUT OUR BLOG</h1>
            <h1 className='text-white w-8 h-8 border-white border rounded-full flex justify-center items-center absolute top-3 right-3 bg-cranberry'><CircleArrowOutUpRight size={18}/></h1>
        </div>
      </a>
      <a href="">
        <div className='bg-white hover:bg-cranberry transition-all border-2 border-cranberry  lg:py-16 py-10 items-center justify-center flex group relative'>
            <h1 className='font-bebas text-cranberry text-4xl tracking-widest group-hover:text-white transition-all'>CHECKOUT OUR PODCAST</h1>
            <h1 className='text-cranberry w-8 h-8 border-cranberry border rounded-full flex justify-center items-center absolute top-3 right-3 bg-white'><CircleArrowOutUpRight size={18}/></h1>
        </div>
      </a>
    </div>
  )
}

export default HomeSixth
