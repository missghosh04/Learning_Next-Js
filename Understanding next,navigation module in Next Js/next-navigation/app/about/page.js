"use client";
import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { useRouter } from 'next/navigation'
const page = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      // Redirect to home after 3 seconds
      router.push('/')
    }, 3000)


  }, [])
  
  return (
    <div>
      <Navbar/>
      This is aboutPage
      <button onClick={() => router.push('/')}>Go Home</button>
    </div>
  )
}

export default page
