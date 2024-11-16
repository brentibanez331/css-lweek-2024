import type { Engine } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";
import { loadEmittersShapeSquare } from "@tsparticles/plugin-emitters-shape-square";
import { loadLifeUpdater } from "@tsparticles/updater-life";
import { options } from "./hyperspacetest";

export async function loadHyperspacePreset(engine: Engine, refresh = true): Promise<void> {
    

    await engine.addPreset("hyperspace", options, false);

    await engine.refresh(refresh);
}

