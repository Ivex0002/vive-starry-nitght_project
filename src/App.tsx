import "./App.css";
import { ViveStarryNight, type StarConfig } from "./vive-starry-night";

export function App() {
  return (
    <div style={{ position: "fixed", inset: "0", display: "flex" }}>
      <div style={{ width: "50%" }}>
        {/* default example */}
        <ViveStarryNight />
      </div>
      <div style={{ width: "50%" }}>
        {/* custom example */}
        <ViveStarryNight backgroundColor="#2f9aff" starConfigs={starConfigs} />
      </div>
    </div>
  );
}

const starConfigs: StarConfig[] = [
  {
    color: "#d85858",
    density: 0.05,
    lifeCycle: { min: 5, max: 7 },
    size: { min: 2, max: 3 },
    sparkle: 2,
    shape: "diamond",
  },
  {
    color: "#ffe600",
    density: 0.02,
    lifeCycle: { min: 10, max: 12 },
    size: { min: 4, max: 5 },
    sparkle: 1,
    shape: "star",
  },
  {
    color: "#00ff22",
    density: 0.01,
    lifeCycle: { min: 4, max: 5 },
    size: { min: 2, max: 3 },
    sparkle: 0.1,
    shape: "circle",
  },
  {
    color: "#0026ff",
    density: 0.03,
    lifeCycle: { min: 10, max: 12 },
    size: { min: 4, max: 5 },
    sparkle: 1,
    shape: "cross",
  },
  // try to add more star configs
];
