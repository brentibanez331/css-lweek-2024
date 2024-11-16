"use client"

import { AnimationMode, Container, DestroyType, MoveDirection, OutMode, StartValueType } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import type { IOutModes } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";


const HyperspaceComponent = (props: any) => {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
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
                  count: 1
                }
              },
              move: {
                enable: true,
                speed: 7,
                decay: 0.005,
                direction: MoveDirection.outside,
                straight: true,
                outModes: OutMode.destroy,
                trail: {
                  enable: true,
                  length: 20,
                  fill: {
                    color: "#000"
                  }
                }
              }
            },
            interactivity: {
              events: {
                onHover:{
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
            }
          }),
        []
    )

    return <Particles id={props.id} particlesLoaded={particlesLoaded} options={options} />;
}

export default HyperspaceComponent