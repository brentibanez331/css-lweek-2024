"use client"

import HyperspaceComponent from "@/components/hyperspace"
import Link from "next/link"

// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";

// // const MemoizedParticlesComponent = memo(HyperspaceComponent)

// const HyperspaceComponent = dynamic(
//   () => import('@/components/hyperspace'),
//   { ssr: false }
// )

export default function Home() {
  // const [started, setStarted] = useState(false)

  // const handleClick = () => {
  //   setStarted(true)
  // }
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return null;
  // }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* <main>

      </main> */}
      <HyperspaceComponent id="hyperspace" started={true}/>
      <div className="relative z-10">
        <div className="px-4 absolute text-white top-0 left-0 w-full min-h-screen flex flex-col items-center justify-center">
          <div className="backdrop-filter hover:scale-105 backdrop-blur-md bg-opacity-10 bg-clip-padding bg-gray-400 rounded-lg bg-opacity 20 p-8 border border-neutral-700 ease-in-out duration-500 hover:border-neutral-200 transition">
            <Link 
              href={"/success"}
              className="text-6xl opacity-75 transition duration-700 cursor-pointer font-bold"
              >
              CLICK TO START
            </Link>
          </div>

          {/* <div className="w-[500px] p-24 backdrop-filter backdrop-blur-md bg-opacity-10 bg-clip-padding bg-gray-400 rounded-lg flex flex-col items-center">
            <p className="text-white text-center text-3xl">Are you ready for the travel?</p>
            <button className="bg-white text-black px-2 py-1 rounded-md">Click to Start</button>
          </div> */}

        </div>
      </div>

    </div>
  )
}
