export function createCrystal() {
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
