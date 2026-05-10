import { useEffect, useRef } from "react";
import { init } from "./init";
import type { StarConfig } from "./type";
import { INIT_VAL } from "./INIT_VAL";

interface Props {
  starConfigs?: StarConfig[];
  backgroundColor?: string;
}

export function ViveStarryNight({
  starConfigs = INIT_VAL,
  backgroundColor = "#000",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cleanup = init(canvasRef.current, starConfigs);
    return cleanup;
  }, [starConfigs]);

  return (
    <canvas
      ref={canvasRef}
      style={{ backgroundColor, width: "100%", height: "100%" }}
    />
  );
}
