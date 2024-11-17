"use client"

import { Container, InteractivityDetect} from "@tsparticles/engine"
import Particles, { initParticlesEngine } from "@tsparticles/react"
// import { loadSlim } from "@tsparticles/slim"
import { loadFull } from "tsparticles"
import { useEffect, useMemo, useState } from "react"

const FireEffect = (props: any) => {
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

            particles: {
                number: {
                    value: 200,
                    density: {
                        enable: true,
                    },
                },
                color: {
                    value: ["#fdcf58", "#757676", "#f27d0c", "#800909", "#f07f13"],
                },
                opacity: {
                    value: { min: 0.1, max: 0.5 },
                },
                size: {
                    value: { min: 1, max: 3 },
                },
                move: {
                    enable: true,
                    speed: 6,
                    random: false,
                },
            },
            interactivity: {
                detectsOn: InteractivityDetect.window,
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                },
            },
            background: {
                image: "radial-gradient(#4a0000, #000)",
            },
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

export default FireEffect