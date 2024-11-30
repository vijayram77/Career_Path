"use client"
import axios from 'axios'
import Link from 'next/link'
import { space } from 'postcss/lib/list'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const [username, setUsername] = useState()
    const [logoutToggle, setlogoutToggle] = useState(false)
    useEffect(() => {
        const posttest = async () => {
            try{
              const res = await axios.get("http://localhost:4000/loggedin/",{
                withCredentials : true
              
              });
              console.log(res);
              if(res){
                setUsername(u => res.data.name)
              }
              
            }
            catch(e){
              console.log(e);
            }
          }
          posttest();
    }, [])

    var refdiv = useRef()
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);

    }

    let Y = 0

    useEffect(() => {
        window.addEventListener("scroll", function (e) {
            window.scrollY > Y ? refdiv.current.style.top = "-14vh" : window.scrollY < Y ? refdiv.current.style.top = "0vh" : null
            Y = window.scrollY || window.pageYOffset;
        })
    })



    return (
        <div ref={refdiv} className='fixed h-[14vh] transition-all duration-600 ease-in py-[3vh] px-[5vw] z-[99999999] bg-zinc-900/10  w-full text-[14px] flex justify-between items-center overflow-x-hidden '>
            <h1 className='text-zinc-100 tracking-tighter font-semibold text-xl'>CC</h1>
            <div className=' items-center gap-12 hidden xl:flex'>
                {
                    ["Home", "RoadMaps", "Community", "Resume Builder", "Interview", "About Us"].map((item, i) => {
                        return <Link key={i} href={`/${item == "Home" ? "" : item == "Resume Builder" ? "ResumeBuilder" : item == "About Us" ? "About" : item}`} className='inline-block text-zinc-300 capitalize font-[500] tracking-tighter text-[16px]'>{item}</Link>
                    })
                }
            </div>

            <div className='xl:flex items-center gap-2 hidden'>
                {
                    username ?

                        <div className=''>

                            <Link href="/profile" onClick={() => setlogoutToggle(!logoutToggle)} className='text-[#cccccc] cursor-pointer text-xl  bg-zinc-800 font-semibold px-4 py-3 rounded-full '>{username.trim().charAt(0)}</Link>
                            {/* {logoutToggle ||
                            <div className='absolute top-2/3 px-1 rounded-md'>
                                <Link href='/logout' className='text-red-400 font-[Curvy] rounded-md h-4 flex justify-center items-center font-semibold px-4 py-4 text-sm'>logout</Link>

                            </div>

                            } */}
                        </div> : <>
                            <Link href='/login' className='text-[#cccccc] font-semibold px-4 py-2 rounded-full bg-gradient-to-tl from-zinc-800 to-zinc-950 border border-zinc-700/80'>LOGIN</Link>
                            <Link href='/signup' className='text-black font-semibold px-4 py-2 rounded-full bg-gradient-to-tl to-green-600 from-green-300 bg-transparent border border-zinc-700/80'>Sign Up</Link></>

                }

            </div>
            <div className='xl:hidden relative flex  h-12 w-12 gap-2 z-[9999999] ' onClick={handleToggle} >
                <div className={`transition-all ease-in-out duration-500 w-8 h-[1.5px] bg-white m-2 absolute  left-0 ${toggle ? " top-[30%] -translate-y-[50%] rotate-45" : " top-[20%] -translate-y-[40%]"}  `}></div>
                <div className={`transition-all ease-in-out duration-500 w-8 h-[1.5px] bg-white m-2 absolute ${toggle ? " top-[30%] -translate-y-[50%] -rotate-45" : " top-[40%] -translate-y-[60%]"} left-0  `}></div>
            </div>



            <div className={`w-full backdrop-blur-md h-screen bg-transparent top-0 fixed px-[8vw] py-[4vh] transition-all ease-in-out duration-500 ${toggle ? "left-0" : " left-[100%] "}`}>
                {
                    username &&
                    <h1 className='text-xl pt-4 font-[Geist] tracking-tighter block text-zinc-400'>Hello <span className='font-[Curvy]'>{username}</span></h1>
                }
                <h1 className='text-4xl font-[Geist] tracking-tighter block pb-4 text-zinc-100'>Menu</h1>
                {
                    username ?
                    (
                        ["Home","profile", "RoadMaps", "About", "Community", "Resume Builder (Beta)", "logout"].map((item, i) => (
                            <span onClick={() =>{setToggle(false)}}>
                            <Link  key={i} className={`text-2xl font-[Geist] tracking-tighter block py-3 ${item == "logout" ? "text-red-400" : "text-zinc-400"} border-b border-zinc-700`} href={`/${item == "Home" ? "" : item == "Sign In" ? "signup" : item == "Resume Builder (Beta)" ? "ResumeBuilder" : item}`}  >{item}</Link>
                            </span>
                        )))
                        :
                        ["Home", "RoadMaps", "About", "Sign In", "Community", "Resume Builder (Beta)"].map((item, i) => (
                            <span onClick={() =>{setToggle(false)}} >
                            <Link  key={i} className='text-2xl font-[Geist] tracking-tighter block py-3 text-zinc-400 border-b border-zinc-700' href={`/${item == "Home" ? "" : item == "Sign In" ? "signup" : item == "Resume Builder (Beta)" ? "ResumeBuilder" : item}`}  >{item}</Link>
                                
                            </span>
                        ))
                        
                }
            </div>
        </div>
    )
}

export default Navbar
