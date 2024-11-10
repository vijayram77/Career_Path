import { useGSAP } from '@gsap/react'
import gsap, { Linear } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)

const SVGCurve = () => {



    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger : {
                trigger : ".svgparent",
                scroller : "body",
                start : "top top",
                end : "top -25%",
                scrub : 3
            }
        });
        
        tl.to(".coveringdiv",{
            ease : Linear ,
            x : "100%" ,
            
        })
    })
    return (
        <div className='w-full h-[150vh] absolute bg-zinc-950 svgparent overflow-hidden'>
            <div className='absolute w-full h-[150vh] bg-zinc-950 coveringdiv left-0'></div>
            <div className='absolute w-full h-[150vh] bg-transparent left-0 top-0'></div>
            <svg width="1500" height="800" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 100 Q 250 0, 280 500 T 1600 600" stroke="#A6A0D2" strokeWidth="15px"  fill="transparent" />
            </svg>

        </div>
    )
}

export default SVGCurve
