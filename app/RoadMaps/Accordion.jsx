"use client"
import React, { useRef, useState } from 'react'
import { RiArrowDownSLine } from '@remixicon/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Accordion = ({image , last , name , description , yt}) => {
    const imgref = useRef();
    const Accref = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef();
    useGSAP(() => {
        if (isOpen) {
            contentRef.current.style.height = `${contentRef.current.scrollHeight + 20}px`;
        } else {
            contentRef.current.style.height = "0px";
        }
    }, [isOpen]);

    const handleMouseMove = (e) => {

        gsap.to(imgref.current, {
            left: (e.clientX - Accref.current.getBoundingClientRect().x),
            top: (e.clientY - Accref.current.getBoundingClientRect().y)
        })
    }
    const handleEnter = () => {

        gsap.to(imgref.current, {
            scaleY: 1
        })
    }
    const handleLeave = () => {

        gsap.to(imgref.current, {
            scaleY: 0
        })

    }
    return (
        <div className='flex gap-32'>
            <div onClick={() => setIsOpen(!isOpen)}
                className={`md:w-[1200px] w-[300px] px-4  border-b border-zinc-700 mx-auto transition-all ease-in-out duration-500 overflow-hidden`}
            >
                <div ref={Accref} className="w-full flex h-28 justify-between items-center accordiontop relative py-8 " onMouseMove={handleMouseMove} onMouseEnter={handleEnter} onMouseLeave={handleLeave} >
                    <img ref={imgref} className="accordionimg absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 h-20 scale-y-0   " src={image} alt="image" />
                    <h1 className="text-zinc-300 font-semibold tracking-tighter text-3xl relative">
                        {name}
                    </h1>
                    <RiArrowDownSLine
                        size={24}
                        color="#cccccc"
                        className={`cursor-pointer transition-all ease-in-out bg-zinc-700 rounded-full duration-500 ${isOpen ? '-rotate-180' : 'rotate-0'}`}
                        
                    />
                </div>
                <div
                    ref={contentRef}
                    className="relative h-0 overflow-hidden transition-max-height duration-700 ease-in-out  text-zinc-400"
                >
                    <h1 className='text-xl text-zinc-300 font-semibold tracking-tighter'>Description</h1>

                    <h1 className='text-base text-zinc-400 tracking-tighter'>{description}</h1>
                    <a  href={yt} className='text-base text-blue-500 tracking-tighter underline '>Youtube Link for Full Course</a>
                </div>

            </div>
            <div className='w-32 min-h-28  flex-col justify-start items-center md:flex hidden'>
                <img src={image} alt="" className='h-24' />
                {
                    last || <div className='w-[1px] bg-zinc-500 h-full'>

                    </div>
                }
            </div>
        </div>
    )
}

export default Accordion
