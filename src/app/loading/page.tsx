"use client"

import MatrixEffect from "@/components/matrix";
import { useRouter, useSearchParams } from "next/navigation";
import { memo, useEffect, useState } from "react";

const MemoizedParticlesComponent = memo(MatrixEffect);

export interface TypingTextProps {
    text: string | null;
    typingSpeed?: number;
    delay?: number;
    className?: string;
    onComplete?: () => void
}

const TypingText = ({
    text,
    typingSpeed = 50,
    delay = 0,
    className = "",
    onComplete
}: TypingTextProps) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (!text) { // Check if text is null, if so then return immediately
            return; // if the text is null, dont execute further
        }
        let timeoutId: NodeJS.Timeout;
        let charIndex = 0;

        const type = () => {
            if (charIndex < text.length) {
                setDisplayedText(text!.substring(0, charIndex + 1));
                charIndex++;
                timeoutId = setTimeout(type, typingSpeed);
            }
        };

        timeoutId = setTimeout(() => {
            type();
        }, delay);

        const redirectTimeout = setTimeout(() => {
            if (onComplete) {
                onComplete();
            }
        }, (text.length * typingSpeed) + delay + 1500);

        return () => {
            clearTimeout(timeoutId)
            clearTimeout(redirectTimeout)
        }; // Cleanup on unmount/re-render
    }, [text, typingSpeed, delay, onComplete]);


    return <span className={className}>{displayedText}</span>;
};

export default function LoadingPage() {

    const router = useRouter();
    const searchParams = useSearchParams()
    const status = searchParams.get('status')
    const game = searchParams.get('game')

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const texts = ["CALCULATING...", "Hacking the Interlink", "Bypassing Security", "Establishing Connection"];

    const [displayedText, setDisplayedText] = useState<string | null>(texts[0]);

    const handleTypingComplete = () => {
        if (currentTextIndex >= texts.length - 1) {
            if (status === "1") {
                router.push(`/success?game=${game}`);
            } else {
                router.push(`/fail?game=${game}`);
            }
        } else {
            // Clear the currently displayed text (set to null or empty string)
            setDisplayedText(null);

            setTimeout(() => {
                setCurrentTextIndex((prevIndex) => prevIndex + 1);
                setDisplayedText(texts[currentTextIndex + 1]);

            }, 300);
        }
    };

    return (
        <div className="relative min-h-screen">
            <MemoizedParticlesComponent id="particles" />
            <div className="relative z-10">

                <div

                    className="px-4 absolute text-white top-0 left-0 w-full min-h-screen flex flex-col items-center justify-center"
                >
                    <div className=""> {/* Added cursor-pointer */}
                        <div className="text-6xl text-white opacity-75 transition duration-700 font-bold">
                            <TypingText
                                text={displayedText}
                                delay={300}
                                typingSpeed={50}
                                className="font-mono tracking-wider"
                                onComplete={handleTypingComplete}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}