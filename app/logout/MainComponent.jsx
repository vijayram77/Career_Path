"use client"
import axios from 'axios'
import React, { useEffect } from 'react'

const MainComponent = ({baseUrl}) => {

  useEffect(() => {
    
    const post = async () => {
      try {
        const res = await axios.get( `${baseUrl}/logout` , {
          withCredentials : true
        })  
        console.log(res);
        
        localStorage.setItem("userData", "");
        window.location.href ="/"
      } catch (error) {
        alert(error.message)
      }
    }
    post()

  },[])
  return (
    <div>
      
    </div>
  )
}

export default MainComponent
