import Image from 'next/image'
import React from 'react'

const AboutFirst = () => {
  return (
    <div className="px-20 flex gap-15 lg:mt-[8%] mt-[25%] items-center justify-center">
        <div className='w-1/3 flex gap-8 items-center justify-center'>
            <div className='flex flex-col gap-8'>
                <Image src="/about/i1.svg" width={271} height={369} alt='' />
                <Image src="/about/i3.svg" width={271} height={369} alt='' />
            </div>
            <div className="flex flex-col gap-8 translate-y-8">
                <Image src="/about/i2.svg" width={271} height={369} alt='' />
                <Image src="/about/i4.svg" width={271} height={369} alt='' />
            </div>

        </div>
        <div className='w-2/3'>
            <h1 className="text-8xl text-cranberry font-bebas tracking-wide">WHO ARE WE?</h1>
            <p className="font-poppins mt-5 text-justify">
                Led by District Rotaract Representative (DRR) Rtr. PP Nazmi Mahmood for the RI Year 2025–26, we are a community of passionate, driven young individuals who believe in service above self and the power of collective action. As Rotaractors of RID 3220, we come from diverse backgrounds; students, professionals, creatives, and entrepreneurs united by a common goal: to make a difference. <br/> <br />

                Rooted in the values of leadership, fellowship, and service, we create a space where personal growth and social impact go hand in hand. We don’t just volunteer; we connect, collaborate, and inspire each other to rise to challenges and lead with purpose. <br /><br />

                With a presence across Sri Lanka and the Maldives, we are proud to be part of a movement that strengthens friendships, celebrates diversity, and builds lifelong connections locally and globally.

            </p>
        </div>
      
    </div>
  )
}

export default AboutFirst
