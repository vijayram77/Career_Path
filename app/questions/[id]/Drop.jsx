"use client";
import { RiArrowDownSLine } from "@remixicon/react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Drop = ({ques , ans}) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef();
  
    useEffect(() => {
      if (isOpen) {
        contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
      } else {
        contentRef.current.style.height = "0px";
      }
    }, [isOpen]);
  return (
    <div>
      <div
      className={`max-w-screen-xl px-4 bg-zinc-800  border-b border-zinc-700 mx-auto transition-all ease-in-out duration-500 overflow-hidden`}
    >
      <div className="w-full flex justify-between items-center DropDowntop relative py-8 " >
        <h1 className="text-zinc-300 font-semibold tracking-tighter text-3xl">
          {ques}
        </h1>
        <RiArrowDownSLine
          size={24}
          color="#cccccc"
          className={`cursor-pointer transition-all ease-in-out bg-zinc-700 rounded-full duration-500 ${isOpen ? '-rotate-180' : 'rotate-0'}`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div
        ref={contentRef}
        className="relative h-0 overflow-hidden transition-max-height duration-700 ease-in-out  text-zinc-400"
      >
        {ans}


      </div>

    </div>
    </div>
  )
}

export default Drop
