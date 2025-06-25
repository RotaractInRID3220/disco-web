'use client'
import React from 'react'
import { useAtom } from 'jotai';
import { botOpenAtom } from "@/app/states/store";



const BotButton = () => {
    const [botOpen, setBotOpen] = useAtom(botOpenAtom);

    const handleClick = () => {
        setBotOpen(!botOpen);
    }

  return (
    <div className='fixed bottom-5 lg:right-5 right-3 z-50 cursor-pointer hover:animate-rotateB' id='botButton'>
      <img src="/Bot.png" alt="" className='w-20' onClick={handleClick}/>
    </div>
  )
}

export default BotButton
