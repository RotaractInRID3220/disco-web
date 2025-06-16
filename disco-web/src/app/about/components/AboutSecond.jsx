'use client'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react'
import { GrAchievement } from "react-icons/gr";

gsap.registerPlugin(ScrollTrigger);

const AboutSecond = () => {

  useEffect(() => {
    gsap.from("#about2cards", {
      scrollTrigger: {
        trigger: "#about2",
        start: "top 80%",
        toggleActions: "play none none reverse"
        
      },
      opacity: 0,
      duration: 1
    });
  }, []);

  return (
    <div className="lg:mt-30 mt-20 lg:px-20 px-8 text-center .about2" id='about2'>
        <h1 className='lg:text-5xl text-6xl font-bebas text-cranberry tracking-wide'>We Are the</h1>
        <div className='flex flex-col lg:flex-row items-center justify-center lg:h-76 mt-7 lg:gap-10 gap-5 lg:px-10' id='about2cards'>
            <div className='lg:w-1/4 h-full bg-cranberry text-white items-center justfiy-center flex flex-col gap-5 py-10 px-5 rounded-2xl'>
                <h1 className='w-20 h-20 flex items-center justify-center bg-white rounded-full text-cranberry'><GrAchievement size={28}/></h1>
                <p className='text-4xl font-bebas'>8th largest rotaract membership in the world</p>
            </div>
            <div className='lg:w-2/4 h-full bg-blackD text-white items-center justfiy-center flex flex-col gap-5 py-10 px-10 rounded-2xl'>
                <h1 className='w-20 h-20 flex items-center justify-center bg-white rounded-full text-cranberry'><GrAchievement size={28}/></h1>
                <p className='text-4xl font-bebas'>1st for having the highest average member count per club in the world</p>
            </div>
            <div className='lg:w-1/4 h-full bg-cranberry text-white items-center justfiy-center flex flex-col gap-5 py-10 px-5 rounded-2xl'>
                <h1 className='w-20 h-20 flex items-center justify-center bg-white rounded-full text-cranberry'><GrAchievement size={28}/></h1>
                <p className='text-4xl font-bebas'>2nd largest district in the world in terms of membership</p>
            </div>
        </div>
    </div>
  )
}

export default AboutSecond
