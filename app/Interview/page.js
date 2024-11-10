"use client"
import React from 'react'
import SVGCurve from '../components/SVGCurve'
import Card from './Card'
import interview from './InterviewData'
import { motion } from 'framer-motion'

const page = () => {
    
  return (
    <div className=' bg-zinc-950  overflow-hidden'>
        <SVGCurve />
            <motion.h1 className='text-zinc-100 text-xl md:text-5xl font-semibold px-12   py-[20vh] tracking-tighter' initial={{ x: 400 }} animate={{  x: 0 }} transition={{ duration: 0.4, delay: 0.2 }} >Interview Questions</motion.h1>
    <div className='flex flex-wrap px-[5vw] gap-8'>
    {
        Object.entries(interview).map(([key, questionsArray]) => {
            console.log(key);
            
            return <Card key={key} title={key} data={questionsArray} />
        })
    }
    </div>

      <SVGCurve />
    </div>
  )
}

export default page
