import type { StarBucket } from "../type";
import { shape } from "./Shape";

export function draw(
  ctx: CanvasRenderingContext2D,
  buckets: StarBucket[],
  now: number,
) {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;

  for (const bucket of buckets) {
    const _shape = bucket.config.shape;
    const path = shape[_shape];
    for (const star of bucket.stars) {
      const { position, color, size, sparkle, createdAt, lifeCycle } =
        star.info;

      const x = position.x * width;
      const y = position.y * height;

      const progress = (now - createdAt) / (lifeCycle * 1000);

      const mirrored = progress < 0.5 ? progress * 2 : (1 - progress) * 2;

      const fade = smoothstep(mirrored);

      const twinkle = Math.sin(now * 0.003 + x + y) * sparkle;

      const alpha = clamp(fade + twinkle * 0.3);

      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;

      ctx.save();
      ctx.translate(x, y);
      ctx.scale(size, size);
      ctx.fill(path);
      ctx.restore();
    }
  }

  ctx.globalAlpha = 1;
}

function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

function clamp(v: number) {
  return Math.max(0, Math.min(1, v));
}
