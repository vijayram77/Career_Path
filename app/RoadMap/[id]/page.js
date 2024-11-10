"use client"
import React, { useRef, useState, useEffect } from 'react'
import { easeInOut, motion } from 'framer-motion'
import Accordion from '@/app/RoadMaps/Accordion'
import run from '@/app/GeminiApi'
import { RiArrowRightUpLine } from '@remixicon/react'
import Data from '@/Data'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)
const page = ({ params }) => {


    

    useGSAP(() => {
        const h = document.querySelectorAll(".h1");
        const atags = document.querySelectorAll(".a");
        h.forEach((h1) =>(
            gsap.from(h1, {
                y : 400,
                scrollTrigger : {
                    trigger : h1
                }
            })
        ))
        atags.forEach((a) =>(
            gsap.to(a, {
                scaleY : 1,
                duration : 1 ,
                scrollTrigger : {
                    trigger : a
                }
            })
        ))
    })
    const suffix = params.id
    const title = suffix.split("_").join(" ");


    const [Loading, setLoading] = useState(false)

    const [userInput, setuserInput] = useState();
    const [responses, setResponses] = useState([
        {
            prompt: "Hey there ! How You Doing? , Need Help?",
            align: "left"
        }
    ])
    const roadmap = Data[suffix];

    async function getresponse(prompt) {
        setLoading(l => !l)
        const res = await run(prompt);
        var resArr = res.split("**");
        var response = "";
        for (let i = 0; i < resArr.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                response += resArr[i];
            }
            else {
                response += "<b>" + resArr[i] + "</b>"
            }
        }
        var finalres = response.split("*").join("<br />");
        
        setResponses((prev) => [...prev, { prompt: finalres, align: "left" }]);
        setLoading(l => !l)
    }

    // Handle form submission
    const handleSubmit = (e) => {
        
        e.preventDefault();
        if (userInput.trim()) {
            setResponses((prev) => [...prev, { prompt: userInput, align: "right" }]);
            getresponse(userInput );
            setuserInput('');
        }
    }


    const ref = useRef();

    return (
        <div className='w-full overflow-hidden min-h-screen bg-gradient-to-tr from-zinc-900 to-[#55105f] via-zinc-950 py-[20vh] px-[5vw] '>

            <div className='py-6 overflow-hidden'>
            <motion.h1 className='text-zinc-300 font-bold text-[6vmax] tracking-tighter' initial={{  y: 400 }} animate={{ y: 0 }} transition={{ duration: 0.8 }} >{title}</motion.h1>

            </div>
            
            <div className='py-6 overflow-hidden'>
            <motion.h1 className='text-zinc-400 pt-2 text-xl md:text-2xl tracking-tighter' initial={{ y: 400 }} animate={{  y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} >{roadmap.description}</motion.h1>

            </div>
            <h1 className='text-zinc-300 font-semibold text-[4vmax] tracking-tighter pt-[10vh]'>Tools :</h1>
            <div ref={ref} className='w-full bg-transparent border border-zinc-700 backdrop-blur-xl rounded-xl overflow-hidden h-[40vh] p-4 relative'>
                {
                    roadmap.tools.map((item , i) => (
                        <motion.img style={{left : `${(i+1)*15}%`}} drag dragConstraints={ref} src={item.image_url} alt="" className='image h-24 absolute top-8 ' />

                    ))
                }
            </div>
            <div className=' overflow-hidden'>
            <h1 className='text-zinc-300 h1 font-bold text-[7vmax] tracking-tighter py-[10vh] leading-none'>Let's Dive Into The RoadMap</h1>
            </div>
            <div className='w-full p-4'>
                
                <div className='flex w-full justify-between py-16'>
                    <h1 className='text-zinc-300 text-[3vmax] font-semibold tracking-tighter'>Tools  </h1>
                    <h1 className='text-zinc-300 md:block hidden  font-semibold text-[3vmax] tracking-tighter'>RoadMap</h1>

                </div>

                {
                    roadmap.tools.map((item , i) => (
                         <Accordion name={item.name} last={i == (roadmap.tools.length -1) ? true : false} description={item.description} yt={item.youtube_link} image={item.image_url} />

                    ))
                }

            </div>
            <div>
            <div className='py-6 overflow-hidden'>
                <h1 className='text-zinc-300 h1 pt-[15vh] font-bold text-[5vmax] tracking-tighter'>Projects To Do To Become Master In This Role </h1>
            </div>
                {
                    roadmap.projects.map((item, i) => (
                        <div key={i}>
                            {
                                <a href={item.demo_link} className='text-zinc-300 a block scale-y-0 text-2xl w-full py-4 border-b border-zinc-600 tracking-tighter'>{item.title}</a>
                            }
                        </div>
                    ))
                }
            </div>
            <div>
            <div className='py-6 overflow-hidden'>
                <h1 className='text-zinc-300 h1 pt-[15vh] font-bold text-[5vmax] tracking-tighter'>Free Certifications </h1>
            </div>
                {
                    roadmap.certification_links.map((item, i) => (
                        <div key={i}>
                            {
                                <a href={item.certification_url} className='text-zinc-300 a text-2xl scale-y-0 block w-full py-4 border-b border-zinc-600 tracking-tighter'>{item.name}</a>
                            }
                        </div>
                    ))
                }
            </div>
            <div className='p-8 border border-zinc-700 rounded-xl  mt-[15vh] relative backdrop-blur-2xl '>
                <div className='overflow-hidden p-[10vw] w-[100vw] h-[100vh] absolute top-0 left-0 scale-1'>
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
                        className='top-[50%] -translate-x-1/2 left-1/2 -translate-y-1/2 absolute w-[30vmax] h-[30vmax] rounded-full bg-gradient-to-br shadow-[-60px_-60px_10px_0px_#9D3AE6] from-[#ff3eec] via-[#B538C6] to-[#772699] blur-2xl'>
                    </motion.div>
                </div>
                <div className='h-[60vh] overflow-y-auto ai  w-full flex flex-col gap-4  relative '>
                    <h1 className='text-zinc-300  font-bold text-[4vmax] tracking-tighter relative'>Have any queries ? Ask AI Here </h1>
                    {
                        responses.map((item, i) => (
                            <div key={i} className="">
                                <div
                                    className={`backdrop-blur-3xl bg-transparent text-zinc-100 text-2xl max-w-screen-sm relative px-6 py-4 border rounded-xl text-[18px] my-3 border-zinc-600 tracking-tighter ${item.align === "right" && "ml-auto"
                                        }`}
                                    dangerouslySetInnerHTML={{ __html: item.prompt }}
                                ></div>
                            </div>
                        ))
                    }


                    {/*
                Loading Div
                */}
                    {
                        Loading && <div className={`backdrop-blur-3xl bg-transparent text-zinc-100 text-2xl max-w-screen-sm relative px-6 py-8 border rounded-xl text-[18px] my-3 h-32 border-zinc-700 tracking-tighter flex flex-col gap-3 `}>
                            <div className='h-4 rounded-full relative bg-zinc-950/10 overflow-hidden' >
                                <motion.div
                                    className='absolute top-0 left-0 w-full h-full bg-orange-400/30'
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{
                                        duration: 2,
                                        ease: "linear",
                                        repeat: Infinity,
                                    }}
                                >
                                </motion.div>
                            </div>
                            <div className='h-4 rounded-full relative bg-zinc-950/10 overflow-hidden' >
                                <motion.div
                                    className='absolute top-0 left-0 w-full h-full bg-orange-400/30'
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{
                                        duration: 2,
                                        ease: "linear",
                                        repeat: Infinity,
                                    }}
                                >
                                </motion.div>
                            </div>
                            <div className='h-4 rounded-full relative bg-zinc-950/10 overflow-hidden' >
                                <motion.div
                                    className='absolute top-0 left-0 w-full h-full bg-orange-400/30'
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{
                                        duration: 2,
                                        ease: "linear",
                                        repeat: Infinity,
                                    }}
                                >
                                </motion.div>
                            </div>
                        </div>
                    }


                </div>
                <form onSubmit={handleSubmit}>
                    <div className='w-full bg-transparent backdrop-blur-3xl relative mt-auto'>
                        <div className='w-full px-4 py-2 rounded-full border border-zinc-700 flex justify-between gap-2 items-center'>
                            {/* Input field with state binding */}
                            <input
                                type="text"
                                placeholder="Ask your doubt"
                                className='w-full bg-transparent  text-zinc-100 outline-none p-2'
                                onChange={(e) => setuserInput((e.target.value))}  // Update state on change
                            />
                            <button type="submit" className='bg-zinc-700 p-3 rounded-full cursor-pointer'>
                                <RiArrowRightUpLine size={24} color='#cccccc' />
                            </button>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default page
