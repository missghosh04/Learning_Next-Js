"use client"
import Image from "next/image";

export default function Home() {

  const handleclick = async () => {
    let data = {
      name: "Soumi",
      Role: "Coder"
    }
    const response = await fetch("API/add", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
    )
    let result= await response.json()
    console.log(result)
  }
  return (
    <div>
      <h1 className="text-xl bg-amber-300 font-bold"> Next.js App Routes Demo</h1>
      <button className="bg-amber-300 rounded-2xl m-3"onClick={handleclick}>Click Me</button>
    </div>
  );
}
