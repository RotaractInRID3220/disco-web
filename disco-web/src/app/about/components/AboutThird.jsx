'use client'
import React, { useEffect } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const AboutThird = () => {
    
    useEffect(() => {
        gsap.utils.toArray('.ping-section').forEach((section, i, arr) => {
            console.log(i)
            if (i === 2) {
                console.log(arr.length);
                console.log(section)
                ScrollTrigger.create({
                    trigger: section,
                    start: "top top",
                    pin: true,
                    end: "+=100%",
                    snap: "false"
                })
            }else{
                 ScrollTrigger.create({
                    trigger: section,
                    start: "top top",
                    pin: true,
                    scrub: 1,
                    pinSpacing: false,
                    snap: {
                        snapTo: 1 / (gsap.utils.toArray('.ping-section').length - 1),
                        duration: { min: 0.2, max: 0.5 },
                        ease: "power1.inOut"
                    }
                })
            }


        });
    }, []);




  return (
    <div className='mt-20 px-20' id='about3'>
      {/* <h1 className='text-5xl text-cranberry font-bebas tracking-wide'>Let's hear from our DRR's</h1> */}
      <div className='flex items-center justify-center gap-10 h-dvh ping-section bg-white' id='#Naz'>
        <img src="/about/naz.svg" alt="" className='w-2/6' />
        <div className='px-10' >
            <FaQuoteLeft className='text-5xl text-cranberry mb-5'/>
            <p className="text-xl font-poppins leading-relaxed text-justify">Rotaract in RI District 3220 is a living, breathing movement — one that grows with its members and evolves with time. It is where young people come together to lead change, find purpose, and redefine what service truly means. This platform reflects that evolution — a space where stories are shared, innovations are born, and new opportunities are made accessible to all. As we embrace technology and creativity, we also hold onto what matters most: unity, impact, and people. In a world that needs both heart and action, Rotaractors continue to Redefine Service and Unite for Good. And that is the strength of our movement.</p>
            <h1 className="text-4xl text-cranberry font-bebas tracking-wide mt-8">Rtr. PP NAZMI MAHAMOOD</h1>
            <h1 className="text-2xl text-cranberry/70 font-bebas tracking-wide -mt-2">District Rotaract Representative 2025-26</h1>
        </div>
      </div>

      <div className='flex items-center justify-center gap-10 h-dvh ping-section bg-white' id='#Naz'>
        <img src="/about/shanel.svg" alt="" className='w-2/6' />
        <div className='px-10' >
            <FaQuoteLeft className='text-5xl text-cranberry mb-5'/>
            <p className=" font-poppins leading-relaxed text-justify">
                Dear Esteemed Youth Leaders,<br />

                Congratulations on your appointments as change-makers for Rotaract in Sri Lanka and the Maldives for the term 2025-26. It’s an honour to begin this exciting chapter with a team of dynamic individuals who embody compassion, creativity, and a deep commitment to service. <br /><br />
                Rotaract has evolved into a powerful platform for youth to lead sustainable, impactful initiatives that drive community transformation. As young leaders, your role is vital in promoting innovation, resilience, and economic development in the face of growing challenges.

                Let your leadership be a source of inspiration, and embrace every experience, both the successes and the setbacks as opportunities to grow. Our strength lies in our diversity, and through collaboration, we build a broader global perspective.<br /><br />

                Together, let’s lead with heart and shape the future of Rotaract in RID 3220. Because today’s will truly be tomorrow's future.
                Wishing you all the very best on this journey ahead!</p>
            <h1 className="text-4xl text-cranberry font-bebas tracking-wide mt-8">Rtn. Rtr. PHF PP SHANEL MENDIS</h1>
            <h1 className="text-2xl text-cranberry/70 font-bebas tracking-wide -mt-2">District Rotaract Representative 2024-25</h1>
        </div>
      </div>

      <div className='flex items-center justify-center gap-10 h-dvh ping-section bg-white' id='#Naz'>
        <img src="/about/jude.svg" alt="" className='w-2/6' />
        <div className='px-10' >
            <FaQuoteLeft className='text-5xl text-cranberry mb-5'/>
            <p className=" font-poppins leading-relaxed text-justify">
                Rotaract in RI District 3220 is more than just a district, it’s a movement powered by passionate young leaders committed to service, growth and meaningful impact. As we step into the RI Year 2025–26, we carry forward a legacy shaped by dedication and fueled by innovation. This year, we aim to deepen our connections, empower clubs, and create space for diverse voices and bold ideas. Let’s continue building bridges between tradition and transformation, service and sustainability and vision and action. Together, we are shaping not just the future of Rotaract, but the future of our communities. Let’s serve with purpose, lead with empathy, and grow together as One District, One Movement on a journey to Redefine Service.</p>
            <h1 className="text-4xl text-cranberry font-bebas tracking-wide mt-8">Rtn. Rtr. PP JUDE SHANON</h1>
            <h1 className="text-2xl text-cranberry/70 font-bebas tracking-wide -mt-2">District Rotaract Representative ELECT 2025-26</h1>
        </div>
      </div>



    </div>
  )
}

export default AboutThird
