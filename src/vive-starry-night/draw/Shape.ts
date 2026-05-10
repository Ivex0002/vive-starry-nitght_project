export const shape = {
  circle: createCircle(),
  diamond: createDiamond(),
  star: createStar(),
  cross: createCross(),
} as const satisfies Record<string, Path2D>;

export type ShapeType = keyof typeof shape;

function createCircle() {
  const path = new Path2D();

  path.arc(0, 0, 1, 0, Math.PI * 2);

  return path;
}

function createDiamond() {
  const path = new Path2D();
  path.moveTo(0, -1);
  path.lineTo(1, 0);
  path.lineTo(0, 1);
  path.lineTo(-1, 0);
  path.closePath();

  return path;
}

function createStar() {
  const path = new Path2D();

  const outer = 1;
  const inner = 0.45;

  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const angle = -Math.PI / 2 + (Math.PI / 5) * i;

    const px = Math.cos(angle) * r;
    const py = Math.sin(angle) * r;

    if (i === 0) path.moveTo(px, py);
    else path.lineTo(px, py);
  }

  path.closePath();
  return path;
}

function createCross() {
  const path = new Path2D();

  const LONG = 1;
  const SHORT = 0.2;

  path.moveTo(0, -LONG);

  path.lineTo(SHORT, -SHORT);
  path.lineTo(LONG, 0);

  path.lineTo(SHORT, SHORT);
  path.lineTo(0, LONG);

  path.lineTo(-SHORT, SHORT);
  path.lineTo(-LONG, 0);

  path.lineTo(-SHORT, -SHORT);

  path.closePath();

  return path;
}
