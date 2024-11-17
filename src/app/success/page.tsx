"use client"

import GreenFireEffect from "@/components/greenfire";
import Link from "next/link";
import { Suspense } from "react";

function SuccessContent() {
    return (
        <div className="absolute text-white top-0 left-0 w-full min-h-screen flex flex-col items-center justify-center">
            <p className="text-7xl font-bold mb-4">SUCCESS</p>
            <p className="text-3xl text-neutral-300">You have conquered the challenge</p>
            <div className="flex space-x-4 mt-10">
                <Link className="bg-white bg-opacity-25 py-4 w-[200px] text-center text-2xl rounded-md" href={`/admin`}>Return</Link>
                {/* <Link className="border border-neutral-200 py-4 w-[200px] text-center text-2xl rounded-md" href={`/${game}`}>No</Link> */}
            </div>
        </div>
    )
}


export default function Success() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <GreenFireEffect id="particles"/>
            <Suspense fallback={<div>Loading...</div>}>
                <SuccessContent />
            </Suspense>
        </div>
    )
}