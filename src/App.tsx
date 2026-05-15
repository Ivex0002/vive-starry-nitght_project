import "./App.css";
import { ViveStarryNight, type StarConfig } from "./vive-starry-night";
import img1 from "./asset/—Pngtree—majestic night sky filled with_16041320.jpg";
import img2 from "./asset/starry_night.jpg";

const BG = {
  img1,
  img2,
};

export function App() {
  return (
    <div style={{ position: "fixed", inset: "0", display: "flex" }}>
      {/* default example */}
      <div style={{ width: "50%" }}>
        <ViveStarryNight />
      </div>
      {/* custom example */}
      <div style={{ width: "50%", position: "relative" }}>
        <img src={BG.img1} style={{ width: "100%", height: "100%" }} />
        <div style={{ position: "absolute", inset: "0 0 25% 0" }}>
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

function createCrystal() {
  const path = new Path2D();

  path.moveTo(0, -1);

  path.lineTo(0.45, -0.25);
  path.lineTo(0.7, 0);

  path.lineTo(0.45, 0.25);
  path.lineTo(0, 1);

  path.lineTo(-0.45, 0.25);
  path.lineTo(-0.7, 0);

  path.lineTo(-0.45, -0.25);

  path.closePath();

  return path;
}
