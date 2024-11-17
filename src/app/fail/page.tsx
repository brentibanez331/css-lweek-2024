"use client"

import FireEffect from "@/components/fire";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function FailedContent() {
    const searchParams = useSearchParams()
    const game = searchParams.get('game')

    return (
        <div className="absolute text-white top-0 left-0 w-full min-h-screen flex flex-col items-center justify-center">
            <p className="text-7xl font-bold mb-4">YOU FAILED</p>
            <p className="text-3xl text-neutral-300">Would you like to challenge once more?</p>
            <div className="flex space-x-4 mt-10">
                <Link className="bg-white bg-opacity-25 py-4 w-[200px] text-center text-2xl rounded-md" href={`/${game}`}>Yes</Link>
                <Link className="border border-neutral-200 py-4 w-[200px] text-center text-2xl rounded-md" href={`/${game}`}>No</Link>
            </div>
        </div>
    )
}


export default function Failed() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <FireEffect id="particles"/>
            <Suspense fallback={<div>Loading...</div>}>
                <FailedContent />
            </Suspense>
        </div>
    )
}