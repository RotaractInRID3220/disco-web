import React from 'react'

const HomeThird = () => {
  return (
    <div className='mt-20 lg:grid grid-cols-5 gap-10 items-center overscroll-none touch-pan-x touch-pan-y'>
        <div className='sticky col-span-2 lg:top-64 top-20 self-start lg:text-left text-center'>
            <h1 className='font-bebas lg:text-7xl text-5xl text-blackD'>Why</h1>
            <h2  className='font-bebas lg:text-9xl text-7xl text-cranberry -mt-2'>Rotaract?</h2>
            <p className='text-lg leading-7'>Following Rotaract means joining a journey of purpose, progress, and people. Whether you're looking to:</p>
        </div>
    
        <div className="col-span-3 flex flex-col gap-80 sticky top-64 lg:mt-0 mt-20 ">
            <div className='sticky flex lg:flex-row flex-col lg:text-left text-center gap-5 justify-between lg:top-58 top-80 lg:h-96 h-[500px] items-center border-2 bg-white z-10 rounded-2xl pl-10 pr-5 lg:py-20 py-10'>
                <h1 className='lg:text-5xl text-5xl text-cranberry font-bebas'>Make a positive impact</h1>
                <img src="/w1.png" className='h-84' loading="lazy"/>
            </div>
            <div className='sticky flex lg:flex-row flex-col lg:text-left text-center gap-5 justify-between lg:top-64 top-84 lg:h-96 h-[500px] items-center border-2 bg-white z-10 rounded-2xl pl-10 pr-5 lg:py-20 py-10'>
                <h1 className='lg:text-5xl text-4xl text-cranberry font-bebas'>Develop leadership and professional skills</h1>
                <img src="/w2.png" className='h-84' loading="lazy"/>
            </div>
            <div className='sticky flex lg:flex-row flex-col lg:text-left text-center gap-5 justify-between lg:top-68 top-88 lg:h-96 h-[500px] items-center border-2 bg-white z-10 rounded-2xl pl-10 pr-5 lg:py-20 py-10'>
                <h1 className='lg:text-5xl text-5xl text-cranberry font-bebas'>Be part of a global movement</h1>
                <img src="/w3.png" className='h-84' loading="lazy"/>
            </div>
            <div className='sticky flex lg:flex-row flex-col lg:text-left text-center gap-5 justify-between lg:top-72 top-92 lg:h-96 h-[500px] items-center border-2 bg-white z-10 rounded-2xl pl-10 pr-5 lg:py-20 py-10'>
                <h1 className='lg:text-5xl text-4xl text-cranberry font-bebas'>Connect with a network of inspiring young leaders</h1>
                <img src="/w4.png" className='h-84' loading="lazy"/>
            </div>
            <div className='sticky flex gap-5 justify-between top-64 h-32 '>
            </div>
        </div>
    </div>
  )
}

export default HomeThird