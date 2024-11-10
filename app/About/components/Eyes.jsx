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
            const deltaX = x - (0);
            const deltaY = y - (window.innerHeight);
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
            setRotate(angle - 180);
        })
    })

    return (
        <div className='w-full h-screen bg-zinc-950 fixed top-0 left-0 flex justify-start items-end'>

            <div className=' w-full py-12 md:w-1/3 md:h-1/3 flex justify-center  items-center gap-4 '>
                <div className='w-[10vmax] h-[10vmax]  bg-zinc-300 rounded-[100%] p-[1.5vmax]'>
                    <div className='w-full h-full bg-zinc-900 rounded-[100%] relative flex justify-center items-center'>
                        <div style={{ transform: ` rotate(${Rotate}deg)` }} className={`w-full h-[8vh]  `}>
                            <div className='w-[3vmax] h-[3vmax] bg-zinc-300 rounded-[100%]'></div>
                        </div>
                    </div>
                </div>
                <div className='w-[10vmax] h-[10vmax]  bg-zinc-300 rounded-[100%] p-[1.5vmax]'>
                    <div className='w-full h-full bg-zinc-900 rounded-[100%] relative'>
                        <div style={{ transform: `translate(-50%,-50%) rotate(${Rotate}deg)` }} className={`w-full h-[8vh]  ease-in absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 `}>
                            <div className='w-[3vmax] h-[3vmax] bg-zinc-300 rounded-[100%]'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
