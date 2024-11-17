"use client"

import { Container, InteractivityDetect} from "@tsparticles/engine"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadFull } from "tsparticles"
import { useEffect, useMemo, useState } from "react"

const GreenFireEffect = (props: { id: string | undefined }) => {
    const [init, setInit] = useState(false)

    // Runs at the start
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine)
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
                    value: ["#7CFC00", "#32CD32", "#2E8B57", "#006400", "#004B49"],
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
                image: "radial-gradient(#013220, #000)",
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

export default GreenFireEffect