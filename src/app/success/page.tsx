"use client"

import GreenFireEffect from "@/components/greenfire";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const TypewriterText = ({ text, typingSpeed = 50, delay = 0 }: { text: string; typingSpeed?: number; delay?: number }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let charIndex = 0;
        let timeoutId: NodeJS.Timeout;

        const type = () => {
            setDisplayedText(text.substring(0, charIndex + 1));
            charIndex++;
            if (charIndex < text.length) {
                timeoutId = setTimeout(type, typingSpeed);
            }

        };

        timeoutId = setTimeout(type, delay)

        return () => clearTimeout(timeoutId)

    }, [text, typingSpeed, delay]);

    return <span >{displayedText}</span>;
};

function SuccessContent() {
    const searchParams = useSearchParams()
    const game = searchParams.get('game')

    const binaryMessage = "You have been verified";
    const asciiMessage = "Connect at Frequency 12";


    return (
        <div className="absolute text-white top-0 left-0 w-full min-h-screen flex flex-col items-center justify-center">
            {game === "binary" && (
                <div className="text-center">
                    <p className="text-7xl font-bold mb-4">
                        <TypewriterText text={binaryMessage} />
                    </p>

                    {/* <p className="text-3xl text-neutral-300">You have conquered the challenge</p> */}
                </div>
            )}

            {game === "ascii" && (
                <div className="text-center">
                    <p className="text-7xl font-bold mb-4">
                        <TypewriterText text={asciiMessage} />
                    </p>
                    {/* <p className="text-3xl text-neutral-300">You have conquered the challenge</p> */}
                </div>
            )}


            {/* <div className="flex space-x-4 mt-10">
                <Link className="bg-white bg-opacity-25 py-4 w-[200px] text-center text-2xl rounded-md" href={`/admin`}>Return</Link>
                <Link className="border border-neutral-200 py-4 w-[200px] text-center text-2xl rounded-md" href={`/${game}`}>No</Link>
            </div> */}
        </div>
    )
}

export default function Success() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <GreenFireEffect id="particles" />
            <Suspense fallback={<div>Loading...</div>}>
                <SuccessContent />
            </Suspense>
        </div>
    )
}