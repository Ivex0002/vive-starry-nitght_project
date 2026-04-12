export interface pSize {
  width: number;
  height: number;
}

export interface MinMax {
  min: number;
  max: number;
}

export interface Size extends MinMax {
  min: number;
  max: number;
}

export interface LifeCycle extends MinMax {
  min: number;
  max: number;
}

export interface StarProps {
  color: string;
  size: Size;
  // parent element's size
  pSize: pSize;
  // min, max living time
  lifeCycle: LifeCycle;
  // sparkle per s
  sparkle: number;
}

export interface Position {
  readonly x: number;
  readonly y: number;
}
