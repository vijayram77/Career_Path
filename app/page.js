"use client"
import React, {  useEffect, useRef } from 'react'
import Lenis from 'lenis';
import 'lenis/dist/lenis.css'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import JAYHome from './HomePage/Home';
import DummyRoadMap from './HomePage/DummyRoadMap';

gsap.registerPlugin(ScrollTrigger)



const page = () => {

  


  const scrollRef = useRef();
  useEffect(() => {
    const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
  });
  
  // console.log(Data.AWS_Cloud_DevOps);
  

  return (
    <div ref={scrollRef} className='w-full min-h-[100svh] bg-zinc-950'>
      
      <JAYHome />
      <DummyRoadMap />
      
    </div>
  )
}

export default page
