import { Facebook, Instagram, LinkedinIcon, Youtube } from 'lucide-react'
import { FaFacebookF, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
        <div className="w-full px-[4%] bg-blackD items-center justify-center py-8">
          <div className="w-full flex flex-col lg:flex-row items-center lg:justify-between justify-center">
            <img src="/LogoWhite.png" alt="" className="lg:w-64 w-52"/>
            <div className="flex gap-4 mt-5 lg:mt-0">
                <a href="https://facebook.com/rotaract3220" className='border border-white text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-cranberry'><FaFacebookF size={20}/></a>
                {/* <a href="" className='border border-white text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-cranberry'><Instagram size={20}/></a> */}
                <a href="https://www.linkedin.com/company/rotaract3220/" className='border border-white text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-cranberry'><FaLinkedinIn size={20}/></a>
                <a href="https://www.youtube.com/@Rotaract3220" className='border border-white text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-cranberry'><FaYoutube size={20}/></a>
                <a href="https://www.tiktok.com/@rotaract_3220" className='border border-white text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-cranberry'><FaTiktok size={20}/></a>
            </div>
          </div>
          <hr className="mt-5"/>
            <div className="w-full flex flex-col lg:flex-row items-center lg:justify-between mt-5">
                <p className='text-white text-sm'>© 2025 Rotaract in RID 3220. All rights reserved.</p>
                <p className="text-xs md:text-sm text-white">
                    Designed & Developed by <span className='animate-gradient font-bold bg-gradient-to-r bg-clip-text text-transparent from-[#22D1AE] via-[#EAEAEA] to-[#22D1AE]'><a href="https://www.linkedin.com/company/wizx-solutions/posts/?feedView=all">WizX Solutions</a></span>
                </p>
            </div>

        </div>
  )
}

export default Footer
