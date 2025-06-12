import React from 'react'
import { InfiniteSliderBasic, InfiniteSliderBasic1, InfiniteSliderBasic2 } from '../ui/InfiniteSlider'

const HomeFifth = () => {
  return (
    <div className='mt-30 flex flex-col items-center'>
        <h1 className='font-bebas text-cranberry text-5xl tracking-wide'>Our Amazing Partners</h1>
        <div className='w-full mt-10 flex flex-col items-center justify-center gap-10'>
            <InfiniteSliderBasic/>
            <InfiniteSliderBasic1/>
            <InfiniteSliderBasic2/>
        </div>
    
    </div>
  )
}

export default HomeFifth
