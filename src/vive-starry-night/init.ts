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

  const canvasSize = calCanvasSize(
    canvas,
    canvas.clientWidth,
    canvas.clientHeight,
  );

  const store = new StarStore(starConfigs, canvasSize);

  const observer = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const { width, height } = entry.contentRect;

      const canvasSize = calCanvasSize(canvas, width, height);

      store.onResize(canvasSize);
    }
  });

  observer.observe(canvas);

  let frameId = 0;

  const loop = () => {
    const now = performance.now();

    store.update(now);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw(ctx, store.buckets, now);

    frameId = requestAnimationFrame(loop);
  };

  loop();

  return () => {
    cancelAnimationFrame(frameId);
    observer.disconnect();
  };
}

function calCanvasSize(
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
) {
  canvas.width = width;
  canvas.height = height;

  const size = canvas.width * canvas.height;
  return size;
}
