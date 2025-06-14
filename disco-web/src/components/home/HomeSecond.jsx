import React from 'react'

const HomeSecond = () => {
  return (
    <div className='flex flex-col text-center items-center justify-center lg:mt-5 mt-30'>
      <h1 className='font-bebas text-cranberry text-5xl tracking-wide'>What is Rotaract in RID 3220?</h1>
      <p className='lg:text-lg lg:w-2/3 leading-6 mt-8'>Rotaract, under Rotary International, was introduced to RID 3220 in 1969. Since then, it has become one of the most dynamic youth-led networks in the region. As part of a global network spanning 180 countries and over 10,600 clubs, Rotaract in RID 3220 brings international collaboration and local action together to make a meaningful impact. We focus on:</p>
      <div className='group w-full lg:block hidden'>
        <div className='w-full flex text-cranberry font-semibold mt-8 justify-center uppercase'>
            <p className='hover:bg-cranberry hover:text-white w-1/3  py-9 text-xl border border-gray-300 transition-all group-hover:blur-sm hover:blur-none'>Community service</p>
            <p className='hover:bg-cranberry hover:text-white w-1/3  py-9 text-xl border border-gray-300 transition-all group-hover:blur-sm hover:blur-none'>Professional development</p>
            <p className='hover:bg-cranberry hover:text-white w-1/3  py-9 text-xl border border-gray-300 transition-all group-hover:blur-sm hover:blur-none'>Leadership building</p>
        </div>
        <div className='w-full flex text-cranberry font-semibold justify-center uppercase'>
            <p className='hover:bg-cranberry hover:text-white w-1/2  py-9 text-xl border border-gray-300 transition-all group-hover:blur-sm hover:blur-none'>Fostering innovation</p>
            <p className='hover:bg-cranberry hover:text-white w-1/2  py-9 text-xl border border-gray-300 transition-all group-hover:blur-sm hover:blur-none'>Strengthening global ties</p>
        </div>
      </div>

      <div className='group w-full lg:hidden block'>
        <div className='w-full flex flex-wrap text-cranberry font-semibold mt-8 justify-center uppercase'>
            <p className='hover:bg-cranberry w-1/2 hover:text-white  py-9 text-xl border border-gray-300 transition-all group-hover:blur-sm hover:blur-none'>Community service</p>
            <p className='hover:bg-cranberry w-1/2 hover:text-white  py-9 text-xl border border-gray-300 transition-all group-hover:blur-sm hover:blur-none'>Professional development</p>
            <p className='hover:bg-cranberry w-1/2 hover:text-white  py-9 text-xl border border-gray-300 transition-all group-hover:blur-sm hover:blur-none'>Leadership building</p>
            <p className='hover:bg-cranberry w-1/2 hover:text-white  py-9 text-xl border border-gray-300 transition-all group-hover:blur-sm hover:blur-none'>Fostering innovation</p>
            <p className='hover:bg-cranberry w-full hover:text-white  py-9 text-xl border border-gray-300 transition-all group-hover:blur-sm hover:blur-none'>Strengthening global ties</p>
        </div>
      </div>
    </div>
  )
}

export default HomeSecond
