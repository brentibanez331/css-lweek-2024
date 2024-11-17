"use client"

import { createContext, useContext, useState } from "react";

interface GameDataContextType {
    binaryTarget: string
    asciiTarget: string
    binaryAnswer: string
    asciiAnswer: string
    updateBinaryTarget: (value: string) => void;
    updateAsciiTarget: (value: string) => void;
    checkBinaryAnswer: (answer: string) => boolean;
    checkAsciiAnswer: (answer: string) => boolean;
}


const GameDataContext = createContext<GameDataContextType | undefined>(undefined);

export function GameDataProvider({ children }: { children: React.ReactNode }) {
    const [binaryTarget, setBinaryTarget] = useState<string>('');
    const [asciiTarget, setAsciiTarget] = useState<string>('');
    const [binaryAnswer, setBinaryAnswer] = useState<string>('');
    const [asciiAnswer, setAsciiAnswer] = useState<string>('');

    // Convert character to binary
    const charToBinary = (char: string): string => {
        return char ? char.charCodeAt(0).toString(2).padStart(8, '0') : '';
    };

    // Convert character to ASCII decimal
    const charToAscii = (char: string): string => {
        return char ? char.charCodeAt(0).toString() : '';
    };

    // Update targets and automatically calculate answers
    const updateBinaryTarget = (value: string) => {
        setBinaryTarget(value);
        setBinaryAnswer(charToBinary(value));
    };

    const updateAsciiTarget = (value: string) => {
        setAsciiTarget(value);
        setAsciiAnswer(charToAscii(value));
    };

    // Check answers
    const checkBinaryAnswer = (answer: string): boolean => {
        return answer.toLowerCase() === binaryAnswer.toLowerCase();
    };

    const checkAsciiAnswer = (answer: string): boolean => {
        return answer.toLowerCase() === asciiAnswer.toLowerCase();
    };

    return (
        <GameDataContext.Provider
            value={{
                binaryTarget,
                asciiTarget,
                binaryAnswer,
                asciiAnswer,
                updateBinaryTarget,
                updateAsciiTarget,
                checkBinaryAnswer,
                checkAsciiAnswer,
            }}
        >
            {children}
        </GameDataContext.Provider>
    );
}

export function useGameData() {
    const context = useContext(GameDataContext);
    if (context === undefined) {
        throw new Error('useGameData must be used within a GameDataProvider');
    }
    return context;
}