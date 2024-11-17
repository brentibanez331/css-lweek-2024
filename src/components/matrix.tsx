"use client"

import { Container, MoveDirection, OutMode } from "@tsparticles/engine"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadFull } from "tsparticles"
import { useEffect, useMemo, useState } from "react"

const MatrixEffect = (props: any) => {
    const [init, setInit] = useState(false)

    // Runs at the start
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine)
            // await loadBasic(engine, false);
            // await loadEmittersPlugin(engine, false);
            // await loadEmittersShapeSquare(engine, false);
            // await loadLifeUpdater(engine, false);
        }).then(() =>
            setInit(true)
        )
    }, [])

    const particlesLoaded = (container?: Container): Promise<void> => {
        console.log(container)
        return Promise.resolve();
    }

    const options = useMemo(
        () => ({
            autoPlay: true,

            fullScreen: {
                enable: true,
                zIndex: -1
            },
            background: {
                color: {
                    value: "#000000"
                }
            },
            particles: {
                color: {
                    value: "#0f0"
                },
                move: {
                    direction: MoveDirection.bottom,
                    enable: true,
                    outModes: {
                        default: OutMode.out
                    },
                    speed: 5,
                    straight: true
                },
                number: {
                    density: {
                        enable: true,
                        area: 300
                    },
                    value: 200
                },
                opacity: {
                    value: 0.7
                },
                shape: {
                    type: "char",
                    options: {
                        char: {
                            value: ["0", "1", "ア", "ィ", "イ", "ゥ", "ウ", "ェ", "エ", "ォ", "オ", "カ", "ガ", "キ", "ギ", "ク", "グ", "ケ", "ゲ", "コ", "ゴ", "サ", "ザ", "シ", "ジ", "ス", "ズ", "セ", "ゼ", "ソ", "ゾ", "タ", "ダ", "チ", "ヂ", "ッ", "ツ", "ヅ", "テ", "デ", "ト", "ド", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "バ", "パ", "ヒ", "ビ", "ピ", "フ", "ブ", "プ", "ヘ", "ベ", "ペ", "ホ", "ボ", "ポ", "マ", "ミ", "ム", "メ", "モ", "ャ", "ヤ", "ュ", "ユ", "ョ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ヮ", "ワ", "ヰ", "ヱ", "ヲ", "ン", "ヴ", "ヵ", "ヶ"]
                        }
                    }
                },
                size: {
                    value: 16
                },
                grid: {
                    enable: true,
                    position: {
                        x: 0,
                        y: 0
                    },
                    spacing: {
                        x: 20,  // Spacing between columns
                        y: 16   // Spacing between rows
                    }
                }
            }
        }),
        []
    )

    return (
        <>
            {init && (
                <Particles id={props.id} particlesLoaded={particlesLoaded} options={options} />
            )}
        </>
    )
}

export default MatrixEffect