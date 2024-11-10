"use client";
import { RiArrowDownSLine } from "@remixicon/react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
// import DropDown from "./DropDown";
import interview from "@/app/Interview/InterviewData";
import Drop from "./Drop";


const page = ({params}) => {

    // console.log(params.id);
    // console.log(interview);
    const [dAAta, setdAAta] = useState([])
    const [titlee, setTitle] = useState("")
    useEffect(()=>{
        const aaaaa = interview[params.id];
        setdAAta(aaaaa)
        const title = (params.id.split("_").join(" "));
        setTitle(title)
    },[])
    

  return (
    <div
      className={`w-full min-h-screen bg-zinc-950 pt-[20vh] px-4  border-b border-zinc-700 mx-auto transition-all ease-in-out duration-500 overflow-hidden`}
    >
        
        {/* <h1 className='text-[7vmax] font-semibold text-[#ffffff] relative tracking-tighter scale-y-0 bg-red-400'>{titlee}</h1> */}

    {    dAAta.map((data, index) => {
            // console.log(data.question);
            // console.log(data.answer);
            
            return <Drop key={index} ques={data.question} ans={data.answer}  />
        })
    }
    </div>
  );
};

export default page;
