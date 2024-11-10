"use client"
import React , { useRef } from 'react'
import Eyes from './components/Eyes'
import gsap, { Power3 } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { easeInOut, motion } from 'framer-motion'
import Image from 'next/image'
import Sameer from '../assets/team/Sameer-bg.png'
import suresh from '../assets/team/suresh.png'
import jaya from '../assets/team/jaya.png'
import hema from '../assets/team/hema.png'
import preeti from '../assets/team/preeti.png'
import vijay from '../assets/team/vijay.png'

gsap.registerPlugin(ScrollTrigger)

const page = () => {
    const ref = useRef();

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger : {
                trigger : ref.current ,
                start : "top top",
                scroller : "body",
                end : "top -200%",
                scrub : 3 ,
                pin : true ,
                // markers : true
            }
        });
        tl.to(ref.current , {
            x : "-100%",
            ease : Power3 ,
            
        })
        tl.to(ref.current , {
            x : "-200%",
            ease : Power3 ,
            
        })
        .to(".blob" , {
            scale : 5 ,
            left : "50%",
            top : "50%",
            duration : 2 ,
        })
        .to(".blob" , {
            opacity : 0
        })
        .to(ref.current , {
            x : "-300%"
        })
        .to(".sameername", {
            top : 0
        }, "SAMEER")
        .to(".sameerimage", {
            opacity : 1
        }, "SAMEER")
        .to(ref.current , {
            x : "-400%"
        })
        .to(".vijayname", {
            top : 0
        }, "vijay")
        .to(".vijayimage", {
            opacity : 1
        }, "vijay")
        .to(".sureshname", {
            top : 0
        }, "suresh")
        .to(".sureshimage", {
            opacity : 1
        }, "suresh")
        .to(ref.current , {
            x : "-500%"
        })
        .to(".jayaname", {
            top : 0
        }, "jaya")
        .to(".jayaimage", {
            opacity : 1
        }, "jaya")
        .to(ref.current , {
            x : "-600%"
        })
        .to(".hemaname", {
            top : 0
        }, "hema")
        .to(".hemaimage", {
            opacity : 1
        }, "hema")
        .to(ref.current , {
            x : "-700%"
        })
        .to(".preetiname", {
            top : 0
        }, "preeti")
        .to(".preetiimage", {
            opacity : 1
        }, "preeti")
        .to(ref.current , {
            x : "-800%"
        })
        
    })
    return (
        <div className='w-full h-screen bg-zinc-950'>
            <Eyes />
            <motion.div
                initial={{
                    borderTopLeftRadius: "100%",
                    borderTopRightRadius: "100%",
                    borderBottomLeftRadius: "100%",
                    borderBottomRightRadius: "100%",
                }}
                animate={{
                    borderTopLeftRadius: ["100%", "50%", "100%"],
                    borderTopRightRadius: ["100%", "30%", "100%"],
                    borderBottomLeftRadius: ["100%", "60%", "100%"],
                    borderBottomRightRadius: ["100%", "40%", "100%"],
                }}
                transition={{
                    duration: 2,
                    ease: easeInOut,
                    times: [0, 0.5, 1],
                    repeat: Infinity
                }}
                className='top-[10%] left-[90%] blob -translate-y-1/2 fixed w-[15vmax] h-[15vmax] rounded-full bg-gradient-to-br shadow-[-60px_-60px_10px_0px_#9D3AE6] from-[#c72ab7] via-[#B538C6] to-[#772699] blur-xl'>
            </motion.div>
            <div className=' relative '>
            <div ref={ref} className='w-full h-screen  relative flex  aboutus '>
                <div className='min-w-full h-full px-6 items-center flex justify-center '>
                    <h1 className='text-zinc-300 font-[Neue] font-semibold text-[8vmax] tracking-tighter  capitalize text-center  '>We Are</h1>

                </div>
                <div className='min-w-full h-full px-6 flex flex-col items-center justify-center '>
                    <h1 className='text-zinc-300 font-[Neue] font-semibold text-[5vmax] tracking-tighter  capitalize text-center   '>Designers & Developers</h1>
                    <h1 className='text-zinc-300 font-[Neue] font-semibold text-[5vmax] tracking-tighter  capitalize text-center  name '>Of This Website</h1>

                </div>
                <div className='min-w-full h-full px-6 items-center flex flex-col justify-center '>
                    <h1 className='text-zinc-300 font-[Neue] font-semibold text-[5vmax] tracking-tighter name  capitalize text-center  '>Let us</h1>
                    <h1 className='text-zinc-300 font-[Neue] font-semibold text-[5vmax] tracking-tighter name  capitalize text-center  '>Introduce Ourselves</h1>

                </div>
                <div className='min-w-full h-full px-6 items-center flex flex-col justify-center relative'>
                    <Image src={Sameer} className='md:w-1/3 rounded-full absolute top-1/2 left-1/2 opacity-0 sameerimage -translate-x-1/2 -translate-y-1/2' />
                    <div className='overflow-hidden'>
                    <h1 className='text-zinc-300 font-[Neue] font-bold  relative text-[8vmax] tracking-tighter sameername top-[300px]  capitalize text-center  '>Sameer Shaik</h1>

                    </div>
                </div>
                <div className='min-w-full h-full px-6 items-center flex flex-col justify-center relative'>
                    <Image src={vijay} className='md:w-1/3 rounded-full absolute top-1/2 left-1/2 opacity-0 vijayimage -translate-x-1/2 -translate-y-1/2' />
                    <div className='overflow-hidden'>
                    <h1 className='text-zinc-300 font-[Neue] font-bold  relative text-[8vmax] tracking-tighter vijayname top-[300px]  capitalize text-center  '>Vijay Ram</h1>

                    </div>
                </div>
                <div className='min-w-full h-[400px] top-1/2 -translate-y-1/2 px-6 items-center flex flex-col justify-center py-24 relative'>
                    <Image src={suresh} className='md:w-1/3 md:h-[500px] h-[300px] rounded-full absolute top-1/2 left-1/2 opacity-0 sureshimage object-contain -translate-x-1/2 -translate-y-1/2' />
                    <div className='overflow-hidden'>
                            <h1 className='text-zinc-300 font-[Neue] font-bold  relative text-[8vmax] tracking-tighter sureshname top-[300px]   capitalize text-center  '>Suresh</h1>

                    </div>
                </div>
                <div className='min-w-full h-full px-6 items-center flex flex-col justify-center relative'>
                    <Image src={jaya} className='md:w-1/3 rounded-full absolute top-1/2 left-1/2 opacity-0 jayaimage -translate-x-1/2 -translate-y-1/2' />
                    <div className='overflow-hidden'>
                    <h1 className='text-zinc-300 font-[Neue] font-bold  relative text-[8vmax] tracking-tighter jayaname top-[300px]  capitalize text-center  '>Jaya Deepika</h1>

                    </div>
                </div>
                <div className='min-w-full h-full px-6 items-center flex flex-col justify-center relative'>
                    <Image src={hema} className='md:w-1/3 rounded-full absolute top-1/2 left-1/2 opacity-0 hemaimage -translate-x-1/2 -translate-y-1/2' />
                    <div className='overflow-hidden'>
                    <h1 className='text-zinc-300 font-[Neue] font-bold  relative text-[8vmax] tracking-tighter hemaname top-[300px]  capitalize text-center  '>Hemanjali</h1>

                    </div>
                </div>
                <div className='min-w-full h-full px-6 items-center flex flex-col justify-center relative'>
                    <Image src={preeti} className='md:w-1/3 rounded-full absolute top-1/2 left-1/2 opacity-0 preetiimage -translate-x-1/2 -translate-y-1/2' />
                    <div className='overflow-hidden'>
                    <h1 className='text-zinc-300 font-[Neue] font-bold  relative text-[8vmax] tracking-tighter preetiname top-[300px]  capitalize text-center  '>Preeti</h1>

                    </div>
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default page
