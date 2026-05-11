import { useEffect, useRef } from "react";
import { init } from "./init";
import type { StarConfig } from "./type";
import { INIT_VAL } from "./INIT_VAL";

interface Props {
  starConfigs?: StarConfig[];
  className?: string;
  style?: React.CSSProperties;
}

export function ViveStarryNight({
  starConfigs = INIT_VAL,
  className,
  style,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cleanup = init(canvasRef.current, starConfigs);
    return cleanup;
  }, [starConfigs]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ ...INIT_STYLE, ...style }}
    />
  );
}

const INIT_STYLE: React.CSSProperties = {
  width: "100%",
  height: "100%",
  backgroundColor: "#000",
};
