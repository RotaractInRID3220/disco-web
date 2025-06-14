import React from 'react'
import { InfiniteSliderBasic, InfiniteSliderBasic1, InfiniteSliderBasic2 } from '../ui/InfiniteSlider'

const HomeFifth = () => {
  return (
    <div className='lg:mt-30 mt-20 flex flex-col items-center'>
        <h1 className='font-bebas text-cranberry lg:text-5xl text-4xl tracking-wide'>Our Amazing Partners</h1>
        <div className='w-full mt-10 flex flex-col items-center justify-center lg:gap-10 gap-6'>
            <InfiniteSliderBasic/>
            <InfiniteSliderBasic1/>
            <InfiniteSliderBasic2/>
        </div>
    
    </div>
  )
}

export default HomeFifth
