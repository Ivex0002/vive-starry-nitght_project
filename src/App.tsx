import img1 from "./asset/—Pngtree—majestic night sky filled with_16041320.jpg";
import img2 from "./asset/starry_night.jpg";
import { ViveStarryNight } from "vive-starry-night";
import { starConfigs } from "./starConfigs";

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
              backgroundColor: "transparent",
            }}
            starConfigs={starConfigs}
          />
        </div>
      </div>
    </div>
  );
}
