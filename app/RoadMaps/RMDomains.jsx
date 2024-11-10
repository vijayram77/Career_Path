"use client"
import React, { useRef } from 'react'
import RoleTitle from './RoleTitle'
import { useGSAP } from '@gsap/react'
import gsap, { Power4 } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import domains from '@/app/domains'

gsap.registerPlugin(ScrollTrigger)


const RMDomains = () => {
    const blobref = useRef()

    useGSAP(() => {


        gsap.to(blobref.current, {
            scrollTrigger: {
              trigger: "",
              start: "top 0%",
              end: "top -1700%",
              scrub: 3,
            },
            keyframes: {
              "0%": { x: "0vw", y: "0vh", opacity: 1 },
              "5.88%": { x: "60vw", y: "0vh", opacity: 1 },
              "11.76%": { x: "0vw", y: "100vh", opacity: 1 },
              "17.64%": { x: "60vw", y: "200vh", opacity: 1 },
              "23.52%": { x: "0vw", y: "300vh", opacity: 1 },
              "29.40%": { x: "60vw", y: "400vh", opacity: 1 },
              "35.28%": { x: "0vw", y: "500vh", opacity: 1 },
              "41.16%": { x: "60vw", y: "600vh", opacity: 1 },
              "47.04%": { x: "0vw", y: "700vh", opacity: 1 },
              "52.92%": { x: "60vw", y: "800vh", opacity: 1 },
              "58.80%": { x: "0vw", y: "900vh", opacity: 1 },
              "64.68%": { x: "60vw", y: "1000vh", opacity: 1 },
              "70.56%": { x: "0vw", y: "1100vh", opacity: 1 },
              "76.44%": { x: "60vw", y: "1200vh", opacity: 1 },
              "82.32%": { x: "0vw", y: "1300vh", opacity: 1 },
              "88.20%": { x: "60vw", y: "1400vh", opacity: 1 },
              "94.08%": { x: "0vw", y: "1500vh", opacity: 1 },
              "100%": { x: "60vw", y: "1600vh", opacity: 1 },
            },
            ease: "none"
          });
        
            })

    return (
        <div className='relative parent domain w-full min-h-screen overflow-hidden bg-inc-950 pt-[14vh] px-[7.5vw]'>
            {[...Array(10)].map((_, index) => (
                <div key={index} className={`absolute w-[1vmax] h-[1vmax] backdrop-blur-sm rounded-full bg-[#cccccc]`} style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}></div>
            ))}
            <div ref={blobref} className='absolute w-[40vmax] h-[40vmax] rounded-full bg-gradient-to-br shadow-[-60px_-60px_10px_0px_#001678] from-[#32fcff] via-[#022bce] to-[#001678]  blur-xl'></div>
            <div className='absolute w-full h-full  '></div>
            <div className='flex items-center gap-2  pt-6'>
                <div className='w-3 h-[6vmax] bg-[#0131F5] rounded-sm'></div>
                <h1 className='text-[7vmax] font-semibold text-[#ffffff] relative tracking-tighter'>Domains</h1>
            </div>
            {
              
              domains.map((item , i ) => (
                <RoleTitle key={i} name={item.domain} direction={i%2 == 0 ? "left" : "right"} categories={item.roles} />
              ))
            }
            </div>
    )
}

export default RMDomains
