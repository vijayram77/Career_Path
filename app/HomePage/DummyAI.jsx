"use client"
import { RiArrowRightUpLine } from '@remixicon/react'
import { easeInOut, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'

const DummyAI = () => {
    const [responses, setResponses] = useState([
        {
            prompt: "Hey there ! How You Doing? , Need Help?",
            align: "left"
        }
    ])
    return (
        <div>
            <div className='w-full min-h bg-zinc-950 py-[15vh] px-[5vw] overflow-hidden'>
                <div className='p-8 relative backdrop-blur-2xl '>
                    <div className=' p-[10vw] w-[100vw] h-[100vh] absolute top-0 left-0 scale-1'>
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
                            className='top-[20%] -translate-x-1/2 left-2/3 -translate-y-1/2 absolute w-[20vmax] h-[20vmax] rounded-full bg-gradient-to-br  from-[#32fcff] via-[#022bce] to-[#001678] blur-3xl'>
                        </motion.div>
                    </div>
                    <div className=' overflow-y-auto ai  w-full flex flex-col gap-4  relative '>
                        <h1 className='text-zinc-300 pb-10  font-bold text-[7vmax] tracking-tighter relative'>Chat With Us </h1>
                        {
                            responses.map((item, i) => (
                                <div key={i} className="">
                                    <div
                                        className={` bg-transparent text-zinc-100 text-2xl max-w-screen-sm relative px-6 py-4 border rounded-xl text-[18px] my-3 border-zinc-600 tracking-tighter ${item.align === "right" && "ml-auto"
                                            }`}
                                        dangerouslySetInnerHTML={{ __html: item.prompt }}
                                    ></div>
                                </div>
                            ))
                        }





                    </div>
                    <div className='w-full bg-transparent relative mt-auto'>
                        <div className='flex py-12 justify-end items-center text-white relative'>
                            <Link href='/Chat' className='px-6 py-2 rounded-full border border-zinc-400'> View More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DummyAI
