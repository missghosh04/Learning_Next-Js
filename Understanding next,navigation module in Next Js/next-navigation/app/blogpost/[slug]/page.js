"use client";
import React from 'react'
import { useParams } from 'next/navigation'

const page = () => {
  const { slug } = useParams();
  
  return (
    <div>
      This is blog post {slug}
      
    </div>
  )
}

export default page
