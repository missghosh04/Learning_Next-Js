"use client"
import {submitAction } from "./Actions/form";
import { useRef } from "react";
export default function Home() {
  let ref=useRef()
  return (

    <div className=" bg-amber-950  w-1/2 h-[60vh] flex my-12 mx-auto">
      <form   ref={ref} action={(e)=>{submitAction(e);ref.current.reset()}}>

        <div>
          <label htmlFor="name">Name</label>
          <input type="text" className="bg-white text-black" name="name" id="name" />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input type="text" className="bg-white text-black" name="address" id="address" />
        </div>

        <div>
          <label htmlFor="contact">Contact no</label>
          <input type="text" className="bg-white text-black" name="contact" id="contact" />
        </div>
        <div>
          <button className="bg-red-400 p-4 m-12"type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
