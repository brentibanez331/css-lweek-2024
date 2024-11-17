"use client"

import HyperspaceComponent from "@/components/hyperspace"
import Link from "next/link"

export default function Home() {

  return (
    <div className="relative min-h-screen overflow-hidden">
      <HyperspaceComponent id="hyperspace" started={false}/>
      <div className="relative z-10">
        <div className="px-4 absolute text-white top-0 left-0 w-full min-h-screen flex flex-col items-center justify-center">
          <div className="backdrop-filter hover:scale-105 backdrop-blur-md bg-opacity-10 bg-clip-padding bg-gray-400 rounded-lg bg-opacity 20 p-8 border border-neutral-700 ease-in-out duration-500 hover:border-neutral-200 transition">
            <Link 
              href={"/admin"}
              className="text-6xl opacity-75 transition duration-700 cursor-pointer font-bold"
              >
              HOME FOR NPC
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
