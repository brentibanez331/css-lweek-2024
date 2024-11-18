"use client"

import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { stringToBinary, stringToDecimal } from "@/utils/functions";
import Link from "next/link";

export default function AdminPage() {
    const [binaryTarget, setBinaryTarget] = useState(() => Cookies.get("binaryTarget") || "A");
    const [asciiTarget, setAsciiTarget] = useState(() => Cookies.get("asciiTarget") || "A");
    const [binaryAnswer, setBinaryAnswer] = useState(() => stringToBinary(binaryTarget) || "")
    const [asciiAnswer, setAsciiAnswer] = useState(() => stringToDecimal(asciiTarget) || "")

    const [activeTab, setActiveTab] = useState('binary')

    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === 'binaryTarget') {
                setBinaryTarget(Cookies.get("binaryTarget") || "");
            }
            if (event.key === 'asciiTarget') {
                setAsciiTarget(Cookies.get("asciiTarget") || "")
            }
        };


        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }
    }, []);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const updateBinaryTarget = (value: string) => {
        Cookies.set("binaryTarget", value);
        setBinaryTarget(value); // Update the component's state
        setBinaryAnswer(stringToBinary(value))
    };

    const updateAsciiTarget = (value: string) => {
        Cookies.set("asciiTarget", value);
        setAsciiTarget(value);  // Update the component's state
        setAsciiAnswer(stringToDecimal(value))
    };

    const formatBinary = (binary: string): string => {
        let formattedBinary = "";
        for (let i = 0; i < binary.length; i += 8) {
            formattedBinary += binary.substring(i, i + 8) + "\n"; // Add newline every 8 characters
        }
        return formattedBinary;
    };

    return (
        <div className="flex flex-col items-center pt-28 overflow-y-hidden space-y-8">
            <div className="text-center">
                <h1 className="text-3xl">Admin Dashboard</h1>
                <p className="text-neutral-500">This page is for NPC use only</p>
            </div>
            <div className="space-y-8 w-[500px] backdrop-filter backdrop-blur-md bg-opacity-10 bg-clip-padding bg-gray-400 rounded-lg bg-opacity 20 p-8 border border-neutral-700 ease-in-out duration-500">
                <div className="flex space-x-4">
                    <button
                        onClick={() => handleTabClick('binary')}
                        className={`w-1/2 text-center rounded-lg py-1 ${activeTab === 'binary' ? 'bg-neutral-700' : ''}`}>Binary</button>
                    <button
                        onClick={() => handleTabClick('ascii')}
                        className={`w-1/2 text-center rounded-lg py-1 ${activeTab === 'ascii' ? 'bg-neutral-700' : ''}`}>ASCII</button>
                </div>
                {/* Do a conditional render between the two */}
                {activeTab === 'binary' ? (
                    <div className="space-y-4 flex flex-col items-center">
                        <div className="text-center">
                            <p className="text-xl">Update Binary Target</p>
                            <p className="text-neutral-500">Insert a single character</p>
                        </div>
                        <div>
                            <input
                                value={binaryTarget}
                                onChange={(e) => { updateBinaryTarget(e.target.value) }}

                                className="rounded-lg py-2 text-black text-center" />


                        </div>
                        <div className="text-center mt-10">
                            <p className="text-neutral-500">Decimal Equivalent</p>
                            <p className="text-xl w-[300px] whitespace-pre-wrap">{formatBinary(binaryAnswer)}</p>
                        </div>
                        <Link href={"/binary"} className="px-2 py-2 rounded-md bg-white text-black">Click here to play BINARY</Link>
                    </div>
                ) : (
                    <div className="space-y-4 flex flex-col items-center">
                        <div className="text-center">
                            <p className="text-xl">Update ASCII Target</p>
                            <p className="text-neutral-500">Insert a single character</p>
                        </div>
                        <div>
                            <input
                                value={asciiTarget}
                                onChange={(e) => updateAsciiTarget(e.target.value)}
                                className="rounded-lg py-2 text-black text-center" />
                            <div className="text-center mt-10">
                                <p className="text-neutral-500">Decimal Equivalent</p>
                                <p className="text-3xl">{asciiAnswer}</p>
                            </div> {/* Add your logic to display the answer */}

                        </div>
                        <Link href={"/ascii"} className="px-2 py-2 rounded-md bg-white text-black">Click here to play ASCII</Link>
                    </div>
                )}
            </div>

        </div>
    )
}