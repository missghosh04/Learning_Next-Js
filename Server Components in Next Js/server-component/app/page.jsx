// "use client"
// IF we cant use us Client then we cant use useEFFect of useState because it is client side component
// import React, { useState,useEffect } from 'react'
import Navbar from "./Components/Navbar"
import fs from "fs/promises"
const page = () => {
  // const [count,setCount]=useState(0)
  console.log("hey i am soumi..................")
  let a=fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})
  return (
    <div>
      <Navbar/>
      i am a component
      {/* i am counting......{count} */}
      {/* <button onClick={()=>{setCount(count+1)}}>Click me</button> */}
    </div>
  )
}

export default page
