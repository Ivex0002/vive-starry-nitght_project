# `vive-starry-night`

Lightweight React canvas starfield background component.

Animated stars rendered with Canvas2D using configurable density, lifecycle, twinkle, size, and custom shapes.

[![npm version](https://img.shields.io/npm/v/vive-starry-night)](https://www.npmjs.com/package/vive-starry-night)
[![github](https://img.shields.io/badge/github-repo-blue)](https://github.com/Ivex0002/vive-starry-night_lib)
[![test project](https://img.shields.io/badge/test--project-repo-blue)](https://github.com/Ivex0002/vive-starry-nitght_project)

---

## Preview

<img width="1913" height="912" alt="Honeycam 2026-05-15 15-30-48" src="https://github.com/user-attachments/assets/c3b36ca6-8940-4fdd-863a-f29ad12a66ba" />
<img width="949" height="525" alt="Honeycam 2026-05-15 15-31-53" src="https://github.com/user-attachments/assets/fc3581ef-73ad-47b5-9d12-f18c088bf9ab" />
<img width="930" height="486" alt="Honeycam 2026-05-15 15-31-28" src="https://github.com/user-attachments/assets/5babfed2-3cab-4c6f-8851-17b492398849" />

---

## Features

- Canvas-based rendering
- React component interface
- Multiple star bucket support
- Automatic star count scaling based on density
- Resize responsive
- Twinkle animation
- Multiple built-in shapes
- Custom `Path2D` shape support
- Reduced GC overhead through star object reuse

---

## Installation

```bash
pnpm add vive-starry-night
```

or

```bash
npm install vive-starry-night
```

---

## Basic Usage

```tsx
import { ViveStarryNight } from "vive-starry-night";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ViveStarryNight />
    </div>
  );
}
```

---

## Custom Configuration

```tsx
import { ViveStarryNight } from "vive-starry-night";
import type { StarConfig } from "vive-starry-night";

const starConfigs: StarConfig[] = [
  {
    color: "#ffffff",
    density: 0.08,
    size: { min: 1, max: 3 },
    lifeCycle: { min: 6, max: 8 },
    twinkle: 2,
    shape: {
      type: "cross",
    },
  },
  {
    color: "#7c9cff",
    density: 0.03,
    size: { min: 3, max: 6 },
    lifeCycle: { min: 8, max: 12 },
    twinkle: 0.5,
    shape: {
      type: "star",
    },
  },
];

export default function App() {
  return (
    <div style={{ position: "fixed", inset: "0" }}>
      <ViveStarryNight starConfigs={starConfigs} />
    </div>
  );
}
```

---

## Available Shapes

```ts
type ShapeType =
  | "circle"
  | "diamond"
  | "star"
  | "cross"
  | "x"
  | "hexagon"
  | "burst";
```

## Custom Shape

```tsx
// Crystal shape example
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
```

```tsx
const config = {
  color: "#fff",
  density: 0.05,
  size: { min: 2, max: 4 },
  lifeCycle: { min: 4, max: 8 },
  twinkle: 1,
  shape: { type: "custom", path: createCrystal() },
};
```

in custom shape case, use `type: "custom"` and `path:function`

the `function` in the `path` must return `Path2D` type

---

## Props

| Prop          | Type                  | Default                  | Description                   |
| ------------- | --------------------- | ------------------------ | ----------------------------- |
| `starConfigs` | `StarConfig[]`        | internal preset          | Star generation configuration |
| `className`   | `string`              | `undefined`              | Canvas className              |
| `style`       | `React.CSSProperties` | default fullscreen style | Canvas style override         |

---

## StarConfig

```ts
interface StarConfig {
  density: number;
  color: string;

  size: {
    min: number;
    max: number;
  };

  lifeCycle: {
    min: number;
    max: number;
  };

  twinkle: number;

  shape:
    | {
        // circle, diamond, star, cross etc...
        type: ShapeType;
      }
    | {
        type: "custom";
        path: Path2D;
      };
}
```

---

## Density

Star count is calculated dynamically from canvas size.

```ts
Math.floor((canvasSize / 1000) * density);
```

This means:

- larger canvas → more stars
- smaller canvas → fewer stars
- resize automatically updates star count

---

## Rendering Strategy

### Object Reuse

Stars are not recreated every frame.

Expired stars are reset in-place:

```ts
star.reset(config);
```

### Normalized Position

Each star stores normalized coordinates:

```ts
x: 0 ~ 1
y: 0 ~ 1
```

This allows resize handling without recalculating layouts.

### Bucket Rendering

Stars are grouped by config bucket:

```ts
[whiteStars, blueStars, largeStars];
```

This reduces repeated state branching during render.

---

## Example

```tsx
<div style={{ position: "fixed", inset: 0 }}>
  <ViveStarryNight
    style={{
      background: "#020617",
    }}
  />
</div>
```

---

## Notes

- Requires browser environment (`CanvasRenderingContext2D`, `Path2D`)
- Not intended for SSR-only rendering
- Canvas resolution currently follows element client size directly

---

## License

MIT
