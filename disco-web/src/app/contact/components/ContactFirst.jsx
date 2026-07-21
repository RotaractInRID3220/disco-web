import { IoMail } from "react-icons/io5";
import React from 'react'
import { FaMobile, FaPhoneAlt } from 'react-icons/fa'

const ContactFirst = () => {
    return (
        <div className='lg:px-20 px-8 lg:flex gap-15 lg:mt-[8%] mt-[25%] items-center justify-center mb-20'>
            <div className=' lg:w-1/2 flex flex-col gap-10'>
                <div className='border border-cranberry rounded-lg px-8 py-10'>
                    <h1 className="font-bebas text-3xl text-gray-400 tracking-wide">CONTACT OUR DRR</h1>
                    <h1 className="font-bebas text-5xl text-cranberry tracking-wide">PHF Rtn. Rtr. PP Jude Shannon Lucian</h1>
                    <div className='lg:flex gap-5'>
                        <a href="" className="flex items-center  gap-2 text-gray-600 rounded-lg py-2 px-5 border border-cranberry mt-5 hover:bg-cranberry hover:text-white transition-all"><FaPhoneAlt />+94 72 898 3333</a>
                        <a href="" className="flex items-center  gap-2 text-gray-600 rounded-lg py-2 px-5 border border-cranberry lg:mt-5 mt-2 hover:bg-cranberry hover:text-white transition-all"><IoMail size={20} />jude.rotaract3220@gmail.com</a>
                    </div>
                </div>
                <div className='border border-cranberry rounded-lg px-8 py-10'>
                    <h1 className="font-bebas text-3xl text-gray-400 tracking-wide">CONTACT OUR CLUB SERVICE TEAM</h1>
                    <h1 className="font-bebas text-5xl text-cranberry tracking-wide">Rtr. PP. Abheetha Aturupane</h1>
                    <div className='lg:flex gap-5'>
                        <a href="" className="flex items-center  gap-2 text-gray-600 rounded-lg py-2 px-5 border border-cranberry mt-5 hover:bg-cranberry hover:text-white transition-all"><FaPhoneAlt />+94 70 3935 356</a>
                        <a href="" className="flex items-center  gap-2 text-gray-600 rounded-lg py-2 px-5 border border-cranberry lg:mt-5 mt-2 hover:bg-cranberry hover:text-white transition-all"><IoMail size={20} />abheetha.rotaract3220@gmail.com</a>
                    </div>
                </div>
                <div className='border border-cranberry rounded-lg px-8 py-10'>
                    <h1 className="font-bebas text-3xl text-gray-400 tracking-wide uppercase">CONTACT OUR Partnerships TEAM</h1>
                    <h1 className="font-bebas text-5xl text-cranberry tracking-wide">Rtn. Rtr. PP Odrini Weerakkody</h1>
                    <div className='lg:flex gap-5'>
                        <a href="" className="flex items-center  gap-2 text-gray-600 rounded-lg py-2 px-5 border border-cranberry mt-5 hover:bg-cranberry hover:text-white transition-all"><FaPhoneAlt />+94 74 091 1148</a>
                        <a href="" className="flex items-center  gap-2 text-gray-600 rounded-lg py-2 px-5 border border-cranberry lg:mt-5 mt-2 hover:bg-cranberry hover:text-white transition-all"><IoMail size={20} />odrini.rotaract3220@gmail.com</a>
                    </div>
                </div>
            </div>

            <div className=' lg:w-1/2 mt-10 flex flex-col gap-10 lg:translate-y-10'>
                <div className='border border-cranberry rounded-lg px-8 py-10'>
                    <h1 className="font-bebas text-3xl text-gray-400 tracking-wide">CONTACT OUR Secretary</h1>
                    <h1 className="font-bebas text-5xl text-cranberry tracking-wide">Rtr. PP Dulan Samarawickrama</h1>
                    <div className='lg:flex gap-5'>
                        <a href="" className="flex items-center  gap-2 text-gray-600 rounded-lg py-2 px-5 border border-cranberry mt-5 hover:bg-cranberry hover:text-white transition-all"><FaPhoneAlt />+94 71 253 6836</a>
                        <a href="" className="flex items-center  gap-2 text-gray-600 rounded-lg py-2 px-5 border border-cranberry lg:mt-5 mt-2 hover:bg-cranberry hover:text-white transition-all"><IoMail size={20} />dulan.rotaract3220@gmail.com</a>
                    </div>
                </div>
                <div className='border border-cranberry rounded-lg px-8 py-10'>
                    <h1 className="font-bebas text-3xl text-gray-400 tracking-wide uppercase">CONTACT OUR International Service TEAM</h1>
                    <h1 className="font-bebas text-5xl text-cranberry tracking-wide">Rtr. Amaan Zahid</h1>
                    <div className='lg:flex gap-5'>
                        <a href="" className="flex items-center  gap-2 text-gray-600 rounded-lg py-2 px-5 border border-cranberry mt-5 hover:bg-cranberry hover:text-white transition-all"><FaPhoneAlt />+94 71 273 7508</a>
                        <a href="" className="flex items-center  gap-2 text-gray-600 rounded-lg py-2 px-5 border border-cranberry lg:mt-5 mt-2 hover:bg-cranberry hover:text-white transition-all"><IoMail size={20} />amaan.rotaract3220@gmail.com</a>
                    </div>
                </div>
                <div className='border border-cranberry rounded-lg px-8 py-10'>
                    <h1 className="font-bebas text-3xl text-gray-400 tracking-wide">CONTACT OUR DIGITAL SERVICES TEAM</h1>
                    <h1 className="font-bebas text-5xl text-cranberry tracking-wide">Rtr. PP Sandinu Pinnawala</h1>
                    <div className='lg:flex gap-5'>
                        <a href="" className="flex items-center  gap-2 text-gray-600 rounded-lg py-2 px-5 border border-cranberry mt-5 hover:bg-cranberry hover:text-white transition-all"><FaPhoneAlt />+94 77 951 8001</a>
                        <a href="" className="flex items-center  gap-2 text-gray-600 rounded-lg py-2 px-5 border border-cranberry lg:mt-5 mt-2 hover:bg-cranberry hover:text-white transition-all"><IoMail size={20} />sandinu.rotaract3220@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactFirst
