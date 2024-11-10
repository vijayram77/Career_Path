"use client"
import { useGSAP } from '@gsap/react'
import { RiArrowRightUpLine } from '@remixicon/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const [Rotate, setRotate] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            const x = e.clientX;
            const y = e.clientY;
            const deltaX = x - (window.innerWidth / 2);
            const deltaY = y - (window.innerHeight / 2);
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
            setRotate(angle - 180);
        })
    })

    return (
        <div className='w-full h-screen bg-zinc-950 relative'>
            <div className='w-full px-6 pt-[6vh] flex justify-center absolute md:top-0 top-[20%] left-1/2 -translate-x-1/2'>
                <h1 className='text-zinc-500 font-semibold text-[8vmax] tracking-tighter capitalize '>Wanna Chat With </h1>

            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full h-full md:w-1/2 md:h-1/2 flex justify-center items-center gap-4 '>
                <div className='w-[20vmax] h-[20vmax]  bg-zinc-300 rounded-[100%] p-[2vmax]'>
                    <div className='w-full h-full bg-zinc-900 rounded-[100%] relative flex justify-center items-center'>
                        <div style={{ transform: ` rotate(${Rotate}deg)` }} className={`w-full h-[8vh]  `}>
                            <div className='w-[5vmax] h-[5vmax] bg-zinc-300 rounded-[100%]'></div>
                        </div>
                    </div>
                </div>
                <div className='w-[20vmax] h-[20vmax]  bg-zinc-300 rounded-[100%] p-[2vmax]'>
                    <div className='w-full h-full bg-zinc-900 rounded-[100%] relative'>
                        <div style={{ transform: `translate(-50%,-50%) rotate(${Rotate}deg)` }} className={`w-full h-[8vh]  ease-in absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 `}>
                            <div className='w-[5vmax] h-[5vmax] bg-zinc-300 rounded-[100%]'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full px-6 absolute bottom-[20%] md:bottom-[5%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center'>
                <h1 className='text-zinc-500 capitalize font-semibold text-[8vmax] leading-none tracking-tighter  '>The <span className=' font-[Curvy] uppercase text-[10vw] text-zinc-100'>AI</span> ? </h1>
            <Link href="/Chat" className='bg-[#cccccc] text-zinc-100 py-2 px-6 mt-2 hover:scale-[1.2] rounded-full transition duration-600 ease-in-out flex justify-center items-center gap-2'>
                <span className='text-zinc-900 tracking-tighter font-semibold   '>Continue</span> <RiArrowRightUpLine size={24} color='black' />
            </Link>
            </div>
        </div>
    )
}

export default Eyes
