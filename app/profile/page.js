"use client"
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";


export default function page() {
    const [userData , setUserData] = useState({});
    useEffect(() => {
        const posttest = async () => {
            try{
              const res = await axios.get("http://localhost:4000/loggedin/",{
                withCredentials : true
              
              });
              console.log(res);
              if(res){
                setUserData(u => res.data);
                
              }
              
            }
            catch(e){
              console.log(e);
            }
          }
          posttest();
    }, [])
  return (
    <div className="bg-zinc-950 w-full  text-white min-h-screen px-[5vw] py-[20vh]">
      <div className="max-w-5xl">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-6">Account Center</h1>

        {/* Sidebar and Content Wrapper */}
        <div className="flex flex-col md:flex-row gap-6">
          

          {/* Content Area */}
          <div className="flex-1  rounded-lg p-6">
            {/* Profile Section */}
            <div className="flex items-center mb-6">
              <div className="relative">
                <div className="bg-zinc-800 w-20 h-20 rounded-full flex items-center justify-center">
                </div>
              
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold">{userData.name}</h2>
                <p className="text-gray-400">{userData.email}</p>
              </div>
            </div>

            {/* Form Section */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">User Name</label>
                <input
                  type="text"
                  value={userData.name}
                  className="w-full bg-zinc-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  value={userData.email}
                  className="w-full bg-zinc-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              </form>

            {/* Logout Button */}
            <div className="mt-6 ml-auto w-full">
              <Link href="/logout" className="bg-red-600  font-semibold px-6 py-2 rounded-md text-white">
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
