"use client";
import { useGSAP } from "@gsap/react";
import { RiArrowRightUpLine } from "@remixicon/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import React, { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger)

const RoleTitle = ({ name  }) => {

  const ref = useRef(null);
  useGSAP(() => {
    gsap.to(ref.current , {
      scaleY : 1 ,
      scrollTrigger : {
        trigger : ref.current , 
        start : "top 80%"
        }
    })
  })

  return (
    <div className={`w-full relative gap-8 items-center scale-y-0`} ref={ref}>
      <div
        className={`max-w-screen-xl px-4 border-b border-zinc-700 transition-all ease-in-out duration-500 overflow-hidden `}
      >
        <div className="w-full flex justify-between items-center relative py-8 gap-4"  >
          <h1 className="text-[#ffffff] font-semibold relative z-[99] tracking-tighter text-xl md:text-4xl">
            {name}
          </h1>
          <div  className="cursor-pointer transition-all ease-in-out rounded-full duration-500 flex justify-center items-center gap-2">
            <Link href="/RoadMaps" className="text-zinc-200 text-md">View More</Link>
          <RiArrowRightUpLine
            size={24}
            color="#ffffff"
            className={`cursor-pointer transition-all ease-in-out rounded-full duration-500 `}
            
          />
          </div>
        </div>


      </div>
      <div>
      
      </div>

    </div>
  );
};

export default RoleTitle;
