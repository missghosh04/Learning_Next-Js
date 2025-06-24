// "use client";
import Image from "next/image";

export default function Home() {
  // console.log(`My id is ${process.env.ID}`);
  // console.log(`My name is ${process.env.NEXT_PUBLIC_NAME}`);
  // console.log(`My secret is ${process.env.SECRET}`);
  return (
   <div>
    My id is {process.env.ID} <br />
    My name is {process.env.NEXT_PUBLIC_NAME} <br />
    My secret is {process.env.SECRET} <br />
   </div>
  );
}
