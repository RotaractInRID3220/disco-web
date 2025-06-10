import { CircleArrowOutUpRight } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='px-20 py-7 items-center flex justify-between '>
      <a href="/"><img src="/Logo.png" className='w-48' alt="" /></a>
      <div className='flex items-center gap-15 font-poppins text-gray-700'>
        <a href="" className='hover:text-cranberry border-b-2 border-transparent hover:border-cranberry'>home</a>
        <a href="" className='hover:text-cranberry border-b-2 border-transparent hover:border-cranberry'>about us</a>
        <a href="" className='hover:text-cranberry border-b-2 border-transparent hover:border-cranberry'>district portal</a>
        <a href="" className='hover:text-cranberry border-b-2 border-transparent hover:border-cranberry'>events</a>
        <a href="" className='hover:text-cranberry border-b-2 border-transparent hover:border-cranberry'>contact us</a>
      </div>
      <a href="#" className='text-cranberry font-poppins text-lg flex items-center gap-1 hover:text-cranberry/70'>
        blog
        <CircleArrowOutUpRight size={19}/>
      </a>
    </div>
  )
}

export default Navbar
