import type { StarConfig } from "./type";

const SHAPE: StarConfig["shape"] = "cross";

export const INIT_VAL: StarConfig[] = [
  {
    color: "#ffffff",
    density: 0.08,
    lifeCycle: { min: 6, max: 8 },
    size: { min: 1, max: 3 },
    twinkle: 2,
    shape: SHAPE,
  },
  {
    color: "#a374db",
    density: 0.04,
    lifeCycle: { min: 5, max: 7 },
    size: { min: 3, max: 5 },
    twinkle: 1,
    shape: SHAPE,
  },
  {
    color: "#2859b4",
    density: 0.02,
    lifeCycle: { min: 8, max: 10 },
    size: { min: 4, max: 6 },
    twinkle: 0.3,
    shape: SHAPE,
  },
];
