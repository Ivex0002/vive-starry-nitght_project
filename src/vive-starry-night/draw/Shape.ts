import { CROSS, LONG } from "./const";

export const shape = {
  circle: createCircle(),
  diamond: createDiamond(),
  star: createStar(),
  cross: createCross(),
  x: createX(),
  hexagon: createHexagon(),
  burst: createBurst(),
} as const satisfies Record<string, Path2D>;

export type ShapeType = keyof typeof shape;

function createCircle() {
  const path = new Path2D();

  path.arc(0, 0, LONG, 0, Math.PI * 2);

  return path;
}

function createDiamond() {
  const path = new Path2D();
  path.moveTo(0, -LONG);
  path.lineTo(LONG, 0);
  path.lineTo(0, LONG);
  path.lineTo(-LONG, 0);
  path.closePath();

  return path;
}

function createStar() {
  const path = new Path2D();

  const inner = 0.3;

  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? LONG : inner;
    const angle = -Math.PI / 2 + (Math.PI / 5) * i;

    const px = Math.cos(angle) * r;
    const py = Math.sin(angle) * r;

    if (i === 0) path.moveTo(px, py);
    else path.lineTo(px, py);
  }

  path.closePath();
  return path;
}

function createHexagon() {
  const path = new Path2D();

  for (let i = 0; i < 6; i++) {
    const angle = -Math.PI / 2 + (Math.PI * 2 * i) / 6;

    const x = Math.cos(angle);
    const y = Math.sin(angle);

    if (i === 0) path.moveTo(x, y);
    else path.lineTo(x, y);
  }

  path.closePath();

  return path;
}

function createCross() {
  const path = new Path2D();

  path.moveTo(0, -LONG);

  CROSS.forEach(([x, y]) => {
    path.lineTo(x, y);
  });

  path.closePath();

  return path;
}

function createX() {
  const path = new Path2D();

  const cos45 = Math.cos(Math.PI / 4);
  const sin45 = Math.sin(Math.PI / 4);

  const rotate = (x: number, y: number) => ({
    x: x * cos45 - y * sin45,
    y: x * sin45 + y * cos45,
  });

  const p1 = rotate(0, -LONG);
  path.moveTo(p1.x, p1.y);

  CROSS.forEach(([px, py]) => {
    const p = rotate(px, py);
    path.lineTo(p.x, p.y);
  });

  path.closePath();
  return path;
}

function createBurst() {
  const path = new Path2D();

  const spikes = 12;

  for (let i = 0; i < spikes; i++) {
    const r = i % 2 === 0 ? 1 : 0.55;

    const angle = (Math.PI * 2 * i) / spikes;

    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;

    if (i === 0) path.moveTo(x, y);
    else path.lineTo(x, y);
  }

  path.closePath();

  return path;
}
