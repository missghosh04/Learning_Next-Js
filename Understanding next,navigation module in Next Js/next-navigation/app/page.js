"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
export default function Home() {
  const searchParams = useSearchParams();
  
  return (
    <div>
      This is our page and the blog is {searchParams.get("blog")}
    </div>
  );
}
