"use client"

import { AnimationMode, Container, DestroyType, IOutModes, MoveDirection, OutMode, StartValueType } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";
import { loadEmittersShapeSquare } from "@tsparticles/plugin-emitters-shape-square";
import { loadLifeUpdater } from "@tsparticles/updater-life";
import { loadBasic } from "@tsparticles/basic";


const HyperspaceComponent = (props: any) => {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
            await loadEmittersPlugin(engine, false)
            await loadBasic(engine, false);
            await loadEmittersPlugin(engine, false);
            await loadEmittersShapeSquare(engine, false);
            await loadLifeUpdater(engine, false);

        }).then(() => {
            setInit(true)
        })
    }, [])

    const particlesLoaded = (container?: Container): Promise<void> => {
        console.log(container)
        return Promise.resolve();
    }

    const options = useMemo(
        () => ({
            autoPlay: true,
            background: {
                color: "#000000"
            },
            particles: {
                number: {
                    value: 100
                },
                color: {
                    value: "#ffffff"
                },
                life: {
                    count: 1,
                    duration: {
                        value: 5
                    }
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 1
                },
                size: {
                    value: {
                        min: 0.5,
                        max: 4
                    },
                    animation: {
                        enable: true,
                        speed: 10,
                        startValue: StartValueType.min,
                        destroy: DestroyType.none,
                        mode: AnimationMode.auto,
                        count: 1
                    }
                },
                move: {
                    enable: true,
                    speed: 10,
                    decay: 0.0001,
                    direction: MoveDirection.outside,
                    straight: true,
                    outModes: OutMode.destroy,
                    trail: {
                        enable: true,
                        length: 15,
                        fill: {
                            color: "#000"
                        }
                    }
                }
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: false
                    }
                }
            },
            emitters: {
                position: {
                    x: 50,
                    y: 50
                },
                size: {
                    width: 100,
                    height: 100
                },
                rate: {
                    quantity: 10,
                    delay: 0.1
                }
            },
            callbacks: {
                onUpdate: (engine: any) => {
                    engine.particles.forEach((particle :any) => {
                        // Increase speed over time (adjust 0.01 as needed)
                        particle.move.speed += 0.1;

                        // Optional: Limit the maximum speed
                        if (particle.move.speed > 20) { // Set your max speed
                            particle.move.speed = 20;
                        }
                    });
                },
            }
        }),
        []
    )

    return <Particles id={props.id} particlesLoaded={particlesLoaded} options={options} />;
}

export default HyperspaceComponent