"use client"
import gsap, { Power3 } from 'gsap';
import React, { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
import { easeInOut, motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { RiArrowRightUpLine } from '@remixicon/react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {     
    const blobref = useRef();
    const parent = useRef();
    const ref1 = useRef();
    const ref2 = useRef();

    useGSAP(() => {

        

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: parent.current,
                scroller: 'body',
                start: 'top 0%',
                end: 'top -20%',
                scrub: 1,
                pin: true,
                // markers: true,
            }
        });
        
        tl1.to(ref1.current, {
            x: -300,
            duration: 2,
            ease: "power2.inOut"
        });
        tl1.to(ref2.current, {
            x: 300,
            duration: 2,
            ease: "power2.inOut"
        }, "-=2");
        tl1.to(blobref.current, {
            scale: 3.5,
            duration: 2,
            ease: "power2.inOut"
        }, "-=2")
        .to(blobref.current , {
            opacity : 0 ,
            duration : 2        
        })

    });

    return (
        <div ref={parent} className='w-full bg-zinc-950 top-0 left-0  parent min-h-[100svh] pt-[25vh]  relative overflow-hidden '>
            <div ref={blobref} className='overflow-hidden p-[10vw] w-[100vw] h-[100vh] absolute top-0 left-0 scale-1'>
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
                    className='top-[50%] -translate-x-1/2 left-1/2 -translate-y-1/2 absolute w-[30vmax] h-[30vmax] rounded-full bg-gradient-to-br shadow-[-60px_-60px_10px_0px_#001678] from-[#32fcff] via-[#022bce] to-[#001678] blur-xl'>
                </motion.div>
            </div>
            <div className='w-full justify-center md:justify-between px-[5vw] text-zinc-300 font-semibold md:text-[5vw] text-4xl flex flex-col tracking-tighter uppercase gap-12'>
                <motion.div initial={{ x: -700 }} animate={{ x: 0 }} transition={{ duration: 2, ease: easeInOut }} className='flex w-full items-center justify-start select-none'>
                    <h1 ref={ref1} className='tracking-tighter font-[Neue]'>UNLOCKING THE PATH</h1>
                </motion.div>
                <motion.div initial={{ x: 700 }} animate={{ x: 0 }} transition={{ duration: 2, ease: easeInOut }} className='flex w-full items-center justify-end '>
                    <h1 ref={ref2} className='tracking-tighter select-none font-[Neue] h2'>
                        TO FINANCIAL <span className='font-[Curvy]'>SUCCESS</span>
                    </h1>
                </motion.div>
                <div className='flex w-full items-center justify-center text-xl  '>
                    <Link href="/RoadMaps" className='bg-transparent relative  border border-zinc-200 rounded-full  text-white px-6 py-3 tracking-normal font-[Neue]'>
                        Explore
                    </Link>
                </div>
                <div className='w-full flex flex-wrap justify-center gap-6 tracking-normal relative Link   '>
                    <div className={`w-[280px] md:w-[400px] z-[9999] card rounded-xl bg-gradient-to-br from-zinc-950/5 backdrop-blur-2xl to-purple-950/10 p-6 border border-zinc-800 transition-all ease-in-out duration-500 tracking-tighter `} >
                        <h1 className='text-sm text-zinc-400 pb-2 tracking-normal'>RoadMaps</h1>
                        <h1 className='text-2xl  text-zinc-50 font-semibold tracking-normal'>Categories</h1>
                        {
                            ["Web Development" , "App Development"].map((item, i) => (
                                <div key={i} className="w-full flex justify-between items-center  relative py-2 gap-4 border-b border-zinc-800"  >
                                    <h1 className="text-zinc-300  tracking-tighter text-sm   relative z-[99999]">
                                        {item}
                                    </h1>
                                    <Link href="/" className="p-3 cursor-pointer transition-all ease-in-out bg-zinc-900 rounded-full duration-500">
                                        <RiArrowRightUpLine
                                            size={24}
                                            color="#cccccc"

                                        />
                                    </Link>

                                </div>
                            ))
                        }
                    </div>
                    <div className={`w-[280px] md:w-[400px] z-[9999] card rounded-xl bg-gradient-to-br from-zinc-950/5 backdrop-blur-2xl to-purple-950/10 p-6 border border-zinc-800 transition-all ease-in-out duration-500 tracking-tighter `} >
                        <h1 className='text-sm text-zinc-400 pb-2 tracking-normal'>Resources</h1>
                        {
                            ["Free Certifications" , "Free Resources"].map((item, i) => (
                                <div key={i} className="w-full flex justify-between items-center  relative py-2 gap-4 border-b border-zinc-800"  >
                                    <h1 className="text-zinc-300  tracking-tighter text-sm relative z-[99999]">
                                        {item}
                                    </h1>
                                    <Link href="/" className="p-3 cursor-pointer transition-all ease-in-out bg-zinc-900 rounded-full duration-500">
                                        <RiArrowRightUpLine
                                            size={24}
                                            color="#cccccc"

                                        />
                                    </Link>

                                </div>
                            ))
                        }
                    </div>
                    <div className={`w-[280px] md:w-[400px] z-[9999] card  rounded-xl bg-gradient-to-br from-zinc-950/5 backdrop-blur-2xl to-purple-950/10 p-6 border border-zinc-800 transition-all ease-in-out duration-500 tracking-tighter `} >
                        <h1 className='text-sm text-zinc-400 pb-2 tracking-normal'>Community</h1>
                        <h1 className='text-2xl  text-zinc-50 font-semibold tracking-normal'>Chat With Users</h1>
                        {
                            ["See Details" ].map((item, i) => (
                                <div key={i} className="w-full flex justify-between items-center  relative py-2 gap-4 border-b border-zinc-800"  >
                                    <h1 className="text-zinc-300  tracking-tighter text-sm relative z-[99999]">
                                        {item}
                                    </h1>
                                    <Link href="/" className="p-3 cursor-pointer transition-all ease-in-out bg-zinc-900 rounded-full duration-500">
                                        <RiArrowRightUpLine
                                            size={24}
                                            color="#cccccc"

                                        />
                                    </Link>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
