import type { StarConfig } from "vive-starry-night";
import { createCrystal } from "./customShape";

export const starConfigs: StarConfig[] = [
  {
    color: "#ffffff",
    density: 0.2,
    lifeCycle: { min: 5, max: 7 },
    size: { min: 1, max: 2 },
    twinkle: 2,
    shape: { type: "circle" },
  },
  {
    color: "#ffe600",
    density: 0.02,
    lifeCycle: { min: 10, max: 12 },
    size: { min: 4, max: 5 },
    twinkle: 1,
    shape: { type: "cross" },
  },
  {
    color: "#cc00ff",
    density: 0.01,
    lifeCycle: { min: 4, max: 5 },
    size: { min: 3, max: 4 },
    twinkle: 0.1,
    shape: { type: "x" },
  },
  {
    color: "#0066ff",
    density: 0.03,
    lifeCycle: { min: 10, max: 12 },
    size: { min: 4, max: 5 },
    twinkle: 1,
    shape: { type: "star" },
  },
  // custom shape example
  {
    color: "#0066ff",
    density: 0.03,
    lifeCycle: { min: 10, max: 12 },
    size: { min: 4, max: 5 },
    twinkle: 1,
    shape: { type: "custom", path: createCrystal() },
  },
  // try to add more star configs
];
