import { AnimationMode, DestroyType, IOutModes, MoveDirection, OutMode, StartValueType } from "@tsparticles/engine";

export const options = {
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
            speed: 7,
            decay: 0.005,
            direction: MoveDirection.outside,
            straight: true,
            outModes: {
                default: "out"
            } as IOutModes,
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
    }
};