"use client"
import React, { useState } from 'react'
import { RiArrowRightLine, RiGoogleFill } from '@remixicon/react'
import { easeInOut, motion } from 'framer-motion'
import Link from 'next/link'
import axios from 'axios'


const MainComponent = ({baseUrl}) => {
    console.log(baseUrl + "base Url maaawaaaaaaaaaaaaa");
    

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post(`${baseUrl}/signup`, formData , {
                withCredentials : true
            })  
            if(res.status == 200){
                alert("Account Created Successfully")
                window.location.href = "/login"
            }
            else{
                alert("Internal Server Error!")
            }
            
        }
        catch(e){
            console.log(e);
            
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className='relative w-full overflow-hidden h-[100svh] bg-zinc-950 flex justify-center text-zinc-400 items-center'>
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
                    className='top-[10%]  left-0  absolute w-[30vmax] h-[30vmax] rounded-full bg-gradient-to-br shadow-[-60px_-60px_10px_0px_#001678] from-[#32fcff]/70 via-[#022bce]/70 to-[#001678]/20 blur-xl'>
                </motion.div>
            <form onSubmit={handleSubmit}>
                <div className='flex relative z-999 flex-col items-center px-8 py-12 rounded-xl'>
                    <div className='bg-zinc-800 rounded-full px-2 py-1'>
                        <p className='tracking-tighter text-[14px]'>Create Your Account Here</p>
                    </div>
                    <h1 className='text-4xl text-zinc-300 mt-4 whitespace-nowrap'>Sign Up Account</h1>
                    <p className='tracking-tighter text-zinc-500 capitalize text-[14px] mt-2'>Enter your personal details to continue</p>
                    <div className='bg-zinc-800 rounded-full mt-6'>
                        <RiGoogleFill
                            className="my-icon p-2"
                            size={32}
                            fill="#cccccc"
                        />
                    </div>
                    <input
                        required
                        name="username"
                        type="text"
                        value={formData.username}
                        onChange={handleChange}
                        className='bg-transparent px-4 w-[280px] py-3 mt-8 rounded-[10px] outline-none text-zinc-100 border-[1px] text-[14px] border-zinc-600'
                        placeholder='Create Username'
                    />
                    <input
                        required
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className='bg-transparent px-4 w-[280px] py-3 mt-2 rounded-[10px] outline-none text-zinc-100 border-[1px] text-[14px] border-zinc-600'
                        placeholder='Enter Email'
                    />
                    <input
                        required
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        className='bg-transparent px-4 w-[280px] py-3 mt-2 rounded-[10px] outline-none text-zinc-100 border-[1px] text-[14px] border-zinc-600'
                        placeholder='Enter Password'
                    />
                    <button className='text-[#202020] signup-btn tracking-tighter w-[280px] font-[600] rounded-full mt-8 py-2 bg-[#cccccc]' type='submit'>
                        <span className='inline-block signup'>Sign Up</span>
                        <div className='inline-block'>
                            <RiArrowRightLine
                                className="my-icon inline-block p-2"
                                size={32}
                                fill="#000000"
                            />
                        </div>
                    </button>
                    <div className='flex items-center mt-5 gap-2'>
                        <p className='tracking-tighter'>Already have an account?</p>
                        <Link href='/login' className='text-zinc-300 cursor-pointer font-[500] tracking-tighter text-xl'>Login</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MainComponent;
