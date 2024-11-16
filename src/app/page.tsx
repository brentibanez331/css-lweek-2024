"use client"

import HyperspaceComponent from "@/components/hyperspace"

// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";

// // const MemoizedParticlesComponent = memo(HyperspaceComponent)

// const HyperspaceComponent = dynamic(
//   () => import('@/components/hyperspace'),
//   { ssr: false }
// )

export default function Home() {
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
      <HyperspaceComponent id="hyperspace"/>
      <div className="relative z-10">
        <div className="px-4 absolute text-white top-0 left-0 w-full min-h-screen flex flex-col items-center justify-center">
          <p className="text-white">Welcome to the future</p>
        </div>
      </div>

    </div>
  )
}
