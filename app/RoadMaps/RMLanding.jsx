"use client"
import React from 'react'
import img from '../assets/html-5.png'
import cssimg from '../assets/cssimage.png'
import jsimg from '../assets/jsimage.png'
import nodeimg from '../assets/node.png'
import javaimg from '../assets/java.png'
import reactimg from '../assets/react.png'
import gsap, { Power3 } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { easeInOut, motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const RMLanding = () => {
  useGSAP(() => {

    const tl = gsap.timeline();

    tl.from('.h1', {
      y: 200,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".h1",
        scroller: 'body',
      }
    })

    var images = document.querySelectorAll('.image');
    
    tl.to(".image2", {
      ease: Power3,
      opacity : 0.7,

    })
    tl.from(".image2", {
      ease: Power3,
      y: 700,
      rotate: 360,
      duration: 2,

    })
    tl.to(".image2", {
      opacity: 0

    }, "one")
    tl.to(".image", {
      opacity: 0.6

    }, "one")
    images.forEach((img) => {
      var Y = gsap.utils.random(-100, 100)
      Y < 0 ? Y = -700 : Y = -200

      tl.to(img, {
        ease: Power3,
        y: `${Y}%`,
        rotate: 0,
        scale: 0.4,
        x: -1000,
        rotate: 0,
        duration: 2,
        scrollTrigger: {
          trigger: img,
          scroller: 'body',
          scrub: 5,
          start: 'top 30%',
          end: 'top top'
        }
      })
    })
  })
  return (
    <motion.div className="w-full overflow-x-hidden relative rmparent pt-6 pb-[10vh] overflow-y-hidden min-h-screen  ">
      <div className='absolute z-[999999] left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 pt-[30vh]  font-[Geist] w-full leading-none'>
        <div className=' w-full text-center overflow-y-hidden '>
          <h1 className='text-[#ffffff] text-[8vmax] font-bold tracking-tighter h1 select-none'>Let's <motion.span animate={{ rotateX : 360}} transition={{repeat : Infinity , duration : 2}} className='inline-block px-2'>D</motion.span>ive Into </h1>
        </div>
        <div className='overflow-y-hidden w-full text-center'>
          <h1 className='text-[#ffffff] text-[8vmax] font-bold tracking-tighter h1 select-none font-[Curvy]'>The W<motion.span animate={{ rotateY : 360}} transition={{repeat : Infinity , duration : 2 }} className='inline-block px-2'>o</motion.span>rld Of </h1>
        </div>
        <div className='overflow-y-hidden w-full text-center'>
          <h1 className='text-[#ffffff] text-[8vmax] font-bold tracking-tighter h1 select-none'>RoadMaps</h1>
        </div>
      </div>
      <motion.div className="w-full h-[100vh] imagesparent relative z-[99999]">
        {/* Class "one" images */}
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '5%', left: '5%' }}>
          <img src={cssimg.src} alt="CSS Image" className="w-full h-full object-cover image opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '5%', left: '75%' }}>
          <img src={jsimg.src} alt="JavaScript Image" className="w-full h-full object-cover image opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '25%', left: '25%' }}>
          <img src={reactimg.src} alt="React Image" className="w-full h-full object-cover image opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '25%', left: '60%' }}>
          <img src={nodeimg.src} alt="Node.js Image" className="w-full h-full object-cover image opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '45%', left: '10%' }}>
          <img src={javaimg.src} alt="Java Image" className="w-full h-full object-cover image opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '45%', left: '45%' }}>
          <img src={img.src} alt="Other Image" className="w-full h-full object-cover image opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '45%', left: '80%' }}>
          <img src={jsimg.src} alt="JavaScript Image" className="w-full h-full object-cover image opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '65%', left: '30%' }}>
          <img src={reactimg.src} alt="React Image" className="w-full h-full object-cover image opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '65%', left: '65%' }}>
          <img src={cssimg.src} alt="CSS Image" className="w-full h-full object-cover image opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '85%', left: '15%' }}>
          <img src={nodeimg.src} alt="Node.js Image" className="w-full h-full object-cover image opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '85%', left: '50%' }}>
          <img src={javaimg.src} alt="Java Image" className="w-full h-full object-cover image opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '85%', left: '85%' }}>
          <img src={img.src} alt="Other Image" className="w-full h-full object-cover image opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '15%', left: '40%' }}>
          <img src={jsimg.src} alt="JavaScript Image" className="w-full h-full object-cover image opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '35%', left: '5%' }}>
          <img src={reactimg.src} alt="React Image" className="w-full h-full object-cover image opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '35%', left: '75%' }}>
          <img src={nodeimg.src} alt="Node.js Image" className="w-full h-full object-cover image opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '55%', left: '20%' }}>
          <img src={javaimg.src} alt="Java Image" className="w-full h-full object-cover image opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '55%', left: '55%' }}>
          <img src={img.src} alt="Other Image" className="w-full h-full object-cover image opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '75%', left: '5%' }}>
          <img src={jsimg.src} alt="JavaScript Image" className="w-full h-full object-cover image opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '75%', left: '40%' }}>
          <img src={reactimg.src} alt="React Image" className="w-full h-full object-cover image opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '75%', left: '75%' }}>
          <img src={cssimg.src} alt="CSS Image" className="w-full h-full object-cover image opacity-0" />
        </div>

        {/* Class "two" images */}
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '5%', left: '5%' }}>
          <img src={cssimg.src} alt="CSS Image" className="w-full h-full object-cover image2 opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '5%', left: '75%' }}>
          <img src={jsimg.src} alt="JavaScript Image" className="w-full h-full object-cover image2 opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '25%', left: '25%' }}>
          <img src={reactimg.src} alt="React Image" className="w-full h-full object-cover image2 opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '25%', left: '60%' }}>
          <img src={nodeimg.src} alt="Node.js Image" className="w-full h-full object-cover image2 opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '45%', left: '10%' }}>
          <img src={javaimg.src} alt="Java Image" className="w-full h-full object-cover image2 opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '45%', left: '45%' }}>
          <img src={img.src} alt="Other Image" className="w-full h-full object-cover image2 opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '45%', left: '80%' }}>
          <img src={jsimg.src} alt="JavaScript Image" className="w-full h-full object-cover image2 opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '65%', left: '30%' }}>
          <img src={reactimg.src} alt="React Image" className="w-full h-full object-cover image2 opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '65%', left: '65%' }}>
          <img src={cssimg.src} alt="CSS Image" className="w-full h-full object-cover image2 opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '85%', left: '15%' }}>
          <img src={nodeimg.src} alt="Node.js Image" className="w-full h-full object-cover image2 opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '85%', left: '50%' }}>
          <img src={javaimg.src} alt="Java Image" className="w-full h-full object-cover image2 opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '85%', left: '85%' }}>
          <img src={img.src} alt="Other Image" className="w-full h-full object-cover image2 opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '15%', left: '40%' }}>
          <img src={jsimg.src} alt="JavaScript Image" className="w-full h-full object-cover image2 opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '35%', left: '5%' }}>
          <img src={reactimg.src} alt="React Image" className="w-full h-full object-cover image2 opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '35%', left: '75%' }}>
          <img src={nodeimg.src} alt="Node.js Image" className="w-full h-full object-cover image2 opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '55%', left: '20%' }}>
          <img src={javaimg.src} alt="Java Image" className="w-full h-full object-cover image2 opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '55%', left: '55%' }}>
          <img src={img.src} alt="Other Image" className="w-full h-full object-cover image2 opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '75%', left: '5%' }}>
          <img src={jsimg.src} alt="JavaScript Image" className="w-full h-full object-cover image2 opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '75%', left: '40%' }}>
          <img src={reactimg.src} alt="React Image" className="w-full h-full object-cover image2 opacity-0" />
        </div>
        <div className="absolute w-[8vw] h-[8vw] z-[99999]" style={{ top: '75%', left: '75%' }}>
          <img src={cssimg.src} alt="CSS Image" className="w-full h-full object-cover image2 opacity-0" />
        </div>


      </motion.div>
    </motion.div>


  )
}

export default RMLanding