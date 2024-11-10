"use client";
import { RiArrowRightUpLine , RiArrowDownSLine } from "@remixicon/react";
import React, { useRef, useState } from "react";

import Link from "next/link";


const RoleTitle = ({ name, categories , direction }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [scale, setScale] = useState(false)
  const popupref = useRef();


  const handleClick = () => {
   setScale(!scale)
   setIsOpen(!isOpen)
  }


  return (
    <div className={`w-full min-h-[100vh] relative  flex flex-wrap gap-8 items-center ${direction == "left" ? "" : "flex-row-reverse"} `} >
      <div
        className={`w-[300px] md:w-[500px]  px-4  border-b border-zinc-700 transition-all ease-in-out duration-500 overflow-hidden `}
      >
        <div className="w-full flex justify-between items-center  relative py-8 gap-4"  >
          <h1 className="text-[#ffffff] font-semibold relative z-[99] tracking-tighter md:text-4xl text-2xl">
            {name}
          </h1>
          <div onClick={handleClick} className=" cursor-pointer transition-all ease-in-out rounded-full duration-500 flex justify-center items-center gap-2">
            <h1 className="text-zinc-400 text-md">Expand</h1>
          <RiArrowDownSLine
            size={24}
            color="#8A8A93"
            className={`cursor-pointer transition-all ease-in-out rounded-full duration-500 ${isOpen ?   'rotate-0' : '-rotate-180'}`}
            
          />
          </div>
        </div>


      </div>
      <div>
      <div ref={popupref} className={`w-[280px] md:w-[500px] z-[9999]  my-12 rounded-xl bg-gradient-to-br from-zinc-950/5 backdrop-blur-2xl to-purple-950/10 min-h-72 p-6 border border-zinc-800 transition-all ease-in-out duration-500 tracking-tighter ${scale ? ""  : " scale-y-0 opacity-0"}`} >
            <h1 className='text-sm text-zinc-400 pb-2'>{name}</h1>
            <h1 className='text-2xl  text-zinc-50 font-semibold'>Categories</h1>
            {
                categories.map((item, i) => (
                    <div key={i} className="w-full flex justify-between items-center  relative py-2 gap-4 border-b border-zinc-800"  >
                        <h1 className="text-zinc-300  tracking-tighter text-xl relative z-[99999]">
                            {item.title}
                        </h1>
                        <Link href={`/RoadMap/${item.role}`} className="p-3 cursor-pointer transition-all ease-in-out bg-zinc-700 rounded-full duration-500">
                            <RiArrowRightUpLine
                                size={24}
                                color="#cccccc"

                            />
                        </Link>
                        
                    </div>
                ))
            }
        </div>
      </div>

    </div>
  );
};

export default RoleTitle;
