"use client"
import React, { useRef } from 'react'
import RoleTitle from './HomeRoleTitles'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import dummydata from './dummydomains'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)


const DummyRoadMap = () => {
  const domainsref = useRef();
  const blueRef = useRef();

  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger : {
        trigger : domainsref.current ,
        start : "top 60%"
      }
    });
    tl.to(domainsref.current , {
      scaleY : 1,
      duration : 1 ,
      
    })
    tl.to(blueRef.current , {
      scaleY : 1
    })
  })
    

    return (
        <div className='relative parent domain w-full min-h-screen overflow-hidden bg-inc-950 pt-[14vh] px-[7.5vw]'>
            <div className='absolute w-full h-full  '></div>
            <div className='flex items-center gap-2  pt-6'>
                <div ref={blueRef} className='w-3 h-[6vmax] scale-y-0 bg-[#0131F5] rounded-sm scale-y-0'></div>
                <h1 ref={domainsref} className='text-[7vmax] font-semibold text-[#ffffff] relative tracking-tighter scale-y-0'>Domains</h1>
            </div>
            {
              
              dummydata.map((item , i ) => (
                <RoleTitle key={i} name={item.name} />
              ))
            }
            <div className='flex py-12 justify-end items-center text-white relative'>
                <Link href='/RoadMaps' className='px-6 py-2 rounded-full border border-zinc-400'> View More</Link>
            </div>
            </div>
    )
}

export default DummyRoadMap
