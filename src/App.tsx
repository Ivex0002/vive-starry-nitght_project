import "./App.css";
import { ViveStarryNight, type StarConfig } from "./vive-starry-night";
import img from "./asset/—Pngtree—majestic night sky filled with_16041320.jpg";

export function App() {
  return (
    <div style={{ position: "fixed", inset: "0", display: "flex" }}>
      {/* default example */}
      <div style={{ width: "50%" }}>
        <ViveStarryNight />
      </div>
      {/* custom example */}
      <div style={{ width: "50%", position: "relative" }}>
        <img src={img} style={{ width: "100%", height: "100%" }} />
        <div style={{ position: "absolute", inset: "0 0 15rem 0" }}>
          <ViveStarryNight
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "transparent",
            }}
            starConfigs={starConfigs}
          />
        </div>
      </div>
    </div>
  );
}

const starConfigs: StarConfig[] = [
  {
    color: "#ffffff",
    density: 0.2,
    lifeCycle: { min: 5, max: 7 },
    size: { min: 1, max: 2 },
    twinkle: 2,
    shape: "circle",
  },
  {
    color: "#ffe600",
    density: 0.02,
    lifeCycle: { min: 10, max: 12 },
    size: { min: 4, max: 5 },
    twinkle: 1,
    shape: "cross",
  },
  {
    color: "#b4ffbe",
    density: 0.01,
    lifeCycle: { min: 4, max: 5 },
    size: { min: 2, max: 3 },
    twinkle: 0.1,
    shape: "diamond",
  },
  {
    color: "#0066ff",
    density: 0.03,
    lifeCycle: { min: 10, max: 12 },
    size: { min: 4, max: 5 },
    twinkle: 1,
    shape: "star",
  },
  // try to add more star configs
];
