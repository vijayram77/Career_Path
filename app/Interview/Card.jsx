"use client"
import React from 'react'
import './style.css'
import Link from 'next/link'

const Card = ({title , data}) => {
  return (
    <div>
      <div className="card1 transform transition-transform duration-300 hover:rotate-25 hover:translate-x-10">
        <div className='div1'>{title.split("_").join(" ")}</div>
        <div className='div3'><Link href={`/questions/${title}`}>Click Here</Link></div>
      </div>

    </div>
  )
}

export default Card
