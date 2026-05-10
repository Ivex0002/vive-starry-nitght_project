import { draw } from "./draw/draw";
import { StarStore } from "./store/StarStore";
import type { StarConfig } from "./type";

export function init(
  canvas: HTMLCanvasElement | null,
  starConfigs: StarConfig[],
) {
  if (!canvas || !starConfigs) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  const store = new StarStore(starConfigs, canvas.width * canvas.height);

  let frameId = 0;

  const loop = () => {
    const now = performance.now();

    store.update(now);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw(ctx, store.buckets, now);

    frameId = requestAnimationFrame(loop);
  };

  loop();

  return () => cancelAnimationFrame(frameId);
}
