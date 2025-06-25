'use client'
import { CircleArrowOutUpRight } from 'lucide-react'
import Link from 'next/link';
import React, { useState } from 'react'
import { RiMenu4Fill, RiCloseCircleLine } from "react-icons/ri";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div className='lg:px-20 py-6 items-center lg:flex hidden justify-between bg-white/80 backdrop-blur-sm'>
      <a href="/"><img src="/Logo.png" className='w-48' alt="" /></a>
      <div className='flex items-center gap-15 font-poppins text-gray-700'>
        <Link href="/"  className='hover:text-cranberry border-b-2 border-transparent hover:border-cranberry'>home</Link>
        <Link href="/about" className='hover:text-cranberry border-b-2 border-transparent hover:border-cranberry'>about us</Link>
        <a href="/portal" className='hover:text-cranberry border-b-2 border-transparent hover:border-cranberry'>district portal</a>
        <a href="/events" className='hover:text-cranberry border-b-2 border-transparent hover:border-cranberry'>events</a>
        <a href="/contact" className='hover:text-cranberry border-b-2 border-transparent hover:border-cranberry'>contact us</a>
      </div>
      <a href="https://blog.rotaract3220.org/" className='text-cranberry font-poppins text-lg flex items-center gap-1 hover:text-cranberry/70'>
        blog
        <CircleArrowOutUpRight size={19}/>
      </a>
      </div>

      <div className={`z-50 fixed top-0 left-0 w-screen h-screen bg-cranberry lg:hidden flex flex-col ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 transform-all ease-in-out border-l-2 border-white items-center justify-center`}>
        <RiCloseCircleLine className="text-2xl text-white cursor-pointer absolute top-7 right-7" onClick={() => {setMenuOpen(false)}}/>

      <div className='flex flex-col justify-center items-center gap-15 font-poppins text-white text-lg'>
        <Link href="/" >home</Link>
        <Link href="/about" >about us</Link>
        <a href="/portal" >district portal</a>
        <a href="/events" >events</a>
        <a href="/contact" >contact us</a>
              <a href="https://blog.rotaract3220.org/" className='text-white font-poppins text-lg flex items-center gap-1 hover:text-cranberry/70 border border-white px-16 rounded-full py-2'>
        blog
        <CircleArrowOutUpRight size={19}/>
      </a>
      </div>

      </div>
      <div className={`lg:hidden fixed top-5 right-5 z-50 w-12 h-12 bg-white/80 flex items-center justify-center rounded-full backdrop-blur-sm  text-3xl text-cranberry ${menuOpen ? 'hidden' : 'block'}`} onClick={() => setMenuOpen(!menuOpen)}>
        <RiMenu4Fill/>
      </div>
    </div>
  )
}

export default Navbar
