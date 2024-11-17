"use client"

import HyperspaceComponent from "@/components/hyperspace";
import { memo, useEffect, useState } from "react"
import Cookies from "js-cookie";
import { charToDecimal } from "@/utils/functions";
import { useRouter } from "next/navigation";

const MemoizedParticlesComponent = memo(HyperspaceComponent);

export default function AsciiGame() {
    const [asciiTarget, setAsciiTarget] = useState(() => Cookies.get("asciiTarget") || "");
    const [answer, setAnswer] = useState('')
    const [asciiTargetAnswer, setAsciiTargetAnswer] = useState("");
    const [showGame, setShowGame] = useState(false)
    const router = useRouter();


    useEffect(() => {
        setAsciiTargetAnswer(charToDecimal(asciiTarget))

        const handleCookieChange = () => {
            setAsciiTarget(Cookies.get("asciiTarget") || "");
        };

        window.addEventListener('storage', handleCookieChange); // Listen for changes in local storage

        return () => {
            window.removeEventListener('storage', handleCookieChange); // Clean up the listener
        };
    }, []);

    const startGame = () => {
        setShowGame(true)
    }

    const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.target.value)
    }

    const handleSubmit = () => {
        console.log(answer)
        console.log(asciiTargetAnswer)
        if (answer === asciiTargetAnswer) {
            router.push("/loading?status=1&game=ascii")
        } else{
            router.push("/loading?status=0&game=ascii")
        }
    }

    return (
        <div className="relative min-h-screen overflow-hidden">
            <MemoizedParticlesComponent id="hyperspace" started={false} />
            <div className="relative z-10"> {/* Start Button Container */}
                {!showGame && (
                    <div
                        onClick={startGame}
                        className="px-4 absolute text-white top-0 left-0 w-full min-h-screen flex flex-col items-center justify-center"
                    >
                        <div className="backdrop-filter hover:scale-105 backdrop-blur-md bg-opacity-10 bg-clip-padding bg-gray-400 rounded-lg bg-opacity 20 p-8 border border-neutral-700 ease-in-out duration-500 hover:border-neutral-200 transition cursor-pointer"> {/* Added cursor-pointer */}
                            <div className="text-6xl opacity-75 transition duration-700 font-bold">
                                CLICK TO START
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {showGame && (
                <div className="px-4 absolute text-white top-0 left-0 w-full min-h-screen flex flex-col items-center justify-center z-[999]">
                    <div className="backdrop-filter backdrop-blur-md bg-opacity-10 bg-clip-padding bg-gray-400 rounded-lg bg-opacity 20 p-8 border border-neutral-700 ease-in-out duration-500">
                        <div className="text-center space-y-8 flex flex-col">
                            {/* <p>
                           To advance, you need to finish this game 
                        </p> */}
                            <p >
                                What is the equivalent of this Character in ASCII?
                            </p>
                            <p className="text-7xl font-bold">
                                {asciiTarget}
                            </p>
                            <div className="flex flex-col space-y-3">
                                <input
                                    value={answer}
                                    onChange={handleAnswerChange}
                                    className="bg-transparent border border-neutral-500 rounded-lg text-center py-3 font-bold" />
                                <button onClick={handleSubmit} className="py-2 rounded-lg border bg-white text-black transition ease-in-out">Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}