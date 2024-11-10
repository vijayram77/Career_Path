"use client"
import React, { useState } from 'react'
import run from '../GeminiApi'
import { easeInOut, motion } from 'framer-motion'
import { RiArrowRightUpLine } from '@remixicon/react'

const page = () => {
  const [Loading, setLoading] = useState(false)

    const [userInput, setuserInput] = useState();
    const [responses, setResponses] = useState([
        {
            prompt: "Hey there ! How You Doing? , Need Help?",
            align: "left"
        }
    ])



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
            getresponse(userInput);
            setuserInput('');
        }
    }
 
  return (
    <div className='w-full min-h bg-zinc-950 py-[15vh] px-[5vw] overflow-hidden'>
      <div className='p-8 relative backdrop-blur-2xl '>
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
                        className='top-[50%] -translate-x-1/2 left-1/2 -translate-y-1/2 absolute w-[30vmax] h-[30vmax] rounded-full bg-gradient-to-br  from-[#ff3eec] via-[#B538C6] to-[#772699] blur-2xl'>
                    </motion.div>
                </div>
                <div className='h-[60vh] overflow-y-auto ai  w-full flex flex-col gap-4  relative '>
                    <h1 className='text-zinc-300 pb-10  font-bold text-[5vmax] tracking-tighter relative'>Chat With AI </h1>
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
                                value={userInput}  // Bind input value to state
                                onChange={(e) => setuserInput(e.target.value)}  // Update state on change
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
