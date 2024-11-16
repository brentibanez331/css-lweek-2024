"use client"

import HyperspaceComponent from "@/components/hyperspace";
import Image from "next/image";
import { memo, useEffect, useState } from "react";

const MemoizedParticlesComponent = memo(HyperspaceComponent)

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  })

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <MemoizedParticlesComponent id="hyperspace"/>
      </div>
    </div>
  );
}
