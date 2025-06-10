import React from 'react'

const HomeThird = () => {
  return (
    <div className='mt-20 grid grid-cols-5 gap-10 items-center'>
        <div className='sticky col-span-2 top-64 self-start'>
            <h1 className='font-bebas text-7xl text-blackD'>Why</h1>
            <h2  className='font-bebas text-9xl text-cranberry -mt-2'>Rotaract?</h2>
            <p className='text-lg leading-7'>Following Rotaract means joining a journey of purpose, progress, and people. Whether you're looking to:</p>
        </div>
    
        <div className="col-span-3 flex flex-col gap-80 sticky top-64">
            <div className='sticky flex gap-5 justify-between top-58 h-96 items-center border-2 bg-white z-10 rounded-2xl pl-10 pr-5 py-20'>
                <h1 className='text-5xl text-cranberry font-bebas'>Make a positive impact</h1>
                <img src="/w4.svg" className='h-84' />
            </div>
            <div className='sticky flex gap-5 justify-between top-64 h-96 items-center border-2 bg-white z-10 rounded-2xl pl-10 pr-5 py-20'>
                <h1 className='text-5xl text-cranberry font-bebas'>Develop leadership and professional skills</h1>
                <img src="/w2.svg" className='h-84' />
            </div>
            <div className='sticky flex gap-5 justify-between top-68 h-96 items-center border-2 bg-white z-10 rounded-2xl pl-10 pr-5 py-20'>
                <h1 className='text-5xl text-cranberry font-bebas'>Be part of a global movement</h1>
                <img src="/w1.svg" className='h-84' />
            </div>
            <div className='sticky flex gap-5 justify-between top-72 h-96 items-center border-2 bg-white z-10 rounded-2xl pl-10 pr-5 py-20'>
                <h1 className='text-5xl text-cranberry font-bebas'>Connect with a network of inspiring young leaders</h1>
                <img src="/w3.svg" className='h-84' />
            </div>
            <div className='sticky flex gap-5 justify-between top-64 h-32 '>
            </div>
        </div>
    </div>
  )
}

export default HomeThird